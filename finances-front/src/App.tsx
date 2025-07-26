import './App.css'
import { Navbar, Footer, Menu } from './components/layout'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Transactions, Categories } from './components/pages'

function App() {

  return (
    <div>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
