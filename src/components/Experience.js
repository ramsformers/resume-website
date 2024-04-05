import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
    return (
        <section id="experience" className="py-5">
            <Container>
                <h2>Experience</h2>
                <Row>
                    <Col>
                        <h3>Machine Learning Engineer</h3>
                        <p><strong>Best Agro International</strong> | July 2022 - Present</p>
                        <div className="text-left">
                            <ul style={{ listStyleType: 'disc', width: '80%', margin: '0 auto', textAlign: 'left' }}>
                                <li>Lead and manage a team of AI professional in conducting research, designing and developing machine learning models for agriculture use cases.</li>
                                <li>Guiding the team's strategy and execution in delivering cutting-edge solutions using machine learning techniques.</li>
                                <li>Work on diverse computer vision and numerical regression problems, employing wide range of techniques and algorithms to address unique challenges in the agricultural domain.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col>
                        <h3>Manufacturing Engineer Consultant</h3>
                        <p><strong>Yazaki Indonesia</strong> | July 2019 - May 2022</p>
                        <div className="text-left">
                            <ul style={{ listStyleType: 'disc', width: '80%', margin: '0 auto', textAlign: 'left' }}>
                                <li>Lead and manage a team of AI professional in conducting research, designing and developing machine learning models for agriculture use cases.</li>
                                <li>Guiding the team's strategy and execution in delivering cutting-edge solutions using machine learning techniques.</li>
                                <li>Work on diverse computer vision and numerical regression problems, employing wide range of techniques and algorithms to address unique challenges in the agricultural domain.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col>
                        <h3>Production Engineer</h3>
                        <p><strong>YKK Zipper Indonesia</strong> | October 2016 - July 2019</p>
                        <div className="text-left">
                            <ul style={{ listStyleType: 'disc', width: '80%', margin: '0 auto', textAlign: 'left' }}>
                                <li>Lead and manage a team of AI professional in conducting research, designing and developing machine learning models for agriculture use cases.</li>
                                <li>Guiding the team's strategy and execution in delivering cutting-edge solutions using machine learning techniques.</li>
                                <li>Work on diverse computer vision and numerical regression problems, employing wide range of techniques and algorithms to address unique challenges in the agricultural domain.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* Repeat this structure for each job experience */}
            </Container>
        </section>
    );
}

export default Experience;
