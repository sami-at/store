import './ContactPage.css'; // Ensure you have this CSS file in the same directory

function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <form className="contact-form">
                <div className="oneline">
                  <div className="input-group">
                      <label htmlFor="name">Name</label>
                      <input  type="text" id="name" name="name" />
                  </div>
                  <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" />
                  </div>
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className="send-btn">Send</button>
            </form>
        </div>
    );
}

export default ContactPage;
