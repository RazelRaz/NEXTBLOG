import React from 'react';
import styles from './components.module.css'

const ContactForm = () => {
  return (
    <div className={styles.formArea}>

        <input type="text" name="" id="" placeholder='NAME' />
        <input type="email" name="" id="" placeholder='EMAIL' />
        <input type="text" name="" id="" placeholder='WEBSITE' />
        <textarea name="" id="" cols="30" rows="10" placeholder='MESSAGE'></textarea>
        <button>Submit</button>
    </div>
  );
};

export default ContactForm;