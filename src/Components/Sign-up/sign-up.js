import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form as BootstrapForm, Button, InputGroup } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Facebook and Google icons
import { faUser, faEnvelope, faLock, faPhone, faImage } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/logo-white.png';
import '../Sign-up/sign-up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Function to validate phone numbers
const phoneRegex = /^[0-9]{10}$/;

// Define the Yup validation schema
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
        .matches(phoneRegex, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    nationalID: Yup.mixed()
        .required('National ID is required')
        .test('fileType', 'Only PDF files are allowed', (value) => value && value.type === 'application/pdf'),
    unionCard: Yup.mixed()
        .required('Union Card ID is required')
        .test('fileType', 'Only PDF files are allowed', (value) => value && value.type === 'application/pdf'),
});

const SignUpForm = () => {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form submitted:', values);
        setSubmitting(false); // Reset the form's submitting state
        resetForm(); // Reset the form after submission
    };

    return (
        <div className='sign-up'>
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} alt='Logo' />

                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                phoneNumber: '',
                                nationalID: null,
                                unionCard: null,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, isSubmitting }) => (
                                <Form>
                                    {/* Full Name Field */}
                                    <BootstrapForm.Group controlId="fullName">
                                        <BootstrapForm.Label>Full Name</BootstrapForm.Label>
                                        <InputGroup.Text className='input name-input'>
                                            <FontAwesomeIcon icon={faUser} />
                                            <Field
                                                name="fullName"
                                                as={BootstrapForm.Control}
                                                type="text"
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="fullName" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* Email Field */}
                                    <BootstrapForm.Group controlId="email">
                                        <BootstrapForm.Label>Email</BootstrapForm.Label>
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

                                    {/* Phone Number Field */}
                                    <BootstrapForm.Group controlId="phoneNumber">
                                        <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                                        <InputGroup.Text className='input email-input'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            <Field
                                                name="phoneNumber"
                                                as={BootstrapForm.Control}
                                                type="text"
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* National ID File Upload */}
                                    <BootstrapForm.Group controlId="nationalID">
                                        <BootstrapForm.Label>National ID (PDF)</BootstrapForm.Label>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faImage} />
                                            <input
                                                name="nationalID"
                                                type="file"
                                                className="form-control"
                                                onChange={(event) => {
                                                    setFieldValue('nationalID', event.target.files[0]);
                                                }}
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="nationalID" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* Union Card File Upload */}
                                    <BootstrapForm.Group controlId="unionCard">
                                        <BootstrapForm.Label>Union Card ID (PDF)</BootstrapForm.Label>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faImage} />
                                            <input
                                                name="UnionCardID"
                                                type="file"
                                                className="form-control"
                                                onChange={(event) => {
                                                    setFieldValue('nationalID', event.target.files[0]);
                                                }}
                                            />
                                        </InputGroup.Text>
                                        <ErrorMessage name="unionCard" component="div" className="text-danger" />
                                    </BootstrapForm.Group>

                                    {/* Submit Button */}
                                    <BootstrapForm.Group>
                                        <Button type="submit" variant="primary" disabled={isSubmitting}>
                                            Sign Up
                                        </Button>
                                    </BootstrapForm.Group>
                                    <p>Or</p>

                                    {/* Social Media Login Options */}
                                    <div className="social-login">
                                        <Button variant="primary" onClick={() => window.open("https://www.facebook.com/login", "_blank")}>
                                            <FaFacebook />
                                        </Button>
                                        <Button variant="danger" onClick={() => window.open("https://accounts.google.com/signin", "_blank")}>
                                            <FaGoogle />
                                        </Button>
                                    </div>
                                    <div className='log-in-link'>
                                        <a href='/login'>Log In</a>
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

export default SignUpForm;
