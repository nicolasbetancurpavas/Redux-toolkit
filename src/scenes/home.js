import { deleteTask, completedTask, toggleModal } from '../feactures/task/taskSlide';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../components/Task';
import { useNavigate } from "react-router-dom"
import { Modal } from './Modal';
import { FormEdit } from '../components/Form';
function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigation = () => {
        navigate('form')
    }
    const task = useSelector((state) => state.listTask.tasks)
    const stateModal = useSelector((state) => state.listTask.modal)

    const openModal = (id) => dispatch(toggleModal(id))
    const changeCompleted = (id) => dispatch(completedTask(id))
    const handleDelete = (idTask) => dispatch(deleteTask(idTask))

    return (
        <div className="App">
            <h2>Lista de tareas</h2>
            {task.map(item => (
                <Task
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    completed={item.completed}
                    change={() => changeCompleted(item.id)}
                    deleteTask={() => handleDelete(item.id)}
                    toggleModal={() => openModal(item.id)}
                />
            ))}
            <button
                onClick={handleNavigation}
                className='create-btn'>
                crear tarea
            </button>
            {stateModal &&
                <Modal>
                    <FormEdit
                        toggleModal={() => openModal()}
                    />
                </Modal>
            }
        </div>
    );
}

export default Home;
