import { useEffect } from "react";
import { useParams } from "react-router-dom";

// import "./project-page.scss";
import { data } from "../../data/projets";
import { Carrousel, Error } from "../../components";

export function Project({ technos }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const project = data.find(({ id }) => id === params.id);
  if (project === undefined) {
    return <Error />;
  }

  const framePics = project && project.pictures;

  return (
    project && (
      <div key={params.id} className="fiche-container">
        <div className="title">
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
          <h3>{project.skill}</h3>
        </div>
        <Carrousel frames={framePics} />
        <p>{project.description}</p>
        <a target="blank" href={project.link}>
          Lien vers le repo du projet
        </a>
      </div>
    )
  );
}
