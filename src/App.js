import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./home/MainContent";
import LoginForm from "./login/login";
import Register from "./new_person/Register";


const Home = () => <MainContent />; // 홈 페이지 컴포넌트

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
{/*          <Route path="/home" element={<MainContent />} /> */}
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
          
          {/* 다른 경로는 필요에 따라 추가 */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
