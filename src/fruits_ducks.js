const LIKE_FRUITS_ACTION = 'app/q189122/LIKE_FRUITS';

const LIKE_FRUITS = (queryStore) => ({
  type: LIKE_FRUITS_ACTION,
  payload: { queryStore },
});

const fruitsReducer = (state = [], action) => {
  switch(action.type) {
    case LIKE_FRUITS_ACTION:
      return [...state, action.payload.queryStore];
    default:
      return state;
  }
};

export { LIKE_FRUITS, fruitsReducer, }
