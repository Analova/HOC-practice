import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 3) }));
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        Posts:
        {this.state.posts.map(post => (
          <div className="post">
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default UserProfile;
