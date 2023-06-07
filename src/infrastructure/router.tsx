import LINKS from '@constants/links';
import Home from '@modules/home';
import Profile from '@modules/profile';
import { Redirect, Route } from 'react-router-dom';



const Router = () => {
    return(
        <>
          <Route exact path={LINKS.HOME}>
            <Home />
          </Route>
          <Route exact path={LINKS.PROFILE}>
            <Profile />
          </Route>
          <Route exact path={LINKS.DEFAULT}>
            <Redirect to={LINKS.HOME} />
          </Route>
        </>
    )
}

export default Router;