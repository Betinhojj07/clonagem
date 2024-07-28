import App from './pages';
import Bala from './pages/pagina2/idex2'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function navegação() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/index2' element={<Bala />}></Route>
            </Routes>
        </BrowserRouter>
    )
}