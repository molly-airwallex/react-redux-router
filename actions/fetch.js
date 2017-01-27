import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants';
import fetch from 'isomorphic-fetch'

//actions

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export default function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://www.reddit.com/r/reactjs.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
  }
}