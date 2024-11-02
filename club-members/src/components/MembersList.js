// src/components/MembersList.js
import React from 'react';
import members from '../data';  // Make sure this path is correct
import MemberCard from './MemberCard';  // This import should match the name and location

const MembersList = () => {
    return (
        <div className="members-list">
            {members.map(member => (
                <MemberCard key={member.id} member={member} />
            ))}
        </div>
    );
};

export default MembersList;
