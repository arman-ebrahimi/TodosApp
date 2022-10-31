import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {TodoList, FooterMenu} from ".";

export const Todos = () => {
    const [newTodo, setNewTodo] = useState("");
    const [showedList, setShowedList] = useState("all");
    const [todosList, setTodos] = useState();
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todo);
    const numberOfActives = allTodos.filter(item => item.completed === false).length;

    useEffect(() => {
        listCheck(showedList);
        // eslint-disable-next-line
    },[allTodos])

    const addTodo = (e) => {
        if(e.key === "Enter"){
            e.target.value = "";
            let date = new Date().toLocaleString();
            dispatch({type: "todos/addToTodos", payload: {id: Math.random(), date: date, text: newTodo, completed: false}})
        }
    }
    const selectAllItems = () => {
        dispatch({type: "todos/selectAllItems", payload: ""})
    }
    const changeTodosList = (e) => {
        let target = e.target.name;
        setShowedList(target);
        listCheck(target);
    }

    function listCheck(target){
        if(target === "all"){
            setTodos(allTodos);
        }
        else if(target === "completed"){
            setTodos(allTodos.filter(item => item.completed === true));
        }
        else{
            setTodos(allTodos.filter(item => item.completed === false));
        }
    }

    return(
        <div className="border bg-white todos">
            <div className="d-flex">
                <button onClick={selectAllItems} className="bg-white border-0 px-2 text-secondary btn-arrow"><span>&#x2B9F;</span></button>
                <input onChange={(e) => setNewTodo(e.target.value)} type="text" autoFocus
                       placeholder="What needs to be done?" className="flex-grow-1 py-4 border-0" onKeyUp={addTodo} />
            </div>
            {allTodos.length > 0 &&
                <>
                    <TodoList list={todosList} showedList={showedList} />
                    <hr />
                    <FooterMenu number={numberOfActives} changeList={changeTodosList} list={showedList} />
                </>
            }
        </div>
    )
}