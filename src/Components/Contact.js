import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
function Contact({ contactRef, setActiveTab, activeTab }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init("kSf81C1jDHjGxdoPj");
  }, []);

  const contactUs = (e) => {
    emailjs
      .send("service_6ap7k6n", "template_evryyvp", {
        from_name: name,
        from_email: email,
        from_subject: subject,
        message: message,
      })
      .then((result) => {
        alert("Mail sent Successfully!");
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => alert(err));
  };

  return (
    <Container data-aos="fade-up" data-aos-duration="2000" ref={contactRef} s>
      <Title>
        <img src="./Contact.png" alt="" />
      </Title>
      <Main>
        <Column>
          <Box>
            <img src="phone-call 1.png" alt="Phone" />
            <h4>Call Us</h4>
            <p>+91 1234567890</p>
          </Box>
          <Box>
            <img src="mail.png" alt="Email" />
            <h4>Email Us</h4>
            <p>example@gmail.com</p>
          </Box>
        </Column>
        <Form>
          <FirstInput>
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FirstInput>
          <SecondInput>
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </SecondInput>
          <ThirdInput>
            <textarea
              type="text"
              placeholder="Message (optional)"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </ThirdInput>

          <button onClick={contactUs}>Submit</button>
        </Form>
      </Main>
    </Container>
  );
}
const Container = styled.div`
  width: 95%;

  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 40px;
  img {
    width: 350px;
  }
`;
const Main = styled.div`
  width: 80%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: fit-content;

  @media only screen and (max-width: 1012px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  @media only screen and (max-width: 1012px) {
    margin-bottom: 40px;
    display: flex;

    flex-direction: row !important;
    width: 100%;
    max-width: 400px;
  }
`;

const Form = styled.div`
  background-color: #fff1f1;
  border-radius: 15px;
  width: 70%;

  height: 430px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1012px) {
    width: 100%;
  }

  button {
    width: 100px;
    height: 38px;
    border: none;
    outline: none;
    background-color: #ff6b3e;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    margin-top: 20px;
    align-self: end;
    margin-right: 23px;
    cursor: pointer;
  }
`;

const Box = styled.div`
  background-color: #fff1f1;
  padding: 10px;
  width: 180px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  margin-top: 20px;
  @media only screen and (max-width: 1012px) {
    width: 150px;
    img {
      width: 35px !important;
    }

    h4 {
      font-size: 15px !important;
    }

    p {
      font-size: 12px !important;
    }
  }
  img {
    width: 50px;

    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    font-size: 15px;
    color: #808080;
  }
`;

const FirstInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  align-items: center;
  justify-content: space-between;

  input {
    height: 33px !important;
    background: #ffffff !important;
    border-radius: 5px !important;
    width: 45% !important;
    padding: 5px !important;
    border: none !important;
    outline: none !important;
    margin-top: 00px;
  }
`;

const SecondInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  input {
    height: 33px !important;
    background: #ffffff !important;
    border-radius: 5px !important;
    width: 100% !important;
    padding: 5px !important;
    border: none !important;
    outline: none !important;
    margin-top: 00px;
  }
`;

const ThirdInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  textarea {
    background: #ffffff !important;
    border-radius: 5px !important;
    width: 100% !important;
    padding: 10px !important;
    border: none !important;
    outline: none !important;
    margin-top: 00px;
    height: 200px;
    resize: none !important;
  }
`;
export default Contact;
