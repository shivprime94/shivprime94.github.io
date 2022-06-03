import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <Fade bottom>
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className='purple'> INTRODUCE </span> MYSELF
              </h1>
            </Fade>
            <Fade bottom>
              <p className='home-about-body'>
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <b className='purple'> C++, Javascript and Python. </b>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <b className='purple'>Web Technologies and Products </b> and
                also in areas related to &nbsp;
                <b className='purple'>
                  Deep Learning and Natural Launguage Processing.
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className='purple'>Node.js</b> and
                <b className='purple'>
                  Modern Javascript Library and Frameworks
                </b>
                &nbsp; like
                <b className='purple'> React.js and Next.js</b>
              </p>
            </Fade>
          </Col>
          <Col md={4} className='myAvtar'>
            <Fade bottom>
              <Tilt>
                <img src={myImg} className='img-fluid' alt='avatar' />
              </Tilt>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/shivprime94'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/neembu_paani94'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/shiv-shankar-kanaujiya-b2ab601b8/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/shiv_prime94'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
