
import React  from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Post from './components/post.jsx'; 
import PostHeader from './components/postHeader.jsx';

import { initializeState, State } from './state';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        };
    }

    async componentWillMount(){
        this.setState({
            content: State.posts
        });
    }

    render() {
        return (                          
                this.state.content.map(item => 
                    <PostHeader 
                        urlId={item.urlId} 
                        title={item.title}
                        date={item.date}
                        spoiler={item.spoiler} />
                )
        );
    }
}

export default class Bootstrapper extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        };
    }

    async componentWillMount() {
        await initializeState();
        
        this.setState({
            isLoading: false
        });
    }

    render() {
        if(this.state.isLoading) {
            return null;
        }

        return (
                <Router>
                    <div className="contentContainer">
                        <Route exact path="/" component={Index} />
                        <Route path="/:id" component={Post} />
                    </div>
                </Router>
        );
    }
}

ReactDOM.render(<Bootstrapper />, document.getElementById('app'));