import React, { Fragment} from 'react';

import './App.css';


class App extends React.Component {

  constructor (props) {
    super(props)


    this.state = {
    
      loading: true,    
      error: null,

      data : {
          results: []
      }
    }

  }



  componentDidMount() {

     this.fetchUser();
  }
 
  fetchUser = async () => {

        try {
            this.setState({ loading: true, error: null})
                
            const response = await fetch('https://randomuser.me/api/')
            const data = await response.json();
            
            this.setState({
                loading: false,
                data : data
            })

        } catch(error) {

            this.setState({
                loading: false,
                error: error
            })
        
        }
   
  }

//   Optional : 

//   handleUser = () => {
//     console.log('I have click')
//     this.fetchUser();
//   }

  render() {

    if(this.state.error) {
        return `Error: ${this.state.error.message}` ;
    }


    return (
        <Fragment>
                 
                <h1 className="title"> Random User Generator</h1>
                <div className="user-profile">

                    {this.state.data.results.map( element => (    

                        <Fragment key= {element.login.uuid}>


                        {this.state.loading ?
                            (
                                <h1> Loading ...</h1>
                        
                            )    
                            :
                            (
                            <>
                                <img id="avatar" src={element.picture.medium} />
                                <div id="fullname"> {element.name.first} </div>
                                <div id="username">
                                    {element.login.username}
                                </div>
                                <div className="description">
                                <div>Email: <span id="email">{element.email }</span></div>
                                <div>City: <span id="city">{element.location.city}</span></div>
                                </div>
                            </>
                            )
                        }
                        </Fragment>
                            
                        ))
                    }   


                        


                        <div className="footer">
                                <button id="btn" onClick = {() => this.fetchUser() } >Next User!</button>
                        </div>

                 </div>
        </Fragment>
    )

  }
}

export default App;
