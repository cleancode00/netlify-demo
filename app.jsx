import React from 'react';
import ReactDOM from 'react-dom';
//建立一個DOM物件
class HelloTitle extends React.Component {
    render(){
        return <p style={this.props.style}>{this.props.content}</p>
    }
}

class TitleDiv extends React.Component {
    render(){
        return (<div>
                    <HelloTitle content="比較大的字" style={ {'font-size':18} } />
                    <HelloTitle content="比較小的字" style={ {'font-size':12} } />
               </div>)
    }
}

ReactDOM.render(<TitleDiv />,document.getElementById('root'))