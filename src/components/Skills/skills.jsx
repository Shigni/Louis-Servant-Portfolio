// import { Collapse } from "../Collapse/collapse";
import { skills } from "../../data/skills";

export function Skills() {
  console.log(skills);
  const skillList = skills.map((item, index) => (
    <li key={index} className="skillList">
      {item}
    </li>
  ));
  return (
    <div className="skills-container">
      <h1>Compétences</h1>
      {skillList}
    </div>
  );
}
