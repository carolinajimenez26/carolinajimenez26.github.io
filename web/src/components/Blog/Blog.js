import React from 'react';
import './Blog.css';
import Feed from 'rss-to-json';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts(this.setPosts);
  }

  componentWillUnmount() {
    this.setState({ posts: [] });
  }

  fetchPosts = (callback) => {
    let url = 'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@carolinajimenez26';
    Feed.load(url, (err, rss) => {
      if (rss) {
        this.setPosts(rss.items);
      }
    });
  }

  setPosts = (response) => {
    this.setState({
      posts: response
    });
  }

  render() {
    let items = this.state.posts.map((post, index) => {
      return (
        <div key={index + "post"} className={"col-xl-6 col-md-6 carousel-item " + (index === 0 ? "active" : "")}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read</a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Blog blue-bg" id="blog">
        <div className="row d-flex justify-content-center">
          <h1 className="title text-white">Blog</h1>
        </div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner d-flex justify-content-center">
            {items}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Blog;