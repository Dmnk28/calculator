import logo from './logo.svg';
import './App.css';

import ProjectBar from './components/ProjectBar/ProjectBar'

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
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
