import React, { useState, useEffect } from 'react';
import { Gift, Heart, Star } from 'lucide-react';
import img1 from './1.jpg'

const BirthdayWebsite = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      setTimeout(() => {
        setShowLetter(true);
        setAnimationStep(1);
      }, 1200);
    }
  };

  useEffect(() => {
    if (animationStep === 1) {
      setTimeout(() => setAnimationStep(2), 500);
    }
  }, [animationStep]);

  return (
    <div className="min-h-screen relative overflow-hidden scale-104">
      {/* Realistic Beach Background */}
      <div className="absolute inset-0">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-cyan-200 to-cyan-400"></div>
        
        {/* Ocean water */}
        <div className="absolute inset-0 top-1/3 bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-500"></div>
        
        {/* Beach sand - realistic slope */}
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-yellow-300 via-amber-100 to-transparent"
             style={{
               clipPath: 'polygon(0 75%, 100% 45%, 100% 100%, 0% 100%)'
             }}>
          {/* Sand texture overlay */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #d97706 1px, transparent 1px),
                                   radial-gradient(circle at 75% 75%, #b45309 1px, transparent 1px),
                                   radial-gradient(circle at 50% 100%, #f59e0b 0.5px, transparent 0.5px)`,
                 backgroundSize: '20px 20px, 25px 25px, 15px 15px'
               }}>
          </div>
        </div>
        
        {/* Realistic ocean waves */}
        <div className="absolute bottom-0 w-full">
          {/* Deep water wave */}
          <svg viewBox="0 0 1200 180" className="w-full h-44 absolute bottom-40">
            <path fill="rgba(20, 184, 166, 0.8)">
              <animate attributeName="d" 
                       values="M0,60 C400,100 800,20 1200,60 L1200,180 L0,180 Z;
                               M0,80 C400,40 800,80 1200,40 L1200,180 L0,180 Z;
                               M0,60 C400,100 800,20 1200,60 L1200,180 L0,180 Z"
                       dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
          
          {/* Shore wave with foam */}
          <svg viewBox="0 0 1200 140" className="w-full h-36 absolute bottom-12">
            <path fill="rgba(67, 56, 202, 0.6)">
              <animate attributeName="d" 
                       values="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 L1200,140 L0,140 Z;
                               M0,70 C200,30 400,70 600,30 C800,70 1000,30 1200,70 L1200,140 L0,140 Z;
                               M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 L1200,140 L0,140 Z"
                       dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>
          
          {/* Foam and bubbles */}
          <svg viewBox="0 0 1200 100" className="w-full h-28 absolute bottom-0">
            <path fill="rgba(255, 255, 255, 0.7)">
              <animate attributeName="d" 
                       values="M0,30 C150,60 300,10 450,30 C600,60 750,10 900,30 C1050,60 1150,20 1200,30 L1200,100 L0,100 Z;
                               M0,50 C150,20 300,50 450,20 C600,50 750,20 900,50 C1050,20 1150,50 1200,20 L1200,100 L0,100 Z;
                               M0,30 C150,60 300,10 450,30 C600,60 750,10 900,30 C1050,60 1150,20 1200,30 L1200,100 L0,100 Z"
                       dur="2s" repeatCount="indefinite"/>
            </path>
          </svg>
          
          {/* Water sparkles */}
          <div className="absolute bottom-20 w-full h-32">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Realistic seashells and sea creatures on beach */}
        {/* Large shells on sand */}
        <div className="absolute bottom-16 left-20" style={{transform: 'rotate(15deg)'}}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 shadow-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-300 opacity-60 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-24 left-1/4" style={{transform: 'rotate(-20deg)'}}>
          <div className="w-6 h-8 bg-gradient-to-b from-pink-200 to-pink-400 rounded-full shadow-md"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-pink-300 rounded-t-full"></div>
        </div>

        <div className="absolute bottom-20 right-1/3" style={{transform: 'rotate(45deg)'}}>
          <div className="w-7 h-7 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full shadow-lg">
            <div className="absolute inset-1 bg-white opacity-30 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/3" style={{transform: 'rotate(-30deg)'}}>
          <div className="w-5 h-6 bg-gradient-to-b from-yellow-200 to-amber-400 rounded-full shadow-md">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white opacity-40 rounded-full"></div>
          </div>
        </div>

        {/* Realistic starfish */}
        <div className="absolute bottom-28 right-1/4 animate-pulse" style={{animationDuration: '4s'}}>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow-lg"></div>
            {/* Starfish arms */}
            <div className="absolute top-0 left-1/2 w-2 h-6 bg-orange-400 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-6 bg-orange-400 rounded-full transform -translate-x-1/2 translate-y-2"></div>
            <div className="absolute left-0 top-1/2 w-6 h-2 bg-orange-400 rounded-full transform -translate-y-1/2 -translate-x-2"></div>
            <div className="absolute right-0 top-1/2 w-6 h-2 bg-orange-400 rounded-full transform -translate-y-1/2 translate-x-2"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-orange-400 rounded-full transform rotate-45"></div>
            <div className="absolute top-2 left-2 w-4 h-4 bg-orange-400 rounded-full transform -rotate-45"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-orange-400 rounded-full transform -rotate-45"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-orange-400 rounded-full transform rotate-45"></div>
          </div>
        </div>

        <div className="absolute bottom-40 left-16 animate-bounce" style={{animationDuration: '5s'}}>
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full shadow-md"></div>
            {/* Smaller starfish arms */}
            <div className="absolute top-0 left-1/2 w-1.5 h-4 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-4 bg-pink-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            <div className="absolute left-0 top-1/2 w-4 h-1.5 bg-pink-400 rounded-full transform -translate-y-1/2 -translate-x-1"></div>
            <div className="absolute right-0 top-1/2 w-4 h-1.5 bg-pink-400 rounded-full transform -translate-y-1/2 translate-x-1"></div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-pink-400 rounded-full transform rotate-45"></div>
            <div className="absolute top-1 left-1 w-3 h-3 bg-pink-400 rounded-full transform -rotate-45"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-pink-400 rounded-full transform -rotate-45"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 bg-pink-400 rounded-full transform rotate-45"></div>
          </div>
        </div>

        {/* More scattered shells */}
        <div className="absolute bottom-36 right-20" style={{transform: 'rotate(60deg)'}}>
          <div className="w-4 h-5 bg-gradient-to-b from-blue-200 to-blue-400 rounded-full shadow-sm"></div>
        </div>

        <div className="absolute bottom-44 left-1/2" style={{transform: 'rotate(-45deg)'}}>
          <div className="w-3 h-4 bg-gradient-to-b from-green-200 to-green-400 rounded-full shadow-sm"></div>
        </div>

        <div className="absolute bottom-18 right-1/2" style={{transform: 'rotate(90deg)'}}>
          <div className="w-5 h-6 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-full shadow-md">
            <div className="absolute inset-1 bg-white opacity-20 rounded-full"></div>
          </div>
        </div>

        {/* Small sand dollars */}
        <div className="absolute bottom-26 left-1/2" style={{transform: 'rotate(30deg)'}}>
          <div className="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-0.5 bg-gray-400 rounded-full"></div>
              <div className="absolute w-0.5 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {!showLetter ? (
          /* Realistic Envelope */
          <div 
            className={`cursor-pointer transition-all duration-1000 transform ${
              isEnvelopeOpen ? 'scale-110' : 'hover:scale-105'
            }`}
            onClick={handleEnvelopeClick}
          >
            <div className="relative">
              {/* Envelope body - yellow with blue/white stripes */}
              <div className={`w-96 h-64 relative bg-yellow-100 rounded-lg shadow-2xl border-2 border-yellow-300 transition-all duration-1200 ${
                isEnvelopeOpen ? 'transform -translate-y-2' : ''
              }`}>
                {/* Airmail stripes */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute top-2 left-2 right-2 h-3 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-80"></div>
                  <div className="absolute bottom-2 left-2 right-2 h-3 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-80"></div>
                  <div className="absolute top-2 bottom-2 left-2 w-3 bg-gradient-to-b from-blue-500 via-white to-red-500 opacity-80"></div>
                  <div className="absolute top-2 bottom-2 right-2 w-3 bg-gradient-to-b from-blue-500 via-white to-red-500 opacity-80"></div>
                </div>

                {/* Envelope flap - more realistic opening */}
                <div className={`absolute -top-0 left-0 w-full transition-all duration-1200 origin-top ${
                  isEnvelopeOpen ? 'transform -rotate-180 translate-y-64' : ''
                }`} 
                style={{
                  height: '140px',
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  borderLeft: '2px solid #f59e0b',
                  borderRight: '2px solid #f59e0b'
                }}>
                  {/* Wax seal with more detail */}
                  <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-1200 ${
                    isEnvelopeOpen ? 'scale-0 rotate-180' : ''
                  }`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-xl border-2 border-red-900">
                      <div className="w-full h-full flex items-center justify-center">
                        <Gift className="w-8 h-8 text-yellow-200" />
                      </div>
                      {/* Wax drip effect */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-700 rounded-b-full"></div>
                    </div>
                  </div>
                </div>

                {/* Letter peeking out */}
                <div className={`absolute top-8 left-8 right-8 bottom-8 bg-white rounded shadow-inner transition-all duration-1200 ${
                  isEnvelopeOpen ? 'transform translate-y-8 scale-105' : ''
                }`}>
                  <div className="p-4 h-full overflow-hidden">
                    <div className="text-xs text-gray-600 text-center opacity-50">
                      {!isEnvelopeOpen && "💌 Tặng Em, Anh 💌"}
                    </div>
                  </div>
                </div>
                
                {/* Click instruction */}
                {!isEnvelopeOpen && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-800 text-sm font-medium animate-pulse bg-white bg-opacity-80 px-3 py-1 rounded-full shadow">
                    Nhấp vào đây nhé !💌
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Letter Content */
          <div className={`max-w-2xl mx-auto transition-all duration-1000 transform ${
            animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-blue-200">
              {/* Letter Header */}
              <div className={`text-center mb-8 transition-all duration-800 delay-300 ${
                animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <h1 className="text-xl font-bold text-pink-600 mb-2">
                  Chúc Mừng Sinh Nhật 
                </h1>
                <h1 className="text-xl font-bold text-pink-600 mb-2">
                  Em bé Nguyễn Ngọc Linh
                </h1>
                <div className="flex justify-center space-x-2 text-2xl">
                  <span>🌷</span>
                  <span>😻</span>
                  <span>🔥</span>
                  <span>🌊</span>
                </div>
              </div>

              {/* Letter Body */}
              <div className={`space-y-6 transition-all duration-800 delay-500 ${
                animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                {/* Placeholder image */}
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="relative ">
  {/* Ảnh nền */}
  <img
    src={img1}
    alt="Flower"
    className="w-24 h-30 rounded-lg shadow-lg"
  />
  {/* Bóng bay đè lên */}
  <div className="absolute top-2 right-17 text-3xl">
  ✨
  </div>
</div>
                    </div>
                    
                  </div>
                  
                </div>

                {/* Letter text */}
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-600">Tặng Em, Anh</span>
                  </p>
                  
                  <p>
                    Hôm nay là một ngày đặc biệt, một ngày đánh dấu thêm một năm tuổi mới trong cuộc đời của cái kẹo ngọt này. 
                    Muốn gửi đến em những lời chúc tốt đẹp nhất, những điều tuyệt vời nhất trong ngày sinh nhật này!
                  </p>
                  
                  <p>
                    Cảm ơn em đã luôn ở bên anh trong những thời khắc khó khăn nhất. Chúc em tuổi mới ra trường bằng giỏi, kiếm công việc lương nghìn đô, sức khỏe dồi dào hehe
                  </p>
                  
                  <p className="text-center font-medium text-pink-600">
                    🌟 Chúc bé sinh nhật vui vẻ! 🌟
                    <br />
                    💕 Tuổi mới thật bùng nổ nhá ! 💕
                  </p>
                </div>

                {/* Signature */}
                <div className="text-right pt-4 border-t border-gray-200">
                  <p className="text-gray-600 italic">
                    Người tìnk mùa đônk,
                    <br />
                    <span className="font-semibold text-blue-600">Nguyễn Minh Hiển 💝</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating hearts animation */}
      {showLetter && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-ping text-red-400 text-xl`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdayWebsite;