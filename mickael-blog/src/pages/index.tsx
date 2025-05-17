import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import "./styles.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomeIntro() {
  return (
    <section id="intro">
      <div className="container-section">
        <div className="intro">
          <h1>
            Développeur Full Stack <br /> à Paris
          </h1>
          <p>
            "Airbus, Station F, Paris-Saclay. Aujourd’hui à l’EFREI, je cherche
            des projets qui ont du sens — et je partage mes idées sur mon blog."
          </p>
          <a
            className="custom-button center-button white-black"
            href="mailto:mickael.ceraline@outlook.com"
          >
            Me contacter
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="custom-button center-button black-white"
            href="https://mickaelcrl.github.io/blog/blog"
          >
            Voir Le Blog
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeAboutMe() {
  const imageUrl = useBaseUrl("/img/aproposdemoi2.jpg");
  return (
    <section>
      <div className="container-section gap">
        <div className="image-about-me">
          <img src={imageUrl} alt="Image à propos de moi" />
        </div>

        <div className="about-me">
          <h2>À propos de moi</h2>
          <p>
            Salut, je suis Mickaël Céraline, étudiant en informatique. <br />
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
  const imageUrl = useBaseUrl("/img/skill.svg");
  return (
    <section>
      <div className="container-section gap">
        <div className="">
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
            <div>React, Angular</div>
          </div>
        </div>
        <div className="image-skill">
          <img src={imageUrl} alt="Image illustrative de vos compétences" />
        </div>
      </div>
    </section>
  );
}

function HomeCertification() {
  const imageUrl = useBaseUrl("/img/foundational-csharp-certification.png");
  return (
    <section>
      <div className="block container-section ">
        <h2>Ma certification</h2>
        <div className="certification">
          <img
            src={imageUrl}
            alt="certification image"
            className="centered-image"
          />
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  return (
    <section>
      <div className="block container-section ">
        <h2>Me contacter</h2>
        <p>
          Pour toutes vos questions, suggestions ou collaborations, n'hésitez
          pas à me joindre par email à l'adresse suivante :&nbsp;
          <a href="mailto:mickael.ceraline@outlook.com">
            mickael.ceraline@outlook.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <div className="background-image">
      <div className="overlay"></div>
      <Layout
        title={`Développeur Full Stack`}
        description="Mickaël Céraline est un jeune développeur Full Stack Angular & .NET C#, passionné par la création web avec une volonté d'apprendre en continu. Découvrez mon parcours et mes projets. <head />"
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
