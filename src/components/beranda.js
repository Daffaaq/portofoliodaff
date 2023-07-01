import React from 'react';
import './beranda.css'; // Import file CSS untuk styling

const Beranda = () => {
    return (
        <div className="beranda-container">
            <div className="content-wrapper">
                <div className="text-container">
                    <h1 className="title" style={{ fontSize: '60px' }}>Hello, It's Me</h1>
                    <h2 className="subtitle" style={{ fontSize: '72px' }}>Daffa Aqila Rahmatullah</h2>
                    <h2 className="subtitle" style={{ fontSize: '68px' }}>And I'm a UI/UX Designer</h2>
                    <h4 className="subtitle justify-text" style={{ fontSize: '30px' }}>
                        As a novice UI/UX Designer, I possess exceptional
                    </h4>
                    <h4 className="subtitle justify-text" style={{ fontSize: '30px' }}>
                        talent and unwavering enthusiasm for creating
                    </h4>
                    <h4 className="subtitle justify-text" style={{ fontSize: '30px' }}>
                        captivating and satisfying designs. I am driven by a
                    </h4>
                    <h4 className="subtitle justify-text" style={{ fontSize: '30px' }}>
                        strong passion to craft user-centered experiences that
                    </h4>
                    <h4 className="subtitle justify-text" style={{ fontSize: '30px' }}>
                        seamlessly blend aesthetics and functionality.
                    </h4>
                    <div className="icon">
                        <a href="https://github.com/Daffaaq">
                            <img src="/github.png" alt="GitHub" className="icon-image" />
                        </a>
                        <a href="https://www.linkedin.com/in/daffaaqilar/">
                            <img src="/linkedin.png" alt="LinkedIn" className="icon-image" />
                        </a>
                        <a href="https://www.instagram.com/daffaaqilar/">
                            <img src="/instagram.png" alt="Instagram" className="icon-image" />
                        </a>
                        <a href="https://dribbble.com/DAFFA12">
                            <img src="/dribble.png" alt="Dribbble" className="icon-image" />
                        </a>
                    </div>
                    <div className="button">
                        <a href="/tentang">
                            <button className="button">More About Me</button>
                        </a>
                    </div>

                </div>
                <div className="image-container">
                    <img src="/Daffa.jpeg" alt="Foto Daffa" className="circle-image" />
                </div>

            </div>
        </div>
    );
};

export default Beranda;
