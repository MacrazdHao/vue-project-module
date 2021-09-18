import types from './types';

const getDefaultState = () => {
  return {
  }
}

export default {
  [types.RESET_STATE](state) {
    Object.assign(state, getDefaultState());
  },
}