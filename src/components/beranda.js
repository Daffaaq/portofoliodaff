import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, text }) => {
    return (
        <Link to={to}>
            <button>{text}</button>
        </Link>
    );
};

const menuItems = [
    { to: '/tentang', text: 'Ke Halaman About' },
    { to: '/portofolio', text: 'Ke Halaman Portfolio' },
    { to: '/kontak', text: 'Ke Halaman Contact' }
];

const Beranda = () => {
    return (
        <div>
            <h1>Selamat datang di halaman Beranda!</h1>
            {/* Tambahkan konten halaman Beranda lainnya di sini */}
            {menuItems.map((menuItem, index) => (
                <MenuItem key={index} to={menuItem.to} text={menuItem.text} />
            ))}
        </div>
    );
};

export default Beranda;
