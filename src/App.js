import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails/BlogDetails';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />        
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details/:id' element={<BlogDetails />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
