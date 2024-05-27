import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from '@/routes';
import DefaultLayout from '@/components/layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    if (!route.children) {
                        const Page = route.component;
                        const Layout = route.layout ?? DefaultLayout;
                        return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                    } else {
                        route?.children.map((routeChild, idx) => {
                            const Path = routeChild.path;
                            const PageChild = routeChild.component;
                            const LayoutChild = routeChild.layout ?? DefaultLayout;
                            return <Route key={idx} path={Path} element={<LayoutChild><PageChild/></LayoutChild>}/>
                        })
                    }
                })}
            </Routes>
        </Router>
    );
}

export default App;
