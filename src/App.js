import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner' 
import Main from "./components/Main/Main";
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
        <Route path="/" element={<Main />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;