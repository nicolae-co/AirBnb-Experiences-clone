import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data/data.js'


function App() {
  const dataMap = data.map(item => {
    return(
      <Card
        key={item.id}
        {...item}
    />
  )})

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-list'>
        {dataMap}
      </section>
    </div>
  )
}

export default App
