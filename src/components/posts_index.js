import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return(
				<li className='list-group-item' key={post.id} style={{ marginBottom: '15px' }}>
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			);
		});
	}

	render() {
		return(
			<div>
				<div className='text-xs-right' style={{ marginTop: '15px' }}>
					<Link className='btn btn-primary' to='/posts/new'>
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>				
				<ul className='list-group'>
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// 	return { posts: state.posts };
// }

function mapStateToProps({ posts }) {
	return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);