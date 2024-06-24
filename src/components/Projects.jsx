import React from 'react';

const Projects = ({ link, company, role, date, description, logoUrl }) => (
  <div className="work-experience">
    <div className="logo-container">
      <a href={link}><img src={logoUrl} alt={`${company} logo`} className="company-logo" /></a>
    </div>
    <div className="work-details">
      <h3 className="company-name">{company}</h3>
      {/* <p className="role-date">{role} • {date}</p> */}
      <p className="job-description">{description}</p>
    </div>
  </div>
);

export default Projects;