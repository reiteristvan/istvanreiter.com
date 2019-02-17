
import React  from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Post from './components/post.jsx'; 
import PostHeader from './components/postHeader.jsx';

import { fetchContentJson } from './services/postService';
import { State } from './state';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        };
    }

    async componentWillMount(){
        var content = await fetchContentJson();

        State.posts = content;

        this.setState({
            content: content
        });
    }

    render() {
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
    }

    render() {
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