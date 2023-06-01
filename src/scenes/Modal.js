import ReactDOM from 'react-dom';

export const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='container-modal'>
            {children}
        </div >, document.getElementById('modal')
    )
}