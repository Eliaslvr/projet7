import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner' 
import Home from './components/Home/Home'
import Propos from "./components/Propos/Propos";
import Pages from "./components/Pages/Pages";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;