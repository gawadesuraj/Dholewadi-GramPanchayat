import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'

function Hero() {
  // Village images using random API (replace with actual village photos later)
  const villageImages = [
    {
      url: 'https://picsum.photos/1920/1080?random=1',
      caption: 'Shirala Village Landscape',
      description: 'Beautiful rural landscapes of Shirala taluka'
    },
    {
      url: 'https://picsum.photos/1920/1080?random=2',
      caption: 'Agricultural Fields',
      description: 'Fertile farming lands with rice and sugarcane crops'
    },
    {
      url: 'https://picsum.photos/1920/1080?random=3',
      caption: 'Sahyadri Mountain Ranges',
      description: 'Scenic mountain views in western Shirala'
    },
    {
      url: 'https://picsum.photos/1920/1080?random=4',
      caption: 'Traditional Village Life',
      description: 'Community gatherings and rural lifestyle'
    },
    {
      url: 'https://picsum.photos/1920/1080?random=5',
      caption: 'Water Resources',
      description: 'Rivers Warna and Morana flowing through the region'
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && villageImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === villageImages.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [currentImageIndex, isPlaying, villageImages.length])

  const stats = [
    { label: 'Villages', value: '45+', icon: '🏘️' },
    { label: 'Population', value: '2.5L+', icon: '👥' },
    { label: 'Services', value: '20+', icon: '⚙️' },
    { label: 'Success Rate', value: '95%', icon: '✅' }
  ]

  const quickServices = [
    { title: 'Birth Certificate', icon: '👶', link: '/services/birth-certificate' },
    { title: 'Income Certificate', icon: '💰', link: '/services/income-certificate' },
    { title: 'Property Tax', icon: '🏠', link: '/services/property-tax' },
    { title: 'Water Connection', icon: '💧', link: '/services/water-connection' }
  ]

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? villageImages.length - 1 : currentImageIndex - 1)
  }

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === villageImages.length - 1 ? 0 : currentImageIndex + 1)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-Width Background Image Slider */}
      <div className="absolute inset-0">
        {villageImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt || `Village scene ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Government Badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-sm">
                  Government of Maharashtra • Sangli District
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Welcome to<br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Panchayat Samiti
                </span><br />
                <span className="text-primary-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Shirala</span>
              </h1>
              
              {/* Current Image Caption */}
              <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <h3 className="text-xl font-semibold mb-1">
                  {villageImages[currentImageIndex].caption}
                </h3>
                <p className="text-white/90">
                  {villageImages[currentImageIndex].description}
                </p>
              </div>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Your gateway to <span className="text-yellow-400 font-semibold">digital governance</span>. 
                Access government services, stay informed, and connect with your local administration.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/services">
                  <Button 
                    size="lg" 
                    variant="glass"
                    leftIcon="🚀"
                    className="min-w-[200px] text-lg"
                  >
                    Explore Services
                  </Button>
                </Link>
                <Link to="/grievance">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    leftIcon="📝"
                    className="min-w-[200px] border-white text-white hover:bg-white hover:text-gray-900 text-lg"
                  >
                    Submit Grievance
                  </Button>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Quick Services Card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">Quick Services</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {quickServices.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.link}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-white/10 hover:border-white/30"
                    >
                      <div className="text-center">
                        <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </span>
                        <span className="text-white font-medium text-sm">{service.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link to="/services">
                    <Button variant="glass" size="sm" className="w-full">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToPrevious}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={goToNext}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {villageImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Quick Services - Shown only on mobile */}
      <div className="absolute bottom-20 left-4 right-4 lg:hidden z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <h4 className="text-white font-semibold mb-3 text-center">Quick Services</h4>
          <div className="grid grid-cols-2 gap-3">
            {quickServices.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-center border border-white/10"
              >
                <span className="text-2xl mb-1 block">{service.icon}</span>
                <span className="text-white text-xs font-medium">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
