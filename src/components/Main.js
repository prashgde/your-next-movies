import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import AddMovie from "./AddMovie";
import { useState } from "react";
import Movies from "./Movies";
import SearchBar from "./SearchBar";

const Main = () => {
    const [searchString, setSearchString] = useState('');

    const handleSearchStringChange = searchStr => {
        setSearchString(searchStr);
    }

    return (
        <Router>
            <div className='nav-container'>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '30px' }}>
                    <Link id='homeLink' className='link' to='/'>Your Next Movies</Link>
                    <SearchBar
                        searchString={searchString}
                        handleSearchStringChange={handleSearchStringChange} 
                    />
                </div>
                <div>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/contactus'>Contact Us</Link>
                </div>
            </div>
            <Switch>
                <Route path='/about'><About /></Route>
                <Route path='/contactus'><ContactUs /></Route>
                <Route path='/'>
                    <AddMovie />
                    <Movies searchString={searchString} />
                </Route>
            </Switch>
        </Router>
    );
}

export default Main;