import {useDispatch} from "react-redux";

export const FooterMenu = ({number, changeList, list}) => {
    const dispatch = useDispatch();

    const removeCompleted = () => {
        dispatch({type: "todos/removeAllCompleted", payload: {}})
    }
    return(
        <div className="d-flex justify-content-between mx-2">
            <p className="text-secondary">{number} items left</p>
            <div>
                <button name="all" onClick={changeList} className={`${list === "all" && "focusBtn"} btn-menu`}>All</button>
                <button name="active" onClick={changeList} className={`${list === "active" && "focusBtn"} btn-menu`}>Active</button>
                <button name="completed" onClick={changeList} className={`${list === "completed" && "focusBtn"} btn-menu`}>Completed</button>
            </div>
            <span className="clear-btn" onClick={removeCompleted}>clear completed</span>
        </div>
    )
}