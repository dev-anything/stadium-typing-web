import { Route, Routes } from "react-router-dom";
import Index from "@components/Index"
import Stadium from "@components/Stadium"
import Header from "@components/layout/Header";
import Background from "@components/layout/Background";
import Footer from "@components/layout/Footer";
import ContentLayout from "@components/layout/ContentLayout";
import ResultPage from "@components/ResultPage";

const App = () => {
  return (
    <Background>
      <Header />
      <Routes>
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/play/:leagueInfo" element={<Stadium />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
      <Footer />
    </Background>
  )
}

export default App
