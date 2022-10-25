import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const getList = async () => {
    const res = await axios.get('http://localhost/todos');

    return res.data;
}

function TodoList() {

    const [todos, setTodos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect.............");
        getList().then(list => {setTodos(list)})
    }, []);

    const goRead = (id) => {
        // history.push(`/todo/read/${id}`)
        console.log(history)
    }

    return (
        <div>
            <ul>
                {todos?.map(({id, title}) => <li key={id} onClick={() => goRead(id)}> {id} ----- {title} </li>)}
            </ul>
        </div>
    );
}

export default TodoList;