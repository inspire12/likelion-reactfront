import {Routes, Route} from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RequireAuth from "../components/auth/RequireAuth";

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <RequireAuth>
          {(user) => <Home user={user}/>}
        </RequireAuth>
      }
    />
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
);

export default AppRouter;
