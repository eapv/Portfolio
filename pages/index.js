import Layout from "../components/Layout";
import Link from "next/link"
import {skills} from "../profile"
import {experiences} from "../profile"
import {projects} from "../profile"

const Index = () => (
    <Layout>

        {/* Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="Eduardo-Perez.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Eduardo Pérez</h1>
                            <h3>Data Engineer</h3>
                            <p>
                                Experienced data analyst and consultant with a track record of delivering customized solutions to optimize business operations and improve decision-making. Skilled in a range of data analysis tools and technologies, including Excel, Power BI, Python, and SQL.  Excels at extracting insights from complex datasets to generate valuable reports and dashboards. Collaborative approach to working with colleagues and stakeholders at all levels of the organization.
                            </p>
                            <Link href="/hireme" legacyBehavior>
                                <a className="btn btn-outline-light">Hire Me</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}

        <section className="row">
            <div className="col-md-4 py-2">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {/* Skill Progress  */}
                        {skills.map(({ skill, percentage }, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress ">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${percentage}%` }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-md-8 py-2">


                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            {/* List Item Experience */}
                            {experiences.map(({ title, from, to, description }, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>
                                        {from} {to ? `- ${to}` : "- current"}
                                    </h5>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/hireme" legacyBehavior>
                            <a className="btn btn-light">Know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio" legacyBehavior>
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </Layout>
)
export default Index;