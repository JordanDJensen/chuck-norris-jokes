import React, { Component } from 'react';
import Form from "../components/form";

import autoBind from "react-autobind";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../action/index"

class FormContainer extends Component {
    render() {
        return (
            <div>
                <Form handleClick={this.props.jokeData} joke={this.props.joke}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);