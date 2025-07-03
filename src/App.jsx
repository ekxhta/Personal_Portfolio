
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';
import Skills from './Components/Skills'
import Contacts from './Components/Contacts'

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <section id='Home'>
        <Intro></Intro>
      </section>

      <section id='Skills'>
        <Skills> </Skills>
        
      </section>

      <footer>
        <section id='Contact'>
          <Contacts></Contacts>
        </section>

        <br/>
        <br/>


        <section id='Socials'>
          <Socials></Socials>
        </section>
      </footer>
    </div>
  );
}

export default App;
