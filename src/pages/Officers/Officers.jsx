import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import { mockData } from '../../data/mockData'

function Officers() {
  const breadcrumbs = [
    { label: 'Officers', href: null }
  ]

  return (
    <div>
      <PageHeader 
        title="Officers Directory" 
        subtitle="मान्यवर अधिकारी"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        <div className="grid gap-6">
          {mockData.officers.map((officer) => (
            <Card key={officer.id}>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{officer.name}</h3>
                    <p className="text-gray-600 mb-2">{officer.designation}</p>
                    <p className="text-sm text-gray-500 mb-4">{officer.department}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
                    {officer.phone && (
                      <a 
                        href={`tel:${officer.phone}`}
                        className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call
                      </a>
                    )}
                    
                    {officer.email && (
                      <a 
                        href={`mailto:${officer.email}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* District Level Officers */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">District Level Officers</h2>
          <Card>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">District Collector</h4>
                  <p className="text-gray-600 text-sm mb-3">Sangli District</p>
                  <div className="space-y-1 text-sm">
                    <p>📞 +91-233-2654321</p>
                    <p>✉️ collector.sangli@maharashtra.gov.in</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Superintendent of Police</h4>
                  <p className="text-gray-600 text-sm mb-3">Sangli District</p>
                  <div className="space-y-1 text-sm">
                    <p>📞 +91-233-2654322</p>
                    <p>✉️ sp.sangli@mahapolice.gov.in</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Office Locations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Office Locations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h4 className="font-semibold mb-3">Main Office</h4>
                <div className="space-y-2 text-sm">
                  <p>Panchayat Samiti Shirala</p>
                  <p>Ta. Shirala, Dist. Sangli</p>
                  <p>Maharashtra 415 408</p>
                  <p className="mt-3">
                    <span className="font-medium">Hours:</span> Mon-Fri 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h4 className="font-semibold mb-3">Sub-Offices</h4>
                <div className="space-y-2 text-sm">
                  <p>• Tehsil Office, Shirala</p>
                  <p>• Primary Health Center, Shirala</p>
                  <p>• Agriculture Office, Shirala</p>
                  <p>• Education Office, Shirala</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Officers
