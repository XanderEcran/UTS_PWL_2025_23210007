"use client";
import styles from './PreorderPage.module.css';
import { useEffect, useState } from 'react';

export default function PreorderPage() {

  const [preorders, setPreorders] = useState([]);
  const [pakets, setPakets] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [ order_date, SetOrderDate ] = useState('');
  const [ order_by, SetOrderBy ] = useState('');
  const [ selected_package, setSelectedPackage ]= useState('');
  const [ qty, setQty ] = useState('');
  const [ status, setStatus ] = useState('');
  const [editId, setEditId] = useState(null);
  const [ msg, setMsg ] = useState('');

  
  
  const fetchPreorders = async () => {
    const res = await fetch('/api/preorder');
    const data = await res.json();
    setPreorders(data);
  }

  const fetchPakets = async () => {
    const res = await fetch('api/paket');
    const data = await res.json();
    setPakets(data);
  }

  const fetchCustomers = async () => {
    const res = await fetch('api/customer');
    const data = await res.json();
    setCustomers(data);
  }

  useEffect(() => {
    fetchPreorders();
    fetchPakets();
    fetchCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!order_date || !order_by || !selected_package || !qty || !status) {
        setMsg('Semua field wajib diisi');
        return;
    }

    const formattedOrderDate = new Date(order_date).toISOString()
    if (isNaN(Date.parse(formattedOrderDate))) {
        setMsg('Tanggal pesanan tidak valid');
        console.log('Formatted Order Date:', formattedOrderDate);
        return;
    }

    const parsedQty = Number(qty);
    if (isNaN(parsedQty) || parsedQty <= 0) {
        setMsg('Jumlah harus berupa angka yang valid');
        return;
    }

    const isPaid = status === "Lunas";

    const data = {
        id: editId,
        order_date: formattedOrderDate,
        order_by,
        selected_package,
        qty: parsedQty,
        is_paid: isPaid,
    };

    const method = editId ? 'PUT' : 'POST';
    const res = await fetch('/api/preorder', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        
    });

    if (res.ok){
        setMsg('Berhasil disimpan');
        SetOrderDate('');
        SetOrderBy('');
        setSelectedPackage('');
        setQty('');
        setStatus('');
        setEditId(null);
        setFormVisible(false);
        fetchPreorders();
    }else {
        setMsg('Gagal menyimpan data');
    }
  };

  const handleEdit = (item) => {
    SetOrderDate(item.order_date.split('T')[0]);
    SetOrderBy(item.order_by);
    setSelectedPackage(item.selected_package);
    setQty(item.qty);
    setStatus(item.is_paid ? "Lunas" : "Belum Lunas");
    setEditId(item.id);
    setFormVisible(true);
  }

  const handleDelete = async (id) => {
    if(!confirm('Yakin hapus data ini?')) return;

    await fetch('/api/preorder', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id}),
    })
    fetchPreorders();
  };
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ayam Penyet Koh Alex</h1>
        <button><a href="http://localhost:3000/paket">Menuju ke Paket</a></button>
        <button><a href="http://localhost:3000/customer">Menuju ke Pelanggan</a></button>
        <br/>
        <br/>
        <button
            className={styles.buttonToggle}
            onClick={() => setFormVisible(!formVisible)}>
            {formVisible ? 'Tutup Form' : 'Tambah Data'}
        </button>
        
        {formVisible && (
            <div className={styles.formWrapper}>
                <h3>Input Data Baru</h3>
                <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <span>Tanggal Pesanan</span>
                    <input
                    type="date"
                    value={order_date}
                    onChange={(e) => SetOrderDate(e.target.value)}
                    required
                    />
                </div>
                <div className={styles.formGroup}>
                    <span>Nama Pemesan</span>
                    <select
                    value={order_by}
                    onChange={(e) => SetOrderBy(e.target.value)}
                    required
                    >
                        <option value="">Pilih Pelanggan</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>{customer.nama}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <span>Paket</span>
                    <select 
                        value={selected_package}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        required
                    >
                        <option value="">Pilih Paket</option>
                        {pakets.map((paket) => (
                            <option key={paket.id} value={paket.id}>{paket.nama}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <span>Jumlah</span>
                    <input
                    type="text"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Input Jumlah"
                    required
                    />
                </div>
                <div className={styles.formGroup}>
                    <span>Status</span>
                    <label>
                    <input
                    type="radio"
                    value="Lunas"
                    checked={status === "Lunas"}
                    onChange={(e) => setStatus(e.target.value)}
                    />
                    Lunas
                </label>
                <label>
                    <input
                    type="radio"
                    value="Belum Lunas"
                    checked={status === "Belum Lunas"}
                    onChange={(e) => setStatus(e.target.value)}
                    />
                    Belum Lunas
                </label>
                </div>
                <button type="submit">
                    Simpan
                </button>
                <p>{msg}</p>
                </form>
            </div>
        )}

        <div className={styles.tableWrapper}>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Tanggal Pesanan</th>
                    <th>Nama Pemesan</th>
                    <th>Paket</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {preorders.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{new Date(item.order_date).toISOString().split('T')[0]}</td>
                            <td>{item.customer?.nama || "Unknown"}</td>
                            <td>{item.paket?.nama || "Unknown"}</td>
                            <td>{item.qty}</td>
                            <td>{item.is_paid ? 'Lunas' : 'Belum Lunas'}</td>
                            <td>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))}
                    {preorders.length === 0 && (
                        <tr>
                            <td colSpan="7">Belum Ada Data</td>
                        </tr>
                    )}
                </tbody>
            </table>    
        </div>
    </div>
  );
}
