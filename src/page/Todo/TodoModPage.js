import React from 'react';
import TodoMod from "../../component/Todo/TodoMod";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTargetId} from "../../reducer/todoSlice";

function TodoModPage() {

    const {id} = useParams();
    const dispatch = useDispatch();

    dispatch(setTargetId(id))

    return (
        <div>
            <h2>Todo Mod {id} Page</h2>
            <TodoMod></TodoMod>
        </div>
    );
}

export default TodoModPage;