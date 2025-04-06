import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from '../ButtonElement'
import { FormInput, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, EmailWrap, EmailA, FormWrap, Form, FormH1, FormH2, FormLabel, FormTextArea
 } from "./contactElements";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        console.log("Send email started");

        console.log("Form Data:", form.current);

        e.preventDefault();

        emailjs.sendForm('service_iq7dob6', 'template_iil7zuu', form.current, '8wiqg8IgHi9uWrlcM')
            .then((result) => {
                console.log("sent: ");
                console.log(result.text);
            }, (error) => {
                console.log("Error: ");
                console.log(error.text);
            });
        e.target.reset();
        console.log("Send email ended");
    }


    return (
            <InfoContainer lightBg={true} id='contact'>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <FormWrap id='formwrap'>
                                <Form ref={form} onSubmit={sendEmail}>
                                    <FormH1>Contact me.</FormH1>
                                    <FormH2>My inbox is always open for inquiries.</FormH2>
                                    <FormLabel htmlFor='for'>Name</FormLabel>
                                    <FormInput type='text' name='name' required />
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' name='user_email' required />
                                    <FormLabel htmlFor='for'>Subject</FormLabel>
                                    <FormInput type='text' name='subject' required />
                                    <FormLabel htmlFor='for'>Message</FormLabel>
                                    <FormTextArea name='message' />
                                    <Button colorLight={true} type='submit'>Send</Button>
                                </Form>
                            </FormWrap>
                        </Column1>
                        <Column2>
                            <EmailWrap>
                                <EmailA href="mailto:dshaffer@ithaca.edu">dshaffer@ithaca.edu</EmailA>
                            </EmailWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
    );
};

export default Contact;