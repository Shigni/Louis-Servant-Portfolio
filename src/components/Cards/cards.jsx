export function Card({ cover, image1, title, subtitle }) {
  return (
    <article className="card-project">
      <img className="thumbnail" src={cover} alt="Project thumbnail" />
      <img className="image1" src={image1} alt="Project thumbnail" />
      <div className="card-project__layer">
        <div className="title-padding">
          <p className="card-project__title">{subtitle}</p>
        </div>
      </div>
    </article>
  );
}
