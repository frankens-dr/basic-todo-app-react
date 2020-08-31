import React, { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import {v4 as uuidv4} from "uuid";

function TodoForm({addTodo}) {
    const [state, setState] = useState({
        id: "",
        task: "",
        complete: false
    })

    function handleInputChange(e) {
        setState({ ...state, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(state.task.trim()) {
            addTodo({ ...state, id: uuidv4() });
            setState({ ...state, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                name = "task"
                type = "text"
                value = {state.task}
                onChange = {handleInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;