import React from 'react';

const WorkExperience = ({ company, role, date, description, logoUrl }) => (
  <div className="work-experience">
    <div className="logo-container">
      <img src={logoUrl} alt={`${company} logo`} className="company-logo" />
    </div>
    <div className="work-details">
      <h3 className="company-name">{company}</h3>
      <p className="role-date">{role} • {date}</p>
      <p className="job-description">{description}</p>
    </div>
  </div>
);

export default WorkExperience;