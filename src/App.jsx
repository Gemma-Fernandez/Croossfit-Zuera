import './App.css'
import {Routes, Route} from 'react-router-dom'
import MyNavBar from "./components/MyNavBar"
import DashBoard from "./components/DashBoard"
import Box from "./pages/Box"
import Clases from "./pages/Clases"
import Tarifas from "./pages/Tarifas"
import Horarios from "./pages/Horarios"
import Coach from "./pages/Coaches"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
    <MyNavBar />
    <Routes>
      <Route path={"/"} element={<DashBoard/>}/>
      <Route path={"/box"} element={<Box/>}/>
      <Route path={"/clases"} element={<Clases/>}/>
      <Route path={"/tarifas"} element={<Tarifas/>}/>
      <Route path={"/horarios"} element={<Horarios/>}/>
      <Route path={"/coach"} element={<Coach/>}/>
      <Route path={"/"} element={<DashBoard/>}/>
    </Routes>  
    <Footer/>
      
    </>
  )
}

export default App
