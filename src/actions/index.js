import { CREATE, DELETE, FETCH, EDIT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/events';

export const createEvent = ({ title, date }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/create`, {title, date})
      .then(response => {
        dispatch(createEventSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createEventSuccess =  (data) => {
  console.log('[CREATE SUCESS]: ' + data._id);     
  return {
    type: CREATE,
    payload: {
      _id: data._id,
      title: data.title,
      date: data.date
    }
  }
};

export const deleteEventSuccess = id => {
  console.log('[DELETE SUCCESS]: ' + id);
  return {
    type: DELETE,
    payload: {
      id
    }
  }
}

export const deleteEvent = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteEventSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateEventSuccess = (id, title, date) => {
  console.log('[UPDATE SUCCESS]: ' + id); 
  return {
      type: EDIT, 
      payload: {
          id: id,
          title: title, 
          date: date
      }
  }
}

export const updateEvent = (id, title, date) => {
  return (dispatch) => {
      return axios.put(`${apiUrl}/update/${id}`, {title, date})
      .then(response => {
          dispatch(updateEventSuccess(response.data, title, date))
      })
      .catch(error => {
          throw(error);
      });
  }
}


export const fetchEvents = (events) => {
  return {
    type: FETCH,
    events
  }
};

export const fetchAllEvents = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchEvents(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};