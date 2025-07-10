import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/home/Home'))

const routes = [
  { path: '/dashboard', name: 'داشبورد', element: Dashboard, private: true },
  { path: '/home', name: 'خانه', element: Home},

]

export default routes
