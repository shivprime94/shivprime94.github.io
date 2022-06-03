import React from 'react'
import { Container, Row } from 'react-bootstrap'
// import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
// import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className='footer'>
      <Row style={{ justifyContent: 'centre' }}>
        <h3>Copyright © {year} Shiv Shankar Kanaujiya</h3>

        {/* <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='https://github.com/shivprime94'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://twitter.com/neembu_paani31'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/shiv-shankar-kanaujiya-b2ab601b8/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.instagram.com/shiv_prime94'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col> */}
      </Row>
    </Container>
  )
}

export default Footer
