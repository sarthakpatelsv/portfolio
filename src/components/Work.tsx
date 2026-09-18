import "./styles/Work.css";
import { projectCategories } from "../data/portfolioData";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        {projectCategories.map((category, catIndex) => (
          <div className="project-category" key={catIndex}>
            <h3 className="project-category-title">{category.name}</h3>
            <div className="projects-grid">
              {category.projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-card-number">
                    0{catIndex * 7 + index + 1}
                  </div>
                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-category">{project.category}</p>
                  <div className="project-card-divider"></div>
                  <p className="project-card-description">{project.description}</p>
                  <div className="project-card-tools-wrapper">
                    <span className="project-card-tools-label">Tech Stack</span>
                    <p className="project-card-tools">{project.tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
