'use client'

import { motion } from 'framer-motion'
import { FaEye, FaRobot, FaCar, FaShieldAlt, FaChartLine, FaClock } from 'react-icons/fa'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import Link from 'next/link'

export default function ComputerVisionPage() {
  // Performance data
  const accuracyData = [
    { month: 'Jan', shoplifting: 92, facial: 97, adas: 89 },
    { month: 'Feb', shoplifting: 93, facial: 97, adas: 91 },
    { month: 'Mar', shoplifting: 94, facial: 98, adas: 92 },
    { month: 'Apr', shoplifting: 94, facial: 98, adas: 93 },
    { month: 'May', shoplifting: 95, facial: 99, adas: 94 },
    { month: 'Jun', shoplifting: 95, facial: 99, adas: 95 },
  ]

  const projectStats = [
    { name: 'Shoplifting Detection', value: 35, color: '#8B5CF6' },
    { name: 'Facial Recognition', value: 30, color: '#3B82F6' },
    { name: 'ADAS Systems', value: 20, color: '#10B981' },
    { name: 'LiDAR Processing', value: 15, color: '#F59E0B' },
  ]

  const performanceMetrics = [
    { metric: 'Accuracy', value: 95 },
    { metric: 'Speed', value: 88 },
    { metric: 'Reliability', value: 92 },
    { metric: 'Scalability', value: 85 },
    { metric: 'Integration', value: 90 },
  ]

  const processingSpeed = [
    { fps: '30 FPS', projects: 12 },
    { fps: '60 FPS', projects: 8 },
    { fps: '120 FPS', projects: 4 },
    { fps: 'Real-time', projects: 15 },
  ]

  const projects = [
    {
      title: 'Shoplifting Detection with 3D CNN',
      icon: <FaShieldAlt className="text-4xl text-purple-600" />,
      description: 'Advanced 3D CNN model for real-time shoplifting detection in retail environments with 95% accuracy.',
      technologies: ['Python', 'TensorFlow', '3D CNN', 'YOLO', 'OpenCV'],
      metrics: {
        accuracy: '95%',
        fps: '30 FPS',
        falsePositive: '2%',
        deployment: '15 Stores',
      },
      features: [
        'Multi-camera synchronized detection',
        'Real-time alert system',
        'Behavior pattern analysis',
        'Heat map generation',
        'Historical data analytics',
      ],
    },
    {
      title: 'Facial Recognition & Detection Pipeline',
      icon: <FaEye className="text-4xl text-blue-600" />,
      description: 'End-to-end facial recognition system with liveness detection and anti-spoofing capabilities.',
      technologies: ['PyTorch', 'OpenCV', 'Face Recognition', 'Python', 'dlib'],
      metrics: {
        accuracy: '99%',
        speed: '<1 second',
        database: '10,000+ faces',
        falseAccept: '0.01%',
      },
      features: [
        'Liveness detection',
        'Anti-spoofing measures',
        'Multi-face tracking',
        'Age and emotion detection',
        'Access control integration',
      ],
    },
    {
      title: 'ADAS - Advanced Driver Assistance',
      icon: <FaCar className="text-4xl text-green-600" />,
      description: 'Front vehicle detection with distance and speed measurement for automotive safety applications.',
      technologies: ['YOLO', 'OpenCV', 'Python', 'Computer Vision', 'Kalman Filter'],
      metrics: {
        accuracy: '94%',
        range: '0-100m',
        latency: '<50ms',
        weather: 'All conditions',
      },
      features: [
        'Distance estimation',
        'Speed calculation',
        'Lane detection',
        'Collision warning',
        'Night vision support',
      ],
    },
    {
      title: 'LiDAR Point Cloud Processing',
      icon: <FaRobot className="text-4xl text-orange-600" />,
      description: 'Point cloud fusion and tracking system with ROS2 integration for autonomous navigation.',
      technologies: ['ROS2', 'Python', 'C++', 'PCL', 'RVIZ'],
      metrics: {
        points: '1M+ points/sec',
        accuracy: '±2cm',
        range: '100m',
        fps: '10 Hz',
      },
      features: [
        'Real-time point cloud fusion',
        '3D object tracking',
        'SLAM integration',
        'Sensor calibration',
        'RVIZ visualization',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <FaEye className="text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Computer Vision & AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="gradient-text">Computer Vision</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Cutting-edge computer vision systems powered by deep learning, object detection, and real-time processing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Avg Accuracy</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600">30 FPS</div>
                <div className="text-sm text-gray-600">Real-time</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600">8+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Charts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Performance <span className="gradient-text">Metrics</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Accuracy Trend */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Model Accuracy Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[85, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="shoplifting" stroke="#8B5CF6" strokeWidth={2} name="Shoplifting" />
                  <Line type="monotone" dataKey="facial" stroke="#3B82F6" strokeWidth={2} name="Facial Recognition" />
                  <Line type="monotone" dataKey="adas" stroke="#10B981" strokeWidth={2} name="ADAS" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Project Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Project Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Performance Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">System Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={performanceMetrics}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="Performance" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Processing Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Processing Speed Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={processingSpeed}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="fps" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="projects" fill="#F59E0B" name="Number of Projects" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Detail Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      {project.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-600 mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-4">Performance Metrics</h4>
                    <div className="space-y-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg">
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="text-2xl font-bold text-purple-600">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Computer Vision Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can implement cutting-edge computer vision technology for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

