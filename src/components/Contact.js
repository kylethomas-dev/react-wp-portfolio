import React, {Component} from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <section className="pt-4 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Get In Touch</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-light">
                            Drop me an email, I would love to hear from you.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form action="https://formspree.io/mrnkjnnm" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="name" className="font-light">Name</label>
                                            <input type="text" name="name" id="name" className="w-100" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="_replyto" className="font-light">Email</label>
                                            <input type="email" name="_replyto" id="_replyto" className="w-100" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="message" className="font-light">Message</label>
                                            <textarea name="message" id="message" rows="8" className="w-100" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" value="Contact" className="btn btn-blue pl-4 pr-4"/>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact