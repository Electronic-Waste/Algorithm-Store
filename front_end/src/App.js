import React from 'react';
import './App.css';
import HomeView from "./views/HomeView";
import AlgorithmView from "./views/AlgorithmView";
import UploadView from "./views/UploadView";
import MainRouter from "./services/MainRouter";
import IndexView from "./views/IndexView";

function App() {
  return (
      <React.Fragment>
      <MainRouter/>
          {/*<IndexView/>*/}
      </React.Fragment>
  );
}

export default App;
