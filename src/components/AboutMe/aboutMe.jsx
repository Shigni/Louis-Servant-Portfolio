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
        Étant passionné par l’informatique et très créatif j'ai acquis de
        solides compétences en création de sites Web, j’ai pour ambition d’être
        full stack. Je cherche un poste de développeur web me permettant de
        travailler sur différents projets.
      </p>
      <h2>
        Coordonnées <i class="ri-phone-line"></i>
      </h2>
      <p>
        <span>
          <i class="ri-mail-line" alt="email">
            {" "}
            :
          </i>
        </span>{" "}
        <a href="mailto:Louisservant86@gmail.com">Louisservant86@gmail.com</a>
        <br />
        <span>
          <i class="ri-phone-line" alt="numéro de téléphone">
            {" "}
            :
          </i>
        </span>{" "}
        <a href="tel:0684665384">(+33) 6 84 66 53 84</a>
      </p>

      <a href={cvdownload} className="link-cv-download" download={cvdownload}>
        Mon CV
      </a>
    </div>
  );
}
