/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { Card } from "../../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [t, i18n] = useTranslation("projets");
  const data = t("projetsData.projets", { returnObjects: true });

  return (
    <>
      <div className="cards-container">
        {data &&
          data.map((data, id) => (
            <div className="card_project" key={id}>
              <Link className="link-card-project" to={`/projects/${data.id}`}>
                <Card
                  cover={data.cover}
                  preview={data.preview}
                  subtitle={data.subtitle}
                  alt_title={data.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
