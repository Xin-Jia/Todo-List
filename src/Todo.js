import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { db } from './firebase';
import './Todo.css';


export default function TodoListItem({ todo, inprogress, id }) {

    function toggleInProgress() {
        db.collection('todos').doc(id).update({
            inprogress: !inprogress
        })
    }

    function deleteTodo() {
        db.collection('todos').doc(id).delete();
    }

    return (
        <div className="todos-container">
            <ListItem>
                <ListItemText primary={todo}
                    secondary={inprogress ? "In Progress 🕜" : "Completed ✔"} />

            </ListItem>

            <Button onClick={toggleInProgress}>
                {inprogress ? "Done" : "UnDone"}
            </Button>
            <Button onClick={deleteTodo}>
                ❌
            </Button>
        </div>
    )
}
