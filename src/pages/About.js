import React from 'react';
import SelfPortrait from '../components/SelfPortrait'

import './About.css'

function About() {
  return (
    <div id="about" className="aboutStyle">
      <div>
        
        <h2 className="section-header">me.</h2>
        <div className='content-group'>
          <div className="about-content">
            <SelfPortrait />
            <span className='about-text'>Creating elegant, simple solutions for sophisticated systems.</span>
          </div>
        </div>

        <h3 className="section-header">technologies:</h3>
        <div className="content-group">
          <div className="technologies-content">
            <img style={{ width: 8 + 'rem', marginBottom: 2 + 'rem'}} src="/assets/cloud-icon.png" alt="" />
            <span>CLOUD: IaC (Terraform), AWS: EC2, Auto-Scaling Groups, ECS, S3, SNS, SQS, Lambda, CloudFormation, CloudFront, CloudWatch, IAMS, Fargate, MediaConvert, and more...</span>
          </div>
          <div className="technologies-content">
            <span>Languages: .Net Framework, .NET Core, C#, Javascript, Typescript, C/C++, Python, Swift UI, T-SQL, bash, powershell</span>
          </div>
          <div className="technologies-content">
            <span>Others: ffmpeg libraries, openGL, Vuejs, Reactjs, knockoutjs, Git, CSS and CSS preprocessors, websockets, Mobile/Responsive Design, Accessibility, Localization</span>
          </div>
          <div className="technologies-content">
            <span>AI/ML: openAI, TensorFlow, pyTorch</span>
          </div>
        </div>

        <h3 className="section-header">experience:</h3>
        <div className="about-experience">
          <ul>Staff Software Engineer/Senior Architect
            <li>Primary resource for system architecture and design</li>
            <li>Work with stakeholders to capture and refine project requirements.</li>
            <li>Allocate development resources for projects</li>
            <li>Give estimates for time and effort</li>
            <li>Align work with each developer's individual goals/expertise.</li>
            <li>Design architecture around project requirements.</li>
            <li>Manage multple projects on a team of 12 Developers.</li>
            <li>Work with peers and juniors to resolve technical obstacles.</li>
            <li>Write high-quality, standardized code and unit tests.</li>
            <li>Lead Team Initiatives, such as defining Team Coding guidelines, workflow, and deployment strategies.</li>
            <li>Create Coding Patterns and tools to aid in daily development.</li>
            <li>Organize and lead regular workshops for team and individual growth.</li>
            <li>Mentor developers and nurture a culture of trust and personal growth.</li>
            <li>Continually drive innovation of new products/features.</li>
            <li>Create roadmaps for various parts/aspects of the system.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
