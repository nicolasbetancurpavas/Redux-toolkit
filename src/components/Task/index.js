import './style.css'
export const Task = ({
    title,
    description,
    completed,
    change,
    deleteTask,
    toggleModal }) => {
    const icon = completed ? "ellipse-sharp" : "ellipse-outline";

    return (
        <div className={`card ${completed ? 'card-completed' : ''}`}>
            <div className='icons'>
                <span className='icon-delete'
                    onClick={deleteTask}
                >
                    <ion-icon name="trash-outline"></ion-icon>
                </span>
                <span
                    onClick={change}
                ><ion-icon name={icon}></ion-icon>
                </span>

                <span
                    onClick={toggleModal}
                >
                    <ion-icon name="pencil-outline"></ion-icon>
                </span>

            </div>
            <h2 className="title__card">{title}</h2>
            <p className="description__card">{description}</p>
        </div>
    )
}