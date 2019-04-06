import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Game />
    )
  }
}

class Game extends Component {
  render() {
    const labyrinths = require('./labyrinths.json');
    const labyrinth = labyrinths.labyrinth1
    return (
      <div className="Game">
{/*    TO DO
        <Chrono />
        <Capacities />
*/}
        <Board labyrinth={labyrinth} />
        <Player labyrinth={labyrinth} />
      </div>
    );
  }
}

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <table>
          <tbody>
            {
              this.props.labyrinth.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((tileId, colIndex) =>
                    <th key={colIndex}>
                      <Tile tileId={tileId} />
                    </th>
                  )}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

class Tile extends Component {
  render() {
    return (
      <div
        className="Tile"
        style={{ backgroundImage: `url(${"./assets/tiles/" + this.props.tileId + ".png"})` }}
      />
    );
  }
}

class Player extends Component {
  constructor(props) {
    super(props)
    this.action = this.action.bind(this);
    this.canMove = true;
    this.state = {
      posX: 1,
      posY: 0,
      img: 'charBottom',
      pixelsPerTile: 48
    }
  }
  //    Checks if tile is an obstacle in the labyrinth after a move (tiles named "500"+)
  checkTile(x, y) {
    if (parseInt(this.props.labyrinth[this.state.posY + y][this.state.posX + x]) >= 500)
      return false
    return true
  }
  action(event) {
    // MOVES
    if (this.canMove && (event.keyCode === 39 || event.keyCode === 37 || event.keyCode === 40 || event.keyCode === 38)) {
        this.canMove = false
        // Move right
        if (event.keyCode === 39) {
          this.setState({ img: "charRight" })
          if (this.state.posX + 1 < this.props.labyrinth[this.state.posY].length && this.checkTile(1, 0)) {
            const posX = this.state.posX + 1
            this.setState({ posX })
          }
        }
        // Move left
        if (event.keyCode === 37) {
          this.setState({ img: "charLeft" })
          if (this.state.posX > 0 && this.checkTile(-1, 0)) {
            const posX = this.state.posX - 1
            this.setState({ posX })
          }
        }
        // Move down
        if (event.keyCode === 40) {
          this.setState({ img: "charBottom" })
          if (this.state.posY + 1 < this.props.labyrinth.length && this.checkTile(0, 1)) {
            const posY = this.state.posY + 1
            this.setState({ posY })
          }
        }
        // Move up
        if (event.keyCode === 38) {
          this.setState({ img: "charTop" })
          if (this.state.posY > 0 && this.checkTile(0, -1)) {
            const posY = this.state.posY - 1
            this.setState({ posY })
          }
        }
      // Move delay value
        setTimeout(() => { this.canMove = true
      }, 100)
    }
    // To do :
    // Activate abilities

  }


  componentDidMount() {
    document.addEventListener("keydown", this.action, false)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.action, false)
  }

  render() {
    //  Player CSS
    let playerStyle = {
      position: "absolute",
      zIndex: 1,
      backgroundImage: "url(./assets/characters/" + this.state.img + ".png",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "48px",
      width: "48px",
      transitionDuration: "500ms",
      // To do: cleaner calculation
      top: this.state.posY * this.state.pixelsPerTile + 'px',
      left: 11 + this.state.posX * this.state.pixelsPerTile + 'px'
    }

    return (
      <div style={playerStyle} />
    );
  }
}
/*          TO DO
class Chrono extends Component {
  render() {
    return (
      <div className="Chrono">
        <p>Chronomètre</p>
      </div>
    );
  }
}
class Capacities extends Component {
  render() {
    return (
      <div className="Capacities">
        <Capacity element="water" />
        <Capacity element="fire" />
      </div>
    );
  }
}
class Capacity extends Component {
  render() {
    return (
      <div
        className="capacityStyle"
        style={{ backgroundImage: `url(${"./assets/capacities/" + this.props.element + ".png"})` }}
      />
    );
  }
}
*/
export default App;