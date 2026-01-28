
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import HealthTopics from "./Pages/HealthTopics"
import Countries from "./Pages/Countries"
import News from "./Pages/News"
import Emergencies from "./Pages/Emergencies"
import Data from "./Pages/Data"
import About from "./Pages/About"
import AdminLogin from "./Pages/AdminLogin"
import DonationHistory from "./Pages/DonationHistory"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-topics" element={<HealthTopics />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/news" element={<News />} />
        <Route path="/emergencies" element={<Emergencies />} />
        <Route path="/data" element={<Data />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/donation-history" element={<DonationHistory />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
