import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import { About } from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import { Service } from './components/Service/Service'
import { GamePage } from './components/GamePage/GamePage'
import { SignInSide } from "./components/sign-in/Login"
import { SignUpSide } from "./components/sign-up/SignUp"
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gaming' element={<GamePage />} />
        <Route path="/signup" element={<SignUpSide />} />
          <Route path="/signin" element={<SignInSide />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App