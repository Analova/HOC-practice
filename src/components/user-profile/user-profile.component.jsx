import React from "react";

import withData from "../../with-data";

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      Posts:
      {data.map(post => (
        <div className="post">
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>
      ))}
    </div>
  );
};

export default withData(UserProfile);
