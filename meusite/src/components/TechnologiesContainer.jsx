import { 
    DiAndroid, DiAngularSimple, DiBootstrap, DiCss3, DiDocker, DiGit, DiGithub, 
    DiHeroku, DiHtml5, DiJava, DiJsBadge, DiMysql,DiPostgresql, DiPython, DiReact, DiSass 
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "android", name: "Android", icon: <DiAndroid /> },
    { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
    { id: "css3", name: "CSS3", icon: <DiCss3 /> },
    { id: "docker", name: "Docker", icon: <DiDocker /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "github", name: "GitHub", icon: <DiGithub /> },
    { id: "heroku", name: "Heroku", icon: <DiHeroku /> },
    { id: "html5", name: "HTML5", icon: <DiHtml5 /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "javascript", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "mysql", name: "MySql", icon: <DiMysql /> },
    { id: "postgresql", name: "Postgresql", icon: <DiPostgresql /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sass", name: "SASS", icon: <DiSass /> }
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer;