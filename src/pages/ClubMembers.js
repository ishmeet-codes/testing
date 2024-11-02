import React from "react";
import membersData from "../data/membersData";
import MemberCard from "../components/MemberCard";

const ClubMembers = () => {
  return (
    <div>
      <h1>Club Members</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {membersData.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ClubMembers;
