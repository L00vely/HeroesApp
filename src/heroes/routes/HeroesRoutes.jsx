import { Navbar } from "../../ui/components";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeroPage, MarvelPage, SearchPage } from "../pages";
import { DCPage } from "../pages";


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}/>
                    <Route path="dc" element={<DCPage />}/>
                    
                    <Route path="search" element={<SearchPage />}/>
                    <Route path="hero" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />}/>
                </Routes>
            </div>
        </>
    )
}
