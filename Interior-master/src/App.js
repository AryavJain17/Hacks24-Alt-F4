import './App.css';
import Contact  from './contact/contact';
import Navbar from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { PricingPlan } from './pricingPlan/pricingPlan';
import { Faq } from './faq/faq';
import { ProjectDetails } from './projectDetails/projectDetails';

import { TeamSingle } from './teamSingle/teamSingle';
import { About } from './about/about';
import { NotFound } from './404/404';
import { BlogDetails } from './blogDetails/blogDetails';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';

import Signup from './signup/Signup';
import Login from './Login/Login';
import { Logout } from './Logout/Logout';
import Team from './team/team';
import Ai from './Ai/Ai';
import Homepage from './pages/Home/Home'
import Room from './pages/Room/Room'

function App() {

  return (
    <BrowserRouter>
    <SmoothScroll />
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/restricted-page' element={<RestrictedPage/>}/>
        <Route path='/pricing' element={<PricingPlan/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/project-details' element={<ProjectDetails/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/team-single' element={<TeamSingle/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/error' element={<NotFound/>}/>
        <Route path='/blog-details' element={<BlogDetails/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service-single' element={<ServiceSingle/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/terms' element={<Terms />}/>
        <Route path='/cookies-policy' element={<Cookies />}/>
        <Route path='/privacy-policy' element={<Privacy />}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='/design' element={<Ai/>}/>
        <Route path='/video' element={<Homepage/>} />
<Route path='/room/:roomId' element={<Room/>} />



      

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
