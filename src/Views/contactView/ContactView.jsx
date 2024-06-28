import "./ContactView.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BasicButton from "../../components/basicButton/BasicButton";

const ContactView = () => {
  const formURL = import.meta.env.VITE_FORMCARRY_ENDPOINT;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("../");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emptyInputMessage, setEmptyInputMessage] = useState({
    noName: "",
    noEmail: "",
    noMessage: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (!formData.name) {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noName: "A full name is required",
      }));
    } else {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noName: "",
      }));
    }

    if (!formData.email) {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noEmail: "An email is required",
      }));
    } else {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noEmail: "",
      }));
    }

    if (!formData.message) {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noMessage: "A message is required",
      }));
    } else {
      setEmptyInputMessage((prev) => ({
        ...prev,
        noMessage: "",
      }));
    }
  };

  return (
    <>
      <section className="contact">
        <div>
          <h1>
            <span> &lt;!-- </span> contact <span>--&gt;</span>
          </h1>
          <p>
            <span>&#47; *</span>
            Whether you&apos;re looking for a full-time developer or freelance
            support, I&apos;m here to help you create a seamless and engaging
            web experience. <br /> Get in touch, and let&apos;s start crafting
            your perfect project.
            <span> *&#47;</span>
          </p>
        </div>
        <form action={formURL} method="POST">
          <div>
            <label htmlFor="name">Name</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="A full name is required"
                value={formData.name}
                onChange={handleChange}
              />
              <span
                style={{
                  position: "absolute",
                  color: "red",
                  top: "2.2rem",
                  fontSize: "0.9rem",
                }}
              >
                {emptyInputMessage.noName}
              </span>
            </div>
            <label htmlFor="email">Email</label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="An email is required"
                value={formData.email}
                onChange={handleChange}
              />
              <span
                style={{
                  position: "absolute",
                  color: "red",
                  top: "2.2rem",
                  fontSize: "0.9rem",
                }}
              >
                {emptyInputMessage.noEmail}
              </span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="A message is required"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <BasicButton text="send message" type="submit" />
            <span
              style={{
                top: " 9.8rem",
                position: "absolute",
                color: "red",
                fontSize: "0.9rem",
              }}
            >
              {emptyInputMessage.noMessage}
            </span>
          </div>
        </form>
        <div>
          <BasicButton text="goBack" handleClick={handleGoBack} />
        </div>
      </section>
    </>
  );
};

export default ContactView;
