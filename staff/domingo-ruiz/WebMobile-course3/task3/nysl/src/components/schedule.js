import React from 'react';
import {Link} from 'react-router-dom'
import data from '../gameslocations.json'
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import styled from 'styled-components';

const Table = () => {
    return data.game.september.map((game) =>{
            return(
                <div class="table table-responsive" >
                <Tbody class="table striped">
                    <tr >
                        <Td><Link to={`/game/${game.id}`}>{game.date}</Link></Td>
                        <Td><Link to={`/game/${game.id}`}>{game.time}</Link></Td>
                        <Td><Link to={`/game/${game.id}`}>{game.teams}</Link></Td>
                        <Td><Link to={`/game/${game.id}`}>{game.location}</Link></Td>
                    </tr>
                </Tbody>
                </div>
            )
        })
    }

const Head = () => {
    return (
        <Thead class="table table-responsive">
            <Tr>
                <Th>SEPTEMBER</Th>
                <Th>Time</Th>
                <Th>Teams</Th>
                <Th>Location</Th>
            </Tr>
        </Thead>
    )
}

// const map = () =>{
//     return (
//         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11972.935233361863!2d2.17450885!3d41.3907285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1636630631825!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

//         )
//     }
const GamesInfo = () => {
    return (
        <div>
            <p>ojwaeroawnerowlkarnowkenr{data.game.september.date}</p>
        </div>
    )
};


export default GamesInfo;
export {Table, Head}

//crear una array diferente con location para comparar elementos, más fácil que comparar propiedades de objetos 