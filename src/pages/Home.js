import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { loadGames } from '../actions/gamesAction';

// Router
import { useLocation } from 'react-router-dom';

// Components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';

// Style & Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Home = () => {
   const location = useLocation();
   const pathID = location.pathname.split('/')[2];

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadGames());
   }, [dispatch]);

   const { popularGames, upcomingGames, newGames, searchedGames } = useSelector(state => state.games);

   return (
      <GameList>
         <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
               {pathID && <GameDetails pathID={pathID} />}
            </AnimatePresence>
            {searchedGames.length ? (
               <div className="searched">
                  <h2>Searched Games</h2>
                  <Games>
                     {searchedGames.map(game => (
                        <Game
                           name={game.name}
                           released={game.released}
                           id={game.id}
                           img={game.background_image}
                           key={game.id}
                        />
                     ))}
                  </Games>
               </div>
            ) : ''}
            <h2>Upcoming Games</h2>
            <Games>
               {upcomingGames.map(game => (
                  <Game
                     name={game.name}
                     released={game.released}
                     id={game.id}
                     img={game.background_image}
                     key={game.id}
                  />
               ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
               {popularGames.map(game => (
                  <Game
                     name={game.name}
                     released={game.released}
                     id={game.id}
                     img={game.background_image}
                     key={game.id}
                  />
               ))}
            </Games>
            <h2>New Games</h2>
            <Games>
               {newGames.map(game => (
                  <Game
                     name={game.name}
                     released={game.released}
                     id={game.id}
                     img={game.background_image}
                     key={game.id}
                  />
               ))}
            </Games>
         </AnimateSharedLayout>
      </GameList>
   );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;