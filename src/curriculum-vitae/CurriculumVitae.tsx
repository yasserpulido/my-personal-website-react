import { faLocationPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CurriculumVitae.css";

function CurriculumVitae() {
  return (
    <div className="canvas">
      <section className="canvas-section">
        <p>
          My personal goal is growing up as Frontend React Developer and be part
          of a company that give me the opportunities to improve all my
          knowledge and learn more about different problems to solve.
        </p>
      </section>
      <section className="canvas-section" id="education">
        <h2 className="text-center text-uppercase fw-bold canvas-section__title">
          Education
        </h2>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            Kaplan International School
          </h5>
          <h6 className="canvas-section__role">(English Course)</h6>
          <p>2016 - 2017</p>
          <p>
            Kaplan helped me to learn and improve my english language and also
            to advance in different level to know which that I am on Common
            European Framework. In this adventure, I met people from around of
            the world, and take advantage of shared my knowledge with them.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Boston, United States</p>
          </span>
        </div>
        <div>
          <h5 className="fw-bold me-2 canvas-section__institute">
            Instituto Universitario Politécnico Santiago Mariño
          </h5>
          <h6 className="canvas-section__role">(Systems Engineering)</h6>
          <p>2009 - 2016</p>
          <p>
            Here, I learned about Systems Engineer that deals with the design,
            programming, implementation and maintenance of systems.
            Incorporating modern methods and techniques to optimize performance,
            control and correct the different stages of a project. Also
            formulating the plans that allow integrating different projects of a
            general development program.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Maracay, Venezuela</p>
          </span>
        </div>
      </section>
      <section className="canvas-section" id="experiences">
        <h2 className="text-center text-uppercase fw-bold canvas-section__title">
          Experiences
        </h2>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            MAS GLOBAL CONSULTING
          </h5>
          <h6 className="canvas-section__role">(Full Stack Developer)</h6>
          <p>Jan 2021 to March 2022</p>
          <p>
            Development of solutions for Johnson Controls International as
            client. As a member of Ravens team, we covered five projects:
            Estimating project is based on ASP.NET MVC 5 with .NET Framework
            4.8; the project is designed with Bootstrap and JavaScript with
            jQuery in Frontend. The Applied Equipment Ordering project is based
            on .NET Core 3.0., the same is designed with Angular framework with
            TypeScript. The Order and AOMS projects were building with .NET Core
            3.1 and JavaScript with jQuery. Finally, Special Request project was
            created with .NET 5 and Angular with Typescript. The version control
            is Team Foundation Service, and the methodology used was SCRUM.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Remote</p>
          </span>
        </div>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            Edenred Argentina S.A.
          </h5>
          <h6 className="canvas-section__role">(Full Stack Developer)</h6>
          <p>Aug 2020 to Dec 2020</p>
          <p>
            Alta is a web application is about to registry new client for the
            different solutions related to employee benefits, meal vouchers,
            loyalty programs, flee and mobility and corporate payment. The web
            application was migrated to .NET Core 3.1 using Visual Studio 2019
            based on Onion Architecture. Using on the frontend with React and
            Redux with TypeScript, Bootstrap 4 and PrimeReact 5. Also, Data
            Model with SQLServer 2012 and Git as Version Control.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Buenos Aires, Argentina</p>
          </span>
        </div>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            RH Tecnología S.A.
          </h5>
          <h6 className="canvas-section__role">(Full Stack Developer)</h6>
          <p>Jan 2020 to Jul 2020</p>
          <p>
            Development of the new Comercio website to Edenred Argentina S.A. as
            client. The web is about manage the client account, monitor payments
            and access all the advantages and benefits that Edenred offers for
            being part of its network. The project was based on .NET Core 3.1
            with Visual Studio 2019. Using React and Redux with TypeScript,
            Bootstrap 4.0 and PrimeReact 4 as framework design. Also, SQL Server
            2012 for database, and version control Team Foundation Service.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Buenos Aires, Argentina</p>
          </span>
        </div>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            Santa Rita de Cascia C.A.
          </h5>
          <h6 className="canvas-section__role">(.NET Developer)</h6>
          <p>Jan 2016 to Sep 2016</p>
          <p>
            Development a Cattle Control software compatible with stick reader
            AllFlex brand. The software was based on WinForms .NET Framework 4.5
            with Visual Studio 2012. SQL Server 2008 R2 for the database.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Valle de la Pascua, Venezuela</p>
          </span>
        </div>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            Solo Sistemas C.A.
          </h5>
          <h6 className="canvas-section__role">(.NET Developer)</h6>
          <p>Nov 2014 to Dec 2016</p>
          <p>
            Development a Source Control and Access Control software based on
            WinForms .NET Framework 4.5 with Visual Studio 2012. SQL Server 2008
            R2 for the database.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Maracay, Venezuela</p>
          </span>
        </div>
      </section>
      <section className="canvas-section" id="projects">
        <h2 className="text-center text-uppercase fw-bold canvas-section__title">
          Projects
        </h2>
        <div className="mb-5">
          <h5 className="fw-bold me-2 canvas-section__institute">
            CryptoLugares
          </h5>
          <h6 className="canvas-section__role">(Front End Developer)</h6>
          <p>2020</p>
          <p>
            Designed the CryptoLugares's website based on React with TypeScript,
            using Bootstrap 4.5 and SCSS.
          </p>
          <span className="d-flex justify-content-end align-items-center canvas-section__location">
            <FontAwesomeIcon icon={faLocationPin} className="me-2" />
            <p className="m-0">Remote</p>
          </span>
        </div>
      </section>
      <section className="canvas-section" id="abilities">
        <h2 className="text-center text-uppercase fw-bold canvas-section__title">
          Abilities
        </h2>
        <div className="mb-5">
          <div className="d-flex align-items-center">
            <h5 className="fw-bold me-2 canvas-section__abilities-title">
              Skills
            </h5>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="p-0 m-0 ability-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>HTML5</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>CCS3 / SASS / SCSS</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Bootstrap</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>OOP</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>JavaScript</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>TypeScript</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Jest</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>jQuery</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>C#</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="p-0 m-0 ability-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>.NET Core</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>LINQ</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>SQL</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>MSSQL</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>NoSQL</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>MongoDB</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>React</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>Angular</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="d-flex align-items-center">
            <h5 className="fw-bold me-2 canvas-section__abilities-title">
              Languages
            </h5>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="p-0 m-0 ability-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Español</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span>English</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="p-0 m-0 ability-list">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Português</span>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurriculumVitae;
