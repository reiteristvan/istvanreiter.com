
import React from 'react';

import { Link } from "react-router-dom";

export default class PostHeader extends React.Component {
    render() {
        return (
            <div className="postHeader">
                <h3>
                    <Link className="postHeaderTitle" 
                      to={`/${this.props.urlId}`}>
                      {this.props.title}
                    </Link>
                </h3>
                
                <small>{this.props.date}</small>

                <div className="postHeaderSpoiler">
                    {this.props.spoiler}
                </div>
            </div>
        );
    }
}