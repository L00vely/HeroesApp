import { Link } from "react-router-dom";

const CharacterByHero = ( { alter_ego, characters } ) => {
    return ( alter_ego === characters ) ? <></> : <p>{characters}</p>
} 

export const HeroCard = ( { id , superhero, publisher, alter_ego, first_appearance, characters }) => {

    //const characterByhero = (<p>{ characters }</p>);

    const heroImageUrl = `/heroes/${ id }.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-glutter">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            <CharacterByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            
                            <Link to={`/hero/${ id }`}>
                                Más...
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
