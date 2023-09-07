// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import useLists from './hooks/useLists';

import Home from './pages/Home';

const App = () => {
  const { todo, dispatch } = useLists();

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/home'
            element={<Home todo={todo} dispatch={dispatch} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
