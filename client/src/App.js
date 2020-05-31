import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter,Route,Switch,useHistory}from 'react-router-dom'
import Home from './components/screen/Home'
import Signin from './components/screen/Signin'
import Signup from './components/screen/Signup'
import Profile from './components/screen/Profile'
import CreatePost from './components/screen/CreatePost'  
import {reducer,initialState}from './reducers/userReducer'
import UserProfile from './components/screen/UserProfile'
import ContactUser from './components/screen/ContactUser'
import DrawMountain from './components/screen/DrawMountain'


const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

export const UserContext=createContext()

const Routing =()=>{
    const history = useHistory()
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem('user'))
        console.log(typeof(user),user)
        if(user){
            dispatch({type:"USER",payload:user})
            history.push("/")
        }else{
            history.push("/signup")
        }
    },[])
    return(
        <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/createpost">
                <CreatePost />
            </Route>
            <Route path="/userprofile/:userid">
                <UserProfile />
            </Route>
            <Route path="/contactuser">
                <ContactUser data={contacts}/>
            </Route>
            <Route path="/drawmountain">
                <DrawMountain />
            </Route>
        </Switch>
    )
}

function App() {
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
                <Navbar/>
                <Routing/>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
