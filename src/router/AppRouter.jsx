import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoute } from "../heroes"
import { PrivateRoute, PublicRoute } from "./"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>}
            />
             {/* <Route path='login' element={<LoginPage/>}/> */}
            
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoute/>             
              </PrivateRoute>}   
            />
             {/* <Route path='/*' element={<HeroesRoute/>}/> */}
        </Routes>
    </>
  )
}
