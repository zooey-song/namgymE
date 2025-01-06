import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./home/MainContent";
import LoginForm from "./login/login";
import Register from "./new_person/Register";
import Detail from "./gym/FacilityDetail";
import Board from "./community/Board";
import DetailBoard from "./community/DetailBoard"
import FacilityInfo from "./gym/FacilityInfo";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<MainContent />} />
{/*          <Route path="/home" element={<MainContent />} /> */}
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/post/:id" element={<DetailBoard />} />
          <Route path="/FacilityInfo/:id" element={<FacilityInfo />} />
          {/* 다른 경로는 필요에 따라 추가 */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
