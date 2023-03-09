import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';



export const NavBar = () => {

    const navigate = useNavigate(); // desestructuracion del custom hook

    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {

        logout();

        navigate('/login', { // al ejecutar la funcion, nos dirige a esta ruta y elimina el registro de la anterior
            replace: true, // elimina el registro de la ruta anterior
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Comics
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => (isActive) ? 'nav-item nav-link active' : 'nav-item nav-link' } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => (isActive) ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => (isActive) ? 'nav-item nav-link active' : 'nav-item nav-link'} 
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                            {user?.name}
                    </span>
                    
                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogout}>
                            Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}