// Base URL
const base_url = "https://api.rawg.io/api/";

// Get the date
const getCurrentMonth = () => {
   const month = new Date.getMonth() + 1;
   return (month < 10) ? `0${month}` : month;
}

// Get the day
const getCurrentDay = () => {
   const day = new Date.getDate;
   return (day < 10) ? `0${day}` : day;
}

// Get whole dates
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;