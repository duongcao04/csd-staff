import HomePage from '@/pages/HomePage';
// import ActivitiesPage from '@/pages/ActivitiesPage';
// import FinancePage from '@/pages/FinancePage';
// import DocumentsPage from '@/pages/DocumentsPage';
// import ProjectsPage from '@/pages/ProjectsPage';
// import TeamPage from '@/pages/TeamPage';
// import MarketingPage from '@/pages/MarketingPage';
// import HumanResoucePage from '@/pages/HumanResoucePage';
//User
// import AccountInformationPage from '@/features/User/pages/AccountInformationPage';
// Auth
import SignIn from '@/features/Auth/pages/SignIn.jsx';
// Layout
import HomeLayout from '@/components/layouts/HomeLayout';
import AuthLayout from '@/components/layouts/AuthLayout';

// Routing configuration
const routes = [
    {
        path: '/',
        component: HomePage,
        layout: HomeLayout
    },
    {
        path: '/auth',
        children: [
            {
                path: '/auth/login',
                component: SignIn,
                layout: AuthLayout
            },
        ]
    },
]

export default routes