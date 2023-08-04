import jwtDecode from 'jwt-decode';
import Router from 'next/router';
import { createContext, useState, useEffect } from 'react';
import { getToken, setToken, removeToken,} from '../utils/Auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [ payload, setPayload ] = useState({});

  useEffect(() => {
    window.addEventListener('storage', () => {
      Router.push('/login');
    });
    const initialToken = getToken();
    if (initialToken) {
      setToken(initialToken);
      setPayload(jwtDecode(initialToken));
    } else if ( children.type.name !== "recoveryPassword") {
      Router.push('/login');
    } 
  }, []);

  const logout = () => {
    removeToken();
    setPayload({});
  };

  const privateRoutes = (page) => {
    switch (page.type.name) {
      case 'Login':
        if (Object.entries(payload).length > 0) {
          window.location.href = '/';
        }
        return page;
      case 'recoveryPassword':
        if (Object.entries(payload).length > 0) {
          window.location.href = '/';
        }
        return page;
      default:
        if (Object.entries(payload).length === 0) {
          return <div />;
        }
        return page;
    }
  };

  return (
    <AuthContext.Provider value={{
      payload,
      setPayload,
      setToken,
      logout,
    }}
    >
      {privateRoutes(children)}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;