'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaFileInvoice, FaClipboardCheck, FaTruck, FaChartBar, FaDollarSign } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import Link from 'next/link'

export default function ConstructionPage() {
  //  Data
  const projectsData = [
    { month: 'Jan', completed: 8, ongoing: 12, bids: 25 },
    { month: 'Feb', completed: 10, ongoing: 15, bids: 30 },
    { month: 'Mar', completed: 12, ongoing: 18, bids: 35 },
    { month: 'Apr', completed: 15, ongoing: 20, bids: 40 },
    { month: 'May', completed: 18, ongoing: 22, bids: 42 },
    { month: 'Jun', completed: 20, ongoing: 25, bids: 45 },
  ]

  const costBreakdown = [
    { category: 'Materials', value: 45, color: '#8B5CF6' },
    { category: 'Labor', value: 30, color: '#3B82F6' },
    { category: 'Equipment', value: 15, color: '#10B981' },
    { category: 'Overhead', value: 10, color: '#F59E0B' },
  ]

  const supplierPerformance = [
    { supplier: 'Supplier A', onTime: 95, quality: 92, price: 88 },
    { supplier: 'Supplier B', onTime: 88, quality: 90, price: 95 },
    { supplier: 'Supplier C', onTime: 92, quality: 88, price: 90 },
    { supplier: 'Supplier D', onTime: 85, quality: 95, price: 85 },
  ]

  const bidSuccess = [
    { quarter: 'Q1', submitted: 75, won: 45 },
    { quarter: 'Q2', submitted: 85, won: 52 },
    { quarter: 'Q3', submitted: 90, won: 58 },
    { quarter: 'Q4', submitted: 95, won: 65 },
  ]

  const services = [
    {
      title: 'Quotation Management',
      icon: <FaFileInvoice className="text-5xl text-purple-500" />,
      description: 'Comprehensive quotation and bid management system with automated calculations and supplier tracking.',
      features: [
        'Automated cost calculations',
        'Material quantity takeoffs',
        'Labor cost estimation',
        'Equipment rental pricing',
        'Markup and profit margins',
        'Multiple revision tracking',
        'PDF quotation generation',
        'Client approval workflow',
      ],
      metrics: {
        quotations: '200+ per month',
        accuracy: '98%',
        timeReduction: '60%',
        winRate: '68%',
      },
    },
    {
      title: 'Bid Filing & Management',
      icon: <FaClipboardCheck className="text-5xl text-blue-500" />,
      description: 'End-to-end bid preparation and submission management with document control and compliance tracking.',
      features: [
        'Bid document preparation',
        'Compliance checklist',
        'Deadline tracking',
        'Multi-project management',
        'Version control',
        'Submission tracking',
        'Result monitoring',
        'Performance analytics',
      ],
      metrics: {
        bidsManaged: '45+ per month',
        success: '68%',
        avgValue: '$50K-500K',
        onTime: '100%',
      },
    },
    {
      title: 'Quantity Estimation',
      icon: <FaChartBar className="text-5xl text-green-500" />,
      description: 'Detailed quantity takeoff and estimation from construction drawings with material optimization.',
      features: [
        'Drawing analysis',
        'Material quantification',
        'Cost per unit calculation',
        'Waste factor inclusion',
        'Alternative material suggestions',
        'Historical data comparison',
        'BOQ generation',
        'Report export',
      ],
      metrics: {
        projects: '50+ estimates',
        accuracy: '±5%',
        efficiency: '+70%',
        costSaving: '15%',
      },
    },
    {
      title: 'Supplier Coordination',
      icon: <FaTruck className="text-5xl text-orange-500" />,
      description: 'Supplier relationship management with availability tracking, pricing comparison, and communication logs.',
      features: [
        'Supplier database management',
        'Material availability checks',
        'Price comparison',
        'Specification sharing',
        'Email communication',
        'Order tracking',
        'Delivery scheduling',
        'Performance evaluation',
      ],
      metrics: {
        suppliers: '100+ active',
        responseTime: '<4 hours',
        reliability: '95%',
        savings: '20%',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <FaBuilding className="text-orange-600" />
              <span className="text-sm font-medium text-orange-900">Construction Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="gradient-text">Construction</span> Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive construction project management, from quotations and bids to quantity estimation and supplier coordination
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600">200+</div>
                <div className="text-sm text-gray-600">Quotations/Month</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">68%</div>
                <div className="text-sm text-gray-600">Bid Win Rate</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Active Suppliers</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Performance <span className="gradient-text">Analytics</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Projects Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Projects Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={projectsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="completed" stackId="1" stroke="#10B981" fill="#10B981" name="Completed" />
                  <Area type="monotone" dataKey="ongoing" stackId="1" stroke="#3B82F6" fill="#3B82F6" name="Ongoing" />
                  <Area type="monotone" dataKey="bids" stackId="1" stroke="#F59E0B" fill="#F59E0B" name="Bids" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Average Cost Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={costBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Supplier Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Supplier Performance Metrics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={supplierPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="supplier" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="onTime" fill="#10B981" name="On-Time Delivery %" />
                  <Bar dataKey="quality" fill="#3B82F6" name="Quality Score %" />
                  <Bar dataKey="price" fill="#F59E0B" name="Price Competitiveness %" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Bid Success Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Bid Success Rate</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bidSuccess}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="submitted" stroke="#8B5CF6" strokeWidth={2} name="Bids Submitted" />
                  <Line type="monotone" dataKey="won" stroke="#10B981" strokeWidth={2} name="Bids Won" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Services</span>
          </h2>

          <div className="space-y-12">
            {services.map((service, index) => (
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
                      {service.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-4">Performance Metrics</h4>
                    <div className="space-y-4">
                      {Object.entries(service.metrics).map(([key, value], idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg">
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="text-xl font-bold text-orange-600">{value}</div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Construction Projects?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s optimize your construction management processes and increase profitability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

