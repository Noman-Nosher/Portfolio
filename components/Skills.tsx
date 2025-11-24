'use client'

import { FaPython, FaRobot, FaMicrochip, FaTools } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiOpencv, SiRos, SiArduino, SiCplusplus } from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Artificial Intelligence & Deep Learning',
      icon: <FaPython className="text-5xl text-purple-600" />,
      skills: [
        'Deep Learning & Neural Networks',
        'TensorFlow & PyTorch',
        'Computer Vision (YOLO, CNN)',
        'Facial Recognition & Detection',
        'Agentic Workflows & LangChain',
        'Model Training & Deployment',
      ],
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
      ],
    },
    {
      title: 'Computer Vision & Robotics',
      icon: <FaRobot className="text-5xl text-indigo-600" />,
      skills: [
        'YOLO Object Detection',
        'Shoplifting Detection (3D CNN)',
        'ADAS - Front Car Detection',
        'LiDAR Point Cloud Processing',
        'Point Cloud Fusion & Tracking',
        'ROS2 & RVIZ Visualization',
      ],
      technologies: [
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'ROS2', icon: <SiRos /> },
        { name: 'Python', icon: <FaPython /> },
      ],
    },
    {
      title: 'Embedded Systems & Motor Control',
      icon: <FaMicrochip className="text-5xl text-pink-600" />,
      skills: [
        'BLDC Motor Control (3 KW)',
        '6-Step Commutation',
        'Field-Oriented Control (FOC)',
        'MATLAB Simulink Design',
        'STM32, Arduino, C2000',
        'Real-time Control Systems',
      ],
      technologies: [
        { name: 'C/C++', icon: <SiCplusplus /> },
        { name: 'Arduino', icon: <SiArduino /> },
        { name: 'STM32', icon: <FaMicrochip /> },
      ],
    },
    {
      title: 'Construction & Project Management',
      icon: <FaTools className="text-5xl text-blue-600" />,
      skills: [
        'Quotation & Bid Management',
        'Quantity Estimation',
        'Drawing Analysis',
        'Supplier Coordination',
        'Material Specification',
        'Project ROI Analysis',
      ],
      technologies: [
        { name: 'Project Management', icon: <FaTools /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills across AI, Computer Vision, Embedded Systems, and Construction Management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3 mb-6">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {category.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-2 rounded-lg"
                  >
                    <span className="text-purple-600">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


