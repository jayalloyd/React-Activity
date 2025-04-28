import React, { useState } from 'react';
function LudoBoard() {
  let[moves, setMoves] = useState({ blue:0, yellow:0, green:0, red:0 });
const  updateBlueMoves = () => {
 
    setMoves((preMoves) =>{return {...preMoves, blue:preMoves.blue+1};//creates a shallow copy of the moves object.  and updates the state to this new copy.
});
};
const  updateYellowMoves = () => {
 
    setMoves((preMoves) =>{return {...preMoves, yellow:preMoves.yellow+1};//creates a shallow copy of the moves object.  and updates the state to this new copy.
});
};
const  updateRedMoves = () => {
 
    setMoves((preMoves) =>{return {...preMoves, red:preMoves.red+1};//creates a shallow copy of the moves object.  and updates the state to this new copy.
});
};

const  updateGreenMoves = () => {
 
    setMoves((preMoves) =>{return {...preMoves, green:preMoves.green+1};//creates a shallow copy of the moves object.  and updates the state to this new copy.
});
};


    return ( 
        <div>
            <p></p>
            <div className="board">
                <p >Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue", color: "black"}} onClick={updateBlueMoves}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellowMoves}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green", color: "black"}} onClick={updateGreenMoves}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red", color: "black"}} onClick={updateRedMoves}>+1</button>
            </div>
        </div>
     );
}

export default LudoBoard;