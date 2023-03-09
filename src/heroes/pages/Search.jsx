import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard, InputSearch } from "../components";



export const Search = () => {

  const location = useLocation();
  // console.log(location)

  const {q = ''} = queryString.parse(location.search);
  // console.log(query);
  const heroes = getHeroesByName(q);

  const showError =  heroes.length === 0 && q.length > 0;

  const showMessage = (q.length === 0);

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">

          <div className="col-5">
            <h4>Búsqueda</h4>
            <hr />

            <InputSearch query={q}/>

          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            <div className="alert alert-info" style={{display: !showMessage && 'none'}}>
              Buscar un heroe
            </div>

            <div className="alert alert-danger" style={{ display: !showError && 'none'}}>
              No hay heroe con <b>{q}</b>
            </div>

            { heroes.map( hero => (
              <HeroCard heroe={hero} key={hero.id}/>
            )) }

          </div>

        </div>
    </>
  )
}
