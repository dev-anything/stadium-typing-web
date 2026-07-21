import { Route, Routes } from "react-router-dom";
import Index from "@components/Index"
import Stadium from "@components/Stadium"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/play" element={<Stadium />} />
        
      </Routes>
    </>
  )
}

export default App
