import React, {Component} from 'react';
import CardList from './Component/CardList';
import SearchBar from './Component/SearchBar';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      serchfield :''
    }
  }


  onSearchChang= (event) =>{
    return this.setState({serchfield:event.target.value});
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}))
  }
    render(){
      const filterArray = this.state.robots.filter(robot=>{
       return robot.name.toLocaleLowerCase().includes(this.state.serchfield.toLocaleLowerCase())
      })

      
     if(this.state.robots.length === 0){
       return <h1 className="tc">Loaading</h1>
     }else{
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBar onSearchChang={this.onSearchChang}/>
          <CardList  robots={filterArray}/> 
        </div>
      );
    }
    }
}

export default App;
