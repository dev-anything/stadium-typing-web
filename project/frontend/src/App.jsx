import { Route, Routes } from "react-router-dom";
import Home from "@components/home/Home";
import Stadium from "@components/game/Stadium";
import Header from "@components/layout/Header";
import Background from "@components/layout/Background";
import Footer from "@components/layout/Footer";
import ContentLayout from "@components/layout/ContentLayout";
import ResultPage from "@components/result/ResultPage";

const App = () => {
  return (
    <Background>
      <Header />
      <Routes>
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/play/:leagueInfo" element={<Stadium />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
      <Footer />
    </Background>
  )
}

export default App;