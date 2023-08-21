import React from 'react';
import styles from './contact.module.css'
import ContactForm from '@/components/ContactForm';



const ContactPage = () => {
    return (
        <div className={styles.contactArea}>
            <div className={styles.aboutBreadCrumb}>
                <h1>CONTACT</h1>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactPage;