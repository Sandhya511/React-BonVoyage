import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Reset from './Reset';
import Myprofile from './Myprofile';
import Destination from './Destination';
import Entertainment from './Entertainment';
import Whatsnext from './Whatsnext';
import Food from './Food';
import Accomodation from './Accomodation';
import Basicneeds from './Basicneeds';
import Transport from './Transport';
import Likedtrips from './Likedtrips';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}>Login</Route>
            <Route path='Signup' element={<Signup/>}>Signup</Route>
            <Route path='Reset' element={<Reset/>}>Reset</Route>
            <Route path='Myprofile' element={<Myprofile/>}>Myprofile</Route>
            <Route path='Destination' element={<Destination/>}>Destination</Route>
            <Route path='Whatsnext' element={<Whatsnext/>}>Whatsnext</Route>
            <Route path='Food' element={<Food/>}>Food</Route>
            <Route path='Entertainment' element={<Entertainment/>}>Entertainment</Route>
            <Route path='Accomodation' element={<Accomodation/>}>Accomodation</Route>
            <Route path='Basicneeds' element={<Basicneeds/>}>Basicneeds</Route>
            <Route path='Transport' element={<Transport/>}>Transport</Route>
            <Route path='Likedtrips' element={<Likedtrips/>}>Likedtrips</Route>
        </Routes>
    </BrowserRouter>
  )
}
