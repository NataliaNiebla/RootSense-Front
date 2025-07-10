import React from 'react';
import '../styles/components/ModalStyles.css';

const Modal = ({ 
    isOpen = false, 
    onClose = () => {}, 
    title = '',
    children,
    footer = null,
    size = '', // 'small', 'medium', 'large'   , uso: 'modal-small', 'modal-medium', 'modal-large'
    closable = true,
    overlayClose = true
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (overlayClose && e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCloseClick = () => {
        if (closable) {
            onClose();
        }
    };

    return (
        <div 
            className={`modal-overlay ${isOpen ? 'active' : ''}`} 
            onClick={handleOverlayClick}
        >
            <div className={`modal modal-${size}`} onClick={(e) => e.stopPropagation()}>
                {(title || closable) && (
                    <div className="modal-header">
                        {title && <h3 className="modal-title">{title}</h3>}
                        {closable && (
                            <button 
                                className="modal-close" 
                                onClick={handleCloseClick}
                                aria-label="Cerrar modal"
                            >
                                ×
                            </button>
                        )}
                    </div>
                )}
                
                <div className="modal-body">
                    {children}
                </div>
                
                {footer && (
                    <div className="modal-footer">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
