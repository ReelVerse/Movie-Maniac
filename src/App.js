import './App.css';
import './css/Footer.css'
import './css/MovieCard.css'

import { MovieDetails } from './components/MovieDetails';
import { MovieList } from './components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './components/Search';
import { Footer } from './components/Footer';


function App() {
    // console.log(process.env.REACT_APP_API_KEY);
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieList />}></Route>
                <Route path="/details/:movie_id" element={<MovieDetails />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
}

export default App;