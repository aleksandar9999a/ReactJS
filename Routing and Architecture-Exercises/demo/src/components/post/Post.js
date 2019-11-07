import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function pluralize(value) {
    if (value !== 1) return 's';
    else return '';
}

export default class Post extends Component {
    creationInfo = () => {
        let dateIsoFormat = this.props._kmd.ect;
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
    }

    render = () => (
        <article class="post">
            <div class="col rank">
                <span>{this.props.rank}</span>
            </div>
            <div class="col thumbnail">
                <a href={this.props.url}>
                    <img src={this.props.imageUrl} />
                </a>
            </div>
            <div class="post-content">
                <div class="title">
                    <a href={this.props.url}>{this.props.title}</a>
                </div>
                <div class="details">
                    <div class="info">
                        {this.creationInfo()}
                    </div>
                    <div class="controls">
                        <ul>
                            <li class="action">
                                <Link to="/">Details</Link>
                            </li>
                            <li class="action">
                                <Link to="/" class="editPost">Edit</Link>
                            </li>
                            <li class="action">
                                <Link to="/" class="deletePost">Delete</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}