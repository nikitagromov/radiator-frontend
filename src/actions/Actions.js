import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function updateData() {
  return {
    type: types.UPDATE_DATA
  }
}

export function receiveData(json) {
  return {
    type: types.RECEIVE_DATA,
    data: json,
    receivedAt: Date.now()
  }
}

export function requestData() {
  return {
    type: types.REQUEST_DATA
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('http://localhost:5000/api/file')
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)));
  }
}

