import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/Media/msg-icon.png'
import mail_icon from '../../assets/Media/mail-icon.png'
import phone_icon from '../../assets/Media/phone-icon.png'
import location_icon from '../../assets/Media/location-icon.png'
import white_arrow from '../../assets/Media/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2239e57a-d6d1-4415-a4b1-7ab96ea58b6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}alt="" srcset="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" srcset="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" srcset="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" srcset="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" id="" placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Messsage' required></textarea>
                <button className="btn dark-btn">Submit Now <img src={white_arrow} alt="" srcset="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact