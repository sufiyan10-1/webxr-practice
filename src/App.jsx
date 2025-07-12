import { Route, Routes } from "react-router-dom"
import CubeContainer from "./components/cube/CubeContainer"
import XrCubeContainer from './components/xr-cube/XrCubeContainer'
import XrHitCubeContainer from "./components/xr-hit-cube/XrHitCubeContainer"

function App() {
  
  return (
       <Routes>
          <Route path="/" element={<XrHitCubeContainer/>}/>
          <Route path="/cube" element={<CubeContainer/>}/>
          <Route path="/xr-cube" element={<XrCubeContainer/>}/>
          
       </Routes>
  )
}

export default App
