import { useParams, Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { mockData } from '../../data/mockData'

function EventDetail() {
  const { id } = useParams()
  const event = mockData.events.find(e => String(e.id) === id)

  if (!event) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <p className="mb-6">The requested event could not be found.</p>
          <Link to="/events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Events', href: '/events' },
    { label: event.title.substring(0, 50) + '...', href: null }
  ]

  const isUpcoming = new Date(event.date) >= new Date()
  const relatedEvents = mockData.events
    .filter(e => e.id !== event.id && e.category === event.category)
    .slice(0, 3)

  return (
    <div>
      <PageHeader breadcrumbs={breadcrumbs} />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <div className="p-8">
                {/* Event Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-sm px-3 py-1 rounded-full capitalize ${
                      isUpcoming 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {event.category}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isUpcoming 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isUpcoming ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-4">
                    {event.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-gray-600">{event.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>

                  {event.venue && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Venue</div>
                        <div className="text-gray-600">{event.venue}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="prose max-w-none">
                  {event.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                {isUpcoming && (
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button>
                        Register for Event
                      </Button>
                      <Button variant="outline">
                        Add to Calendar
                      </Button>
                      <Button variant="ghost">
                        Share Event
                      </Button>
                    </div>
                  </div>
                )}

                {/* Back Link */}
                <div className="mt-8 pt-6 border-t">
                  <Link 
                    to="/events"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    ← Back to Events
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related Events</h3>
                  <div className="space-y-4">
                    {relatedEvents.map((related) => (
                      <div key={related.id}>
                        <Link 
                          to={`/events/${related.id}`}
                          className="block hover:text-primary transition-colors"
                        >
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500">{related.date}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Event Categories */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
                <div className="space-y-2">
                  {['Meeting', 'Health', 'Agriculture', 'Education', 'Development'].map((category) => (
                    <Link 
                      key={category}
                      to={`/events?category=${category.toLowerCase()}`}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Coordinator</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Event Management</div>
                    <div className="text-gray-600">Panchayat Samiti Office</div>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">(02345) 272128</div>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">events@psshirala.gov.in</div>
                  </div>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
