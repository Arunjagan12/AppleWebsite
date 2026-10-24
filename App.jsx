import * as Sentry from '@sentry/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Phone from './components/iPhone/phone';
import IPad from './components/iPad/iPad';
import Mac from './components/Macbook/Mac';
import Airpods from './components/airpods/Airpods';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/ipad" element={<IPad />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/airpods" element={<Airpods />} />
      </Routes>
    </Router>
  );
}

export default Sentry.withProfiler(App);