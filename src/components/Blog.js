import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    let response = await fetch(
      "https://api.kylethomas.com.au/wp-json/wp/v2/posts?filter[orderby]=id&order=asc"
    );
    if (!response.ok) {
      return;
    }

    let blogs = await response.json();
    this.setState({ blogs: blogs });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <section className="project-list pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Welcome To My Blog</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 font-light">
              <p>My latest stories, tutorials and updates for developers.</p>
            </div>
          </div>
          <div className="blogsList-container">
            {this.state.blogs.map((blog, index) => {
              return (
                <div className="row mt-5" key={blog.id}>
                  <div className="col-md-12">
                    <h3>{blog.title["rendered"]}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default BlogList;
