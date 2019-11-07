import React, { Component } from 'react';
import requester from './../../infrastructure/requester';
import Post from './Post';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    }

    getPosts = () => requester
        .get('appdata', 'post', 'kinvey')
        .then(res => this.setState({ posts: res}))

    componentDidMount = () => this.getPosts();

    render = () => (
        <section id="viewCatalog">
            {this.state.posts.map(x => <Post key={x._id} {...x }/>)}
        </section>
    )
}