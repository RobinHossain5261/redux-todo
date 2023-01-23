import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';


const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}
const mapSidpatchToProps = (dispatch) => {
    return {
        addTodos: (obj) => dispatch(addTodos(obj)),
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    console.log(props)
    return (
        <div className='addTodos'>
            <input type="text"
                className='todo-input'
                onChange={(e) => handleChange(e)} />
            <button
                className='add-btn'
                onClick={() =>
                    props.addTodos({
                        id: Math.floor(Math.random() * 1000),
                        item: todo,
                        completed: false,
                    })
                }
            >Add</button>
            <ul>
                {props.todos.map(item => {
                    return <li key={item.id}>{item.item}</li>
                })}
            </ul>
        </div>

    );
};

export default connect(mapStateToProps, mapSidpatchToProps)(Todos);