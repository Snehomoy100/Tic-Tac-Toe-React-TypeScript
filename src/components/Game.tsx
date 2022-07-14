import React from "react";

const { useState, useMemo } = React;

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const isWinner = (values: number[]) => {
    for( const [i, j, k] of lines ) {
        if(values[i] && values[i] === values[j] && values[j] === values[k]){
            return true;
        }
        return false;
    }
};


const initialValues = Array(9).fill('');
const initialPlayer = 'O';
const initialWinner = '';

const TicTacToe: React.FC = () => {
    const [ values, setValues ] = useState(initialValues);
    const [ player, setPlayer ] = useState(initialPlayer);
    const [ winner, setWinner ] = useState(initialWinner);

    useMemo(() => {
        if(isWinner(values)) {
            setWinner(player);
            return;
        }

        setPlayer(player === 'O' ? 'X' : 'O');

    }, [values]);

    const play = (index: number) => {
        if(winner) return;
        if(values[index]) return;

        setValues(earlierValues => earlierValues.map((values, _index) => (
            _index === index ? player : values
        )));
    };

    const reset = () => {
        setValues(initialValues);
        setPlayer(initialPlayer);
        setWinner(initialWinner);
    }

    return (
        
    )
};







