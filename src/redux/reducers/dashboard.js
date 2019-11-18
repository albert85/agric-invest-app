function dashboard(state = [], action) {
  switch (action.type) {
    case 'REQUEST_DETAIL':
      return [];
    default:
      return state;
  }
}

export default dashboard;
