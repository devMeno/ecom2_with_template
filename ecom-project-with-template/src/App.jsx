import Home from "./pages/home"
import Shop from "./pages/shop"
import ShopDetails from "./pages/shopDetails"
import Contact from "./pages/contact"
import { Routes, Route } from 'react-router-dom'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/Shop' Component={Shop} />
                <Route path='/ShopDetails' Component={ShopDetails} />
                <Route path='/Contact' Component={Contact} />
            </Routes>
        </>
    )
}

export default App
