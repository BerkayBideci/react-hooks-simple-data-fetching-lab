import React, { useEffect, useState } from 'react'

export default function App() {
    const [dogImage, setDogImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message)
                setIsLoaded(true)
            })
    }, [])

    return (!isLoaded ? <p style={{ textAlign: "center" }}>Loading...</p> :
        <div style={{ height: "100vh" }}>
            <img src={dogImage} alt="A Random Dog" style={{ marginLeft: "auto", marginRight: "auto", width: "33%", height: "66%", display: "block" }}></img>
        </div>
    )
}

