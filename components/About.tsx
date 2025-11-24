'use client'

import { FaBrain, FaRobot, FaMicrochip, FaBuilding } from 'react-icons/fa'

export default function About() {
  const highlights = [
    {
      icon: <FaBrain className="text-4xl text-purple-600" />,
      title: 'AI & Deep Learning',
      description: 'Advanced neural networks and machine learning solutions',
    },
    {
      icon: <FaRobot className="text-4xl text-indigo-600" />,
      title: 'Computer Vision',
      description: 'YOLO, CNN, facial recognition, and ADAS systems',
    },
    {
      icon: <FaMicrochip className="text-4xl text-pink-600" />,
      title: 'Embedded Systems',
      description: 'Motor control, BLDC, FOC on STM32 and C2000',
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: 'Construction Tech',
      description: 'Project management, bids, and estimation solutions',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">NexVision Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a cutting-edge technology solutions provider specializing in AI, Computer Vision, 
            Embedded Systems, and Construction Management. Our mission is to transform complex challenges 
            into intelligent, scalable solutions.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600">AI Models Deployed</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-600">Embedded Systems</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}


