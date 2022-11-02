
export const EmptyList = ({showedList}) => {
    return(
        showedList === "active" ?
            <div className="text-secondary text-center">There isn't any active todo</div> :
            <div className="text-secondary text-center">There isn't any completed todo</div>
    )
}