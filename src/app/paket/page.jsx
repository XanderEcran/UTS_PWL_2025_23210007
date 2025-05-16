"use client"

import { useEffect, useState } from "react";

export default function PaketPage() {
    const [pakets, setPakets] = useState([]);

    const fetchPakets = async () =>{
        const res = await fetch('api/paket');
        const data = await res.json();
        setPakets(data);
    };

    useEffect(() => {
        fetchPakets();
    }, []);

    return (
        <div>
            <h1>Tabel Paket Ayam Penyet Koh Alex</h1>
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
                                <button>Edit</button>
                                <button>Hapus</button>
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