import React from 'react';

const JokeDetail = ({ jokes }) => {

    const Joke = jokes.map((joke) => {
        return (
            <div className="ui stacked segment" key={joke.id}>
                <p> {joke.value}</p>
            </div>
        )
    })

    return (
        <div>{Joke}</div>
    )
}

export default JokeDetail;