
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
        console.log(State.posts);
        this.setState({
            content: State.posts
        });
    }

    render() {
        console.log('render');
        return (                            
            this.state.content.map(item => 
                <PostHeader 
                    urlId={item.urlId} 
                    title={item.title} 
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
                    <div>
                        <Route exact path="/" component={Index} />
                        <Route path="/:id" component={Post} />
                    </div>
                </Router>
        );
    }
}

ReactDOM.render(<Bootstrapper />, document.getElementById('app'));