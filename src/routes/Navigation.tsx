import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { FormikAbstract, FormikComponents, FormikYupPage, FormikBasicPage, RegisterFormikPage, DynamikForm} from '../03-forms/pages';
 
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik - Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik - Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik - Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>Formik - Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik-page" activeClassName="nav-active" exact>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/dynamik-form" activeClassName="nav-active" exact>Dynamik - Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>
          <Route path="/formik-abstract">
            <FormikAbstract/>
          </Route>
          <Route path="/register-formik-page">
            <RegisterFormikPage/>
          </Route>
          <Route path="/dynamik-form">
            <DynamikForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}