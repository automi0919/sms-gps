import SendLocation from '../components/Send/SendLocation'
import DisplayLocation from '../components/DisplayLocation/DisplayLocation'
import Pending from '../components/Pending/Pending';
import Home from '../components/Home/Home';
import SendMyLocation from '../components/Share/SendMyLocation';
import ContactUs from '../components/ContactUs/ContactUs';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import About from '../components/About/About';
import Donate from '../components/Donate/Donate';
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/request',
    component: SendLocation,
  },
  {
    path: '/pending',
    component: Pending,
  },
  {
    path: '/send_my_location',
    component: SendMyLocation,
  },
  {
    path: '/display',
    component: DisplayLocation,
  },
  {
    path: '/contact-us',
    component: ContactUs
  },
  {
    path: '/privacy',
    component: PrivacyPolicy
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/donate',
    component: Donate
  },
  {
    path: '/'
  }
]

export default routes
