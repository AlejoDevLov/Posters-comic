import { Link } from "react-router-dom";


export const HeroCard = ({heroe}) => {

    const { id, superhero, alter_ego, first_appearance, characters } = heroe;
    const heroImageUrl = `/heroes/${heroe.id}.jpg`;

  return (
    <div className="col">
        <div className="card h-100 animate__animated animate__fadeIn card-div2">
            <div className="row no-gutters">

                <div className="col-6">
                    <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>

                <div className="col-6">

                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        { 
                            (characters !== alter_ego) && <p>{characters}</p> 
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>Más...</Link>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
