'use client'

import { FaShoppingCart, FaFaceSmile, FaCar, FaRobot, FaBolt, FaBuilding, FaChartLine } from 'react-icons/fa6'

export default function Projects() {
  const projects = [
    {
      title: 'Shoplifting Detection System',
      category: 'Computer Vision & AI',
      description: 'Advanced 3D CNN model for real-time shoplifting detection in retail environments. Achieves 95% accuracy with minimal false positives.',
      icon: <FaShoppingCart className="text-4xl text-purple-600" />,
      technologies: ['Python', 'TensorFlow', '3D CNN', 'YOLO', 'OpenCV'],
      results: ['95% Accuracy', 'Real-time Processing', 'Multi-camera Support'],
    },
    {
      title: 'Facial Recognition Pipeline',
      category: 'Computer Vision & Deep Learning',
      description: 'End-to-end facial recognition and detection system with liveness detection and anti-spoofing capabilities.',
      icon: <FaFaceSmile className="text-4xl text-indigo-600" />,
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Face Recognition'],
      results: ['99% Recognition', 'Liveness Detection', 'Sub-second Response'],
    },
    {
      title: 'ADAS - Advanced Driver Assistance',
      category: 'Computer Vision & Automotive',
      description: 'Front car detection system with real-time distance and speed measurement for automotive safety applications.',
      icon: <FaCar className="text-4xl text-blue-600" />,
      technologies: ['YOLO', 'OpenCV', 'Python', 'Monocular Vision'],
      results: ['Real-time Detection', 'Distance Estimation', 'Speed Calculation'],
    },
    {
      title: 'LiDAR Point Cloud Processing',
      category: 'Robotics & Computer Vision',
      description: 'Point cloud fusion and tracking system with ROS2 integration and RVIZ visualization for autonomous navigation.',
      icon: <FaRobot className="text-4xl text-green-600" />,
      technologies: ['ROS2', 'Python', 'C++', 'PCL', 'RVIZ'],
      results: ['Real-time Fusion', '3D Tracking', 'Sensor Integration'],
    },
    {
      title: 'BLDC Motor Control System',
      category: 'Embedded Systems',
      description: '3 KW BLDC motor control with 6-step commutation and Field-Oriented Control (FOC) implementation on STM32 and C2000.',
      icon: <FaBolt className="text-4xl text-yellow-600" />,
      technologies: ['C/C++', 'MATLAB Simulink', 'STM32', 'C2000', 'FOC'],
      results: ['Efficient Control', 'Smooth Operation', 'High Performance'],
    },
    {
      title: 'Construction Management System',
      category: 'Construction & Project Management',
      description: 'Comprehensive system for quotation management, bid filling, quantity estimation, and supplier coordination.',
      icon: <FaBuilding className="text-4xl text-orange-600" />,
      technologies: ['Project Management', 'Estimation', 'Documentation'],
      results: ['Streamlined Workflow', 'Cost Optimization', 'Efficient Communication'],
    },
    {
      title: 'Project ROI Management Software',
      category: 'Software Development & Analytics',
      description: 'Advanced project management software with ROI analysis, resource allocation, and performance tracking capabilities.',
      icon: <FaChartLine className="text-4xl text-pink-600" />,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Analytics'],
      results: ['ROI Tracking', 'Resource Optimization', 'Data-driven Insights'],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions across AI, Computer Vision, Embedded Systems, and Construction Management
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                {project.icon}
                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  )
}


