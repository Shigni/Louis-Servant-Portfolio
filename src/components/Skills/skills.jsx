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
      <h1>
        Compétences <i class="ri-pencil-ruler-2-line"></i>
      </h1>
      <ul className="skills">{skillList}</ul>
    </div>
  );
}
