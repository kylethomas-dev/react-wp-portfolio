import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, project: {} };
  }

  async componentDidMount() {
    let response = await fetch(
      `http://api.kylethomas.com.au/wp-json/wp/v2/project/${this.props.match.params.id}`
    );
    let data = await response.json();
    this.setState({
      loading: false,
      project: data
    });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="project">
          <div className="project__information">
            <h2 className="project-title">{this.state.project.title}</h2>
          </div>
          <div className="project__description">
            {this.state.project.description}
          </div>
        </div>
      );
    }

    return <h2>Loading</h2>;
  }
}

export default Project;
