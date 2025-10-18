import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, title, children }) {
	React.useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
				<div className="modal-header">
					<h2 id="modal-title" className="modal-title color-font-blue-0015">{title}</h2>
					<button
						className="modal-close"
						onClick={onClose}
						aria-label="Close modal"
					>
						<i className="fa fa-times"></i>
					</button>
				</div>
				<div className="modal-body">
					{children}
				</div>
			</div>
		</div>
	);
}
