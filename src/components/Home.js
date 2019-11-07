import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {

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
        this.setState({
            projects: projects.slice(0, 1)
        })
    }

    createMarkup(html) {
        return {__html: html};
    }

    render() {
        return (
            <div>
                <section className="home-header pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h1>Hi, I am<br/>
                                    Kyle Thomas</h1>
                                <p className="font-light">WordPress and JavaScript developer since 2014.
                                    Specializing in full-stack websites and applications. Partner and owner at <a href="https://www.extendgrid.com/" target="_blank">
                                        Extendgrid</a>. <Link to="/projects">See my work</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {this
                        .state
                        .projects
                        .map((project, index) => {
                            return (
                                <div className="row mt-5" key={project.id}>
                                    <div className="col-md-12">
                                        <a href={project.acf.url} target="_blank">
                                            <h3>{project.acf.url_name}</h3>
                                        </a>
                                        <p
                                            className="font-light"
                                            dangerouslySetInnerHTML={this.createMarkup(project.acf.tagline)}/>
                                        <div className="project-img">
                                            <img
                                                className="img-fluid"
                                                src={project.acf.featured_image.url}
                                                alt={project.title}/>
                                        </div>
                                        <div
                                            className="font-light"
                                            dangerouslySetInnerHTML={this.createMarkup(project.acf.content)}/>
                                    </div>
                                </div>
                            );
                        })}
                </div>

            </div>
        )
    }
}

export default Home;