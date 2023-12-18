import Header from "./components/Header";
import React, { useState } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/PageNotFound";
import Excavations from "./components/pages/Excavations";
import OutdoorKitchens from "./components/pages/OutdoorKitchens";
import Footer from "./components/Footer";
import Submission from "./components/pages/Submission";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css'
import history from "./history";
import Reviews from "./components/pages/Reviews";


const App = () => {
    const [loader, loaderToggle] = useState(false);

    return (
            <main className="ui form" id="main" >
                    <div className={`${loader? 'ui active dimmer': ''}`}>
                        <div style={{position:'fixed'}} className={`${loader? 'ui text loader': ''}`}>{loader? <h3>Loading</h3>: ''}
                        </div>
                    </div>
            <BrowserRouter history={history}>
                <Header />
                    <div>
                    <Routes>
                        <Route exact path='/' exact element={<Home/>}/>
                        <Route exact path='/about' exact element={<About/>}/>
                        <Route exact path='/contact' exact element={<Contact loaderToggle={loaderToggle}/>}/>
                        <Route exact path='/excavations' exact element={<Excavations/>}/>
                        <Route exact path='/Kitchens' exact element={<OutdoorKitchens/>}/>
                        <Route exact path='/*' exact element={<NotFound/>}/>
                        <Route exact path='/submission' exact element={<Submission/>}/>
                        <Route exact path='/*' exact element={<NotFound/>}/>
                        <Route exact path='/reviews*' exact element={<Reviews/>}/>

                    </Routes>
               
                <div>
                <Footer/>
                </div>
                </div>
            </BrowserRouter>
        </main>
    );
};

export default App;