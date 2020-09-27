import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
// import config from '../../config';
import config from '../../cv.yaml';

const images = require.context('../../assets/images');

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email} </a>
            {/*{config.address} · {config.phone}*/}
          </div>
          <p className="lead mb-5">{config.bio}</p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {config.experienceList.map((experience, i) => {
            const { title, company, description, period } = experience;
            return (
              <div key={i} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{company}</div>
                  <p>{description}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.educationList.map((education, i) => {
            const {
              institution,
              qualification,
              description,
              period,
            } = education;
            return (
              <div key={i} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{institution}</h3>
                  <div className="subheading mb-3">{qualification}</div>
                  <div>{description}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>

          {config.certifications.map((cert, i) => {
            const {
              name,
              from,
              date
            } = cert;
            return (
              <div key={i} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{name}</h3>
                  <div>
                    <a href={from.link} target="_blank" rel="noreferrer">{from.name}</a>
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="languages"
      >
        <div className="w-100">
          <h2 className="mb-5">Languages</h2>
          <ul className="fa-ul mb-0">
            {config.languages.map((lang, i) => {
              return (
                  <li key={i}>
                    <i className="fa-li fa fa-check"/>
                    {lang}
                  </li>
              );
            })}
          </ul>
        </div>

      </section>

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <ul className="list-inline">
            {config.skills.map((skill, i) => {
              return (
                <li key={i} className="list-inline-item">
                  <figure>
                    <a href={skill.link} target='_blank' rel="noreferrer">
                      <img 
                        src={images('./' + skill.icon)}
                        style={{
                          height: 80,
                          width: 80, 
                          objectFit: 'contain'
                          }}
                        alt={skill.name}
                        className="grayscale"
                      />
                    </a>
                    <figcaption style={{textAlign: 'center'}}>{skill.name}</figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

    </div>
    <div className="container w-100">
      <p className="text-center">
        <small className="d-lg-none d-xl-none">
          Generated with the{' '}
          <a href={`${config.footerUrl}`} className="">
            Ops Platform
          </a>
        </small>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
