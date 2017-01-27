import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants'

export default function postsBySubreddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return 'https://www.reddit.com/r/reactjs.json'
    default:
      return state
  }
}