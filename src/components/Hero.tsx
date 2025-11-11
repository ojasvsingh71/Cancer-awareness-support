import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-pink-100 p-4 rounded-full">
            <Heart className="w-16 h-16 text-pink-600" fill="currentColor" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Together in the Fight<br />
          <span className="text-pink-600">Against Cancer</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Raising awareness, providing support, and fostering hope for those affected by cancer.
          You are not alone in this journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-pink-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-pink-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
