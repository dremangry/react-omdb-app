import "../styles/title.scss"
import React, {  useState } from 'react'
import axios from 'axios'
import Info from "./Info"

function Title() {

    //this state display an empty object fot the api 
    const [data, setData] = useState({})
    const [title, setTitle] = useState('')
    const theKey = process.env.REACT_APP_RAPID_API_KEY

    const url = `https://www.omdbapi.com/?t=${title}&apikey=${theKey}`
    const searchMovieTitle = (e) => {
        if (e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data);
            })
            setTitle('')
        }
    }
    

    return (
        <div className="titleContainer">
            <h1>What's in your mind</h1>

            <div className="inputField">
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Search for a movie'
                    onKeyPress={searchMovieTitle}
                    type="text" />
            </div>

            {data.Title !== undefined &&

            <div className="dataContainer">
                    {/* <img className="bgImage" src={data.Poster} alt="" /> */}
                <div className="imgContainer">
                    <img src={data.Poster} alt="" />
                </div>

                <Info data={data} />
            </div>
            }
        </div>

    )
}

export default Title