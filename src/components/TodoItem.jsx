import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

function TodoItem({todo}){
    let dispatch = useDispatch();
    return(
        <div>
          <div className="row ms-2">
            <div className="col ms-2">#{todo.id}</div>
            <div className="col ms-2">{todo.name}</div>
            <Button variant="primary m-2" className="col">Edit</Button>
            <Button variant="danger  m-2" className="col" onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</Button>
          </div>
         
        </div>
    )
}

export default TodoItem 