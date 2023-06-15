import React from "react";
import { useEffect } from "react";
import { Card } from "../../components";
import { Link } from "react-router-dom";

import { data } from "../../data/projets";

export function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cards-container">
        {data &&
          data.map((data, id) => (
            <div className="card_project" key={id}>
              <Link className="link-card-project" to={`/projects/${data.id}`}>
                <Card
                  cover={data.cover}
                  image1={data.image1}
                  subtitle={data.subtitle}
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
