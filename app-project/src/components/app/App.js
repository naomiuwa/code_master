import React from "react";
import "./App.css";
import "../flashcards/index.css";
import Navbar from "../nav/nav";
import Quiz from "../Quiz/Quiz";
import Home from "../../Pages/Home";
import { Route, Routes } from "react-router-dom";
import ResourcePage from "../../Pages/Resources";
import FCTopic from "../../Pages/FCTopic";
import QTopic from "../../Pages/QuizTopic";
import CardCarousel from "../flashcards";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<FCTopic />} />
          <Route path="/Test" element={<QTopic />} />
          <Route path="Test/Quiz" element={<Quiz />} />
          <Route path="Learn/Flashcards" element={<CardCarousel />} />
          <Route path="/Resource" element={<ResourcePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
