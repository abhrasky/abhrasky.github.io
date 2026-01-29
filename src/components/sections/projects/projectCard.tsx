import { ProjectDataType } from "@/db/projectsOneData";
import { Link } from "react-router-dom";

type ProjectCardPropsType = {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
    isIconShow?: boolean
}
const ProjectCard = ({ project, className, iconCalss, isIconShow=true }: ProjectCardPropsType) => {
    return (
        <div className={`project-items ${className}`}>
            <div className="project-image">
                <img src={project.image} alt="project-img" />
                <div className="project-content">
                    <p>{project.category}</p>
                    <h4>
                        <Link to={project.link}>{project.title}</Link>
                    </h4>
                    {
                        isIconShow &&
                        <Link to={project.link} className={`${iconCalss}`}>
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard