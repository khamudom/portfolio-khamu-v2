import React from 'react';
import styles from './Contact.module.scss';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';
import Toast from '../Toast/Toast';
import { FiSend } from 'react-icons/fi';

type ContactProps = {
  className?: string;
};

const Contact = ({ className }: ContactProps) => {
  const [showToast, setShowToast] = React.useState('');
  const formRef = React.useRef<HTMLFormElement | any>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1f6c35r',
        'template_0le7g7c',
        formRef.current,
        'RuRZhD10TyG-ofQJ1'
      )
      .then(
        (result) => {
          setShowToast('SUCCESS');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  React.useEffect(() => {
    if (showToast === 'SUCCESS') {
      setTimeout(() => {
        setShowToast('');
      }, 3000);
    }
  }, [showToast]);

  return (
    <>
      <section className={className} id="contact">
        <div className={styles.container}>
          <SectionHeader title="Contact" />
          <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.columnLeft}>
              <div className={styles.inputWrapper}>
                <label>Name</label>
                <input
                  type="text"
                  title="name"
                  name="from_name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Email</label>
                <input
                  type="email"
                  title="email"
                  name="email_id"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Subject</label>
                <input
                  type="text"
                  title="subject"
                  name="subject_id"
                  className={styles.input}
                />
              </div>
            </div>
            <div>
              <div className={styles.inputWrapper}>
                <label>Message</label>
                <textarea
                  title="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                ></textarea>
              </div>
              <Button type="submit">
                <FiSend />
                Send
              </Button>
            </div>
          </form>
          <div className={styles.toastContainer}>{showToast && <Toast />}</div>
        </div>
      </section>
    </>
  );
};

export default Contact;
