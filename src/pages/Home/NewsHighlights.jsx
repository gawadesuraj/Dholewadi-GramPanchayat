import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'

const newsItems = [
  {
    id: 1,
    title: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान',
    excerpt: 'शिराळा पंचायत समितीला राज्यस्तरीय सन्मान प्राप्त झाला आहे.',
    date: '2025-04-15',
    category: 'Achievement'
  },
  {
    id: 2,
    title: 'Digital Governance Initiative',
    excerpt: 'New online services launched for citizen convenience.',
    date: '2025-04-10',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'Rural Development Projects',
    excerpt: 'Multiple infrastructure projects approved for villages.',
    date: '2025-04-05',
    category: 'Development'
  }
]

function NewsHighlights() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-gray-600">
            Stay informed with the latest news and announcements from Panchayat Samiti Shirala
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card key={news.id} hover>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                <Link 
                  to={`/news/${news.id}`}
                  className="text-primary hover:text-primary-dark font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/news" 
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            View All News
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsHighlights
