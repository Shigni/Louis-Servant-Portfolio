import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import left from "../../assets/vector-left.svg";
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
        <Link className="link-back" to={"/portfolio"}>
          <img src={left} alt="Back" className="leftArrow-back" />
        </Link>
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
