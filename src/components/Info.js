import React from 'react'
import "../styles/info.scss"

function Info({ data }) {
    return (
        <div>
            <div className='info'>


                <h1>{data.Year}</h1>
                <h1>{data.Title}</h1>

                <div className="plot">
                    <p>{data.Plot}</p>
                </div>

            </div>

        </div>
    )
}

export default Info