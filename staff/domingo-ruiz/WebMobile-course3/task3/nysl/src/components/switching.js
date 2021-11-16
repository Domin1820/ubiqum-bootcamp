import { Navbar } from "react-bootstrap";
import { Switch, Route} from "react-router-dom";
import Title from "./home";
import { UpComing, RegisterPage  } from "./home";
import ContactUs from "./contactinfo";
import {EmailLink} from "./contactinfo";
import Schedule from "./schedule";
import {Matches} from "./matches";
import FormRegister, { LogIn, SingUp } from "./firebase";



const Swap = () => {
    return (
    <Switch>
        <Route path="/" exact>
            <Title className="w-100 p-3"/>
            <UpComing />
            <Navbar/>
        </Route>

        <Route path="/schedule/:id" exact>
            <Title className="w-100 p-3"/>  
            <Navbar/>
            <Matches/>
        </Route>

        <Route path="/cont" exact>
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
