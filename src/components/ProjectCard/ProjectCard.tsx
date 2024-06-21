import s from './ProjectCard.module.css'

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const ProjectCard= ({ title, description, imageUrl }: ProjectCardProps) => {
    return (
        <div className={s.projectcard}>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
