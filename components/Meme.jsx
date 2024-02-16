import React from "react"
import memesData from "../src/memesData"

export default function Meme(){
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />

                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a meme</button>
            </div>
            <br />
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}