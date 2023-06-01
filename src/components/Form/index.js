import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editTask } from "../../feactures/task/taskSlide"
import { useNavigate } from "react-router-dom"

export const FormEdit = ({ toggleModal }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const idEdit = useSelector(state => state.listTask.idEdit)

    const [formEdit, setFormEdit] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name]: e.target.value
        })
    }

    const hanledSumit = (e) => {
        e.preventDefault()
        dispatch(editTask({ ...formEdit, id: idEdit }))
        navigate('/')
    }

    return (
        <form onSubmit={hanledSumit} className="container-form">
            <label htmlFor="title-edit">title</label>
            <input
                name="title"
                type="text"
                id="title-edit"
                onChange={handleChange}
            />
            <label htmlFor='descripcion-edit'>Description</label>
            <input
                name="description"
                type="text"
                id="descripcion-edit"
                onChange={handleChange}
            />
            <button>
                hacer cambios
            </button>
            <span
                onClick={toggleModal}
            ><ion-icon name="arrow-back-outline"></ion-icon></span>
        </form>
    )
}