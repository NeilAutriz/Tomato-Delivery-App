import NavBar from "../src/components/NavBar/NavBar.jsx"
import React from "react"
import SideBar from "./components/SideBar/SideBar.jsx"
import { Routes, Route } from 'react-router-dom'
import AddPage from "./pages/AddPage/AddPage.jsx"
import ListPage from "./pages/ListPage/ListPage.jsx"
import OrderPage from "./pages/OrderPage/OrderPage.jsx"

function App() {
  return (
    <main className="app-container">
      <NavBar />
      <div className="admin-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<AddPage />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/order" element={<OrderPage />}/>
        </Routes>
      </div>
    
    </main>
  )
}

export default App
