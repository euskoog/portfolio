import React from 'react'
import Swal from 'sweetalert2'
import {Divider, Heading, Button, Input, useColorModeValue, Textarea, Container} from '@chakra-ui/react'
import Section from '../components/section';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '',
                      name: '',
                      email: '' 
                     };
      }
      // saves the user's name entered to state
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's message entered to state
      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

      //onSubmit of email form
      handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'basic';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
                                        message: this.state.feedback, 
                                        name: this.state.name, 
                                        email: this.state.email
                                       }
                         )

      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          <Section>

          <form className="test-mailing" onSubmit={this.handleSubmit}>

            <br/>
            <div style={{fontSize: "1.2rem"}}>
              <div>
                  <Heading size="md" htmlFor="name">Your Name:</Heading>
                  <Input marginTop="5px" className="form-control email-inputs" name="user_name" type="text" backgroundColor={() =>  useColorModeValue("#f5f0e8", "#313134")} placeholder='Name' 
                    id="name" onChange={this.nameChange} required/>
              </div>

              <br/>

              <div>
                  <Heading size="md" htmlFor="email">Your Email:</Heading>
                  <Input marginTop="5px"  className="form-control email-inputs" name="user_email" type="text" variant='outline' placeholder='Email Address' backgroundColor={() =>  useColorModeValue("#f5f0e8", "#313134")}
                    id="email" onChange={this.emailChange} required/>
              </div>

              <br/>

              <Heading size="md" htmlFor="message">
                  Message:
              </Heading>
              <div>
                <Textarea
                marginTop="5px" 
                backgroundColor={() =>  useColorModeValue("#f5f0e8", "#313134")}
                id="message"
                name="message"
                onChange={this.messageChange}
                placeholder="Put your message here"
                required
                className="email-text-area form-control"
                rows="15"
                cols="20"
                />
              </div>

            </div>
            <Container align="center">

              <Button marginTop="20px" size="lg" colorScheme="teal" type="Submit" value="Submit">
                Submit
              </Button>
            </Container>
          </form>
                </Section>
        )
      }
}
export default Contact