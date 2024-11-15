import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <StyledSection id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <ContentWrapper>
            <AboutText>
              <p>
                I am a versatile professional with over 15 years of experience spanning Account Management,
                IT Management, and Software Development. My unique background allows me to bridge the gap
                between business needs and technical solutions effectively.
              </p>
              <p>
                With a strong foundation in Computer Science and extensive experience in customer
                relationship management at SABMiller, I bring a holistic approach to every project.
                My expertise includes sales strategy, technical implementation, and team leadership.
              </p>
              <p>
                I am passionate about leveraging technology to drive business growth and improve
                operational efficiency. My diverse skill set enables me to communicate effectively
                with both technical teams and business stakeholders.
              </p>
            </AboutText>
            <HighlightBox>
              <HighlightItem>
                <span>15+</span>
                <p>Years Experience</p>
              </HighlightItem>
              <HighlightItem>
                <span>Full Stack</span>
                <p>Development</p>
              </HighlightItem>
              <HighlightItem>
                <span>Account</span>
                <p>Management</p>
              </HighlightItem>
            </HighlightBox>
          </ContentWrapper>
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
  margin-bottom: 2rem;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.8;
  }
`;

const HighlightBox = styled.div`
  display: grid;
  gap: 1.5rem;
  background: linear-gradient(135deg, #f3f4f6 0%, #fff 100%);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const HighlightItem = styled.div`
  text-align: center;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-light);
  }
`;

export default About;
