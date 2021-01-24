// Axios
import axios from 'axios';

// API
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchedGameURL } from '../api';

// Action Creator
export const loadGames = () => async (dispatch) => {
   const popularData = await axios.get(popularGamesURL());
   const upcomingData = await axios.get(upcomingGamesURL());
   const newData = await axios.get(newGamesURL());

   dispatch({
      type: 'FETCH_GAMES',
      payload: {
         popular: popularData.data.results,
         upcoming: upcomingData.data.results,
         new: newData.data.results
      }
   });
};

export const fetchSearch = (game_name) => async (dispatch) => {
   const searchedGames = await axios.get(searchedGameURL(game_name));

   dispatch({
      type: 'FETCH_SEARCHED',
      payload: {
         searched: searchedGames.data.results
      }
   });
}