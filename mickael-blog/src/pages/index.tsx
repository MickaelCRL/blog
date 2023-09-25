import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "./styles.css";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <header></header>;
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="background-image">
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />

        <main className="main-content">
          <div className="intro">
            <h1>
              Developpeur Full Stack<br></br> à Paris
            </h1>
          </div>
          <div className="suite">
            <div className="section1">
              <div className="right-text">
                <h2>À propos de moi</h2>
                <p>
                  Salut, je suis Mickaël Céraline. Étudiant en informatique à
                  l'IUT d'Orsay. <br />
                  Passionné par l'informatique, j'aime résoudre des problèmes et
                  explorer de nouvelles technologies. <br />
                  En dehors de mes études, je m'investis dans des projets
                  innovants et je cherche toujours de nouvelles opportunités
                  pour développer mes compétences en programmation.
                </p>
              </div>
              <div className="left-image">
                {/* Insérez ici votre image */}
                <img
                  src="/chemin-de-votre-image.jpg"
                  alt="Image à propos de moi"
                />
              </div>
            </div>

            <div className="section1">
              <div className="right-text">
                <h2>Compétences</h2>
                <ul>
                  <li>
                    Langages de programmation :
                    <ul>
                      <li>C#</li>
                      <li>Java</li>
                      <li>C++</li>
                      <li>Python</li>
                      <li>PHP</li>
                      <li>PL/SQL</li>
                    </ul>
                  </li>
                  <li>
                    Technologies web :
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </li>
                  <li>
                    Frameworks JavaScript :
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="left-image">
                {/* Insérez ici votre image */}
                <img
                  src="/chemin-de-votre-image.jpg"
                  alt="Image à propos de moi"
                />
              </div>
            </div>

            <h2>Section 3</h2>
            <p>Et voilà la troisième section.</p>
            {/* Le reste de votre contenu */}
          </div>
        </main>
      </Layout>
    </div>
  );
}
