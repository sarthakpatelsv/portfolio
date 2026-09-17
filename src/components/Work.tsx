import "./styles/Work.css";
import { projectCards } from "../data/portfolioData";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectCards.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-number">0{index + 1}</div>
              <h4 className="project-card-title">{project.title}</h4>
              <p className="project-card-category">{project.category}</p>
              <div className="project-card-divider"></div>
              <p className="project-card-tools">{project.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
