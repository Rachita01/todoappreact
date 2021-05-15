import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({todo}){
    let dispatch = useDispatch();
    const [editable,setEditable] = useState(false);
    const [name,setName] = useState(todo.name);
    return(
        <div>
          <div className="row ms-2">
            <div className="col ms-2">#{todo.id.length > 1? todo.id[2]:todo.id}</div>
            <div className="col ms-2"> {editable? <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name}/> : <h4>{todo.name}</h4>}</div>
            <Button variant="primary m-2" className="col"
             onClick={() => {
               dispatch(updateTodo({
                 ...todo,
                 name:name
               }))
             if(editable){
               setName(todo.name);
               console.log(todo.name);
             }
             setEditable(!editable)}}>
             {editable?"Update":"Edit"}
            </Button>
            <Button variant="danger  m-2" className="col" onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</Button>
          </div>
         
        </div>
    )
}

export default TodoItem 