import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <p>&copy; {new Date().getFullYear()} Agung Ramadhan</p>
            </Container>
        </footer>
    );
}

export default Footer;
