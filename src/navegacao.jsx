import App from './pages';
import Bala from './pages/pagina2/idex2'
import NotFound from './pages/notfound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/index2' element={<Bala />}></Route>

                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}