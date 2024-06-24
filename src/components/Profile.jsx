import React from 'react';
import { User, Github, Mail, Music, LinkedinIcon } from 'lucide-react';
import WorkExperience from './WorkExperience';
import Projects from './Projects';

const ProfileMe = () => {
  return (
    <div className="profile">
      <div className="status-music">
        <div className="status">Status: Interning in Seattle!</div>
        <div className="music">
          <Music size={16} />
          <span>Like We Used To, by The Rose</span>
        </div>
      </div>
      
      <div className="personal-info">
        <div className="profile-picture">
          {/* <img src="./assets/meaf.jpg" alt="Profile" /> */}
        </div>
        <h1>Ryan Vu</h1>
      </div>
      
      <p className="bio">
      I'm a computer science & informatics student that is currently studying at <span className="highlight">@uofwa</span>. Beyond programming, I'm really interested in embroidery and collecting stuff animals.
      </p>
      
      <div className="social-links">
        <a href="https://discord.com/users/686250839857168455"><User size={16} /> @rocktree</a>
        <a href="https://www.linkedin.com/in/ryanqvu/"><LinkedinIcon size={16} /> @ryanqvu</a>
        <a href="https://github.com/rockuutree"><Github size={16} /> @rockuutree</a>
        <a href="mailto:vurya22@uw.edu"><Mail size={16} /> vurya22 [at] uw.edu</a>
      </div>
      
      <div className="recent-interests">
        <h2>Recent Interests</h2>
        <div className="interests-list">
          {['Automation', 'Kpop', 'Artificial Intelligence', 'Machine Learning', 'LLM Technology', 'Social Impact', 'Animals', 'Embroidery', 'Robotics' ].map((interest, index) => (
            <span key={index} className="interest-tag">{interest}</span>
          ))}
        </div>
      </div>
      
      <div className="work-experience-section">
        <h2>Work Experience</h2>
        <WorkExperience 
          company="Datafi"
          role="Software Engineer Intern"
          date="05/2024 - Present"
          description="Integrated 10+ disparate data sources into a unified platform, enabling comprehensive business data analysis and insights, resulting in a 30% improvement in data accessibility and a 20% reduction in data retrieval time.
          Developed and delivered 5 JavaScript NLP and data visualization components, boosting user engagement by 25%."
          logoUrl={require("../assets/dtBackground.png")}
        />
        <h2>Projects</h2>
        <Projects 
          link="https://devpost.com/software/neurodog-d2cufp"
          company="Neuro-Reactive Robotic Service Dog"
          description="Neurodog uses the SPOT dog by Boston Dynamics to imitate the actions of a service animal for our project. The robotic service animal recognizes familiar brainwave patterns using the Neurosity Crown, including emotional states like sadness, and automatically executes corresponding commands to provide comfort and assistance to its user."
          logoUrl={require("../assets/neurodog.png")}
        />
        <Projects 
          link="https://tmobileassistant.com/"
          company="T-Mobile AI Customer Support Widget"
          description="Collaborated with T-Mobile Engineers to develop products for improving customer communication and support. Designed a React.js widget that offers instant customer call support with OpenAI summarization, Speech-to-Text audio transcription, and email integration capabilities."
          logoUrl={require("../assets/tmobile.png")}
        />
      </div>
    </div>
  );
};

export default ProfileMe;