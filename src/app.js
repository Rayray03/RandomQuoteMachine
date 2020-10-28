import React,{Component} from 'react';
import {connect, connection} from "react-redux";
import ShareLink from 'react-twitter-share-link';



class App extends Component{
constructor(props){
    super(props);
    this.state = {
        randomindex: 1,
        quote: "",
        author: ''
    };

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.QuotePlz = this.QuotePlz.bind(this);
}
handleChange(event){
    this.setState({
        input:event.target.value
    });
}
handleSubmit(event){
    event.preventDefault();
    this.setState({
        submit: this.state.input
    });
}
QuotePlz(){
    this.setState({
        randomindex: Math.floor(Math.random()*4)
    })
}


render(){
    const Quotes = [
        {quote:'Life is about making an impact, not making an income.',author: 'Kevin Kruse'},
        {quote:'Whatever the mind of man can conceive and believe, it can achieve.',author: 'Napoleon Hill'},
        {quote:'Strive not to be a success, but rather to be of value.',author: 'Albert Einstein '},
        {quote:'You miss 100% of the shots you don’t take.',author: 'Wayne Gretzky'}
    ]
    const pickedQuote = Quotes[this.state.randomindex];
    const fullQuote = pickedQuote.quote + "     --" + pickedQuote.author;
    return(
        <div class="container">
            <h2>Inspirational Quotes</h2>
        <div class="card">
        <div class="card-body">
        <div>    
            <p>{pickedQuote.quote}</p>
            <p>{pickedQuote.author}</p>
            <button onClick ={this.QuotePlz}>New Quote</button>
            <ShareLink link={fullQuote}>
            {link => (<button><a href={link} target='_blank'>Share this on Twitter</a></button>)}
            </ShareLink>
        </div>
        </div>
        </div>
        </div>
    );

}
}





export default App ;