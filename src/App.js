import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { loadGames } from './actions/gamesAction';

// Router
import { Route } from 'react-router-dom';

// Components & Pages
import Home from './pages/Home';

// Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
   return (
      <div className="App">
         <GlobalStyles />
         <Route path={['/', '/game/:id']}>
            <Home />
         </Route>
      </div>
   );
}

export default App;