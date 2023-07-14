import { useState, useContext } from 'react'
import './App.css'
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import { useGlobalContext } from "./context"



function App() {
  
  const {showModal, favorites} = useGlobalContext()

  return (
    <main>
      {showModal && <Modal />}
      <Search/>
      {favorites.length > 0 && <Favorites />}
      <Meals />
    </main>
  )
}

export default App
