import React from 'react';
import TeamMemberCard from '../../components/TeamMemberCard';
import './Team.css';

const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <div className="team-title">
          THE TEAM
        </div>
        <div className="horizental-bar"></div>
      </div>
      <div className="team-body">
        <TeamMemberCard avatar="/assets/crosmodev.png" name="CrosmoDev" role="Founder/Developer" twitter="/" />
        <TeamMemberCard avatar="/assets/crosmopolitan.png" name="CrosmoPolitan" role="Marketing Manager" />
        <TeamMemberCard avatar="/assets/crosmosuper.png" name="CrosmoSuper" role="Developer" />
        <TeamMemberCard avatar="/assets/crosmogabriel.png" name="CrosmoGabriel" role="Community Manager" twitter="/" />
        <TeamMemberCard avatar="/assets/crosmonaughty.png" name="CrosmoNaughty" role="Advisor" />
      </div>
    </div>
  );
}

export default Team;