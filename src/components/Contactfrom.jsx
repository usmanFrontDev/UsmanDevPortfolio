import React, { useState } from "react";
import Button from "../CommonComponents/button";
import emailjs from "emailjs-com";

function Contactform() {
  const [Lname, setLname] = useState("");
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To show submission status

  const handleSubmit = (e) => {
    console.log('clicked')
    e.preventDefault();

    if (!Lname || !Fname || !email || !phone || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const templateParams = {
      to_name: "Usman Azhar",
      last_name: Lname,
      first_name: Fname,
      email,
      phone,
      message,
    };

    console.log
    (templateParams,
     'hey'+
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     templateParams,
     import.meta.env.VITE_EMAILJS_USER_ID
    )
  
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setLname("");
          setFname("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again later.");
        }
      );   
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex flex-col justify-start items-center gap-[12px] sm:gap-4 mt-8"
    >
      <div className="flex w-full justify-between items-start gap-[12px] sm:gap-0 flex-col sm:flex-row">
        <input
          type="text"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
          className="bg-transparent capitalize max-sm:w-full text-[#fff] outline-none border rounded-lg border-[#ffffffa6] placeholder-[#ffffffa6] py-[8px] sm:py-3 px-[12px] sm:px-5 w-[49%]"
        />
        <input
          type="text"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
          className="bg-transparent capitalize max-sm:w-full text-[#fff] outline-none border rounded-lg border-[#ffffffa6] placeholder-[#ffffffa6] py-[8px] sm:py-3 px-[12px] sm:px-5 w-[49%]"
        />
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="bg-transparent  text-[#fff] outline-none border rounded-lg border-[#ffffffa6] placeholder-[#ffffffa6] py-[8px] sm:py-3 px-[12px] sm:px-5 w-[100%]"
      />
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        className="bg-transparent  text-[#fff] outline-none border rounded-lg border-[#ffffffa6] placeholder-[#ffffffa6] py-[8px] sm:py-3 px-[12px] sm:px-5 w-[100%]"
      />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        rows="5"
        className="bg-transparent  text-[#fff] outline-none border rounded-lg border-[#ffffffa6] placeholder-[#ffffffa6] py-[8px] sm:py-3 px-[12px] sm:px-5 w-[100%]"
      ></textarea>
      <button
        type='submit'
       className="w-full py-2 sm:py-3 px-6 rounded-lg text-center cursor-pointer hover:opacity-80 
       hover:scale-[0.99] duration-500 text-[14px] sm:text-[18px] font-[anzo2] bg-blue-600 text-[#ffffff]"
      >
        Send it to the moon..
      </button>
      {status && <p className="text-[#ffffffa6] mt-2">{status}</p>}
    </form>
  );
}

export default Contactform;
