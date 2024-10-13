import React from "react";

// Enlaces de imagenes
const logo = "https://static.vecteezy.com/system/resources/previews/009/019/420/non_2x/eco-friendly-healthy-natural-product-label-logo-design-vector.jpg";
const ecoImage1 = "https://i.pinimg.com/enabled_lo/564x/b6/57/3f/b6573f0d8beb16e8c83538d041fe19c1.jpg"; 
const ecoImage2 = "https://i.pinimg.com/564x/b1/6b/a4/b16ba4e632169fd86be7de7764309bce.jpg"; 
const ecoImage3 = "https://i.pinimg.com/564x/a7/f5/a2/a7f5a22e581b3724fc582e6927009c93.jpg"; 

// Componente Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="EcoVibe Logo" style={{ width: '50px' }} />
                    EcoVibe
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Componente Jumbotron
const Jumbotron = () => {
    return (
        <div className="jumbotron text-center bg-success text-white">
            <h1 className="display-4">Bienvenido a EcoVibe</h1>
            <p className="lead">Productos ecológicos para un estilo de vida sostenible.</p>
            <a href="#services" className="btn btn-light btn-lg">Explora</a>
        </div>
    );
};

// Componente Card
const Card = ({ image, title, description }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Componente Home
const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <section id="services" className="py-5 text-center">
                <div className="container">
                    <h2>Nuestros Productos Ecológicos</h2>
                    <div className="row">
                        <Card 
                            image={ecoImage1} 
                            title="Eco Box One" 
                            description="100% Natural y sin químicos dañinos." 
                        />
                        <Card 
                            image={ecoImage2} 
                            title="Eco Box Two" 
                            description="Respeta el medio ambiente y cuida tu salud." 
                        />
                        <Card 
                            image={ecoImage3} 
                            title="Eco Box Three" 
                            description="Ideal para un estilo de vida saludable." 
                        />
                    </div>
                </div>
            </section>
            <footer className="text-center py-4">
                <p>&copy; 2024 EcoVibe. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
