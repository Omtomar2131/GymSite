import axios from "axios";
import  { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
   

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const { data } = await axios.post(
            "https://gymsite-2.onrender.com/send/email", // Ensure a comma after the URL
            {
                name,
                email,
                message,
            },
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            }
        );

        // Check the response and show success toast
        if (data.success) {
            toast.success('Email sent successfully!');
        } else {
            toast.error('Failed to send email: ' + data.message);
        }
    } catch (error) {
        setLoading(false)
        console.error('Error sending email:', error);
        toast.error('An error occurred while sending the email.');
    } finally {
        setLoading(false);
    }
};
  

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
