import React from 'react';
import Loader from './Loader';
import SearchBar from './SearchBar';
import JokeList from './JokeList';
import joke from '../api/chucknorris';
import JokeDetail from './JokeDetail';



class App extends React.Component {

    state = { jokes: [], categories: [] }

    searchedText = async (text) => {
        const response = await joke.get('/search', {
            params: { query: text }
        });
        // console.log(response.data.result);
        this.setState({ jokes: response.data.result })
    }


    componentDidMount = async () => {
        const category = await joke.get('/categories');
        this.setState({ categories: category.data });
    }

    renderContent() {
        if (this.state.categories.length <= 0) {
            return <Loader />
        }
        return (
            <div>
                <SearchBar formData={this.searchedText} /><br />
                <JokeList categories={this.state.categories} clickedCategory={this.searchedText} /><br />
                <JokeDetail jokes={this.state.jokes} />
            </div>
        )
    }

    render() {
        return (
            <div className="ui container">
                {this.renderContent()}
            </div>
        )
    }
}

export default App;