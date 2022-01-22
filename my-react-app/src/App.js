//import estilos from './App.styles';
import Navbar from './components/Navbar';
import MyWork from './components/MyWork';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  //const classStyle = estilos();
  return (
    <div >
      
       <Navbar/>
       <About tittle="About me" id="about"/>
       <Skills tittle="My coding skills" id="skills"/>
       <MyWork tittle="My work done" id="work"/>
       <Contact tittle="Get in touch" id="contact"/>
     
    </div>
  );
}

export default App;
