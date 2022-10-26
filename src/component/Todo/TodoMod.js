import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {useHistory} from "react-router-dom";

const initState = {
    id: 0,
    title: '',
    author: ''
}

const getTodo = async (id) => {
    const {data} = await axios.get(`http://localhost/todos/${id}`)

    return data;
}

const modTodo = async (todo) => {
    const {data} = await axios.put(`http://localhost/todos/${todo.id}`, todo)

    return data;
}

function TodoMod() {

    const {targetId} = useSelector(state => state.todo)
    const [todo, setTodo] = useState(initState);
    const history = useHistory();

    useEffect(() => {
        getTodo(targetId).then((data) => {
            setTodo(data)
            console.log(data)
        })
    }, []);


    const changeHandler = (name, value) => {
        todo[name] = value;
        setTodo({...todo})
    }

    const clickHandler = () => {
        modTodo(todo).then(() => {
            history.replace(`/todo/read/${todo.id}`)
        })
    }

    return (
        <>
            <div>
                제&nbsp; &nbsp;목 : <input type={'text'} name={'title'} value={todo.title} onChange={(e) => changeHandler('title', e.target.value)}/> <br/>
                글쓴이 : <input type={'text'} name={'author'} value={todo.author} onChange={(e) => changeHandler('author', e.target.value)}/>
            </div>
            <div>
                <button onClick={() => clickHandler()}>UPDATE</button>
            </div>
        </>
    );
}

export default TodoMod;