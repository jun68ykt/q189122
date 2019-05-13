const LIKE_FLUITS_ACTION = 'app/q189122/LIKE_FLUITS';

const LIKE_FLUITS = (queryStore) => ({
  type: LIKE_FLUITS_ACTION,
  queryStore,
});

const fluitsReducer = (state = [], action) => {
  switch(action.type) {
    case LIKE_FLUITS_ACTION:
      return [...state, action.queryStore];
    default:
      return state;
  }
};

export { LIKE_FLUITS, fluitsReducer, }
