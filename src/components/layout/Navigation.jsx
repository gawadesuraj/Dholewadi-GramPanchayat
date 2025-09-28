/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Departments', path: '/departments' },
  { label: 'Services', path: '/services' },
  { label: 'News', path: '/news' },
  { label: 'Events', path: '/events' },
  { label: 'RTI', path: '/rti' },
  { label: 'Officers', path: '/officers' },
  { label: 'Contact', path: '/contact' }
]

function Navigation() {
  const location = useLocation()
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <nav className="flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3 shadow-inner">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                : 'text-gray-700 hover:text-primary hover:bg-white hover:shadow-md'
            }`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.label}
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
