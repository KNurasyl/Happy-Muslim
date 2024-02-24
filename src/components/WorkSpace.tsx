import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/Main';
import { MainPreloader } from './Shared/Preloader/MainPreloader';


export const WorkSpace = () => {
    return (
        <Routes>
            <Route path={"/Happy-Muslim/*"}>
                <Route index element={<MainPreloader/>}/>
                <Route path="/main" element={<Main/>}/>
            </Route>
        </Routes>
    );
};