import { useContext } from 'react';
import Stack from '../Components/Stack/Stack';
import Projects from '../Components/Projects/Projects';
import Layout from '../Components/shared/Layout/Layout';
import Header from '../Components/Header/Header';
import StyledScrollTop from '../Components/BackToTop/StyledScrollTop';
import About from '../Components/Home/About';
import ScrollToTopOnMount from '../Components/BackToTop/ScrollToTopOnMount';
import styled from 'styled-components';
import Contact from '../Form/Contact';
import Testimonials from '../Components/Testimonials/Testimonials';
import { CloudsSection, CloudsSectionAlt } from '../Components/Clouds/Clouds';
import { CloudStateContext } from '../context/animationContext';

let Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 100px;
  flex-flow: row wrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function Home() {
  const [cloudMode] = useContext(CloudStateContext);

  const emptySpaceJSX = (
    <>
      <div className="page-break" />
    </>
  );

  return (
    <>
      <Layout>
        <ScrollToTopOnMount />
        <StyledScrollTop breakpoint={768} distance={800} />
        <main class="page-content">
          <Header id="header" />
          <Div id="about">
            <About />
            <Stack />
          </Div>

          {cloudMode ? <CloudsSection /> : emptySpaceJSX}

          <Projects id="projects" />

          {cloudMode ? <CloudsSectionAlt /> : emptySpaceJSX}

          <Testimonials id="testimonials" />

          {cloudMode ? <CloudsSectionAlt /> : emptySpaceJSX}

          <Contact id="contact" />
        </main>
      </Layout>
    </>
  );
}

export default Home;
