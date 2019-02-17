
import React  from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BlogPost from './components/blogPost.jsx'; 

const postList = [
    {
        id: 'hello-world',
        title: 'Hello World!',
        url: 'https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/pages/optimized-for-change/index.md'
    }
];

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (            
            <div>
                {
                    postList.map(item => 
                        //<BlogPost title={item.title} url={item.url} />
                        <h1>Index</h1>
                    )
                }
            </div>);
    }
}

export default class Bootstrap extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/id" component={BlogPost} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Bootstrap />, document.getElementById('app'));