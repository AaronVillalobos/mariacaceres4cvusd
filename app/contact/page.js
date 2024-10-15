"use client"
import Layout from "../navigation/layout";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser'
import styles from '@/app/route-modules/contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'contact_form', form.current, {
                publicKey: 'aQNnuCBJ5t45fZntB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-header">Contact</div>
            <div className="email-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="text" name="user_email"/>
                    <label>Message to Maria</label>
                    <textarea name="message"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    );
}

export default Contact;