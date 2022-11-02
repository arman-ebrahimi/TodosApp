import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {EmptyList} from "./emptyList";

export const TodoList = ({list, showedList}) => {
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState({edit: false, index: 0});

    const removeItem = (id) => {
        dispatch({type: "todos/removeItem", payload: {id: id}})
    }
    const changeStatus = (id) => {
        dispatch({type: "todos/changeStatus", payload: {id: id}})
    }
    const startEdit = (e, index) => {
        if(e.detail === 2){
            setEditTodo({edit: true, index: index});
        }
    }
    const applyEdit = (e, index) => {
        if(e.key === "Enter"){
            setEditTodo({edit: false, index: 0});
            dispatch({type: "todos/editTodos", payload: {text: e.target.value, index: index}})
        }
    }

    useEffect(() => { // for setting focus and placing of indicator, when the input will be showed
        if(editTodo.edit){
            const inputs = document.getElementsByClassName("input");
            const input = inputs[editTodo.index];
            const end = input.value.length;
            input.setSelectionRange(end, end); /*these two lines code for place indicator in front of value, always*/
            input.focus();
        }
    }, [editTodo])

    return(
        list.length === 0 && showedList !== "all" ? <EmptyList showedList={showedList} /> :
        <ul className="m-0 px-1">
            {list.map((todo, index) => {
                return (
                    <li className="py-2 d-flex justify-content-between position-relative" key={index}>
                        <input type="text" className={`${editTodo.edit && editTodo.index === index ? "show-input" : "hide-input"} input`}
                               defaultValue={todo.text} onKeyUp={(e) => applyEdit(e, index)} />
                        <span className="text-todo">
                            <span className={todo.completed ? "completed" : "active"} onClick={showedList === "all" ?
                                () => changeStatus(todo.id) : () => removeItem(todo.id)}>&#10003;</span>
                            <span className={todo.completed ? "completedItem" : ""} onClick={(e) =>
                                startEdit(e, index)}>{todo.text}<span className="tooltip-text">{todo.date}</span></span>
                        </span>
                        <button onClick={() => removeItem(todo.id)} className="bg-transparent border-0 fw-bold me-2">&#128473;</button>
                    </li>
                )
            })}
        </ul>
    )
}