export function Card({ cover, preview, subtitle, alt_title }) {
  return (
    <article className="card-project">
      <img className="thumbnail" src={cover} alt={alt_title + " thumbnail"} />
      <img className="preview" src={preview} alt={alt_title + " preview"} />
      <div className="card-project__layer">
        <div className="title-padding">
          <p className="card-project__title">{subtitle}</p>
        </div>
      </div>
    </article>
  );
}
