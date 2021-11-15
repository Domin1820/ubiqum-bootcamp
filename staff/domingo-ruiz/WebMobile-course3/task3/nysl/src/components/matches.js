import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../gameslocations.json';




const Matches = ()=>{
   const {id} =useParams();
   const [game,setGame] = useState({})
  
   useEffect(() =>{
       const Datos = ()=>{
           const gamesSeptember = data.game.september.filter((x)=>x.id===id);
           const gamesOctober = data.game.october.filter((x)=>x.id===id);
           const object= Object.assign({},gamesSeptember, gamesOctober);
           setGame(object);
        
       }
       Datos()

    },[id])

    return(
        <div>
            {Object.keys(game).map(x =>
            <div style={{textAlign:'center'}}>
                <h3>Game Information</h3>
                <p className="scheduleExtensionText">Teams: {game[x].teams}</p>
                <p className="scheduleExtensionText"></p>
                <p className="scheduleExtensionText">Date: {game[x].date}</p>
                <p className="scheduleExtensionText"></p>
                <p className="scheduleExtensionText">Hour: {game[x].time}</p>
                <p className="scheduleExtensionText"></p>
                <p className="scheduleExtensionText">School: {game[x].location}</p>
                <br />
                <iframe className="scheduleExtensionMap" title='School Map'src={game[x].url}></iframe>
                <div>
                    <Link to="/schedule"><button type="button" id='scheduleExtensionButton' className=" btn btn-lg btn-primary">Go back to Schedule</button></Link>
                </div>
           </div>
           )}
        </div>
    )
}
export {Matches}