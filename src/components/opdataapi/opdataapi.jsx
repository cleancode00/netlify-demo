import React, {Component} from 'react';
import Contacts from './contacts';
class opdataapi extends Component {
  constructor(props) {
    super(props)
    state = {
      contacts: []
    } 
}
   

    componentDidMount() {
      // 'https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-030178-KKA'
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

  render () { 
      return (
         <Contacts contacts={this.state.contacts} />
      )
  }
  
}

export{opdataapi};