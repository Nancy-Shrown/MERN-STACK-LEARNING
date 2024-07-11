import React from 'react'
import { Route,Routes} from "react-router-dom"
import TopNavBar from "./Navigation/TopNaVBar"
import Header from "./Navigation/Header"
import About from "./Navigation/About"
import Contact from "./Navigation/Contact"
import Help from "./Navigation/Help"


const Navigation = () => {
  return (
    <>
    <TopNavBar/>
    <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/help" element={<Help/>}></Route>

    </Routes>
    </>
  )
}

export default Navigation