import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = () => {
    return (
        <section id="skills" className="py-5">
            <Container>
                <h2>Skills</h2>
                <ul className="list-unstyled">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    {/* Add more skills as needed */}
                </ul>
            </Container>
        </section>
    );
}

export default Skills;
