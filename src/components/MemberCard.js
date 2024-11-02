// src/components/MemberCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <img src={`https://via.placeholder.com/150?text=${member.name}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Degree: {member.degree}</p>
            <p>Roll No: {member.rollNo}</p>
            <Link to={`/member/${member.id}`}>View Profile</Link>
           
        </div>
    );
};

export default MemberCard;
