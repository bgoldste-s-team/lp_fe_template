

import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ContactFormBlock = ({
  key,
  contentBlockId,
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
  site_id
}) => {
    const imageContainerClasses = "w-full h-auto mx-auto";
  const headerClasses = "text-3xl font-bold mb-4 text-center";
  const subheaderClasses = "text-xl mb-6 text-center";
  const bodyClasses = "text-lg prose space-y-2 px-2";
  const bodyContainerClasses = "max-w-2xl"; // Adjust this width as needed
  const buttonClasses =
    " rounded-md";
  const buttonContainerClasses = "flex justify-center gap-4 mt-4";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: ""
  });
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!formData.email) {
      setFeedback("Email is required!");
      return;
    }

    // Make a POST request
    try {
      // GET THIS NOT HARDCODED TODO
      let url = `https://csbe.onrender.com/api/sites/${site_id}/contact/`; 
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok ) {
        setFeedback("Thanks for contacting us. We will be in touch soon!");
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: ""
        });
      } else {
        setFeedback("Error submitting form.");
      }
    } catch (error) {
      setFeedback("Error submitting form.");
    }
  };

  if (!site_id) {
    return null;
  }
  return (
    <div key={key} contentBlockId={contentBlockId} className="scroll-p-0 py-10 px-4 space-y-4 flex flex-col items-center">
      <h2 className={headerClasses}>Contact</h2>
      <div className="form-control w-full max-w-xs ">
        <form onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"

            className="input input-bordered w-full max-w-xs"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            
            className="input input-bordered w-full max-w-xs"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="phone"
            
            className="input input-bordered w-full max-w-xs"
            value={formData.phone_number}
            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
          />
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="btn btn-primary  btn-block mt-2">Submit</button>
        </form>
        {feedback && <div className="alert my-4">{feedback}</div>}
      </div>
    </div>
  );
};

export default ContactFormBlock;
