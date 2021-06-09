import * as React from "react";

const styles = require('./Modal.module.css');

// import Feedbacks from '../Feedbacks/Feedbacks'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


let message = '';
let pagePath = '/';

interface IProps {
}

interface IState {
    isOpen: boolean,
}

export default class SignInModal extends React.Component<IProps, IState> {
    state = {
        isOpen: false,
    }

    signIn = (event: Event) => {
        event.preventDefault();
        pagePath = '/Feedbacks';
    };

    setPass = () => {
        pagePath = '/Feedbacks';
    };

    render() {
        return (
            // <Router>
                <React.Fragment>
                    <button className="btn btn-info" onClick={() => this.setState({ isOpen: true })}>Sign in</button>
                    {this.state.isOpen && (<div className="modal">
                        {/* <Route exact path="/" component={Feedbacks} > */}
                        <div className="modal_body">
                            <h1 className="mb-20">Sign in</h1>
                            <form className="contact_us_form" method="POST">
                            {/* <form className="contact_us_form" method="POST" onSubmit={(e) => this.signIn(e)}> */}
                                <input
                                    className="form-control"
                                    type="text"
                                    name="contactName"
                                    placeholder="Name"
                                    required={true}
                                />
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required={true}
                                />
                                {/* <Link onClick={this.setPass()} to={pagePath}> */}
                                    <button type="submit" className="btn_contact_submit">
                                        send
                <img src="assets/icons/arrow_right_submit.svg" alt="send" />
                                    </button>
                                {/* </Link> */}
                            </form>
                            <p className="message">{message}</p>
                            <button id='modalClose' className="btn btn-primary" onClick={() => this.setState({ isOpen: false })}>Close</button>
                        </div>
                        {/* </Route>
                        <Route exact path="/Feedbacks" component={Feedbacks} ></Route> */}
                    </div>)}
                </React.Fragment>
            // </Router>
        )
    }
}