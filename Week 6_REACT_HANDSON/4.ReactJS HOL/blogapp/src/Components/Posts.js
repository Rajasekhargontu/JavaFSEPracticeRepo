import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      posts: [],
      error: null
    };
  }

  // Fetch posts using Fetch API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postObjects = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: postObjects });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  componentDidMount() {
    this.loadPosts();
  }
  componentDidCatch(error, info) {
    alert(`An error occurred: ${error}`);
  }
  render() {
    const { posts, error } = this.state;
    if (error) {
      return <h3 style={{ color: 'red' }}>Error: {error}</h3>;
    }
    return (
      <div>
        <h2>Blog Posts</h2>
        <div className='grid'>
        {posts.map(post => (
          <div className="cell" key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Posts;
