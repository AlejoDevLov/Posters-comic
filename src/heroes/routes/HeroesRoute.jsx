import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, Search, Hero, NavBar  } from "../"
import { AuthContext } from "../../auth/context/AuthContext";


export const HeroesRoute = () => {

  const {logged} = useContext(AuthContext);

  return (
    <>
        <NavBar/>

        <div className="container">
            <Routes>
                    <Route path="/marvel" element={<MarvelPage/>}/>
                    <Route path="/dc" element={<DcPage/>}/>
                    <Route path='/search' element={ <Search/> }/>
                    <Route path='/hero/:heroeID' element={ <Hero/> }/>
                    <Route path='/' element={ (logged) ? <Navigate to='/marvel'/> : <Navigate to='/login'/>}/>
            </Routes>
        </div>
    </>
  )
}
