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

// Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathID }) => {
   const history = useHistory();

   const exitDetailsHandler = (e) => {
      const element = e.target;
      if (element.classList.contains('shadow')) {
         document.body.style.overflow = 'auto';
         history.push('/');
      }
   }

   const getStars = () => {
      const stars = [];
      const rating = Math.round(game.rating);
      for (let i = 1; i <= 5; i++) {
         if (i <= rating) {
            stars.push(<img src={starFull} alt="star" key={i} />);
         } else {
            stars.push(<img src={starEmpty} alt="star" key={i} />);
         }
      }
      return stars;
   }

   const getPlatform = (platform) => {
      switch (platform){
         case 'Playstation 4':
            return playstation;
         case 'Xbox One':
            return xbox;
         case 'PC':
            return steam;
         case 'Nintendo Switch':
            return nintendo;
         case 'iOS':
            return apple;
         default:
            return gamepad;
      }
   }

   const { game, screens, isLoading } = useSelector(state => state.details);

   return (
      <>
         {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailsHandler}>
               <Details layoutId={pathID}>
                  <Stats>
                     <div className="rating">
                        <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                     </div>
                     <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                           {game.platforms.map(platform => (
                              <img key={platform.platform.id} src={getPlatform(platform.platform.name)} alt={platform.platform.name} />
                           ))}
                        </Platforms>
                     </Info>
                  </Stats>
                  <Media>
                     <motion.img layoutId={`image ${pathID}`} src={smallImage(game.background_image, 1280)} alt={game.name} />
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
  z-index: 5;
  
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
  
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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