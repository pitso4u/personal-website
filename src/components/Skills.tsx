import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaDesktop, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';

interface Skill {
  category: string;
  icon: React.ReactElement;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    items: ["Visual Basic 6.0/.NET", "C++", "JavaScript", "Java", "XML/XSL", "CSS", "HTML", "ASP Classic/ASP.Net"]
  },
  {
    category: "Database Technologies",
    icon: <FaDatabase />,
    items: ["SQL Server 2000/2005", "ADO/ADO.net", "RDS", "Database Management"]
  },
  {
    category: "Operating Systems",
    icon: <FaDesktop />,
    items: ["Windows (98 to 10)", "Linux (Red Hat, Fedora, Ubuntu)", "Mac OS"]
  },
  {
    category: "Business Skills",
    icon: <FaChartLine />,
    items: ["Account Management", "Sales Strategy", "Customer Relations", "Business Development"]
  },
  {
    category: "Management",
    icon: <FaUsers />,
    items: ["Team Leadership", "Project Management", "Training & Development", "Strategic Planning"]
  },
  {
    category: "Technical Skills",
    icon: <FaCogs />,
    items: ["Network Administration", "System Integration", "Hardware Troubleshooting", "IT Infrastructure"]
  }
];

const Skills: React.FC = () => {
  return (
    <StyledSection id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{skill.icon}</IconWrapper>
                <SkillCategory>{skill.category}</SkillCategory>
                <SkillList>
                  {skill.items.map((item, i) => (
                    <SkillItem key={i}>{item}</SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            ))}
          </SkillsGrid>
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillCategory = styled.h3`
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  color: var(--text-light);
  padding: 0.5rem 0;
  font-size: 0.95rem;
  text-align: center;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export default Skills;
