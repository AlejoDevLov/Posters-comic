import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";




export const InputSearch = ({query}) => {

    const navigate = useNavigate();

    const { searchText, onInputChange } = useForm({ searchText: query, });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if( searchText.trim().length <= 1 ) return;
        // console.log(searchText);
        navigate(`?q=${searchText.toLowerCase().trim()}`); // navega hacia un query parameter
    }

  return (
    <form onSubmit={onSearchSubmit}>
        <input 
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Busca un heroe"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
        />
        <button className="btn btn-outline-info mt-2">
        Buscar
        </button>
    </form>
  )
}
