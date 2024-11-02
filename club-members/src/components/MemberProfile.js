// src/components/MemberProfile.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import members from '../data';

const MemberProfile = () => {
    const { id } = useParams();
    const member = members.find(m => m.id === parseInt(id));

    // State for new comments
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(member ? member.comments : []);

    // Handle adding a new comment
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            setComment(''); // Clear input after submission
            member.comments = updatedComments; // Update the member's comments in the original data
        }
    };

    if (!member) return <h2>Member not found</h2>;

    return (
        <div>
            <h2>{member.name}</h2>
            <p>Degree: {member.degree}</p>
            <p>Roll No: {member.rollNo}</p>
            <p>Funny Line: {member.funnyLines}</p>
            <h3>Comments:</h3>
            <ul>
                {comments.length > 0 ? comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                )) : <li>No comments yet.</li>}
            </ul>
            {/* Form to add a new comment */}
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Leave a comment"
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default MemberProfile;
