import { Navbar } from "react-bootstrap";
import { Switch, Route} from "react-router-dom";
import Title from "./home";
import { UpComing,  } from "./home";
import ContactUs from "./contactinfo";
import {EmailLink} from "./contactinfo";
import Schedule from "./schedule";
import {Matches} from "./matches";


const Swap = () => {
    return (
    <Switch>
        <Route exact path="/schedule/:id" >
            <Title className="w-100 p-3"/>  
            <Navbar/>
            <Matches/>
        </Route>

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

        <Route path="/schedule">
            <Title className="w-100 p-3"/>
            <Navbar/>
            <Schedule/>
        </Route>


    </Switch>
    )
}

export {Swap}
