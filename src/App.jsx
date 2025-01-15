import React from 'react'
import NavBar from './Header/NavBar'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowCart from './pages/ShowCart'
import About from './pages/About'
import ShowInSinglePage from './components/ShowInSinglePage'
import { ToastContainer, toast } from 'react-toastify';
import WishList from './pages/WishList'
  

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    
    <Routes>
     <Route path='/home' element={<Home/>}/>
    
     
     <Route path='/about' element={<About/>}/>
     <Route path='/' element={<Cart/>}/>
     <Route path='/singleCart' element={<ShowInSinglePage/>}/>
     <Route path='/show' element={<ShowCart/>}/>
     <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App