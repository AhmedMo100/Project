import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form as BootstrapForm, Button, InputGroup } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Logo from '../../Images/logo-white.png';
import '../Log-in/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// Yup validation schema for the form
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const LogInForm = () => {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form submitted:', values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <div className='log-in'>
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} alt='Logo' />

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {/* Email Address Field */}
                                    <BootstrapForm.Group controlId="email">
                                        <BootstrapForm.Label>Email Address</BootstrapForm.Label>
                                        <InputGroup.Text className='input email-input'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <Field
                                                name="email"
                                                as={BootstrapForm.Control}
                                                type="email"
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* Password Field */}
                                    <BootstrapForm.Group controlId="password">
                                        <BootstrapForm.Label>Password</BootstrapForm.Label>
                                        <InputGroup.Text className="input password-input">
                                            <FontAwesomeIcon icon={faLock} />
                                            <Field
                                                name="password"
                                                as={BootstrapForm.Control}
                                                type="password"
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* Submit Button */}
                                    <BootstrapForm.Group>
                                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                                            Log In
                                        </Button>
                                    </BootstrapForm.Group>

                                    {/* Social Accounts */}
                                    <div className="social-login">
                                        <p>Or</p>
                                        <Button variant="primary" onClick={() => window.open("https://www.facebook.com/login", "_blank")}>
                                            <FaFacebook />
                                        </Button>
                                        <Button variant="danger" onClick={() => window.open("https://accounts.google.com/signin", "_blank")}>
                                            <FaGoogle />
                                        </Button>
                                    </div>
                                    <div className='sign-up-link'>
                                        <a href='/signup'>Sign Up</a>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogInForm;
