import React from 'react';
import { Link } from 'react-router-dom';

const Beranda = () => {
    return (
        <div>
            <h1>Selamat datang di halaman Beranda!</h1>
            {/* Tambahkan konten halaman Beranda lainnya di sini */}
            <Link to="/tentang">
                <button>Ke Halaman About</button>
            </Link>
            <Link to="/portofolio">
                <button>Ke Halaman portfolio</button>
            </Link>
            <Link to="/kontak">
                <button>Ke Halaman Contact</button>
            </Link>
        </div>
    );
};

export default Beranda;
