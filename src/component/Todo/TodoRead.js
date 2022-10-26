import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {useHistory} from "react-router-dom";

const getTodo = async (id) => {
    const {data} = await axios.get(`http://localhost/todos/${id}`)

    return data
}

const deleteTodo = async (id) => {
    await axios.delete(`http://localhost/todos/${id}`)
}

const initState = {
    id: 0,
    title: '',
    author: ''
}

function TodoRead() {

    const {targetId} = useSelector(state => state.todo)
    const [todo, setTodo] = useState(initState);
    const history = useHistory();

    useEffect(() => {
        console.log("readPage..........");
        getTodo(targetId).then((data) => {
            setTodo(data)
        })
    }, []);

    const clickHandler = (id) => {
        deleteTodo(id).then(() => {
            //뒤로가기가 안되어야할 경우 replace
            //뒤로가기가 되어야할 경우 push
            history.replace('/todo/list')
        })
    }

    const updateClick = (id) => {
        history.push(`/todo/mod/${id}`)
    }

    const listClick = () => {
        history.push(`/todo/list`)
    }


    return (
        <>
            <div>
                <h3>{todo.id}</h3>
                <h3>{todo.title}</h3>
                <h3>{todo.author}</h3>
            </div>
            <div>
                <button onClick={() => {clickHandler(todo.id)}}>DELETE</button>
            </div>
            <div>
                <button onClick={() => {updateClick(todo.id)}}>UPDATE</button>
            </div>
            <div>
                <button onClick={() => {listClick()}}>LIST</button>
            </div>
        </>
    );
}

export default TodoRead;