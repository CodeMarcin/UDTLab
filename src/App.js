import { Routes, Route } from 'react-router-dom';

import CardContainer from './components/CardContainer/CardContainer';

import HomePage from './basePage/HomePage';
import ExamStartPage from './basePage/ExamStartPage';

import TopBanner from './components/TopBanner/TopBanner';
import Accessibility from './components/Accessibility/Accessibility';
import Offert from './components/Offert/Offert';
import MainMenu from './components/MainMenu/MainMenu';
import MenuContainer from './components/CardContainer/MenuContainer';
function App() {
  return (
    <>
      <MenuContainer>
        <CardContainer>
          <MainMenu />
        </CardContainer>
      </MenuContainer>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Examstart" element={<ExamStartPage />} />
        {/* <Route path="/learn" element={<Learn />} /> */}
        {/* <Route path="/examPage/:mainLink/:codeLink" element={<ExamPage />} /> */}

        {/* <Route path="/examStart/:codeLink" element={<ExamStart />} /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>

     
    </>
  );
}

export default App;
