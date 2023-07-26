import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { skillsData } from '../../mock/data';
import SkillsImg from '../Image/SkillsImg'; // Import the SkillsImg component

const Skills = () => {
    const [selectedSection, setSelectedSection] = useState('');
    const [isDesktop, setIsDesktop] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleButtonClick = (section) => {
        setSelectedSection(section);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsDesktop(true);
                setIsMobile(false);
            } else {
                setIsDesktop(false);
                setIsMobile(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderContent = () => {
        const fadeDelay = 500; // Set the delay for all elements

        switch (selectedSection) {
            case 'front-end':
                return (
                    <div className="skills-section">
                        <div className="skills-grid">
                            {skillsData.frontEndSkills.map((skill, index) => (
                                <Fade
                                    key={skill.id}
                                    left={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={fadeDelay * index} // Apply the delay based on the index
                                    distance="30px"
                                >
                                    <div className="skill-item">
                                        <SkillsImg filename={skill.img} alt={skill.name} />
                                        <p>{skill.name}</p>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                );
            case 'back-end':
                return (
                    <div className="skills-section">
                        <div className="skills-grid">
                            {skillsData.backEndSkills.map((skill, index) => (
                                <Fade
                                    key={skill.id}
                                    left={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={fadeDelay * index} // Apply the delay based on the index
                                    distance="30px"
                                >
                                    <div className="skill-item">
                                        <SkillsImg filename={skill.img} alt={skill.name} />
                                        <p>{skill.name}</p>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                );
            case 'tools':
                return (
                    <div className="skills-section">
                        <div className="skills-grid">
                            {skillsData.tools.map((tool, index) => (
                                <Fade
                                    key={tool.id}
                                    left={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={fadeDelay * index} // Apply the delay based on the index
                                    distance="30px"
                                >
                                    <div className="skill-item">
                                        <SkillsImg filename={tool.img} alt={tool.name} />
                                        <p>{tool.name}</p>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="skills">
            <Container>
                <Fade bottom duration={1000} delay={600} distance="30px">
                    <div className="skills-title">
                        <h2 className="section-title">Skills</h2>
                        <p>Click to reveal</p>
                    </div>
                </Fade>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <div className="text-center">
                        <Button
                            variant="primary"
                            className={`cta-btn cta-btn--hero ${selectedSection === 'front-end' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('front-end')}
                            style={{ width: '180px' }} // Set a fixed width for the buttons
                        >
                            <strong>
                                <h3 style={{ fontWeight: 'bold' }}>Front-end</h3>
                            </strong>
                        </Button>{' '}
                        <Button
                            variant="primary"
                            className={`cta-btn cta-btn--hero ${selectedSection === 'back-end' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('back-end')}
                            style={{ width: '180px' }} // Set a fixed width for the buttons
                        >
                            <strong>
                                <h3 style={{ fontWeight: 'bold' }}>Back-end</h3>
                            </strong>
                        </Button>{' '}
                        <Button
                            variant="primary"
                            className={`cta-btn cta-btn--hero ${selectedSection === 'tools' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('tools')}
                            style={{ width: '180px' }} // Set a fixed width for the buttons
                        >
                            <strong>
                                <h3 style={{ fontWeight: 'bold' }}>Tools</h3>
                            </strong>
                        </Button>
                    </div>
                </Fade>
                <div className="section-content">{renderContent()}</div>
            </Container>
        </section>
    );
};

export default Skills;
