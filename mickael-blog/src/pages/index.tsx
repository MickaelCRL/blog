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
    <section id="intro">
      <div className="container-section">
        <div className="intro">
          <h1>
            Développeur Full Stack
            <br />à Paris
          </h1>
          <form action="https://www.mickaelceraline.com/blog">
            <button className="custom-button center-button" type="submit">
              Voir Mon Blog
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function HomeAboutMe() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="container-section gap">
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
      </div>
    </section>
  );
}

function HomeCompetence() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="container-section">
        <div className="skill-text">
          <h2>Compétences</h2>
          <p>
            Mon parcours est caractérisé par une progression constante. Au fil
            des années, j'ai eu l'opportunité d'explorer diverses technologies
            et langages de programmation, aboutissant à une liste non exhaustive
            de mes compétences.
          </p>
          <div className="skill-grid">
            <div>
              <strong>Langages de programmation :</strong>
            </div>
            <div>C#, Java, Python, C++, PHP, PL/SQL</div>
            <div>
              <strong>Technologies web :</strong>
            </div>
            <div>HTML5, CSS3, JavaScript</div>
            <div>
              <strong>Frameworks JavaScript : </strong>
            </div>
            <div>Angular, React</div>
          </div>
        </div>
        <div className="image-skill">
          <img
            src="/img/skill.svg"
            alt="Image illustrative de vos compétences"
          />
        </div>
      </div>
    </section>
  );
}

function HomeCertification() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="block container-section ">
        <h2>My certification</h2>
        <div className="certification">
          <img
            src="/img/foundational-csharp-certification.png"
            alt="certification image"
            className="centered-image"
          />
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section>
      <div className="block container-section ">
        <h2>Me Contacter</h2>
        <p>
          Vous pouvez me contacter à l'adresse email suivante :&nbsp;
          <a href="mailto:mickael.ceraline@outlook.com">
            mickael.ceraline@outlook.com
          </a>
        </p>
      </div>
    </section>
  );
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
