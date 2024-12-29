import { useState } from 'react';
import {Bell, User, ChevronDown, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';
import AboutMenu from './AboutMenu';
import NotificationPanel from './NotificationPanel';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed w-full z-50 border-b ${
        theme === 'light'
          ? 'bg-white/90 border-gray-200'
          : 'bg-black/90 border-zinc-800'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className={`flex items-center transition-colors ${
                  theme === 'light'
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
                onMouseEnter={() => setShowAboutMenu(true)}
                onMouseLeave={() => setShowAboutMenu(false)}
              >
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showAboutMenu && (
                <div
                  onMouseEnter={() => setShowAboutMenu(true)}
                  onMouseLeave={() => setShowAboutMenu(false)}
                >
                  <AboutMenu />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* <div className="w-64">
            <SearchAnchors />
          </div> */}

          <button
            onClick={toggleTheme}
            className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}
            >
              <Bell className="h-5 w-5" />
            </button>
            <NotificationPanel
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>

          <Link to="/profile">
            <User
              className={`h-5 w-5 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
