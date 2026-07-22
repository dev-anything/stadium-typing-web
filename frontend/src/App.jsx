import { Route, Routes } from "react-router-dom";
import Index from "@components/Index"
import Stadium from "@components/Stadium"
import Header from "@components/Header";
import Background from "@components/Background";
import Footer from "@components/Footer";

const App = () => {
  return (
    <Background>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/play/:leagueInfo" element={<Stadium />} />
        
      </Routes>
      <Footer />
    </Background>
  )
}

export default App
