import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =() => {
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

    return (
      <>
      <BrowserRouter basename='/NewsOcean'>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
          <Route exact path="/NewsOcean" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} category='general'/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} category='business'/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} category='entertainment'/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} category='health'/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} category='science'/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} category='sports'/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} category='technology'/>} />
        </Routes>
      </BrowserRouter>
      </>
    )
}
export default App;

