import CookieConsent from "react-cookie-consent";
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Crosmoshooter from './pages/Crosmoshooter/Crosmoshooter.jsx';
import Collection from './pages/Collection/Collection.jsx';
import Merchandise from './pages/Merchandise/Merchandise.jsx';
import Staking from './pages/Staking/Staking.jsx';
import Roadmap from './pages/Roadmap/Roadmap.jsx';
import Team from './pages/Team/Team.jsx';
import Partners from './pages/Partners/Partners.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <CookieConsent 
        location="bottom"
        buttonText="ACCEPT"
        cookieName="crosmonautsCookie"
        style={{background: '#280E8A', maxWidth: "1440px", paddingLeft: '10px'}}
        buttonStyle={{ color: '#fff', background: "radial-gradient(68.1% 536.43% at 45.98% 26.29%, #1427B3 23.44%, #280E8A 100%)" }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Header />
      <Home  />
      <div className="content-body">
        <About  />
        <Crosmoshooter  />
        <Collection  />
        <Merchandise />
        <Staking />
        <Roadmap  />
        <Team />
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
