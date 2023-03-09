import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, Search, Hero, NavBar  } from "../"


export const HeroesRoute = () => {
  return (
    <>
        <NavBar/>

        <div className="container">
            <Routes>
                    <Route path="marvel" element={<MarvelPage/>}/>
                    <Route path="dc" element={<DcPage/>}/>
                    <Route path='search' element={ <Search/> }/>
                    <Route path='hero/:heroeID' element={ <Hero/> }/>
                    <Route path='/' element={ <Navigate to='/marvel'/>}/>
            </Routes>
        </div>
    </>
  )
}
