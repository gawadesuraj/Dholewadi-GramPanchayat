/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import SearchBar from '../../components/common/SearchBar'
import { mockData } from '../../data/mockData'

function News() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'achievement', 'technology', 'development', 'health', 'education']

  const filteredNews = mockData.news.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                          news.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const breadcrumbs = [
    { label: 'News', href: null }
  ]

  return (
    <div>
      <PageHeader 
        title="News & Updates" 
        subtitle="Latest news, announcements and updates from Panchayat Samiti Shirala"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <SearchBar 
              onSearch={setSearchQuery}
              placeholder="Search news..."
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Categories</option>
                <option value="achievement">Achievements</option>
                <option value="technology">Technology</option>
                <option value="development">Development</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid gap-6">
            {filteredNews.map((news) => (
              <Card key={news.id} hover>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full capitalize">
                          {news.category}
                        </span>
                        <span className="text-gray-500 text-sm">{news.date}</span>
                        {news.author && (
                          <span className="text-gray-500 text-sm">• {news.author}</span>
                        )}
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                        <Link to={`/news/${news.id}`}>
                          {news.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      
                      <Link 
                        to={`/news/${news.id}`}
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                      >
                        Read Full Story
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Placeholder for news image */}
                    <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-sm">News Image</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default News
