import React, {Component} from 'react';

class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    async componentDidMount() {
        let response = await fetch("https://api.kylethomas.com.au/wp-json/wp/v2/projects?filter[orderby]=id&order=asc");
            if (!response.ok) {
            return
        }

        let projects = await response.json()
        this.setState({projects: projects})
        
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
                            <h1>Projects</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 font-light">
                            <p>Since becoming a developer, I have completed dozens of projects. Most of my
                                completed projects have been in WordPress and have been developed by myself,
                                from start to finish. I am also an experienced JavaScript developer working on a
                                number of React based applications.</p>
                            <p>I have a blog where I share tutorials and information for other developers.</p>
                            <p>Below are a handfull of projects I have designed and developed from scratch:</p>
                        </div>
                    </div>
                    <div className="ProjectList-container">
                        {this.state.projects.map((project, index) => {
                                return (
                                    <div className="row mt-5" key={project.id}>
                                        <div className="col-md-12">
                                            <a href={project.acf.url} target="_blank">
                                                <h3>{project.acf.url_name}</h3>
                                            </a>
                                            <p className="font-light" dangerouslySetInnerHTML={this.createMarkup(project.acf.tagline)} />
                                            <div className="project-img">
                                            <img
                                                    className="img-fluid"
                                                    src={project.acf.featured_image.url}
                                                    alt={project.title}/>
                                                </div>  
                                            <div className="font-light" dangerouslySetInnerHTML={this.createMarkup(project.acf.content)} />
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

export default ProjectList;