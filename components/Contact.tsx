'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaRocket } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setStatusMessage('Thank you! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: '',
        })
      } else {
        setStatus('error')
        setStatusMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again.')
    }
  }

  const projectTypes = [
    'AI & Machine Learning',
    'Computer Vision',
    'Embedded Systems',
    'Construction Management',
    'Project Management Software',
    'Consultation',
    'Other',
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact us today to discuss your project and schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-2xl text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@nexvision.tech</p>
                    <p className="text-gray-600">info@nexvision.tech</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-2xl text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-pink-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-gray-600">Remote & On-site Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaCalendar className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Schedule a Meeting</h4>
                    <p className="text-gray-600 mb-3">Available for consultations Monday - Friday</p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <FaCalendar />
                      <span>Book a Meeting</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-2xl shadow-lg text-white">
              <FaRocket className="text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Choose NexVision?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>End-to-end project management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Scalable and maintainable code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>24/7 support and consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  {statusMessage}
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


