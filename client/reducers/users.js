export default function usersReducer( state = [], action) {
  switch(action.type) {
    case 'RECEIVE_USERS':
      return [...action.users]
    default:
      return state
  }
}
