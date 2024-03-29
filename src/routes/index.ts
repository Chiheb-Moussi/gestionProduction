import { lazy } from 'react';
import Users from '../pages/Users/Users';
import AddUser from '../pages/Users/AddUser';
import Products from '../pages/Products/Products';
import AddProduct from '../pages/Products/AddProduct';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/users',
    title: 'Liste des utilisateurs',
    component: Users,
  },
  {
    path: '/users/add',
    title: 'Ajouter utilisateur',
    component: AddUser,
  },
  {
    path: '/products',
    title: 'Liste des produits',
    component: Products,
  },
  {
    path: '/products/add',
    title: 'Ajouter produit',
    component: AddProduct,
  },
];

const routes = [...coreRoutes];
export default routes;
