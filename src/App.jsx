import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '@/routes';
import DefaultLayout from '@/components/layouts/DefaultLayout';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((_, idx) => {
          const Page = _.component;
          const Layout = _.layout ?? DefaultLayout;
          return <Route key={idx} path={_.path} element={<Layout><Page /></Layout>} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
