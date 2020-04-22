import React, { Fragment} from 'react';

import './App.css';











class App extends React.Component {

  constructor (props) {
    super(props)


    this.state = {
      
    }

  }




  componentDidMount() {

     this.fetchUser();
  }
 
  fetchUser = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = response.json();
      console.log(data);
  }

  render() {

    return (
        <Fragment>
            <h1 className="title"> Random User Generator</h1>
                <div className="user-profile">
                    <img id="avatar" src="https://pbs.twimg.com/profile_images/743138182607175680/ZJzktgBk_400x400.jpg" />
                    <div id="fullname">Jon Snow</div>
                <div id="username">
                    kingofnorth
                </div>
                    <div className="description">
                    <div>Email: <span id="email">jon@hotmail.com</span></div>
                    <div>City: <span id="city">Winterfell</span></div>
                </div>
                <div className="footer">
                    <button id="btn">Next User!</button>
                </div>
                <div className="footer-2">
                    <button id="btn-user">My User!</button>
                </div>
            </div>
        </Fragment>
    )

  }
}

export default App;
