import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"



export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    // Mantener la ultima ruta cuando se hizo logout del sitio
    const { pathname, search } = useLocation();
    const lastPath = pathname + search; // suma el path mas el query del url
    
    localStorage.setItem('lastPath', lastPath); // se guarda el url en el localStorage

  return (logged)
            ? children
            : <Navigate to='/login'/>
}
