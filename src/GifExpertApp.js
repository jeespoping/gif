import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    return(
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setcategories={ setcategories } />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;