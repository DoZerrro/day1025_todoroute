import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const initState = {
    id: 0,
    title: '',
    author: ''
}

const inputTodo = async (todo) => {
    const {data} = await axios.post('http://localhost/todos', todo)

    return data
}

function TodoInput() {

    const [todo, setTodo] = useState(initState);
    const history = useHistory();

    const changeHandler = (name, value) => {
        todo[name] = value;
        setTodo({...todo})
    }

    const clickHandler = () => {
        inputTodo(todo).then(() => {
            history.replace('/todo/list');
        })
    }

    return (
        <>
            <div>
                제&nbsp; &nbsp;목 : <input type={'text'} name={'title'} onChange={(e) => changeHandler('title', e.target.value)}/> <br/>
                글쓴이 : <input type={'text'} name={'author'} onChange={(e) => changeHandler('author', e.target.value)}/>
            </div>
            <div>
                <button onClick={() => clickHandler()}>INPUT</button>
            </div>
        </>
    );
}

export default TodoInput;