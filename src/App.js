import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import PostForm from './postForm';
import PostView from './postView';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/addPost' element={<PostForm/>}/>
        <Route path='/viewPost' element={<PostView/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
