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
                    <input className="subject" type="text" name="from_name" required/>
                    <label>Email</label>
                    <input className="subject" type="email" name="user_email" required/>
                    <label>Phone Number</label>
                    <input className="subject" type="tel" name="phone_number" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    <label>Message to Maria</label>
                    <textarea name="message" required/>
                    <div className="phone-checkbox">
                        <input  id="opt-in" type="checkbox" name="opt" required/>
                        <label for="opt-in">Opt-in to Receive Text Messages</label>
                    </div>
                    <div className="agreement">By providing your mobile phone number, you are giving your consent to receive calls and SMS/MMS messages to the number from Caceres for School Board 2024. Msg frequency varies. Msg & data rates may apply.</div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    );
}

export default Contact;