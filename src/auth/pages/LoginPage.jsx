import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";


export const LoginPage = () => {

  const contenedor = useRef();

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  // tomar url generado en la ultima logeada
  const lastPath = localStorage.getItem('lastPath') || '/'; // si localStorage... es null, toma el path '/'

  const onLogin = () => {

    login('Bienvenido'); // nombre de usuario

    navigate(lastPath, {
      replace: false,
    })
  }

  const onChangeColor = () => {
    contenedor.current.classList.add('cambio-color');
  }

  const onOutColor = () => {
    contenedor.current.classList.remove('cambio-color');
  }

  return (
    <div className="container-1" ref={contenedor}>
      <div className="container-2">
        <div className="container contenedor mt-5">
          
          <h1>LoginPage</h1>
          <hr />

          <div className="contenedor-btn"
          onMouseOver={onChangeColor}
          onMouseOut={onOutColor}
          onClick={onLogin}>
            <button
              className="btn btn-primary"
              onClick={onLogin}>
                Login
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
