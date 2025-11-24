'use client'

import { FaRocket, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
            <FaRocket className="text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              Innovation Meets Intelligence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Building the Future with{' '}
            <span className="gradient-text">AI & Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Expert in Artificial Intelligence, Computer Vision, Embedded Systems, and Construction Management
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="font-semibold text-purple-600">Deep Learning</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="font-semibold text-indigo-600">Computer Vision</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="font-semibold text-pink-600">Embedded Systems</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="font-semibold text-blue-600">ROS2 & LiDAR</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="bg-white text-purple-600 px-8 py-4 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-purple-600">
            <FaChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}


