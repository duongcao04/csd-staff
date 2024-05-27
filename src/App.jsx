import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '@/routes';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import GuestGuard from '@/components/layouts/guards/GuestGuard';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    if (!route.children) {
                        const Page = route.component;
                        const Layout = route.layout ?? DefaultLayout;
                        const Guard = route.guard ?? GuestGuard;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Guard>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </Guard>
                                }
                            />
                        );
                    } else {
                        return route?.children.map((routeChild, idx) => {
                            const GuardChild = routeChild.guard ?? route.guard ?? GuestGuard;
                            const PathChild = route.path + routeChild.path;
                            const PageChild = routeChild.component;
                            const LayoutChild =
                                routeChild.layout ?? DefaultLayout;
                            return (
                                <Route
                                    key={idx}
                                    path={PathChild}
                                    element={
                                        <GuardChild>
                                            <LayoutChild>
                                                <PageChild />
                                            </LayoutChild>
                                        </GuardChild>
                                    }
                                />
                            );
                        });
                    }
                })}
            </Routes>
        </Router>
    );
}

export default App;
