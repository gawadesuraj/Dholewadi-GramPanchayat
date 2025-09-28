import { useParams, Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import { mockData } from '../../data/mockData'

function NewsDetail() {
  const { id } = useParams()
  const news = mockData.news.find(n => String(n.id) === id)

  if (!news) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News article not found</h1>
          <p className="mb-6">The requested news article could not be found.</p>
          <Link to="/news" className="text-primary hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'News', href: '/news' },
    { label: news.title.substring(0, 50) + '...', href: null }
  ]

  const relatedNews = mockData.news
    .filter(n => n.id !== news.id && n.category === news.category)
    .slice(0, 3)

  return (
    <div>
      <PageHeader breadcrumbs={breadcrumbs} />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <Card>
              <div className="p-8">
                {/* Article Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary text-white text-sm px-3 py-1 rounded-full capitalize">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                    {news.author && (
                      <span className="text-gray-500 text-sm">• By {news.author}</span>
                    )}
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-4 leading-tight">
                    {news.title}
                  </h1>
                  
                  {news.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {news.excerpt}
                    </p>
                  )}
                </div>

                {/* Article Image Placeholder */}
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                  <span className="text-gray-400">News Image</span>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  {news.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Article Footer */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Published on {news.date}
                      {news.author && <span> by {news.author}</span>}
                    </div>
                    <Link 
                      to="/news"
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      ← Back to News
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related News */}
            {relatedNews.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related News</h3>
                  <div className="space-y-4">
                    {relatedNews.map((related) => (
                      <div key={related.id}>
                        <Link 
                          to={`/news/${related.id}`}
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

            {/* Categories */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Achievement', 'Technology', 'Development', 'Health', 'Education'].map((category) => (
                    <Link 
                      key={category}
                      to={`/news?category=${category.toLowerCase()}`}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </Card>

            {/* Contact for News */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">News & Media</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Media Contact</div>
                    <div className="text-gray-600">Public Relations Office</div>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">media@psshirala.gov.in</div>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">(02345) 272128</div>
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

export default NewsDetail
