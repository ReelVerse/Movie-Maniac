import './App.css';
import { MovieDetails } from './components/MovieDetails';
import { Movies } from './components/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    // console.log(process.env.REACT_APP_API_KEY);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/details/:movie_id" element={<MovieDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
