import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, showModal }) {

    const handleClose = (e) => {
        if(e.target === e.currentTarget) {
            showModal(false)
        }
    }

    return ReactDOM.createPortal((
        <div className="modal-backdrop" onClick={handleClose}>
            <div className="modal">
                {children}
                <button onClick={() => showModal(false)}>Close</button>
            </div>
        </div>
    ), document.body)
}
