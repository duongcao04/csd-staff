import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import FinancePage from '@/pages/FinancePage';
import DocumentsPage from '@/pages/DocumentsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import TeamPage from '@/pages/TeamPage';
import MarketingPage from '@/pages/MarketingPage';
import HumanResoucePage from '@/pages/HumanResoucePage';
//User
import AccountInformationPage from '@/features/User/pages/AccountInformationPage';
// Auth Page
import SignIn from '@/features/Auth/pages/SignIn.jsx';
// Layouts
import HomeLayout from '@/components/layouts/HomeLayout';
import WithHeaderLayout from '@/components/layouts/WithHeaderLayout';
//Guards
// import AuthGuard from '@/components/layouts/guards/AuthGuard';
import NotFound from '@/pages/404NotFound';
import GuestGuard from './components/layouts/guards/GuestGuard';

// Routing configuration
const routes = [
    {
        path: '/',
        component: HomePage,
        layout: HomeLayout,
        // TODO: Auth Guard
        guard: GuestGuard,
    },
    {
        path: '/auth',
        children: [
            {
                path: '/login',
                component: SignIn,
            },
            {
                path: '/account',
                component: AccountInformationPage,
                layout: WithHeaderLayout,
                // TODO: Auth Guard
                guard: GuestGuard,
            }
        ]
    },
    {
        path: '/dashboard',
        // TODO: Auth Guard
        guard: GuestGuard,
        children: [
            { path: '/activities', component: ActivitiesPage, layout: HomeLayout },
            { path: '/finance', component: FinancePage, layout: HomeLayout },
            { path: '/documents', component: DocumentsPage, layout: HomeLayout },
            { path: '/projects', component: ProjectsPage, layout: HomeLayout },
            { path: '/team', component: TeamPage, layout: HomeLayout },
            { path: '/marketing', component: MarketingPage, layout: HomeLayout },
            { path: '/human-resource', component: HumanResoucePage, layout: HomeLayout },
        ]
    },
    {
        path: '*',
        component: NotFound,
    },
]

export default routes