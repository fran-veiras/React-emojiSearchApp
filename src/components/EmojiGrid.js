import React, {useState, useEffect} from 'react'

export const EmojiGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect (()=> {
        getEmoji();
    }, [])

    const getEmoji = async() => {
        const url = `https://emoji-api.com/emojis?search=${ category }&access key=a0cc2bddfc310c1dd7710dbdcd2ad711da80518f`;
        const resp = await fetch(url);
        const data = await resp.json();

        if (data) {
            const emojis = data.map(img => {
                return {
                    id: img.codePoint,
                    grupo: img.slug,
                    name: img.unicodeName,
                    character: img.character
                }
            })

            console.log(emojis);
            setImages(emojis)
        }else {
            return
        }
    }

    return (
        <div>
            <ol>
            <h3> {category} </h3>
                {
                    images.map( img => (
                        <li key={img.id}><h2>{img.name}{img.character}</h2></li>
                    ))
                }
            </ol>
        </div>
    )
}
