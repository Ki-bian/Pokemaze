import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      labyrinth: [
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
        [1,1,1,1,1,1,0,1,1,1,1,1,1,0]
      ],
      player1: {
        posX: 1,
        poxY: 3,
        img: 'batman'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <table>
          {
            this.state.labyrinth.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((tileId, colIndex) => 
                <th key={colIndex}>
                  <div className="tile">
                    <img className="tileset" src={"./assets/tiles/"+ tileId +".png"} alt="tile"/>
                      {
                        (rowIndex === this.state.player1.posX && colIndex === this.state.player1.poxY)?
                        <img className="character" src={"./assets/characters/"+ this.state.player1.img +".png"} alt="character"/>
                        : null
                      }
                      {console.log(rowIndex, colIndex, this.state.player1.posX, this.state.player1.poxY)}
                  </div>
                </th>
              )}
            </tr>
          ))
          }
        </table>
      </div>
    );
  }
}

export default App;