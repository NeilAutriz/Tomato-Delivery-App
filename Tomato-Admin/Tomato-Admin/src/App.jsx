import NavBar from "../src/components/NavBar/NavBar.jsx"
import React from "react"
import SideBar from "./components/SideBar/SideBar.jsx"


function App() {
  return (
    <main className="app-container">
      <NavBar />
      <div className="admin-content">
        <SideBar />
      </div>
    
    </main>
  )
}

export default App
