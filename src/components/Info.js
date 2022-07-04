import React from 'react'
import "../styles/info.scss"

function Info({ data }) {
    return (
        <div className='info'>

            <div className="dateYear">
                <h1>{data.Title} ({data.Year})</h1>
            </div>

            <div className="dateGenre">
                <p>{data.Released} • {data.Genre} • {data.Runtime}</p>
            </div>

            <div className="character">
                <div className="characterContainer">
                    <h3>Director</h3>
                    <p>{data.Director}</p>
                </div>

                <div className="characterContainer">
                    <h3>Writer</h3>
                    <p>{data.Writer}</p>
                </div>
                <div className="characterContainer">
                    <h3>BoxOffice</h3>
                    <p>{data.BoxOffice}</p>
                </div>
                <div className="characterContainer">
                    <h3>Country</h3>
                    <p>{data.Country}</p>
                </div>
            </div>

            <div className="plot">
                <div className="plotContainer">
                    <h3>Overview</h3>
                    <p>{data.Plot}</p>
                </div>
            </div>

            <div className="extra">
                <div className="extraContainer">
                    <h3>Awards</h3>
                    <p>{data.Awards}</p>
                </div>
                <div className="extraContainer">
                    <h3>Actors</h3>
                    <p>{data.Actors}</p>
                </div>
            </div>


        </div>
    )
}

export default Info