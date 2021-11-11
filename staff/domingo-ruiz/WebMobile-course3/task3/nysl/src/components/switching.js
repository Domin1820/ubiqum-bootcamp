import { Navbar } from "react-bootstrap";
import { Switch, Route} from "react-router-dom";
import Title from "./home";
import { UpComing,  } from "./home";
import ContactUs from "./contactinfo";
import {EmailLink} from "./contactinfo";
import {Table, Head} from './schedule';
import GamesInfo from "./schedule";


const Swap = () => {
    return (
    <Switch>
        <Route path="/upcoming">
            <Title className="w-100 p-3"/>
            <UpComing />
            <Navbar/>
        </Route>
        <Route path="/cont">
            <Title className="w-100 p-3"/>
            <Navbar/>
            <ContactUs />
            <EmailLink/>
        </Route>
        <Route path="/gameinfo">
            <Title className="w-100 p-3"/>
            <Navbar/>
            <Head />
            <Table />
        </Route>
        <Route path="/game/:id" component={GamesInfo}>
            <Title className="w-100 p-3"/>
            <Navbar/>
            <GamesInfo/>


        </Route>


    </Switch>
    )
}

export {Swap}
