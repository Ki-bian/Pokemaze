import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      labyrinth: [
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1],
        [1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
        [1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1],
        [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
      ],

      posX: 0,
      posY: 0,
      img: 'batman'
    }
  }
  goRight() {
    const posX = this.state.posX + 1
    this.setState({posX})
  }
  goLeft() {
    const posX = this.state.posX -1
    this.setState({posX})
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
                        (rowIndex === this.state.posY && colIndex === this.state.posX)?
                        <img className="character" src={"./assets/characters/"+ this.state.img +".png"} alt="character"/>
                        : null
                      }
                      {console.log(rowIndex, colIndex, this.state.posX, this.state.posY)}
                  </div>
                </th>
              )}
            </tr>
          ))
          }
        </table>
        <button onClick={() => this.goLeft()}>Left</button>
        <button onClick={() => this.goRight()}>Right</button>
      </div>
    );
  }
}

export default App;