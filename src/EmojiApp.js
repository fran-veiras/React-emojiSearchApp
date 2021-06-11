
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { EmojiGrid } from './components/EmojiGrid';

export const EmojiApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>EmojiApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <EmojiGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
