import axios from 'axios'
import * as actionTypes from './actionTypes'

export const getFilmsStart = () => {
    return {
        type: actionTypes.FETCH_FILMS_START
    }
}

export const getFilms = () => {
    return (dispatch) => {
        dispatch(getFilmsStart())
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=c8da0795b40a03c4dc86aae4bd7af9f2&language=en-US&page=1&region=id'
        })
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        });
    }
}