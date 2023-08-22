import './App.css';
import Consultation from './components/Consultation';
import Hero from './components/Hero';
import Navbar from './components/DrawerAppBar';
import Projects from './components/Projects';
import Services from './components/Services';
import Sponsors from './components/Sponsors';
import Stats from './components/Stats';
import Why from './components/Why';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Sponsors></Sponsors>
      <Why></Why>
      <Services></Services>
      <Projects></Projects>
      <Stats></Stats>
      <Consultation></Consultation>
    </div>
  );
}

export default App;
