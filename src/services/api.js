const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://api.psshirala.gov.in' 
  : 'http://localhost:3001'

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint)
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  }
}

export const apiService = new ApiService()

// Specific API methods
export const api = {
  // Departments
  getDepartments: () => apiService.get('/departments'),
  getDepartment: (slug) => apiService.get(`/departments/${slug}`),
  
  // Services
  getServices: () => apiService.get('/services'),
  getService: (slug) => apiService.get(`/services/${slug}`),
  
  // News
  getNews: () => apiService.get('/news'),
  getNewsArticle: (id) => apiService.get(`/news/${id}`),
  
  // Events
  getEvents: () => apiService.get('/events'),
  getEvent: (id) => apiService.get(`/events/${id}`),
  
  // Officers
  getOfficers: () => apiService.get('/officers'),
  
  // Contacts
  getContacts: () => apiService.get('/contacts'),
  
  // Grievances
  submitGrievance: (data) => apiService.post('/grievances', data),
  getGrievanceStatus: (id) => apiService.get(`/grievances/${id}`),
  
  // RTI
  submitRTI: (data) => apiService.post('/rti', data),
  
  // OTP
  sendOTP: (mobile) => apiService.post('/auth/send-otp', { mobile }),
  verifyOTP: (mobile, otp) => apiService.post('/auth/verify-otp', { mobile, otp }),
}
