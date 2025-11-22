'use client'

import Button  from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, CardTitle } from "react-bootstrap";

function WorkSection () {
    return (
        <Container>
            <Row className="mb-3">
                <Col md={12} className="text-center">
                    <h2>What We Work</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, doloremque illum. Esse quos facilis quia numquam porro assumenda necessitatibus, iste dolores? Non alias vel, in consequatur quasi quibusdam et minus?</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/camera1.png"></Card.Img>
                        <Card.Body>
                            <CardTitle>
                                Rice with wild boar.
                            </CardTitle>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptas natus at. Sequi beatae esse pariatur corporis at neque, ipsum recusandae hic. Repellat repudiandae saepe, tempora commodi soluta dicta dolorem.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/camera2.png"></Card.Img>
                        <Card.Body>
                            <CardTitle>
                                Rice with wild boar.
                            </CardTitle>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptas natus at. Sequi beatae esse pariatur corporis at neque, ipsum recusandae hic. Repellat repudiandae saepe, tempora commodi soluta dicta dolorem.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/camera3.png"></Card.Img>
                        <Card.Body>
                            <CardTitle>
                                Rice with wild boar.
                            </CardTitle>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptas natus at. Sequi beatae esse pariatur corporis at neque, ipsum recusandae hic. Repellat repudiandae saepe, tempora commodi soluta dicta dolorem.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;