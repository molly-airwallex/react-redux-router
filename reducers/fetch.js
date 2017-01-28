import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants'

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state
  }
}

export default function postsBySubreddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return posts(state[action.posts], action)

    default:
      return state
  }
}