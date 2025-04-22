import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Rss 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 bg-white border-b md:border-r border-gray-200 md:min-h-screen flex flex-col">
      <div className="p-4 md:p-6 text-center">
        <img
          src="/profile.jpg"
          alt="Zein Miftah"
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-lg md:text-xl font-bold text-[#1EAEDB] mb-2">Zein Miftah</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="flex md:block overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2 p-2 md:p-0">
          <NavItem icon={<Home size={20} />} label="HOME" to="/" active={location.pathname === '/'} />
          <NavItem icon={<User size={20} />} label="ABOUT" to="/about" active={location.pathname === '/about'} />
          <NavItem icon={<FileText size={20} />} label="RESUME" to="/resume" active={location.pathname === '/resume'} />
          <NavItem icon={<Briefcase size={20} />} label="PORTFOLIO" to="/portfolio" active={location.pathname === '/portfolio'} />
          <NavItem icon={<BookOpen size={20} />} label="BLOG" to="/blog" active={location.pathname === '/blog'} />
          <NavItem icon={<Mail size={20} />} label="CONTACT" to="/contact" active={location.pathname === '/contact'} />
        </ul>
      </nav>
      
      <footer className="hidden md:block p-6 text-center border-t border-gray-200">
        <div className="flex justify-center space-x-4 mb-4">
          <SocialIcon href="#" icon={<Facebook size={16} />} />
          <SocialIcon href="#" icon={<Twitter size={16} />} />
          <SocialIcon href="#" icon={<Youtube size={16} />} />
          <SocialIcon href="#" icon={<Linkedin size={16} />} />
          <SocialIcon href="#" icon={<Rss size={16} />} />
        </div>
        <p className="text-sm text-gray-500">
          2024 © Cosmos-Themes.<br />
          All Right Reserved.
        </p>
      </footer>
    </aside>
  );
};

const NavItem = ({ icon, label, to, active = false }) => (
  <li className="flex-shrink-0 md:flex-shrink">
    <Link
      to={to}
      className={`flex items-center px-4 py-2 md:px-6 md:py-3 text-sm rounded-lg md:rounded-none ${
        active ? 'bg-gray-100 text-[#1EAEDB]' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      <span className="whitespace-nowrap">{label}</span>
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1EAEDB] hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Sidebar;
