import React, { Component, PropTypes } from 'react'
import fetchPosts from '../actions/fetch'
import { connect } from 'react-redux'

function Foo({ posts, fetchPosts }) {
  return (
      <div>
        getPost ( see the console).
        <button onClick={() => fetchPosts()}>Refresh</button>
          {posts && posts.map(post =>
          <p>{post.title}</p>
          )}
      </div>
  )
}

export default connect(
    state => ({ posts: state.fetch.items}),
    { fetchPosts }
)(Foo)
