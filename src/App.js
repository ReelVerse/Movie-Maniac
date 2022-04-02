import './App.css';
import './css/Footer.css'
import './css/MovieCard.css'
import './css/MovieDetails.css'
import './css/Search.css'

import { MovieDetails } from './components/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './components/Search';
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';


function App() {
    // console.log(process.env.REACT_APP_API_KEY);
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/home" element={<Search />}></Route>
                <Route path="/details/:movie_id" element={<MovieDetails />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
}

export default App;