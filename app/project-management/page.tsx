'use client'

import { motion } from 'framer-motion'
import { FaProjectDiagram, FaChartLine, FaDollarSign, FaTasks, FaUsers, FaClock } from 'react-icons/fa'
import { LineChart, Line, BarChart, Bar, AreaChart, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'
import Link from 'next/link'

export default function ProjectManagementPage() {
  // ROI Data
  const roiData = [
    { month: 'Jan', roi: 12, investment: 100, revenue: 112 },
    { month: 'Feb', roi: 15, investment: 120, revenue: 138 },
    { month: 'Mar', roi: 18, investment: 150, revenue: 177 },
    { month: 'Apr', roi: 22, investment: 180, revenue: 220 },
    { month: 'May', roi: 25, investment: 200, revenue: 250 },
    { month: 'Jun', roi: 28, investment: 220, revenue: 282 },
  ]

  // Resource Allocation
  const resourceData = [
    { project: 'Project A', allocated: 85, utilized: 78 },
    { project: 'Project B', allocated: 90, utilized: 88 },
    { project: 'Project C', allocated: 75, utilized: 72 },
    { project: 'Project D', allocated: 95, utilized: 92 },
    { project: 'Project E', allocated: 80, utilized: 75 },
  ]

  // Project Timeline
  const timelineData = [
    { phase: 'Planning', planned: 2, actual: 2.5 },
    { phase: 'Design', planned: 3, actual: 2.8 },
    { phase: 'Development', planned: 8, actual: 8.5 },
    { phase: 'Testing', planned: 3, actual: 3.2 },
    { phase: 'Deployment', planned: 1, actual: 0.9 },
  ]

  // Budget vs Actual
  const budgetData = [
    { category: 'Development', budget: 100, actual: 95, variance: 5 },
    { category: 'Marketing', budget: 50, actual: 48, variance: 2 },
    { category: 'Operations', budget: 30, actual: 32, variance: -2 },
    { category: 'Infrastructure', budget: 40, actual: 38, variance: 2 },
    { category: 'Support', budget: 20, actual: 22, variance: -2 },
  ]

  // Risk Assessment
  const riskData = [
    { risk: 'Technical', probability: 40, impact: 70 },
    { risk: 'Budget', probability: 60, impact: 80 },
    { risk: 'Timeline', probability: 50, impact: 60 },
    { risk: 'Resource', probability: 30, impact: 50 },
    { risk: 'Market', probability: 45, impact: 75 },
  ]

  const features = [
    {
      title: 'ROI Analysis & Tracking',
      icon: <FaChartLine className="text-5xl text-green-500" />,
      description: 'Comprehensive ROI calculation and tracking system with real-time updates and predictive analytics.',
      capabilities: [
        'Real-time ROI calculations',
        'Investment tracking',
        'Revenue forecasting',
        'Cost-benefit analysis',
        'Performance benchmarking',
        'Trend analysis',
        'Custom ROI metrics',
        'Automated reporting',
      ],
      metrics: {
        avgROI: '25%',
        projects: '50+ tracked',
        accuracy: '±3%',
        reporting: 'Real-time',
      },
    },
    {
      title: 'Resource Management',
      icon: <FaUsers className="text-5xl text-blue-500" />,
      description: 'Optimize resource allocation across multiple projects with workload balancing and skill matching.',
      capabilities: [
        'Resource pool management',
        'Skill matrix tracking',
        'Workload balancing',
        'Availability scheduling',
        'Utilization analytics',
        'Cost per resource',
        'Performance metrics',
        'Capacity planning',
      ],
      metrics: {
        utilization: '85%',
        efficiency: '+30%',
        resources: '200+ managed',
        satisfaction: '92%',
      },
    },
    {
      title: 'Project Timeline Management',
      icon: <FaClock className="text-5xl text-purple-500" />,
      description: 'Advanced timeline planning and tracking with Gantt charts, milestones, and dependency management.',
      capabilities: [
        'Gantt chart visualization',
        'Milestone tracking',
        'Dependency management',
        'Critical path analysis',
        'Schedule optimization',
        'Deadline alerts',
        'Progress tracking',
        'Timeline forecasting',
      ],
      metrics: {
        onTime: '88%',
        avgDelay: '-5%',
        visibility: '100%',
        accuracy: '94%',
      },
    },
    {
      title: 'Budget & Cost Control',
      icon: <FaDollarSign className="text-5xl text-yellow-500" />,
      description: 'Complete budget management with variance analysis, cost tracking, and financial forecasting.',
      capabilities: [
        'Budget planning',
        'Expense tracking',
        'Variance analysis',
        'Cost forecasting',
        'Purchase order management',
        'Invoice tracking',
        'Financial reporting',
        'Cash flow analysis',
      ],
      metrics: {
        accuracy: '97%',
        variance: '±5%',
        savings: '12%',
        visibility: 'Real-time',
      },
    },
    {
      title: 'Task & Workflow Management',
      icon: <FaTasks className="text-5xl text-orange-500" />,
      description: 'Comprehensive task management with automated workflows, priorities, and collaboration tools.',
      capabilities: [
        'Task assignment',
        'Priority management',
        'Workflow automation',
        'Status tracking',
        'Subtask management',
        'Time logging',
        'Collaboration tools',
        'Notification system',
      ],
      metrics: {
        completion: '94%',
        efficiency: '+40%',
        automation: '60%',
        productivity: '+35%',
      },
    },
    {
      title: 'Risk Management',
      icon: <FaProjectDiagram className="text-5xl text-red-500" />,
      description: 'Proactive risk identification, assessment, and mitigation planning with impact analysis.',
      capabilities: [
        'Risk identification',
        'Impact assessment',
        'Probability analysis',
        'Mitigation planning',
        'Risk monitoring',
        'Issue tracking',
        'Escalation workflows',
        'Risk reporting',
      ],
      metrics: {
        identified: '95%',
        mitigated: '78%',
        prevented: '$500K+',
        response: '<24hrs',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <FaProjectDiagram className="text-green-600" />
              <span className="text-sm font-medium text-green-900">Project Management Software</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Intelligent <span className="gradient-text">Project Management</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive project management software with ROI tracking, resource optimization, and advanced analytics
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600">25%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Resource Utilization</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600">88%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Data-Driven <span className="gradient-text">Insights</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ROI Trend */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">ROI Trend & Investment</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="investment" fill="#10B981" stroke="#10B981" name="Investment ($K)" />
                  <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#8B5CF6" strokeWidth={3} name="ROI %" />
                </ComposedChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Resource Utilization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Resource Allocation vs Utilization</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resourceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="project" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="allocated" fill="#3B82F6" name="Allocated %" />
                  <Bar dataKey="utilized" fill="#10B981" name="Utilized %" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Timeline Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Timeline: Planned vs Actual (weeks)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timelineData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="phase" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="planned" fill="#8B5CF6" name="Planned" />
                  <Bar dataKey="actual" fill="#F59E0B" name="Actual" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Budget Variance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Budget vs Actual Spending ($K)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="budget" fill="#3B82F6" name="Budget" />
                  <Bar dataKey="actual" fill="#10B981" name="Actual" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Risk Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl shadow-lg lg:col-span-2"
            >
              <h3 className="text-xl font-bold mb-4">Risk Assessment Matrix (Probability vs Impact)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="probability" name="Probability" unit="%" domain={[0, 100]} />
                  <YAxis type="number" dataKey="impact" name="Impact" unit="%" domain={[0, 100]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Legend />
                  <Scatter name="Risks" data={riskData} fill="#EF4444" />
                </ScatterChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comprehensive <span className="gradient-text">Features</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-start space-x-4 mb-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Capabilities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(feature.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-white p-2 rounded-lg">
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-lg font-bold text-green-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Project Management Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s build a custom project management solution that drives ROI and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

