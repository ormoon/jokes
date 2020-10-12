import React from 'react';

class SearchBar extends React.Component {

    state = { text: '' };

    formSubmitted = (e) => {
        e.preventDefault();
        this.props.formData(this.state.text)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.formSubmitted}>
                    <div className="field">
                        <label>Search Jokes</label>
                        <input type="text" name="joke" value={this.state.text} placeholder=" Search joke category" onChange={(e) => this.setState({ text: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;