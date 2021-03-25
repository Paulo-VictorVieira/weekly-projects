import axios from 'axios';
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/logs');

    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    setLoading();

    const res = await axios.post('/logs', log, config);

    dispatch({ type: ADD_LOG, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/logs/${id}`);

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    setLoading();

    const res = await axios.put(`/logs/${log.id}`, log, config);

    dispatch({ type: UPDATE_LOG, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// Search srver logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(`/logs?q=${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
