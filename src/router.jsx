import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/ui/Loading'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Departments = lazy(() => import('./pages/Departments/Departments'))
const DepartmentDetail = lazy(() => import('./pages/Departments/DepartmentDetail'))
const Services = lazy(() => import('./pages/Services/Services'))
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'))
const News = lazy(() => import('./pages/News/News'))
const NewsDetail = lazy(() => import('./pages/News/NewsDetail'))
const Events = lazy(() => import('./pages/Events/Events'))
const EventDetail = lazy(() => import('./pages/Events/EventDetail'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const RTI = lazy(() => import('./pages/RTI/RTI'))
const Officers = lazy(() => import('./pages/Officers/Officers'))
const Grievance = lazy(() => import('./pages/Grievance/Grievance'))

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:slug" element={<DepartmentDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/grievance" element={<Grievance />} />
      </Routes>
    </Suspense>
  )
}

export default Router
