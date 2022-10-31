import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const NBAData = () => {
        const [playerName, setPlayerName] = useState([]);
        const [playerPic, setPlayerPic] = useState([]);

        const fetchPlayerData = () => {
            const playerAPI = 'https://www.balldontlie.io/api/v1/players/237';
            const playerPic = 'https://nba-players.herokuapp.com/players/james/lebron';

            const getNBAPlayer = axios.get(playerAPI)
            const getPlayerPic = axios.get(playerPic)
    
            axios.all([getNBAPlayer, getPlayerPic]).then(
                axios.spread((...allData) => {
                    const allDataPlayer = allData[0].data.first_name
                    const getNBAPlayerPic = allData[1].config.url
                    setPlayerName(allDataPlayer)
                    setPlayerPic(getNBAPlayerPic)
             })
         )
    }

    useEffect(() => {
        NBAData()
    }, [])
}

return (
        <div>
            The NBA Player is: {playerName}
            <img src={playerPic}></img>
        </div>
    )
}

export default Home;