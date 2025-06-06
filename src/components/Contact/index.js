import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button, FormInput, InfoContainer, InfoWrapper, Text,  InfoRow, Column1, Column2, EmailWrap, EmailA, FormWrap, Form, FormH1, FormH2, FormLabel, FormTextArea
 } from "./contactElements";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_98fa93b', 'template_p39uxfm', form.current, '8wiqg8IgHi9uWrlcM')
            .then((result) => {
                console.log("sent: ");
                console.log(result.text);
            }, (error) => {
                console.log("Error: ");
                console.log(error.text);
            });

        emailjs.sendForm('service_98fa93b', 'template_iil7zuu', form.current, '8wiqg8IgHi9uWrlcM')
            .then((result) => {
                console.log("sent: ");
                console.log(result.text);
            }, (error) => {
                console.log("Error: ");
                console.log(error.text);
            });

        form.current.reset();
    }


    return (
            <InfoContainer lightBg={true} id='contact'>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <FormWrap id='formwrap'>
                                <Form ref={form} onSubmit={sendEmail}>
                                    <FormH1>Contact me</FormH1>
                                    <FormH2>My inbox is always open for inquiries.</FormH2>
                                    <FormLabel htmlFor='for'>Name</FormLabel>
                                    <FormInput type='text' name='name' required />
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' name='user_email' required />
                                    <FormLabel htmlFor='for'>Subject</FormLabel>
                                    <FormInput type='text' name='subject' required />
                                    <FormLabel htmlFor='for'>Message</FormLabel>
                                    <FormTextArea name='message' />
                                    <Button type='submit' value='Send' onClick={sendEmail}/>
                                </Form>
                            </FormWrap>
                        </Column1>
                        <Column2>
                            <EmailWrap>
                                <Text>
                                    You can also reach me at:
                                </Text>
                                <EmailA href="mailto:dshaffer@ithaca.edu">davidshaffercreative@gmail.com</EmailA>
                            </EmailWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
    );
};

export default Contact;