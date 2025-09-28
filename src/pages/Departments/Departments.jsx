import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import { mockData } from '../../data/mockData'

function Departments() {
  const breadcrumbs = [
    { label: 'Departments', href: null }
  ]

  return (
    <div>
      <PageHeader 
        title="Departments" 
        subtitle="Government departments and their services"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.departments.map((dept) => (
            <Card key={dept.id} hover>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">{dept.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    to={`/departments/${dept.slug}`}
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    View Details →
                  </Link>
                  {dept.contact && (
                    <span className="text-sm text-gray-500">
                      📞 {dept.contact}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Departments
