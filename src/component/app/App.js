import "./App.scss"
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../pages/main/main";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
