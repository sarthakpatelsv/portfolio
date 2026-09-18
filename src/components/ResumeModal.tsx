import { useEffect } from "react";
import { MdClose, MdDownload } from "react-icons/md";
import "./styles/ResumeModal.css";

const resumePath = `${import.meta.env.BASE_URL}Sarthak_Patel_Master_Resume.pdf`;

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>Resume</h3>
          <div className="resume-modal-actions">
            <a
              className="resume-download-btn"
              href={resumePath}
              download="Sarthak_Patel_Resume.pdf"
              data-cursor="disable"
            >
              <MdDownload />
              <span>Download</span>
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              data-cursor="disable"
            >
              <MdClose />
            </button>
          </div>
        </div>
        <div className="resume-pdf-container">
          <iframe
            src={resumePath}
            title="Sarthak Patel Resume"
            className="resume-pdf-frame"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
