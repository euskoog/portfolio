import React, { useRef } from "react";
import Swal from "sweetalert2";
import {
  Heading,
  Button,
  Input,
  useColorModeValue,
  Textarea,
  Container,
} from "@chakra-ui/react";
import Section from "../components/section";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  //onSubmit of email form
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_jnhgydg",
        form.current,
        "user_iL4qMDdeMnxt0s6ioIX7F"
      )
      .then(() => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };

  return (
    <Section>
      <form className="test-mailing" ref={form} onSubmit={handleSubmit}>
        <br />
        <div style={{ fontSize: "1.2rem" }}>
          <div>
            <Heading size="md" htmlFor="name">
              Your Name:
            </Heading>
            <Input
              marginTop="5px"
              className="form-control email-inputs"
              name="from_name"
              type="text"
              backgroundColor={() => useColorModeValue("#f5f0e8", "#313134")}
              placeholder="Name"
              id="name"
              required
            />
          </div>

          <br />

          <div>
            <Heading size="md" htmlFor="email">
              Your Email:
            </Heading>
            <Input
              marginTop="5px"
              className="form-control email-inputs"
              name="from_email"
              type="text"
              variant="outline"
              placeholder="Email Address"
              backgroundColor={() => useColorModeValue("#f5f0e8", "#313134")}
              id="email"
              required
            />
          </div>

          <br />

          <Heading size="md" htmlFor="message">
            Message:
          </Heading>
          <div>
            <Textarea
              marginTop="5px"
              backgroundColor={() => useColorModeValue("#f5f0e8", "#313134")}
              id="message"
              name="message"
              placeholder="Put your message here"
              required
              className="email-text-area form-control"
              rows="15"
              cols="20"
            />
          </div>
        </div>
        <Container align="center">
          <Button
            marginTop="20px"
            size="lg"
            colorScheme="teal"
            type="submit"
            value="Send"
          >
            Submit
          </Button>
        </Container>
      </form>
    </Section>
  );
};

export default Contact;
