import reduxLeaves from 'redux-leaves';
import initialState from '../initialState';

const [reducer, actions] = reduxLeaves(initialState)

export {
  reducer,
  actions
}