import { useNavigate } from "react-router-dom"
import { addTask } from "../feactures/task/taskSlide"
import { useDispatch } from "react-redux"
import { useState } from "react"
export const FormTask = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleNavigation = () => {
        navigate('/')
    }

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value /* [] lo corchetes permite definir e.targeT.name como la propiedad(clave) del objecto  */
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({ ...task }))
        navigate('/')
    }

    return (
        <div>
            <span
                onClick={handleNavigation}
            ><ion-icon name="arrow-back-outline"></ion-icon>
            </span>
            <form onSubmit={handleSubmit}>
                <h2>Crear Tarea</h2>
                <div>
                    <label htmlFor="id">ID</label>
                    <br />
                    <input
                        name="id"
                        id="id"
                        type="number"
                        onChange={handleChange}
                        placeholder="id" />
                </div>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <br />
                    <input
                        name="title"
                        id="titulo"
                        type="text"
                        onChange={handleChange}
                        placeholder="Titulo" />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <br />
                    <input
                        name="description"
                        id="descripcion"
                        type="text"
                        onChange={handleChange}
                        placeholder="descripcion" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
