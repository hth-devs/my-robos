import React, {Component} from 'react';
import CardList from './Component/CardList';
import SearchBar from './Component/SearchBar'


class App extends Component {
    render(){
      return (
        <div>
          <h1 className='f1 tc'>RoboFriends</h1>
          <SearchBar />
          <CardList /> 
        </div>
      );
    }
}

export default App;
