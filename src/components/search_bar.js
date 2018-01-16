import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.onSearchTermChange = (value) => {
            props.onSearchTermChange(value);
        }
    }


    render(){
        return (
            <div className="row">
                <nav className="col-12 mt-5 mb-2 navbar">
                    <input  className="form-control" 
                        type='search' className='form-control'
                        onChange={ (event) => this.onSearchTermChange(event.target.value) }
                        placeholder="Search video..." aria-label="Search" />
                </nav>
            </div>
        )
    }
}

export default SearchBar;
