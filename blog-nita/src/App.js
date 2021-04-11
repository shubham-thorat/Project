import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutUs from './containers/About';
import RecentPost from './containers/RecentPost';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post" exact component={RecentPost} />
        <Route path="/post/:postid" exact component={Post} />
        <Route path="/about-us" component={AboutUs}/>
      </Router>
      <footer> Created with <img src={require('./Images/heart1.jpg').default} style={{width:"14px" ,textAlign:"center"}}/> by Shubham Thorat</footer>
    </div>
  );
}

export default App;
