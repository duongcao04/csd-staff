import HomePage from '@/pages/HomePage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import FinancePage from '@/pages/FinancePage';
import DocumentsPage from '@/pages/DocumentsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import TeamPage from '@/pages/TeamPage';
import MarketingPage from '@/pages/MarketingPage';
import HumanResoucePage from '@/pages/HumanResoucePage';
// Auth
import LoginPage from '@/features/Auth/pages/LoginPage';
// Layout
import HomeLayout from '@/components/layouts/HomeLayout';

// Routing configuration
const routes = [
	{
		path: '/',
		component: HomePage,
		layout: HomeLayout
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/activities',
		component: ActivitiesPage,
		layout: HomeLayout
	},
	{
		path: '/finance',
		component: FinancePage,
		layout: HomeLayout
	},
	{
		path: '/documents',
		component: DocumentsPage,
		layout: HomeLayout
	},
	{
		path: '/projects',
		component: ProjectsPage,
		layout: HomeLayout
	},
	{
		path: '/team',
		component: TeamPage,
		layout: HomeLayout
	},
	{
		path: '/marketing',
		component: MarketingPage,
		layout: HomeLayout
	},
	{
		path: '/human-resource',
		component: HumanResoucePage,
		layout: HomeLayout
	},
]

export default routes