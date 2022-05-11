import React from 'react';
import './index.css'

const TeamMemberCard = (props) => {
  const { avatar, name, role, twitter } = props;
  return (
    <div className="team-member">
      <img src={avatar} className="member-avatar" />
      <div className="member-name">{name}</div>
      <div className="member-role">{role}</div>
      {twitter&&<a href={twitter} target="_blank"><img src="/assets/twitter-sm.svg" className="member-twitter"/></a>}
    </div>
  );
}

export default TeamMemberCard;