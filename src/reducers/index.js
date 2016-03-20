/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import  * as ActionTypes from './../constants/ActionTypes';
import extend from 'extend';
/* Populated by react-webpack-redux:reducer */




function radiator(state = {}, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return extend(state, action.data);

    case ActionTypes.REQUEST_DATA:
          return Object.assign({}, state, {});

    case ActionTypes.RECEIVE_DATA:
          return Object.assign({}, state, {
            data: action.data,
            lastUpdated: action.receivedAt
          });

    default:
      return state;
  }
}

const rootReducer = combineReducers({radiator});

export default rootReducer;
