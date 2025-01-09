import {
  About,
  Coe,
  CoursePage,
  Courses,
  Enterprise,
  Home,
  NotFound,
  ResearchPage,
  School,
  SchoolPage
} from '@/pages';
import {Route, Routes} from 'react-router';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/live-learning-labs"
        element={<Enterprise type="live-learning-labs" />}
      />
      <Route
        path="/live-learning-labs/:id"
        element={<Enterprise type="live-learning-labs" />}
      />
      <Route
        path="/incubation-switches"
        element={<Enterprise type="incubation-switches" />}
      />
      <Route
        path="/incubation-switches/:id"
        element={<Enterprise type="incubation-switches" />}
      />
      <Route path="/school" element={<School />} />
      <Route path="/school/:id" element={<SchoolPage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/research/:id" element={<ResearchPage />} />
      <Route path="/coe" element={<Coe />} />
      <Route path="/coe/:id" element={<Coe />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
