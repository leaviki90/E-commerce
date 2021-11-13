import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, showModal, modalTitle="" }) {

    const handleClose = (e) => {
        if(e.target === e.currentTarget) {
            showModal(false)
        }
    }

    return ReactDOM.createPortal((
        <div className="modal-backdrop" onClick={handleClose}>
            <div className="modal">
                <div className="modal-header">
                    <span className="modal-title">{modalTitle}</span>
                    <button className="btn btn-close" onClick={() => showModal(false)}>
                        <span>x</span>
                    </button>
                </div>
                    
                {children}
            </div>
        </div>
    ), document.body)
}
