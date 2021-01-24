import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { loadGames } from './actions/gamesAction';

// Router
import { Route } from 'react-router-dom';

// Components & Pages
import Home from './pages/Home';
import Nav from './components/Nav';

// Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
   return (
      <div className="App">
         <GlobalStyles />
         <Nav />
         <Route path={['/', '/game/:id']}>
            <Home />
         </Route>
      </div>
   );
}

export default App;