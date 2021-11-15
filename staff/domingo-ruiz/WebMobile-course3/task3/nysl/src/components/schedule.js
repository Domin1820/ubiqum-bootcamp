import React from 'react';
import {Link} from 'react-router-dom'
import data from '../gameslocations.json'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useState } from 'react';

// import styled from 'styled-components';
//table with schedule

const Schedule = () => {
    const [games] = useState(data)
    return (
        <div>
            <h2>NYSL Game Information</h2>
            <hr/>
            <h3>September</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {games.game.september.map((data) => (
                        <tr key = {data.id}>
                            <th><Link to={`/schedule/${data.id}`} >{data.date}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.time}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.teams}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.location}</Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>October</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {games.game.october.map((data) => (
                        <tr key = {data.id}>
                            <th><Link to={`/schedule/${data.id}`} >{data.date}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.time}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.teams}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} >{data.location}</Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;


