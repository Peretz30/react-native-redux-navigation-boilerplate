import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './PostsActions'
import PostsList from './PostsList'

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    render() {
        return (
           <PostsList posts={this.props.posts} />
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}


let Container = connect(mapStateToProps, { fetchPosts })(PostsContainer);

export default Container