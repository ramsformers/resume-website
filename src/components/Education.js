import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
    return (
        <section id="education" className="py-5">
            <Container>
                <h2>Education</h2>
                <Row>
                    <Col>
                        <h3>Degree</h3>
                        <p>Institution Name | Graduation Year</p>
                    </Col>
                </Row>
                {/* Repeat this structure for each education entry */}
            </Container>
        </section>
    );
}

export default Education;
