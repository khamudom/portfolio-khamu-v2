import React from 'react';

type ContactProps = {
  className?: string;
};
const Contact = ({ className }: ContactProps) => {
  return (
    <>
      <section className={className} id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">contact</h2>
            <hr className="divider" />
          </div>
          <div className="contact-body">
            <div className="contact-form grid-2">
              <div className="column-left">
                <div className="input-wrapper">
                  <label>Name</label>
                  <input
                    type="text"
                    id="fullName"
                    title="name"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email_id"
                    title="email"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <label>Subject</label>
                  <input
                    type="text"
                    id="subject_id"
                    title="subject"
                    className="contact-input"
                  />
                </div>
              </div>
              <div className="column-right">
                <div className="input-wrapper">
                  <label>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    title="message"
                    className="contact-input textarea"
                  ></textarea>
                </div>
                {/* <input
                  href="#"
                  type="submit"
                  className="btn btn-submit"
                  onclick="SendMail()"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
