import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/store/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  
  const authContext = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {!authContext.isLoggedIn && <Redirect to="/auth" />}
          {authContext.isLoggedIn && <HomePage />}
        </Route>
        {!authContext.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authContext.isLoggedIn && <UserProfile />}
          {!authContext.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
