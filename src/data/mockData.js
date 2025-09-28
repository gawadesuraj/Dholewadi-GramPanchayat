export const mockData = {
  departments: [
    {
      id: 1,
      name: 'Education Department',
      slug: 'education',
      description: 'Overseeing primary and secondary education in the taluka',
      fullDescription: 'The Education Department is responsible for the administration and oversight of all educational institutions within Shirala taluka. This includes primary schools, secondary schools, and educational programs.',
      icon: '🎓',
      head: {
        name: 'Dr. Priya Sharma',
        designation: 'Education Officer'
      },
      email: 'education@psshirala.gov.in',
      phone: '+91-2345-272129',
      office: 'Block Education Office, Shirala',
      responsibilities: [
        'Administration of government schools',
        'Implementation of educational policies',
        'Teacher training and development',
        'Student welfare programs',
        'Educational infrastructure development'
      ],
      services: [
        {
          name: 'School Admission',
          description: 'Admission process for government schools'
        },
        {
          name: 'Scholarship Programs',
          description: 'Various scholarship schemes for students'
        },
        {
          name: 'Teacher Training',
          description: 'Professional development programs for teachers'
        }
      ]
    },
    {
      id: 2,
      name: 'Health Department',
      slug: 'health',
      description: 'Public health services and medical facilities management',
      fullDescription: 'The Health Department manages all public health services, primary health centers, and health programs across Shirala taluka.',
      icon: '🏥',
      head: {
        name: 'Dr. Rajesh Patil',
        designation: 'Block Medical Officer'
      },
      email: 'health@psshirala.gov.in',
      phone: '+91-2345-272130',
      office: 'Primary Health Center, Shirala'
    },
    {
      id: 3,
      name: 'Rural Development',
      slug: 'rural-development',
      description: 'Infrastructure development and rural welfare programs',
      fullDescription: 'Rural Development Department focuses on improving infrastructure, implementing welfare schemes, and promoting rural development initiatives.',
      icon: '🏗️',
      head: {
        name: 'Eng. Sunil Kale',
        designation: 'Block Development Officer'
      },
      email: 'development@psshirala.gov.in',
      phone: '+91-2345-272131',
      office: 'BDO Office, Shirala'
    },
    {
      id: 4,
      name: 'Agriculture Department',
      slug: 'agriculture',
      description: 'Agricultural extension services and farmer support',
      fullDescription: 'The Agriculture Department provides technical support, extension services, and implements various schemes for the welfare of farmers.',
      icon: '🌾',
      head: {
        name: 'Agri. Officer Madhav Jadhav',
        designation: 'Agriculture Extension Officer'
      },
      email: 'agriculture@psshirala.gov.in',
      phone: '+91-2345-272132',
      office: 'Agriculture Office, Shirala'
    },
    {
      id: 5,
      name: 'Revenue Department',
      slug: 'revenue',
      description: 'Land records, revenue collection, and documentation',
      fullDescription: 'Revenue Department handles land records, property registration, revenue collection, and various certificates related to land and property.',
      icon: '📋',
      head: {
        name: 'Shri Prakash Pol',
        designation: 'Tehsildar'
      },
      email: 'revenue@psshirala.gov.in',
      phone: '+91-2345-272133',
      office: 'Tehsil Office, Shirala'
    },
    {
      id: 6,
      name: 'Water Resources',
      slug: 'water-resources',
      description: 'Water supply, irrigation, and water conservation',
      fullDescription: 'Water Resources Department manages water supply schemes, irrigation projects, and water conservation programs across the taluka.',
      icon: '💧',
      head: {
        name: 'Eng. Santosh More',
        designation: 'Executive Engineer'
      },
      email: 'water@psshirala.gov.in',
      phone: '+91-2345-272134',
      office: 'Water Resources Office, Shirala'
    }
  ],

  services: [
    {
      id: 1,
      name: 'Birth Certificate',
      slug: 'birth-certificate',
      category: 'certificates',
      description: 'Official birth certificate for legal purposes',
      fullDescription: 'Birth certificate is an official document that records the birth of a child. It is required for school admissions, passport applications, and other official purposes.',
      processingTime: '7-10 working days',
      fee: '₹50',
      isOnline: true,
      eligibility: [
        'Birth must be registered within 21 days',
        'Parents must be residents of Shirala taluka',
        'Required documents must be submitted'
      ],
      documents: [
        {
          name: 'Birth Registration Form',
          description: 'Duly filled application form'
        },
        {
          name: 'Hospital/Medical Certificate',
          description: 'Certificate from hospital or medical practitioner'
        },
        {
          name: 'Parents ID Proof',
          description: 'Aadhaar card, voter ID, or passport of parents'
        }
      ],
      process: [
        {
          title: 'Submit Application',
          description: 'Fill the form and submit required documents'
        },
        {
          title: 'Verification',
          description: 'Documents will be verified by the concerned officer'
        },
        {
          title: 'Payment',
          description: 'Pay the prescribed fee online or at counter'
        },
        {
          title: 'Certificate Issuance',
          description: 'Certificate will be issued after successful verification'
        }
      ]
    },
    {
      id: 2,
      name: 'Death Certificate',
      slug: 'death-certificate',
      category: 'certificates',
      description: 'Official death certificate for legal and insurance purposes',
      fullDescription: 'Death certificate is an official document certifying the death of a person. Required for insurance claims, property transfer, and other legal matters.',
      processingTime: '3-5 working days',
      fee: '₹50',
      isOnline: true
    },
    {
      id: 3,
      name: 'Income Certificate',
      slug: 'income-certificate',
      category: 'certificates',
      description: 'Certificate stating annual family income',
      fullDescription: 'Income certificate is required for various government schemes, educational concessions, and job applications.',
      processingTime: '15 working days',
      fee: '₹30',
      isOnline: true
    },
    {
      id: 4,
      name: 'Property Tax Payment',
      slug: 'property-tax',
      category: 'tax',
      description: 'Online property tax payment facility',
      fullDescription: 'Pay your annual property tax online through our secure payment gateway.',
      processingTime: 'Immediate',
      fee: 'As per property assessment',
      isOnline: true
    },
    {
      id: 5,
      name: 'Water Connection',
      slug: 'water-connection',
      category: 'utilities',
      description: 'Apply for new water connection',
      fullDescription: 'Apply for a new domestic or commercial water connection for your property.',
      processingTime: '30 working days',
      fee: '₹2,500 (connection charges)',
      isOnline: false
    },
    {
      id: 6,
      name: 'Trade License',
      slug: 'trade-license',
      category: 'licenses',
      description: 'License for starting a business or trade',
      fullDescription: 'Required license for operating any business or trade within the taluka jurisdiction.',
      processingTime: '30 working days',
      fee: '₹1,000 - ₹5,000 (based on business type)',
      isOnline: true
    }
  ],

  officers: [
    {
      id: 1,
      name: 'श्रीम. तृप्ती अंकुश धोडमिसे (भा.प्र.से)',
      designation: 'मुख्य कार्यकारी अधिकारी, जिल्हा परिषद, सांगली',
      department: 'Administration',
      phone: '+91-233-2654321',
      email: 'ceo.sangli@maharashtra.gov.in'
    },
    {
      id: 2,
      name: 'श्री. मनोज जाधव',
      designation: 'अति. मुख्य कार्यकारी अधिकारी, जिल्हा परिषद, सांगली',
      department: 'Administration',
      phone: '+91-233-2654322',
      email: 'aceo.sangli@maharashtra.gov.in'
    },
    {
      id: 3,
      name: 'श्रीम. नंदिनी घाणेकर',
      designation: 'प्रकल्प संचालक, जि.ग्रा.वि.यं., जिल्हा परिषद, सांगली',
      department: 'Rural Development',
      phone: '+91-233-2654323',
      email: 'drda.sangli@maharashtra.gov.in'
    },
    {
      id: 4,
      name: 'श्री. प्रकाश लालासाहेब पोळ',
      designation: 'गट विकास अधिकारी (गट-अ), पंचायत समिती शिराळा',
      department: 'Block Development',
      phone: '+91-2345-272128',
      email: 'bdo.shirala@maharashtra.gov.in'
    },
    {
      id: 5,
      name: 'श्री. अजिंक्य महादेव कुंभार',
      designation: 'सहा. गट विकास अधिकारी (गट-ब), पंचायत समिती शिराळा',
      department: 'Block Development',
      phone: '+91-2345-272129',
      email: 'abdo.shirala@maharashtra.gov.in'
    }
  ],

  news: [
    {
      id: 1,
      title: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान - शिराळा पंचायत समितीला राज्यस्तरीय सन्मान',
      excerpt: 'शिराळा पंचायत समितीला मुख्यमंत्री समृद्ध पंचायतराज अभियानात उत्कृष्ट कामगिरीसाठी राज्यस्तरीय सन्मान प्राप्त झाला आहे.',
      content: 'शिराळा पंचायत समितीला मुख्यमंत्री समृद्ध पंचायतराज अभियानात उत्कृष्ट कामगिरीसाठी राज्यस्तरीय सन्मान प्राप्त झाला आहे. या अभियानात ग्रामीण विकास, आरोग्य सेवा, शिक्षण आणि पायाभूत सुविधांच्या विकासात उत्कृष्ट कामगिरी केल्याबद्दल हा सन्मान मिळाला आहे.',
      date: '2025-04-15',
      category: 'Achievement',
      author: 'प्रशासन विभाग'
    },
    {
      id: 2,
      title: 'Digital Governance Initiative Launched',
      excerpt: 'New online services and digital platforms introduced for citizen convenience.',
      content: 'Panchayat Samiti Shirala has launched a comprehensive digital governance initiative to provide online services to citizens. The new platform includes online applications for certificates, bill payments, and grievance redressal system.',
      date: '2025-04-10',
      category: 'Technology',
      author: 'IT Department'
    },
    {
      id: 3,
      title: 'Infrastructure Development Projects Approved',
      excerpt: 'Multiple road and water supply projects sanctioned for rural areas.',
      content: 'Several infrastructure development projects including road construction, water supply schemes, and electrification projects have been approved for villages in Shirala taluka. The total project cost is estimated at ₹50 crores.',
      date: '2025-04-05',
      category: 'Development',
      author: 'Rural Development'
    }
  ],

  events: [
    {
      id: 1,
      title: 'ग्राम सभा बैठक',
      description: 'मासिक ग्राम सभा बैठक - विकास कामांचा आढावा',
      content: 'सर्व ग्राम पंचायतीच्या मासिक ग्राम सभा बैठकीत गेल्या महिन्यातील विकास कामांचा आढावा घेतला जाईल. नागरिकांनी सहभागी व्हावे.',
      date: '2025-05-15',
      time: '10:00 AM',
      venue: 'ग्राम पंचायत कार्यालय',
      category: 'Meeting'
    },
    {
      id: 2,
      title: 'Health Camp',
      description: 'Free health checkup and vaccination drive',
      content: 'A free health camp will be organized in collaboration with the Health Department. Free health checkups, vaccinations, and medicines will be provided to all residents.',
      date: '2025-05-20',
      time: '9:00 AM - 4:00 PM',
      venue: 'Primary Health Center, Shirala',
      category: 'Health'
    },
    {
      id: 3,
      title: 'Farmer Training Program',
      description: 'Modern farming techniques and government schemes awareness',
      content: 'A training program for farmers on modern agricultural practices, use of technology in farming, and information about various government schemes for farmers.',
      date: '2025-05-25',
      time: '2:00 PM',
      venue: 'Agriculture Office, Shirala',
      category: 'Agriculture'
    }
  ],

  contacts: [
    {
      department: 'Block Development Office',
      officer: 'श्री. प्रकाश लालासाहेब पोळ',
      designation: 'गट विकास अधिकारी',
      phone: '+91-2345-272128',
      email: 'bdo.shirala@maharashtra.gov.in'
    },
    {
      department: 'Education Department',
      officer: 'शिक्षण अधिकारी',
      phone: '+91-2345-272129',
      email: 'education.shirala@maharashtra.gov.in'
    },
    {
      department: 'Health Department',
      officer: 'वैद्यकीय अधिकारी',
      phone: '+91-2345-272130',
      email: 'health.shirala@maharashtra.gov.in'
    },
    {
      department: 'Revenue Department',
      officer: 'तहसीलदार',
      phone: '+91-2345-272131',
      email: 'tehsildar.shirala@maharashtra.gov.in'
    }
  ]
}
