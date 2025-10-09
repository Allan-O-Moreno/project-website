import React from 'react';

const teamMembers = [
  { name: 'Maria B', role: 'Co-founder & Operations Director' },
  { name: 'Thomas Williams', role: 'Co-founder & Technical Manager' },
  { name: 'James Humphries', role: 'Co-founder & I&C Specialist' },
  { name: 'Larry Pruit Jr', role: 'Project Manager' },
];

const Team = () => (
  <div className="container py-5">
    <h1>Team</h1>
    <p>Meet the Redline leaders guiding electrical design, automation programming, and field execution.</p>
    <div className="row">
      {teamMembers.map((member) => (
        <div key={member.name} className="col-md-3 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">{member.name}</h4>
              <div className="card-text">{member.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
