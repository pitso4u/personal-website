import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { motion } from 'framer-motion';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <StyledHeader>
        <nav className="container">
          <Logo>PS</Logo>
          <NavLinks>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </NavLinks>
        </nav>
      </StyledHeader>

      <HeroSection>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Pitso Soetsang</h1>
            <h2>Account Manager & IT Professional</h2>
            <p>Bridging Business and Technology</p>
          </motion.div>
        </div>
      </HeroSection>

      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: var(--text);
    font-weight: 500;

    &:hover {
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f3f4f6 0%, #fff 100%);
  padding-top: 5rem;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: var(--text-light);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--text-light);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export default App;
