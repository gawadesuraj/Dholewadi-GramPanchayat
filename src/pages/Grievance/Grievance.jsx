import { useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'
import { toast } from 'react-toastify'

function Grievance() {
  const [showOTPModal, setShowOTPModal] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const breadcrumbs = [
    { label: 'Grievance', href: null }
  ]

  const handleSendOTP = () => {
    if (!mobile || mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number')
      return
    }
    
    setIsOTPSent(true)
    toast.success('OTP sent to your mobile number')
    setTimeout(() => {
      toast.info('Your OTP is: 123456 (Demo)')
    }, 1000)
  }

  const handleVerifyOTP = () => {
    if (otp === '123456') {
      setIsVerified(true)
      setShowOTPModal(false)
      toast.success('Mobile number verified successfully!')
    } else {
      toast.error('Invalid OTP. Please try again.')
    }
  }

  const grievanceTypes = [
    'Water Supply Issues',
    'Road and Infrastructure',
    'Electricity Problems',
    'Healthcare Services',
    'Education Related',
    'Sanitation Issues',
    'Land Records',
    'Certificate Issues',
    'Tax and Revenue',
    'Others'
  ]

  return (
    <div>
      <PageHeader 
        title="Public Grievance System" 
        subtitle="Submit your complaints and track their status online"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Submit New Grievance</h2>
                
                {!isVerified ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Mobile Verification Required</h3>
                    <p className="text-gray-600 mb-6">Please verify your mobile number to submit a grievance</p>
                    <Button onClick={() => setShowOTPModal(true)}>
                      Verify Mobile Number
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input 
                        label="Full Name"
                        placeholder="Enter your full name"
                        required
                      />
                      <Input 
                        label="Mobile Number"
                        value={mobile}
                        disabled
                      />
                    </div>
                    
                    <Input 
                      label="Email Address"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                    
                    <Input 
                      label="Address"
                      placeholder="Your complete address"
                      required
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Grievance Type *
                      </label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select grievance type</option>
                        {grievanceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input 
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Brief subject of your grievance"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Detailed Description *
                      </label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        rows="5"
                        placeholder="Provide detailed description of your grievance..."
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Attach Supporting Documents
                      </label>
                      <input 
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Accepted formats: PDF, JPG, PNG, DOC (Max 5MB per file)
                      </p>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Submit Grievance
                      </Button>
                      <Button type="button" variant="outline" className="flex-1">
                        Save as Draft
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Track Grievance Status</h3>
                <div className="space-y-4">
                  <Input 
                    placeholder="Enter Grievance ID"
                  />
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowStatusModal(true)}
                  >
                    Check Status
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Grievance Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-sm">Submit</div>
                      <div className="text-xs text-gray-600">File your grievance online</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-sm">Assign</div>
                      <div className="text-xs text-gray-600">Assigned to concerned department</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-sm">Action</div>
                      <div className="text-xs text-gray-600">Department takes necessary action</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-sm">Resolution</div>
                      <div className="text-xs text-gray-600">Grievance resolved and closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Helpdesk</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Helpline Number</div>
                    <div className="text-gray-600">(02345) 272128</div>
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-gray-600">grievance@psshirala.gov.in</div>
                  </div>
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-gray-600">Mon-Fri: 10 AM - 5 PM</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Important Guidelines</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Attach relevant documents as proof</li>
                  <li>• Keep your grievance ID safe for tracking</li>
                  <li>• Response time: 7-15 working days</li>
                  <li>• Anonymous complaints are not entertained</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      <Modal 
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        title="Mobile Number Verification"
      >
        <div className="space-y-4">
          {!isOTPSent ? (
            <>
              <p className="text-gray-600 text-sm mb-4">
                Enter your mobile number to receive OTP for verification
              </p>
              <Input 
                label="Mobile Number"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              <div className="flex gap-3">
                <Button onClick={handleSendOTP} className="flex-1">
                  Send OTP
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowOTPModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-600 text-sm mb-4">
                Enter the 6-digit OTP sent to {mobile}
              </p>
              <Input 
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
              />
              <div className="flex gap-3">
                <Button onClick={handleVerifyOTP} className="flex-1">
                  Verify OTP
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsOTPSent(false)
                    setOtp('')
                  }}
                  className="flex-1"
                >
                  Resend OTP
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Status Check Modal */}
      <Modal 
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        title="Grievance Status"
      >
        <div className="text-center py-6">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">Status Tracking</h3>
          <p className="text-gray-600 mb-4">
            Enter a valid Grievance ID to check the current status
          </p>
          <Button onClick={() => setShowStatusModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Grievance
