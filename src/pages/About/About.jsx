import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'

function About() {
  const breadcrumbs = [
    { label: 'About', href: null }
  ]

  const stats = [
    { label: 'Total Villages', value: '45' },
    { label: 'Population', value: '2,50,000+' },
    { label: 'Area', value: '685 km²' },
    { label: 'Literacy Rate', value: '78%' }
  ]

  return (
    <div>
      <PageHeader 
        title="About Shirala" 
        subtitle="पंचायत समिती शिराळा"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="prose prose-lg">
            <p>
              Shirala taluka is located in Sangli district of Maharashtra state. It is famous for its 
              Sahyadri mountain ranges and natural beautiful environment. Geographically, Shirala taluka 
              is divided into three parts - western, southern, and northern regions.
            </p>
            <p>
              The southern region has become fertile due to the Warna and Morana rivers. The western 
              and northern parts are hilly, and most people migrate to Mumbai for employment. The taluka 
              has sugar factories including Ninai Sahakari Sugar Factory at Karungali and Vishwas 
              Sahakari Sugar Factory at Chikhali.
            </p>
            <p>
              The main occupation in the taluka is agriculture with rice and sugarcane being the primary 
              crops, along with dairy farming. The taluka also houses Asia's first maize processing 
              cooperative factory, Yashwant Glucose Sahakari Factory at Padali.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <div className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* History */}
        <Card className="mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Historical Significance</h2>
            <div className="prose">
              <p>
                During the pre-independence period, Shirala has a recorded history of forest satyagraha 
                at Bilashi. A branch of Kranti Singh Nana Patil's parallel government operated in the taluka. 
                The western region served as hiding places for freedom fighters during the independence struggle.
              </p>
              <p>
                Devotees from across the country visit Shirala on Nag Panchami to worship the living cobra. 
                The taluka is also home to the magnificent temple of Gorakhnath, one of the Navnaths. 
                Every 12 years, after the Kumbh Mela, all saints reside here for 15 days.
              </p>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Geographic Features</h3>
              <ul className="space-y-2">
                <li>• Sahyadri mountain ranges in western region</li>
                <li>• Warna and Morana rivers</li>
                <li>• 685 sq km total area</li>
                <li>• Diverse topography from plains to hills</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Economic Activities</h3>
              <ul className="space-y-2">
                <li>• Agriculture (Rice, Sugarcane)</li>
                <li>• Sugar manufacturing</li>
                <li>• Dairy farming</li>
                <li>• Maize processing industry</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About
