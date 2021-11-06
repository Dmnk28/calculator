import './styles/main.css';

import ProjectBar from './components/ProjectBar/ProjectBar'
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <ProjectBar 
          title       =   'Build a Javascript Calculator'
          institute    =   'FreeCodeCamp'
          instURL     =   'https://www.freecodecamp.org/'
          course      =   'Front End Development Libraries Certification'
          courseURL   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/'
          userStory   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator'
          repository  =   'https://github.com/Dmnk28/calculator'
          readme      =   'https://github.com/Dmnk28/calculator/blob/main/README.md'
          next        =   'https://do-webdev.de/projects/timer'
          previous    =   'https://do-webdev.de/projects/drums'
      />
      <Calculator />
    </div>
  );
}

export default App;
