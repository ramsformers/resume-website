import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Photo.css'; // Import CSS file for custom styles

const Photo = () => {
    return (
        <Container className="text-center py-5">
            <Image src="download.jpg" alt="Your Name" roundedCircle fluid />
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
        </Container>
    );
}

export default Photo;
