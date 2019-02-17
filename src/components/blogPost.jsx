
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { fetchPost } from '../services/postService';

export default class BlogPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            post: null
        };
    }

    async componentWillMount() {
        console.log(this.props);
        /*var text = await fetchPost(this.props.url);

        this.setState({
            post: text
        });*/
      }

    render() {
        return (
            <div>
                <h1>This is a blogpost :)</h1>
                {this.props.title}
                <br />
                <ReactMarkdown source={this.state.post} />
            </div>
        );
    }
}