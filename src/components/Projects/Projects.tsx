import s from "./Projects.module.css"
import {ProjectCard} from "../ProjectCard/ProjectCard";
export const Projects = () => {
    const projectList = [
        {
            title: 'Project 1',
            description: 'Description for project 1',
            imageUrl: '/path/to/image1.jpg'
        },
        {
            title: 'Project 2',
            description: 'Description for project 2',
            imageUrl: '/path/to/image2.jpg'
        },
        // Add more projects here
    ];

    return (
        <section id="projects" className={s.projects}>
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};
