import './App.css'
import Header from './components/Header'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <Education />
        <Skills />
        <Projects />
      </main>
      <hr />
      <Footer />
    </div>
  )
}

export default App