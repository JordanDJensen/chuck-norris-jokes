import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import FormContainer from './containers/form-container';


import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

import "./css/style.css";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                    <Header/>
                    <FormContainer/>
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));