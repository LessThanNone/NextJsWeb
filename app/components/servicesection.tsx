'use client'
import { Container, Row, Col, Image } from 'react-bootstrap';
 
function ServiceSection() {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={4} className="mb-3 text-center mb-3 py-3">
                <Image src="images/computer.png" alt="Service 1" fluid></Image>
                <h3>Service 1</h3>
                <p>Description of service 1</p>
                </Col>

                <Col md={4} className="mb-3 text-center mb-3 py-3">
                <Image src="images/technology1.png" alt="Service 2" fluid></Image>
                <h3>Service 2</h3>
                <p>Description of service 2</p>
                </Col>

                <Col md={4} className="mb-3 text-center mb-3 py-3">
                <Image src="images/technology.png" alt="Service 3" fluid></Image>
                <h3>Service 3</h3>
                <p>Description of service 3</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;