import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai' 
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const reduceAllocation = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            },
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            },
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FcPlus size='2.2em' onClick={increaseAllocation}></FcPlus></td>
            <td><AiFillMinusCircle size='2.2em' color="red" onClick={reduceAllocation}></AiFillMinusCircle></td>
            <td><TiDelete size='3em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;