const initState = {
   popularGames: [],
   newGames: [],
   upcomingGames: [],
   searched: []
};

// Reducer
const gamesReducer = (state = initState, action) => {
   switch (action.type) {
      case 'FETCH_GAMES':
         return {...state};
      default:
         return {...state};
   }
};

// Action Creator
const fetchGames = () => {
   return {
      type: 'FETCH_GAMES'
   };
};


export default gamesReducer;