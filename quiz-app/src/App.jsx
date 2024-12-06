import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home.jsx"
import Quiz from './components/Quiz.jsx';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store.js";
import {Provider} from "react-redux";


function App() {
  return(
    <div className='App' >
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route />
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )

}

export default App;