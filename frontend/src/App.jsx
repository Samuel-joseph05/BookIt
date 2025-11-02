import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import ResultsPage from './pages/ResultsPage'


function App() {


  return (
    <>
     <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/Detail" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/Results" element={<ResultsPage />} />
        
      </Routes>
    </Router>

    </>
  )
}

export default App
