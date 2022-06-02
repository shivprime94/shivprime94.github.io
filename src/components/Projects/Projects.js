import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/Projects/leaf.png'
import emotion from '../../Assets/Projects/emotion.jpeg'
import editor from '../../Assets/Projects/codeEditor.png'
import chatify from '../../Assets/Projects/chatify.png'
import suicide from '../../Assets/Projects/suicide.png'
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
              isBlog={false}
              title='TranslateText'
              description='A chatbot that can translate text from one language to another.'
              link='https://github.com/shivprime94/TranslateText'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='PostMe'
              description='A blog where you can write and share your thoughts with authentication system.'
              link='https://github.com/shivprime94/Post'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='15_Puzzle'
              description='A 15 puzzle game with a twist. You can play with your friends.'
              link='https://github.com/shivprime94/15_Puzzle'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='ServeMe'
              description='A web application that helps help restaurant to promote dishes'
              link='https://github.com/shivprime94/ServeMe'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='Ai For Social Good'
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link='https://github.com/soumyajit4419/AI_For_Social_Good'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='3 D Visualizer'
              description='Implemented 3D co-ordinate system to visualize co-ordinates'
              link='https://github.com/shivprime94/3D-visualizer.github.io'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='Vector Calculus Visualizer'
              description='Implemented 3D co-ordinate system to visualize co-ordinates'
              link='https://github.com/shivprime94/vector-calculus-visualizer.github.io'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
