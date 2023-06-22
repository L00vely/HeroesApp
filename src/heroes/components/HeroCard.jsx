export const HeroCard = ( { id , superhero, publisher, alter_ego, first_appareance, characters }) => {


    return (
        <div className="col">
            <div className="card">
                <div className="row no-glutter">
                    <div className="col-4">
                        <img src="" className="card-img" alt={ superhero } />
                    </div>

                </div>

            </div>
        </div>
    )
}
