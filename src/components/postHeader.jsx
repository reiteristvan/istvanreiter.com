
import React from 'react';

import { Link } from "react-router-dom";

export default class PostHeader extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/${this.props.urlId}`}>{this.props.title}</Link>
                <div>
                    {this.props.spoiler}
                </div>
            </div>
        );
    }
}