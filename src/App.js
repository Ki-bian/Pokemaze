import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      labyrinth: [
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1],
        [0,0,0,1,0,0,0,0,0,0,1,0,0,0],
        [0,1,1,1,0,1,0,0,1,1,1,0,1,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
        [1,1,1,1,1,1,0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0,1,1,1,1,1,1,0],
        [1,0,1,1,0,1,1,1,0,1,1,0,1,1],
        [0,0,0,1,0,0,0,0,0,0,1,0,0,0],
        [0,1,1,1,0,1,0,0,1,1,1,0,1,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,1,0],
        [1,1,1,1,1,1,0,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,888,1,1,1,1,1,1,0]
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <table>
          {
            this.state.labyrinth.map((row, index) => (
            <tr key={row[0]}>
              {row.map(tileId => <th key={tileId}><div><img src={tileId +".png"}/></div></th>)}
            </tr>
          ))
          }
        </table>
      </div>
    );
  }
}

export default App;
