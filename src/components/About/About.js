import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import laptopImg from '../../Assets/about.png'
import Toolstack from './Toolstack'
import Fade from 'react-reveal/Fade'
function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know Who <strong className='purple'>I'M</strong>
            </h1>
            <Fade bottom>
              <Aboutcard />
            </Fade>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          >
            <Fade bottom>
              <img src={laptopImg} alt='about' className='img-fluid' />
            </Fade>
          </Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='purple'>Skillset </strong>
        </h1>
        <Fade bottom>
          <Techstack />
        </Fade>

        <h1 className='project-heading'>
          <strong className='purple'>Tools</strong> I use
        </h1>
        <Fade bottom>
          <Toolstack />
        </Fade>
        <Fade bottom>
          <Github />
        </Fade>
      </Container>
    </Container>
  )
}

export default About
