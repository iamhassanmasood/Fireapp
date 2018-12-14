import React, { Component } from 'react';
import * as firebase from "firebase";
import './App.css';
import Home from "./Home"

// ye fire base se copy kr k yahan paste kiya hy me ny

var config = {
  apiKey: "AIzaSyDKaDmi6q1_GDswJ7vU_kDU8fbX-UY21FM",
  authDomain: "my-react-app-672a9.firebaseapp.com",
  databaseURL: "https://my-react-app-672a9.firebaseio.com",
  projectId: "my-react-app-672a9",
  storageBucket: "my-react-app-672a9.appspot.com",
  messagingSenderId: "924924428166"
};
firebase.initializeApp(config);
class App extends Component {


  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
