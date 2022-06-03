import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/Projects/leaf.png'
import emotion from '../../Assets/Projects/emotion.jpeg'
import editor from '../../Assets/Projects/codeEditor.png'
import chatify from '../../Assets/Projects/chatify.png'
import bitsOfCode from '../../Assets/Projects/blog.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              title='TranslateText'
              description='A chatbot that can translate text from one language to another.'
              link='https://github.com/shivprime94/TranslateText'
              Vislink='https://github.com/shivprime94/TranslateText'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              title='PostMe'
              description='A blog where you can write and share your thoughts with authentication system.'
              link='https://github.com/shivprime94/Post'
              Vislink='https://shivprime94.github.io/Post/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              title='15_Puzzle'
              description='A 15 puzzle game with a twist. You can play with your friends.'
              link='https://github.com/shivprime94/15_Puzzle'
              Vislink='https://shivprime94.github.io/15_Puzzle/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              title='ServeMe'
              description='A web application that helps help restaurant to promote dishes'
              link='https://github.com/shivprime94/ServeMe'
              Vislink='https://shivprime94.github.io/ServeMe/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              title='3 D Visualizer'
              description='Implemented 3D co-ordinate system to visualize co-ordinates'
              link='https://github.com/shivprime94/3D-visualizer.github.io'
              Vislink='https://shivprime94.github.io/3D-visualizer.github.io/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              title='Vector Calculus Visualizer'
              description='Implemented 3D co-ordinate system to visualize co-ordinates'
              link='https://shivprime94.github.io/vector-calculus-visualizer.github.io/'
              Vislink='https://shivprime94.github.io/vector-calculus-visualizer.github.io/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
