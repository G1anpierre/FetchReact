import React, { Fragment} from 'react';

import './App.css';

function App() {
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
  );
}

export default App;
