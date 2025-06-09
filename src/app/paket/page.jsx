"use client"

import { useEffect, useState } from "react";

export default function PaketPage() {
    const [pakets, setPakets] = useState([]);
    const [kode, setKode] = useState('');
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [msg, setMsg] = useState('');
    const [formVisible, setFormVisible] = useState(false);
    const [editId, setEditId] = useState(null);


    const fetchPakets = async () =>{
        const res = await fetch('api/paket');
        const data = await res.json();
        setPakets(data);
    };

    useEffect(() => {
        fetchPakets();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editId ? 'PUT' : 'POST';
        const res = await fetch('api/paket', {
            method,
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({id:editId, kode, nama, deskripsi}),
        });

        if (res.ok) {
            setMsg('Berhasil disimpan!');
            setKode('');
            setNama('');
            setDeskripsi('');
            setEditId(null)
            setFormVisible(false);
            fetchPakets();
        } else {
            setMsg('Gagal menyimpan data');
        }
    }

    const handleEdit = (item) => {
        setKode(item.kode);
        setNama(item.nama);
        setDeskripsi(item.deskripsi);
        setEditId(item.id);
        setFormVisible(true);
    };

    const handleDelete = async (id) => {
        if(!confirm('Yakin hapus data ini?')) return;

        await fetch('api/paket', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id}),
        });
        fetchPakets();
    };

    return (
        <div>
            <h1>Tabel Paket Ayam Penyet Koh Alex</h1>
            <button><a href="http://localhost:3000/preorder">Menuju ke Orderan</a></button>
            <button><a href="http://localhost:3000/customer">Menuju ke Pelanggan</a></button>
            <br/>
            <br/>
            <button
                    onClick={() => setFormVisible(!formVisible)}>
                        {formVisible ? 'Tutup Form' : 'Tambah Paket'}
                </button>
                {formVisible && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                value={kode}
                                onChange={(e) => setKode(e.target.value)}
                                placeholder="Masukkan Kode"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Masukkan Nama Paket"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder="Masukkan Deskripsi Paket"
                                required
                            />
                        </div>
                        <button type="submit">
                            Simpan
                        </button>
                        <p>{msg}</p>
                    </form>
                )}
            <table border="1">
                
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kode</th>
                        <th>Nama</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {pakets.map ((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.kode}</td>
                            <td>{item.nama}</td>
                            <td>{item.deskripsi}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                    {pakets.length === 0 && (
                        <tr>
                            <td colSpan="5">Belum ada Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}