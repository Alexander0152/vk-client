import * as React from "react";

const styles = require('./Modal.module.css');
interface IProps {
}

interface IState {
    isOpen: boolean,
    message: string
}

export default class LogInModal extends React.Component<IProps, IState> {
    private name: string;
    private email: string;
    private password: string;
    private status: string;
    constructor() {
        super(1);
        this.state = {
            isOpen: false,
            message: ''
        }
        this.name = 'ds';
        this.email = 'sssd';  
        this.password = 'ds';
        this.status = 'user';
    }

    addUserToDb = (event: Event) => {
        event.preventDefault();
        try {
            let data = {
                Name: this.name,
                Email: this.email,
                Password: this.password,
                Status: this.status
            };
            fetch('api/users/AddUser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

        } catch (e) {
            this.setState({
                message: 'Such user already exist!',
            })
        }
        this.setState({
            message: 'You loged in successfully!',
        })
    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-info btn_login" onClick={() => this.setState({ isOpen: true })}>Login</button>
                {this.state.isOpen && (<div className="modal">
                    <div className="modal_body_login">
                        <h1 className="mb-20">Login</h1>
                        <form className="contact_us_form" method="POST">
                        {/* <form className="contact_us_form" method="POST" onSubmit={(e) => this.addUserToDb(e)}> */}
                            <input
                                className="form-control"
                                type="text"
                                name="contactName"
                                placeholder="Name"
                                required={true}
                                onInput={(e)=>(this.name = (e.target as HTMLInputElement).value)}
                            />
                            <input
                                className="form-control"
                                type="email"
                                name="Email"
                                placeholder="Email"
                                required={true}
                                onInput={(e)=>(this.email = (e.target as HTMLInputElement).value)}
                            />
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required={true}
                                onInput={(e)=>(this.password = (e.target as HTMLInputElement).value)}
                            />
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Repeate password"
                                required={true}
                            />
                            <button type="submit" className="btn_contact_submit">
                                send
                <img src="assets/icons/arrow_right_submit.svg" alt="send" />
                            </button>
                        </form>
                        <p className="message">{this.state.message}</p>
                        <button id='modalClose' className="btn btn-primary" onClick={() => this.setState({ isOpen: false })}>Close</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}