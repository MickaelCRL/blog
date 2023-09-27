import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "./styles.css";

import styles from "./index.module.css";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return <header></header>;
// }

function HomeIntro() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <div className="intro">
        <h1>
          Développeur Full Stack
          <br />à Paris
        </h1>
      </div>
      <button>Me Contacter</button>
    </main>
  );
}

function HomeAboutMe() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <div className="image-about-me">
        <img src="/img/mickaelceraline.jpg" alt="Image à propos de moi" />
      </div>

      <div className="about-me">
        <h2>À propos de moi</h2>
        <p>
          Salut, je suis Mickaël Céraline. Étudiant en informatique à l'IUT
          d'Orsay. <br />
          Passionné par l'informatique, j'aime résoudre des problèmes et
          explorer de nouvelles technologies. <br />
          En dehors de mes études, je m'investis dans des projets innovants et
          je cherche toujours de nouvelles opportunités pour développer mes
          compétences en programmation.
        </p>
      </div>
    </main>
  );
}

function HomeCompetence() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <div className="competence">
        <h2>Compétences</h2>
        <div className="columns-container">
          <div className="column">
            <h2>Langages de programmation</h2>
            <ul className="custom-list-style">
              <li>C#</li>
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>PHP</li>
              <li>PL/SQL</li>
            </ul>
          </div>
          <div className="column">
            <h2>Technologies web</h2>
            <ul className="custom-list-style">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="column">
            <h2>Frameworks JavaScript</h2>
            <ul className="custom-list-style">
              <li>Angular</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function HomeCertification() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <h2>My certification</h2>
      <div>
        <img
          src="/img/foundational-csharp-certification.png"
          alt="certification image"
        />
      </div>
    </main>
  );
}

function HomeContact() {
  const { siteConfig } = useDocusaurusContext();
  return <main></main>;
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="background-image">
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomeIntro />
        <HomeAboutMe />
        <HomeCompetence />
        <HomeCertification />
        <HomeContact />
      </Layout>
    </div>
  );
}
