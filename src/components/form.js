import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
             <div className="row">
               <div className="col-lg-12 form">
                 <h2 className="question">What is your favorite Chuck Norris Joke? Let's find out.</h2>
                 
                  <div className="button">
                   <button onClick={()=>{
                        this.props.handleClick(this.props.joke)
                    }} className="btn btn-success">Submit</button>
                  </div>
                    <div className="row">
                        <div className="col-lg-offset-4 col-lg-4">
                            <h3>{this.props.joke}</h3>
                        </div>
                    </div>  
                </div>  
             </div>
        );
    }
}

export default Form;