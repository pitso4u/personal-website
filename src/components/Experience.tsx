import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  location: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Account Manager",
    company: "SABMILLER",
    period: "2012 - 2016",
    location: "Welkom Depot, FS",
    description: [
      "Managed numerous key accounts and achieved value and volume sales targets across all brands",
      "Ensured store level implementation of promotions and resolution of complaints",
      "Identified and evaluated new business opportunities to increase customer base",
      "Maintained database and delivered premium service to customers"
    ]
  },
  {
    title: "IT Manager",
    company: "Ekhaya Group",
    period: "2009 - 2012",
    location: "Welkom",
    description: [
      "Maintained and secured effective operations of all computer systems",
      "Managed applications, hardware and software across private and public organizations",
      "Provided training support and maintained networking infrastructure",
      "Supported multiple schools with IT infrastructure"
    ]
  },
  {
    title: "ASP.Net Developer",
    company: "Flashworx",
    period: "2007 - 2008",
    location: "Johannesburg",
    description: [
      "Developed web-administration website for Ecclesiate Properties",
      "Built front-end and processing components",
      "Designed and implemented management systems"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <StyledSection id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Professional Experience</SectionTitle>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TimelineDot />
                <TimelineContent>
                  <TimelineHeader>
                    <h3>{exp.title}</h3>
                    <CompanyInfo>
                      <span>{exp.company}</span>
                      <Location>{exp.location}</Location>
                    </CompanyInfo>
                    <Period>{exp.period}</Period>
                  </TimelineHeader>
                  <Description>
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Description>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background: #f8fafc;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary);
    opacity: 0.2;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid #fff;
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const TimelineHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    color: var(--text);
    margin-bottom: 0.5rem;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 500;
    color: var(--primary);
  }
`;

const Location = styled.span`
  color: var(--text-light);
  font-size: 0.9rem;
  
  &:before {
    content: '•';
    margin-right: 0.5rem;
  }
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
`;

const Description = styled.div`
  ul {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-light);
      
      &:before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--primary);
      }
    }
  }
`;

export default Experience;
