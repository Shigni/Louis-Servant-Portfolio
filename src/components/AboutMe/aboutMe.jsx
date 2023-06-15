import CV from "../../assets/CV-Louis-Servant.pdf";

export function AboutMe() {
  const cvdownload = CV;

  return (
    <div className="about-container">
      <h1>
        Louis Servant <i class="ri-user-line"></i>
      </h1>
      <p>
        Développeur juste diplômé de 23 ans, dynamique, motivé et autonome.
        Étant passionné par l’informatique et très créatif je possède beaucoup
        de compétences Frontend et un peu Backend, j’ai pour ambition d’être
        full stack. Je cherche un poste de développeur web me permettant de
        travailler sur différents projets
      </p>
      <h2>
        Coordonnées <i class="ri-phone-line"></i>
      </h2>
      <p>
        Louisservant86@gmail.com
        <br />
        (+33) 6 84 66 53 84
      </p>

      <a href={cvdownload} className="link-cv-download" download={cvdownload}>
        Mon CV
      </a>
    </div>
  );
}
