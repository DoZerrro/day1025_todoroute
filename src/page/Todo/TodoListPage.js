import React from 'react';
import Layout from "../../template/Layout";
import TodoList from "../../component/Todo/TodoList";

function TodoListPage() {
    return (
        <Layout>
            <h2>Todo List Page</h2>
            <TodoList></TodoList>
        </Layout>
    );
}

export default TodoListPage;