import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { loadGames } from './actions/gamesAction';

// Components & Pages
import Home from './pages/Home';

// Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
   return (
      <div className="App">
         <GlobalStyles />
         <Home />
      </div>
   );
}

export default App;