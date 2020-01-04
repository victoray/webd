import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className={"main-container"}>
            <NavBar/>
            <HeaderSection/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default App;
