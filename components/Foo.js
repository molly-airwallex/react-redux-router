import React, { Component, PropTypes } from 'react'
import fetchPosts from '../actions/fetch'
import { connect } from 'react-redux'

function Foo({ fetchPosts }) {
  return (
      <div>
        getPost ( see the console).
        <button onClick={() => fetchPosts()}>Refresh</button>
      </div>
  )
}

export default connect(
    state => ({}),
    { fetchPosts }
)(Foo)
