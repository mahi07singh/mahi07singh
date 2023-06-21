import { Col, Container,Row } from 'react-bootstrap';
import SignupForm from '../component/auth/sign-up-form';
import SigninForm from '../component/auth/sign-in-form';

const Auth = () => {
  return (
    <>
      <section>
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <SignupForm/>
                    <SigninForm/>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Auth;