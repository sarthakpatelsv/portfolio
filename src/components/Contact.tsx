import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import {
  certifications,
  education,
  profile,
  publications,
} from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-card">
            <h4>Gmail</h4>
            <a className="contact-primary" href={profile.emailHref} data-cursor="disable">
              {profile.email}
              <MdArrowOutward />
            </a>
            <p className="contact-note">
              Let&apos;s connect for software development, AI/LLM projects,
              collaboration, and opportunities.
            </p>
          </div>

          <div className="contact-card">
            <h4>Profiles</h4>
            <div className="contact-links">
              <a href={profile.githubHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                GitHub — sarthakpatel <MdArrowOutward />
              </a>
              <a href={profile.linkedinHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                LinkedIn — sarthak-patel-sv <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h4>Education</h4>
            {education.map((item) => (
              <p key={item} className="contact-meta-item">{item}</p>
            ))}
            {publications.length > 0 && (
              <>
                <h4>Publications</h4>
                {publications.map((item) => (
                  <p key={item} className="contact-meta-item">{item}</p>
                ))}
              </>
            )}
            {certifications.length > 0 && (
              <>
                <h4>Certifications</h4>
                {certifications.map((item) => (
                  <p key={item} className="contact-meta-item">{item}</p>
                ))}
              </>
            )}
            <h5 className="contact-copy">
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
