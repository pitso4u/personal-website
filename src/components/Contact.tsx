import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <StyledSection id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Contact Me</SectionTitle>
          <ContactWrapper>
            <ContactInfo>
              <InfoTitle>Get in Touch</InfoTitle>
              <InfoText>
                I'm always interested in hearing about new opportunities and challenges.
                Feel free to reach out!
              </InfoText>
              <ContactDetails>
                <ContactItem>
                  <IconWrapper>
                    <FaPhone />
                  </IconWrapper>
                  <div>
                    <Label>Phone</Label>
                    <Value>073 056 9211</Value>
                  </div>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <FaEnvelope />
                  </IconWrapper>
                  <div>
                    <Label>Email</Label>
                    <Value>Pitso4u@Gmail.com</Value>
                  </div>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <FaMapMarkerAlt />
                  </IconWrapper>
                  <div>
                    <Label>Location</Label>
                    <Value>1125 Aurora Street, Welkom 9473</Value>
                  </div>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>
            <ContactForm>
              <form>
                <FormGroup>
                  <Input type="text" placeholder="Your Name" required />
                </FormGroup>
                <FormGroup>
                  <Input type="email" placeholder="Your Email" required />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Subject" required />
                </FormGroup>
                <FormGroup>
                  <TextArea placeholder="Your Message" required />
                </FormGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </form>
            </ContactForm>
          </ContactWrapper>
        </motion.div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: #ffffff;
  padding: 8rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text);
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: var(--primary);
    margin: 1rem auto;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.75rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: var(--text-light);
  display: block;
`;

const Value = styled.span`
  color: var(--text);
  font-weight: 500;
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--secondary);
  }
`;

export default Contact;
