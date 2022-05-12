import React from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import './Team.css';

const Team = () => {
  return (
    <div className="team container">
      <div className="team-header">
        <div className="team-title">
          THE TEAM
        </div>
        <div className="horizental-bar"></div>
      </div>
      <div className="team-body">
        <TeamMemberCard avatar="/assets/crosmodev.png" name="CrosmoDev" role="Founder/Developer" twitter="https://twitter.com/CrosmoDev" />
        <TeamMemberCard avatar="/assets/crosmopolitan.png" name="CrosmoPolitan" role="Marketing Manager" />
        <TeamMemberCard avatar="/assets/crosmosuper.png" name="CrosmoSuper" role="Developer" />
        <TeamMemberCard avatar="/assets/crosmogabriel.png" name="CrosmoGabriel" role="Community Manager" twitter="https://twitter.com/GabrielKvaal" />
        <TeamMemberCard avatar="/assets/crosmopirate.png" name="CrosmoPirate" role="Game Developer" />
      </div>
    </div>
  );
}

export default Team;