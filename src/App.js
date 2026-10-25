import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technical from './pages/Technical';
import Services from './pages/Services';
import TrackRecord from './pages/TrackRecord';
import Sustainability from './pages/Sustainability';
import ContactUs from './pages/ContactUs';

const navigation = [
  { label: 'About', to: '/about' },
  { label: 'Technical', to: '/technical' },
  { label: 'Services', to: '/services' },
  { label: 'Track record', to: '/track-record' },
  { label: 'Sustainability', to: '/sustainability' },
];

function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f7f5] font-sans text-[#102d38] antialiased">
      <header className="relative z-10 flex min-h-[88px] flex-wrap items-center justify-between gap-4 bg-white px-5 py-4 sm:px-8 lg:flex-nowrap lg:px-16 2xl:px-32">
        <Link className="mr-auto inline-flex shrink-0 items-center gap-3" to="/" aria-label="AngoMarine Offshore home">
          <span className="grid h-[42px] w-[42px] place-items-center bg-[#52c5b0] font-bold tracking-tight text-[#09242f]" aria-hidden="true">AM</span>
          <span className="grid gap-0.5 font-bold leading-none tracking-[1.4px]">
            <strong className="text-xs">ANGOMARINE</strong>
            <small className="text-[9px] tracking-[3.4px]">OFFSHORE</small>
          </span>
        </Link>
        <nav className="order-3 flex w-full items-center justify-start gap-6 overflow-x-auto lg:order-none lg:w-auto lg:justify-center lg:gap-7" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `whitespace-nowrap border-b-2 py-2 text-[11px] font-semibold transition-colors hover:text-[#087d75] sm:text-xs ${isActive ? 'border-[#52c5b0] text-[#087d75]' : 'border-transparent text-[#53696f]'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 bg-[#52c5b0] px-3 text-[10px] font-bold text-[#09242f] transition hover:-translate-y-0.5 hover:bg-[#70d7c2] sm:px-4 sm:text-xs" to="/contact">
          Request a consultation <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/services" element={<Services />} />
          <Route path="/track-record" element={<TrackRecord />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="flex min-h-[155px] flex-col items-start gap-4 bg-[#09242f] px-6 py-8 text-[#ccdad8] sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:px-8 lg:px-16 2xl:px-32">
        <Link className="whitespace-nowrap font-bold tracking-wider text-white" to="/">ANGOMARINE OFFSHORE</Link>
        <p className="mb-0 max-w-[270px] text-[10px] leading-relaxed text-[#9eb2b2] sm:mr-auto">Marine and offshore solutions, built around your operational needs.</p>
        <Link className="inline-flex gap-2 whitespace-nowrap text-[11px] font-semibold text-[#52c5b0]" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        <span className="whitespace-nowrap text-[9px] text-[#81999a]">© {new Date().getFullYear()} AngoMarine Offshore</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
