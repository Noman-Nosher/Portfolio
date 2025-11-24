'use client'

import { motion } from 'framer-motion'
import { FaMicrochip, FaBolt, FaCog, FaChartLine, FaMicrosoft } from 'react-icons/fa'
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import Link from 'next/link'

export default function EmbeddedSystemsPage() {
  // Motor control performance data
  const motorPerformanceData = [
    { rpm: 0, efficiency: 0, torque: 0, power: 0 },
    { rpm: 500, efficiency: 75, torque: 95, power: 45 },
    { rpm: 1000, efficiency: 85, torque: 92, power: 75 },
    { rpm: 1500, efficiency: 90, torque: 88, power: 90 },
    { rpm: 2000, efficiency: 92, torque: 85, power: 95 },
    { rpm: 2500, efficiency: 94, torque: 80, power: 98 },
    { rpm: 3000, efficiency: 95, torque: 75, power: 100 },
  ]

  const controlMethodsComparison = [
    { method: '6-Step', efficiency: 85, smoothness: 70, complexity: 60, cost: 90 },
    { method: 'FOC', efficiency: 95, smoothness: 95, complexity: 85, cost: 70 },
  ]

  const projectTimeline = [
    { phase: 'Design', weeks: 4, completed: 100 },
    { phase: 'Simulation', weeks: 3, completed: 100 },
    { phase: 'Prototype', weeks: 6, completed: 100 },
    { phase: 'Testing', weeks: 4, completed: 100 },
    { phase: 'Optimization', weeks: 3, completed: 100 },
    { phase: 'Production', weeks: 2, completed: 85 },
  ]

  const platformsExperience = [
    { platform: 'STM32', projects: 12, color: '#8B5CF6' },
    { platform: 'Arduino', projects: 8, color: '#3B82F6' },
    { platform: 'C2000', projects: 6, color: '#10B981' },
    { platform: 'ESP32', projects: 5, color: '#F59E0B' },
  ]

  const projects = [
    {
      title: 'BLDC Motor Control System (3 KW)',
      icon: <FaBolt className="text-5xl text-yellow-500" />,
      description: 'High-performance 3 KW BLDC motor control system with advanced control algorithms for industrial applications.',
      technologies: ['STM32', 'C/C++', 'MATLAB Simulink', 'FOC', 'PWM'],
      specs: {
        power: '3 KW',
        voltage: '48V DC',
        efficiency: '95%',
        rpm: '0-3000 RPM',
        control: 'Sensored/Sensorless',
      },
      features: [
        'Field-Oriented Control (FOC)',
        '6-Step Commutation',
        'Real-time current monitoring',
        'Speed regulation ±0.5%',
        'Over-current protection',
        'Thermal management',
        'Regenerative braking',
        'CAN bus communication',
      ],
    },
    {
      title: 'Field-Oriented Control (FOC) Implementation',
      icon: <FaCog className="text-5xl text-purple-500" />,
      description: 'Advanced FOC algorithm implementation on STM32 and C2000 controllers for smooth and efficient motor operation.',
      technologies: ['C2000', 'STM32', 'MATLAB Simulink', 'DSP', 'Control Theory'],
      specs: {
        loopTime: '10 μs',
        resolution: '16-bit',
        algorithm: 'Space Vector PWM',
        sensors: 'Hall/Encoder',
        torqueRipple: '<2%',
      },
      features: [
        'Clarke & Park transforms',
        'PI current controllers',
        'Space vector modulation',
        'Flux weakening',
        'MTPA operation',
        'Position estimation',
        'Auto-tuning capabilities',
        'Real-time debugging',
      ],
    },
    {
      title: '6-Step Commutation Controller',
      icon: <FaMicrochip className="text-5xl text-blue-500" />,
      description: 'Efficient 6-step commutation implementation for cost-effective motor control solutions.',
      technologies: ['Arduino', 'STM32', 'C/C++', 'Hardware PWM', 'Interrupts'],
      specs: {
        startup: 'Soft start',
        protection: 'Multi-level',
        feedback: 'Hall sensors',
        interface: 'UART/I2C',
        response: '<5ms',
      },
      features: [
        'Trapezoidal commutation',
        'Smooth startup sequence',
        'Speed control via PWM',
        'Hall sensor feedback',
        'Electronic brake',
        'Fault detection',
        'Low-cost implementation',
        'Easy integration',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <FaMicrochip className="text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Embedded Systems & Motor Control</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Precision <span className="gradient-text">Motor Control</span> Systems
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced embedded systems for BLDC motor control with FOC, 6-step commutation, and real-time performance optimization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">3 KW</div>
                <div className="text-sm text-gray-600">Max Power</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Efficiency</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600">10 μs</div>
                <div className="text-sm text-gray-600">Loop Time</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600">20+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Charts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Motor Performance <span className="gradient-text">Analysis</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Motor Performance Curve */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Motor Performance Curves</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={motorPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rpm" label={{ value: 'RPM', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Performance %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="efficiency" stackId="1" stroke="#3B82F6" fill="#3B82F6" name="Efficiency" />
                  <Area type="monotone" dataKey="torque" stackId="2" stroke="#8B5CF6" fill="#8B5CF6" name="Torque" />
                  <Area type="monotone" dataKey="power" stackId="3" stroke="#10B981" fill="#10B981" name="Power" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Control Methods Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Control Methods Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={controlMethodsComparison[0] && controlMethodsComparison[1] ? [
                  { metric: 'Efficiency', '6-Step': controlMethodsComparison[0].efficiency, 'FOC': controlMethodsComparison[1].efficiency },
                  { metric: 'Smoothness', '6-Step': controlMethodsComparison[0].smoothness, 'FOC': controlMethodsComparison[1].smoothness },
                  { metric: 'Complexity', '6-Step': controlMethodsComparison[0].complexity, 'FOC': controlMethodsComparison[1].complexity },
                  { metric: 'Cost', '6-Step': controlMethodsComparison[0].cost, 'FOC': controlMethodsComparison[1].cost },
                ] : []}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="6-Step" dataKey="6-Step" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Radar name="FOC" dataKey="FOC" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Project Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Project Development Timeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectTimeline} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="phase" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#10B981" name="Completion %" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Platform Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Platform Experience</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformsExperience}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="platform" />
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

      {/* Projects Detail */}
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
                          <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
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
                            <span className="text-blue-600 mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-4">Specifications</h4>
                    <div className="space-y-4">
                      {Object.entries(project.specs).map(([key, value], idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg">
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="text-xl font-bold text-blue-600">{value}</div>
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Motor Control Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s build high-performance embedded systems for your applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

