import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Sorting } from "./section/Sorting";
import { Cards } from "./section/cards/Cards"
import { Titlte } from "./styling/Typography"
import { Footer } from "./section/Footer"

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Titlte>Happy Thoughts</Titlte>
      <Sorting />
      
      <Routes>
        <Route path="/" element={<Cards />} />  
        <Route path="/thoughts/:sort" element={<Cards />} />
      </Routes>

      <Footer />
      </BrowserRouter>
    </>
  )
}

