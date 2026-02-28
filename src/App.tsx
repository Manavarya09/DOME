/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Notes from './pages/Notes';
import Tasks from './pages/Tasks';
import Assignments from './pages/Assignments';
import Outfit from './pages/Outfit';
import StudyPlanner from './pages/StudyPlanner';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/finance" element={<Layout><Finance /></Layout>} />
        <Route path="/notes" element={<Layout><Notes /></Layout>} />
        <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
        <Route path="/assignments" element={<Layout><Assignments /></Layout>} />
        <Route path="/outfit" element={<Layout><Outfit /></Layout>} />
        <Route path="/study" element={<Layout><StudyPlanner /></Layout>} />
      </Routes>
    </Router>
  );
}
