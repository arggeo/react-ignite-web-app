import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Router
import { useHistory } from 'react-router-dom';

// Style & Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Utilities
import { smallImage } from '../util';

const GameDetails = () => {
   const history = useHistory();

   const exitDetailsHandler = (e) => {
      const element = e.target;
      if (element.classList.contains('shadow')) {
         document.body.style.overflow = 'auto';
         history.push('/');
      }
   }

   const { game, screens, isLoading } = useSelector(state => state.details);

   return (
      <>
         {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailsHandler}>
               <Details>
                  <Stats>
                     <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                     </div>
                     <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                           {game.platforms.map(platform => (
                              <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                           ))}
                        </Platforms>
                     </Info>
                  </Stats>
                  <Media>
                     <img src={smallImage(game.background_image, 1280)} alt={game.name} />
                  </Media>
                  <Description>
                     <p>{game.description_raw}</p>
                  </Description>
                  <div className="gallery">
                     {screens.map(screen => (
                        <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
                     ))}
                  </div>
               </Details>
            </CardShadow>
         )}
      </>
   );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #333;
  
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetails;