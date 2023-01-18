import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

import katieImg from "./assets/katie-zaferes.png"


function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Card
        img={katieImg}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
