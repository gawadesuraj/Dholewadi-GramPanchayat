import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Shirala</h3>
            <p className="text-gray-300 text-sm">
              Shirala taluka is known for its Sahyadri mountain ranges and natural beauty. 
              It is famous for its rivers Warna and Morana making the southern region fertile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white text-sm transition">Services</Link>
              <Link to="/events" className="block text-gray-300 hover:text-white text-sm transition">Events</Link>
              <Link to="/rti" className="block text-gray-300 hover:text-white text-sm transition">RTI</Link>
              <Link to="/officers" className="block text-gray-300 hover:text-white text-sm transition">Officers</Link>
            </div>
          </div>

          {/* Government */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government</h3>
            <div className="space-y-2">
              <Link to="/departments" className="block text-gray-300 hover:text-white text-sm transition">Departments</Link>
              <Link to="/grievance" className="block text-gray-300 hover:text-white text-sm transition">Grievance</Link>
              <a href="https://maharashtra.gov.in" className="block text-gray-300 hover:text-white text-sm transition" target="_blank" rel="noopener noreferrer">Maharashtra Govt</a>
              <a href="https://sangli.nic.in" className="block text-gray-300 hover:text-white text-sm transition" target="_blank" rel="noopener noreferrer">Sangli District</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Ta. Shirala, Dist. Sangli</p>
              <p>Maharashtra 415 408</p>
              <p>Phone: (02345) 272128</p>
              <p>Email: bdoshirala@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm">
              © {currentYear} Panchayat Samiti Shirala. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition">Privacy Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-white text-sm transition">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
