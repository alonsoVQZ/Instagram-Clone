import { Routes, Route } from 'react-router-dom';


import Main from './componets/pages/Main';
import SignIn from "./componets/pages/SignIn"
import SignUp from './componets/pages/SignUp'


import { userSessionFunction } from './store/user';


import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userSessionFunction());
  }, [dispatch])
  
  return (
    <Routes>
      <Route path="/*" element={ <Main />  }/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
