import React from 'react';
import Layout from "../../template/Layout";
import {useParams} from "react-router-dom";
import TodoRead from "../../component/Todo/TodoRead";
import {useDispatch} from "react-redux";
import {setTargetId} from "../../reducer/todoSlice";

function TodoReadPage() {

    const {id} = useParams();
    const dispatch = useDispatch();

    dispatch(setTargetId(id))

    return (
        <Layout>
            <h2>Todo Read {id} Page</h2>
            <TodoRead></TodoRead>
        </Layout>
    );
}

export default TodoReadPage;