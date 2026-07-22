import { Route, Routes } from "react-router-dom";
import Index from "@components/Index"
import Stadium from "@components/Stadium"
import Header from "@components/Header";
import Background from "@components/Background";
import Footer from "@components/Footer";
import ContentLayout from "@components/ContentLayout";

const App = () => {
  return (
    <Background>
      <Header />
      {/*<ContentLayout>*/}
      <Routes>
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/play/:leagueInfo" element={<Stadium />} />
        </Route>
      </Routes>
      {/*</ContentLayout>*/}
      <Footer />
    </Background>
  )
}

export default App
