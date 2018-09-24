const URL = 'http://localhost:8080'

export const ACTION_PICTURES_LOAD_REQUEST = 'ACTION_PICTURES_LOAD_REQUEST';
export const ACTION_PICTURES_LOAD_SUCCESS = 'ACTION_PICTURES_LOAD_SUCCESS';
export const ACTION_PICTURES_LOAD_FAILURE = 'ACTION_PICTURES_LOAD_FAILURE';

export const ACTION_UPDATE_PICTURE_RATE_SUCCESS = 'ACTION_UPDATE_PICTURE_RATE_SUCCESS';


export function loadPicturesAction() {
  return (dispatch) => {
    dispatch({ type: ACTION_PICTURES_LOAD_REQUEST });
    fetch(`${URL}/pictures`)
      .then(res => res.json())
      .then((res) => {
        const { data } = res;
        dispatch({
          type: ACTION_PICTURES_LOAD_SUCCESS,
          payload: { pictures: data }
        });
      })
      .catch((err) => dispatch({
        type: ACTION_PICTURES_LOAD_FAILURE,
        payload: { err }
      }));
  };
}

export function updatePictureRate(index, value) {
  return (dispatch) => {
    fetch(`${URL}/update-rate`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
      },
      type: 'no-cors',
      body: JSON.stringify({
        rate: value,
        index: index
      })
    })
      .then((res) => {
        console.log(res)
        dispatch({
          type: ACTION_UPDATE_PICTURE_RATE_SUCCESS,
          payload: {
            index: index,
            rate: value
          }
        });
      });
  };
}
