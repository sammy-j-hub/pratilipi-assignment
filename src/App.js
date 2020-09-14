import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Component/layout/Navbar';
import DashBoard from './Component/dashboard/dashboard';
import StoryDetails from './Component/storypage/storydetails'
import SignIn from './Component/auth/SignIn';
import SignUp from './Component/auth/SignUp';
import CreateStory from './Component/storypage/createstory';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component ={DashBoard}/>
            <Route path='/story/:id' component ={StoryDetails}/>
            <Route path='/signin' component ={SignIn}/>
            <Route path='/signup' component ={SignUp}/>
            <Route path='/create' component ={CreateStory}/>
          </Switch>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
