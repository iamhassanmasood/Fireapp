import React from "react";
// ye me ny firebase import krwai hy
import * as firebase from 'firebase';
class Home extends React.Component {
    //sb se pehly hum constructor function bna rahy hain ta k constructor me data save karwa saken
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    //ye link firebase ka reference hy
        this.ref = firebase.database().ref();
    }
    // ye function iss liye call karwaya hy ta k jo bhi data submit kiya jaye wo iss me se paas ho 
    handleRegister = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (success) {
                console.log('success', success);
            }).catch(function (error) {
                console.log('error', error);
            })
    }
    //ye function state ko update karwany k liye istemaal kiya hy
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form
                     onSubmit={this.handleRegister}>
                    <h1>Register</h1><br />
                    <p>Please fill in this form to create an account.</p>
                    <br />
                    <b>Email</b><br />

                    <input
                        type="text"
                        id='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <br />


                    <b>Password</b><br />

                    <input
                        type="password"
                        id='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <br />

                    <p>By creating an account you agree to our
                         <a href="https://www.google.com/">Terms & Privacy</a>
                    </p>
                    <br />
                    <button
                        type="submit"
                        className="registerbtn">
                        Register
                        </button>
                </form>
                       {/* yahan state iss liye istemal ki hy agr hum isy print krwana chah rahy hon tw karwa
                       sakty hain k state me kia save hoa hy kia state ban gai hy ya ni bani abhi takk.  */}
                        {this.state.email} | 
                        {this.state.password}
            
            </div>
        );
    }
}
export default Home;