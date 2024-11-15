import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

interface EducationItem {
  type: 'education' | 'certification';
  title: string;
  institution: string;
  period: string;
  details: string[];
  icon: React.ReactElement;
}

const educationItems: EducationItem[] = [
  {
    type: 'education',
    title: 'B.Sc Computer Science',
    institution: 'University of the Free State',
    period: '2001 - 2003',
    icon: <FaGraduationCap />,
    details: [
      'IT Literacy',
      'Problem Solving with Computers (C++)',
      'Object Oriented Programming (Java)',
      'Web Development (Macromedia, ASP)',
      'Computer Operating Systems (Linux)',
      'Database Management Systems',
      'Data Structures and Algorithms'
    ]
  },
  {
    type: 'education',
    title: 'Grade 12',
    institution: 'Mampoi High School',
    period: '1999',
    icon: <FaGraduationCap />,
    details: [
      'South Sotho',
      'English',
      'Afrikaans',
      'Biology',
      'Mathematics',
      'Physical Science'
    ]
  },
  {
    type: 'certification',
    title: 'ICDL Certificate',
    institution: 'International Computer Driving License',
    period: '2012',
    icon: <FaCertificate />,
    details: [
      'Microsoft Office Word 2007',
      'Microsoft Office Excel 2007',
      'Microsoft Office Access 2007',
      'Microsoft Office PowerPoint 2007',
      'Information and Communication'
    ]
  }
];

const Education: React.FC = () => {
  return (
    <StyledSection id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Education & Certifications</SectionTitle>
          <EducationGrid>
            {educationItems.map((item, index) => (
              <EducationCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{item.icon}</IconWrapper>
                <CardContent>
                  <CardHeader>
                    <Title>{item.title}</Title>
                    <Institution>{item.institution}</Institution>
                    <Period>{item.period}</Period>
                  </CardHeader>
                  <DetailsList>
                    {item.details.map((detail, i) => (
                      <DetailItem key={i}>{detail}</DetailItem>
                    ))}
                  </DetailsList>
                </CardContent>
              </EducationCard>
            ))}
          </EducationGrid>
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const EducationCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  background: var(--primary);
  color: white;
  font-size: 2rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 0.5rem;
`;

const Institution = styled.div`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: var(--text-light);
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DetailItem = styled.li`
  color: var(--text-light);
  padding: 0.5rem 0;
  font-size: 0.95rem;
  text-align: center;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export default Education;
