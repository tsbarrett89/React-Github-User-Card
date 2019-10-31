import React, { Component } from 'react';
import axios from 'axios';

import UsersGrid from './components/UsersGrid';
import { AppStyle } from './components/styling';

class App extends Component {
    state = {
        user: [],
        followers: []
      }

    componentDidMount() {
      axios
        .get('https://api.github.com/users/tsbarrett89')
        .then(response => {
          this.setState({user: response.data})
        })

        axios
          .get('https://api.github.com/users/tsbarrett89/followers')
          .then(response => {
            console.log(response.data)
            this.setState({followers: response.data})
          })
    }

render(){
    return(
      <AppStyle>
        <UsersGrid 
          user={this.state.user}
          followers={this.state.followers}
        />
      </AppStyle>
    )
}
}


export default App;
