
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { fetchPost } from '../services/postService';

export default class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            post: null
        };
    }

    async componentWillMount() {
        var text = await fetchPost(this.props.match.params.id);

        this.setState({
            post: text
        });
    }

    render() {
        return (
            <div>
                {this.props.title}
                {this.props.date}
                <br />
                <ReactMarkdown source={this.state.post} />
            </div>
        );
    }
}