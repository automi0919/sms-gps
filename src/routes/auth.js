import Question1 from '../pages/Question1'
import Question2 from '../pages/Question2'
import Question3 from '../pages/Question3'
import Question6 from '../pages/Question6'

const routes = [
  {
    path: '/',
    component: Question1,
    exact: true,
  },
  {
    path: '/question2',
    component: Question2,
  }, 
  {
    path: '/question3',
    component: Question3,
  },
  {
    path: '/question6',
    component: Question6,
  },
]

export default routes
