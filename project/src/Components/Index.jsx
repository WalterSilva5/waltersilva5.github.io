import { Route, Switch, Redirect } from 'react-router-dom';
import IndexHeader from './Index/IndexHeader';
import About from './About';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

const index = () => (
  <div>
    <IndexHeader />
    <div className="">
      <Switch>
        <Route exact path="/">
          <Redirect to="/About" />
        </Route>
        <Route path="/About">
          <About />
          <Portfolio />
          <Contacts />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <h1>ERROR 404: PAGE NOT FOUND!</h1>
        </Route>
      </Switch>
    </div>
  </div>
);

export default index;
