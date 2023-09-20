import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
    
  )
}

export default App
