import React from 'react';
import { LanguageContextProvider } from "./context/LanguageContext";
import './App.css';

import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <LanguageContextProvider>
    <Navbar />
    <Summary />
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <h1 class="test"> Diego CV 22</h1>
      <Footer />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
