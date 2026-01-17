'use client';

import { useState, useEffect } from 'react'; // Added useEffect
import { ChevronLeft, ChevronRight, MapPin, Clock, Calendar, Camera } from 'lucide-react';

// 1. Define the type for your images
interface GalleryImage {
  url: string;
  alt: string;
}

export default function ItineraryPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 2. Fix the 'never' error by giving the state a type
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // 3. Fix Hydration Error: Only show doodles after the page loads on the client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const itinerary = [
    {
      day: 1,
      title: "Coffee & Park Stroll",
      location: "Session Road & Botanical Gardens",
      activities: [
        { time: "7:00 AM", activity: "Hotel Pre-registration & Luggage Storage", icon: "🏨" },
        { time: "8:00 AM", activity: "Baguio Cathedral", icon: "⛪" },
        { time: "8:30 AM", activity: "Breakfast at Foam Coffee", icon: "☕" },
        { time: "10:00 AM", activity: "Explore Session Road (Ili-likha, etc)", icon: "🚶" },
        { time: "2:00 PM", activity: "Hotel Check-in & quick rest", icon: "🏨" },
        { time: "3:00 PM", activity: "Baguio Botanical Garden (BINI Roadtrip Adventures in Baguio (Episode 7))", icon: "🌸🎬" },
        { time: "5:00 PM", activity: "Mines View Park", icon: "🌄" },
            { time: "6:00 PM", activity: "SM City Baguio", icon: "🏬" },
            { time: "8:00 PM", activity: "Sky Ranch Baguio", icon: "🎡" },
        { time: "9:00 PM", activity: "Baguio Night Market", icon: "🌙" }
      ],
      images: [
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b618aa3e58af5a5f820d4_session-road.jpg", alt: "Session Road" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b6189e57f9d48d42e8d53_baguio-cathedral.JPG", alt: "Baguio Cathedral" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b6189168b7c42038d22f3_baguio-botanical.jpg", alt: "Baguio Botanical Garden" }
      ],
      color: "#FFB5E8"
    },
    {
      day: 2,
      title: "La Trinidad + Art & Views",
      location: "La Trinidad & Valley of Colors",
      activities: [
        { time: "5:00 AM", activity: "Morning jog Camp John Hay", icon: "🏃" },
        { time: "7:00 AM", activity: "La Trinidad Strawberry Farm", icon: "🍓" },
        { time: "9:00 AM", activity: "Bell Church", icon: "💒" },
        { time: "9:30 AM", activity: "Valley of Colors", icon: "🎨" },
          { time: "10:00 AM", activity: "Burnham Park (BINI Roadtrip Adventures in Baguio (Finale))", icon: "🏞️" },
          { time: "12:00 PM", activity: "Tam-awan Village BINI Roadtrip Adventures in Baguio (Episode 6)", icon: "🎨" },
        { time: "2:00 PM", activity: "Igorot Stone Kingdom", icon: "🗿" },
        { time: "4:00 PM", activity: "Mirador Heritage and Eco Park & Our Lady of Lourdes Grotto", icon: "🗻" },
        { time: "6:00 PM", activity: "Camp John Hay", icon: "🏕️" },
        { time: "9:00 PM", activity: "Night Market", icon: "🌙" }
      ],
      images: [
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b5f4a0c869ebf8446a729_baguio%20(8).jpg", alt: "La Trinidad Strawberry Farm" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b5f4b0588334cb077487b_baguio%20(7).jpg", alt: "Valley of Colors" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b5f4a1286a0abdf5bc13e_baguio%20(1).jpg", alt: "Burnham Park" }
      ],
      color: "#B5DEFF"
    },
    {
      day: 3,
      title: "Last day?",
      location: "Dragon Castle & Burnham Park",
      activities: [
        { time: "5:00 AM", activity: "Morning jog at Burnham Park", icon: "🏃" },
        { time: "7:00 AM", activity: "Dragon Castle", icon: "🐉" },
        { time: "10:00 AM", activity: "Wright Park and The Mansion", icon: "🏛️" },
        { time: "11:00 AM", activity: "Go Back to Hotel (Prepare for Checkout)", icon: "🏨" },
        { time: "12:00 PM", activity: "Hotel Checkout", icon: "🧳" },
        { time: "12:30 PM", activity: "Session Road Look for Luggage Storage", icon: "🧳" },
        { time: "1:00 PM", activity: "Burnham Park", icon: "🌲" },
      ],
      images: [
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b5f4a9017f5a0d85a6469_baguio%20(9).jpg", alt: "Dragon Castle" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b607284d5b4d2bd37846c_camp-john-hay.jpg", alt: "Camp John Hay" },
        { url: "https://cdn.prod.website-files.com/672218af3918af052de72751/696b5f4bf971754b092e6550_baguio%20(5).jpg", alt: "Wright Park" }
      ],
      color: "#C7FFED"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % itinerary.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + itinerary.length) % itinerary.length);

  const currentDay = itinerary[currentSlide];

  // Fun doodle decorations
  const doodles = ['✈️', '🎈', '🌴', '⭐', '🎨', '📸', '🗺️', '☀️', '🌊', '🍉', '🎪', '🎯'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating Doodles Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {doodles.map((doodle, idx) => (
          <span
            key={idx}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${idx * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {doodle}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-8 text-center">
        <div className="inline-block">
          <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-2 relative inline-block" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Saan?
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8">
              <path d="M5,5 Q150,0 295,5" stroke="#FFD93D" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </h1>
        </div>
        <p className="text-gray-600 mt-4 text-lg font-medium">sa kalsada ng Baguio City with Rienell!</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 pb-20 relative z-10">
        {/* Day Header */}
        <div className="mb-8 text-center animate-bounce-in">
          <div 
            className="inline-block px-8 py-4 rounded-full text-gray-800 font-black text-2xl mb-4 border-4 border-gray-800 transform -rotate-2 shadow-lg"
            style={{ 
              backgroundColor: currentDay.color,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
            }}
          >
            DAY {currentDay.day}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            {currentDay.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-700 text-lg font-bold mb-6">
            <MapPin className="w-6 h-6" strokeWidth={3} />
            <span>{currentDay.location}</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-full border-4 border-gray-800 font-black transition-all duration-300 hover:scale-105 shadow-lg text-black text-base sm:px-6 sm:py-3 sm:text-lg"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
            >
              <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
              <span>Previous</span>
            </button>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {itinerary.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full border-3 border-gray-800 transition-all duration-300 font-black text-black ${
                    idx === currentSlide 
                      ? 'w-10 h-10 text-base' 
                      : 'w-8 h-8 opacity-60 hover:opacity-100'
                  } sm:${idx === currentSlide ? 'w-12 h-12 text-lg' : 'w-10 h-10'} `}
                  style={{ 
                    backgroundColor: day.color,
                    boxShadow: idx === currentSlide ? '3px 3px 0px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  {day.day}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-pink-300 hover:bg-pink-400 rounded-full border-4 border-gray-800 font-black transition-all duration-300 hover:scale-105 shadow-lg text-black text-base sm:px-6 sm:py-3 sm:text-lg"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
            >
              <span>Next</span>
              <ChevronRight className="w-6 h-6 text-black" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Interactive Image Gallery */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {currentDay.images.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
              onClick={() => setSelectedImage(img)}
              style={{
                transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})`
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border-4 border-gray-800 shadow-xl bg-white p-3">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full aspect-video object-cover rounded-2xl"
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
                <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-300 rounded-full border-3 border-gray-800 flex items-center justify-center transform rotate-12">
                  <Camera className="w-4 h-4" strokeWidth={3} color="black" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-pink-300 px-4 py-2 rounded-full border-3 border-gray-800 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                {img.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Activities Timeline */}
        <div className="bg-white rounded-3xl p-8 border-4 border-gray-800 shadow-xl transform rotate-1">
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            <Calendar className="w-8 h-8" strokeWidth={3} />
            Day {currentDay.day} - Let's go!
            <svg className="ml-2" width="40" height="40" viewBox="0 0 40 40">
              <path d="M10,20 L15,25 L30,10" stroke="#6BCF7F" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h3>
          <div className="space-y-4">
            {currentDay.activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl border-3 border-gray-800 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: ['#FFE5B4', '#E0BBE4', '#B4E7FF', '#C7FFED', '#FFDFD3'][idx % 5],
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className="text-5xl transform hover:scale-125 transition-transform">{activity.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gray-800 font-black mb-1">
                    <Clock className="w-5 h-5" strokeWidth={3} />
                    <span className="text-lg">{activity.time}</span>
                  </div>
                  <p className="text-gray-700 text-lg font-bold">{activity.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <div className="bg-white p-6 rounded-3xl border-4 border-gray-800 shadow-2xl">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full rounded-2xl"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
              <p className="text-center mt-4 text-2xl font-black text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {selectedImage.alt}
              </p>
            </div>
            <button
              className="absolute -top-4 -right-4 w-14 h-14 bg-red-400 hover:bg-red-500 rounded-full border-4 border-gray-800 flex items-center justify-center transition-all duration-300 font-black text-2xl shadow-lg"
              onClick={() => setSelectedImage(null)}
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      {/* Suggestion Form */}
      <div className="max-w-xl mx-auto mt-12 mb-8 p-6 bg-white rounded-3xl border-4 border-gray-800 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Suggestion</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const suggestion = (form.elements.namedItem('suggestion') as HTMLInputElement).value;
            // Send to your email via API (replace with your endpoint)
            await fetch('/api/send-suggestion', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, suggestion }),
            });
            alert('Thank you for your suggestion!');
            form.reset();
          }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400"
          />
          <textarea
            name="suggestion"
            required
            placeholder="Your suggestion..."
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 min-h-[80px]"
          />
          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg border-2 border-gray-800 shadow-md transition-all"
          >
            Send Suggestion
          </button>
        </form>
      </div>
      `}</style>
    </div>
  );
}