import React from 'react';

const JokeList = ({ categories, clickedCategory }) => {

    const category = categories.map((category) => {
        return (
            <button className="ui inverted brown button" key={category} onClick={() => clickedCategory(category)}>{category}</button>
        )
    })


    return (
        <div>{category}</div>
    )
}

export default JokeList;