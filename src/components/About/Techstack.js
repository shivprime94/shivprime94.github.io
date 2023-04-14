import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import { SiPytorch, SiFirebase, SiNextdotjs } from 'react-icons/si'
import Zoom from 'react-reveal/Zoom'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <CgCPlusPlus />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiJavascript1 />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiNodejs />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiReact />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiMongodb />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiNextdotjs />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiGit />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiFirebase />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <DiPython />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiPytorch />
        </Zoom>
      </Col>
    </Row>
  )
}

export default Techstack
