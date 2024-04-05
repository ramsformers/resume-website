import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    const startYear = 2016;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;
    const yearsOfYKKYazaki = 2022 - startYear;
    const yearsOfMachineLearning = currentYear - 2022;

    return (
        <section id="about" className="py-5">
            <Container>
                <h2>About Me</h2>
                <p>
                    Hello, I am a Machine Learning practitioner at Best Agro International, a leading company in the oil palm sector.
                </p>
                <p>
                    With <strong>{yearsOfExperience} years</strong> of experience in the Data Analytics field, including <strong>{yearsOfYKKYazaki} years</strong> as a Technical Consultant in Production & Manufacturing Engineering and <strong>{yearsOfMachineLearning} years</strong> as a dedicated Machine Learning Engineer, I have honed strong organizational and analytical skills.
                </p>
                <p>
                    Prior to this, I completed a <strong>Master of Engineering (MEng.) in Automation and Data Analytics Engineering</strong> from the Department of Electrical Engineering, Universitas Indonesia,
                    where I worked with <a href="https://ieeexplore.ieee.org/author/37086280701" target="_blank" rel="noopener noreferrer">Dr. Ir. Aries Subiantoro, MSEE</a> as my Supervisor.
                    I also completed a <strong>Bachelor of Applied Science in Engineering (BASc.Eng) in Electrical Engineering</strong> at Politeknik Negeri Jakarta.
                </p>
            </Container>
        </section>
    );
}

export default About;
