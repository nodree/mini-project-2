import axios from 'axios'

export const getPopularMovies = (page = 1) => (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        .then(data => {
            dispatch({
                type: 'GET_MOVIES_SUCCESS',
                payload: data
            });
        })
        .catch(e => {
            dispatch({
                type: 'GET_MOVIES_FAIL',
                payload: {
                    error: `${e.message}.`,
                    status: e.response && e.response.data.status_message
                }
            });
        });
};
