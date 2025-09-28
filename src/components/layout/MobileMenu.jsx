import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const navItems = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'About', path: '/about', icon: '📋' },
  { label: 'Departments', path: '/departments', icon: '🏢' },
  { label: 'Services', path: '/services', icon: '⚙️' },
  { label: 'News', path: '/news', icon: '📰' },
  { label: 'Events', path: '/events', icon: '📅' },
  { label: 'RTI', path: '/rti', icon: '📄' },
  { label: 'Officers', path: '/officers', icon: '👥' },
  { label: 'Contact', path: '/contact', icon: '📞' },
  { label: 'Grievance', path: '/grievance', icon: '📝' }
]

function MobileMenu({ isOpen, onClose }) {
  const location = useLocation()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />
      
      {/* Slide-out Menu */}
      <div className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary to-primary-dark">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PS</span>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">Menu</h2>
              <p className="text-white/80 text-sm">पंचायत समिती शिराळा</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4 space-y-2 h-full overflow-y-auto pb-20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Need Help?</p>
            <a 
              href="tel:(02345)272128" 
              className="text-primary font-medium hover:underline"
            >
              (02345) 272128
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
