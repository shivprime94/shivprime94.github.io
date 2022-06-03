import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from 'react-icons/si'
import Zoom from 'react-reveal/Zoom'
function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiLinux />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiVisualstudiocode />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiPostman />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiVercel />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom bottom>
          <SiHeroku />
        </Zoom>
      </Col>
    </Row>
  )
}

export default Toolstack
