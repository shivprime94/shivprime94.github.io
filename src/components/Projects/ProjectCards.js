import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { BiLinkExternal } from 'react-icons/bi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'
function ProjectCards(props) {
  return (
    <Fade bottom>
      <Card className='project-card-view'>
        <Card.Img variant='top' src={props.imgPath} alt='card-img' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col>
              <Button variant='primary' href={props.Vislink} target='_blank'>
                Live Demo
              </Button>
            </Col>
            <Col>
              <Button variant='primary' href={props.link} target='_blank'>
                Github Code
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fade>
  )
}
export default ProjectCards
