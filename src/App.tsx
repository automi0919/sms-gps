import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import guestRoutes from './routes/guest'
import './App.css'
import getSocket from './api/socket';
import { setApprovedPos } from './store/sms/actions'
import { useDispatch } from 'react-redux'
//@ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Layout from './pages/Layout';
//@ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import Splash from './components/Splash/Splash';

const App = (props: any) => {
  const routes = guestRoutes;
  const webSocket = getSocket();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    document.title = 'Safe Locate';
    webSocket.onmessage = (event: any) => {
      const msg = JSON.parse(event.data);
      console.log('Received message from server: ', msg);
      switch (msg.type) {
        case 'UPDATE_POS':
          dispatch(setApprovedPos({ approvedPos: msg.approvedPos, phonenumber: msg.phonenumber }));
          console.log('updated_pos: ', msg.approvedPos)
          history.push('/display');
          break;
        case 'SET_SOCKETID':
          if (msg.id) {
            webSocket.id = msg.id;
          }
          break;
        default:
          break;
      }
    }
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);

    return () => {
      webSocket.close();
    }
  }, []);
  const location = useLocation();
  const routingComponent = (
    <Layout>
      <Switch

        location={location}
      >
        {routes.map((route: any, index: any) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={() => <route.component {...props} handleNotification={handleNotification} routes={routes} />}
              exact={route.exact}
            />
          )
        })}
      </Switch>
    </Layout>
  )

  const handleNotification = (type: "success" | "warning" | "info" | "error", title: string, msg: string) => {
    let duration = 3000;
    switch (type) {
      case 'info':
        NotificationManager.info(msg, title, duration);
        break;
      case 'success':
        NotificationManager.success(msg, title, duration);
        break;
      case 'warning':
        NotificationManager.warning(msg, title, duration);
        break;
      case 'error':
        NotificationManager.error(msg, title, duration);
        break;
    };
  };

  return (
    <>
      {
        isSplash &&
        <Splash
          text="Project Name"
          src='/assets/images/logo.png'
          style={{ height: '100vh' }}
        />
      }

      {
        !isSplash &&
        <>
          {
            routingComponent
          }

          <NotificationContainer />
        </>
      }

    </>
  )
}

export default App
