'use client'

export function HeroCharacter() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes walk {
          0%, 100% { transform: rotateZ(-8deg) translateY(0); }
          50% { transform: rotateZ(8deg) translateY(-5px); }
        }
        @keyframes walkRight {
          0%, 100% { transform: rotateZ(8deg) translateY(0); }
          50% { transform: rotateZ(-8deg) translateY(-5px); }
        }
      `}</style>

      <div className="relative w-40 h-48 animate-pulse" style={{ animation: 'float 3s ease-in-out infinite' }}>
        {/* Head */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full shadow-lg" />

        {/* Left Eye */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full">
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-gray-900 rounded-full" />
        </div>

        {/* Right Eye */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full">
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-gray-900 rounded-full" />
        </div>

        {/* Smile */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-gray-900 rounded-b-full" />

        {/* Left Ear */}
        <div className="absolute top-2 left-2 w-3 h-4 bg-indigo-400 rounded-full" />

        {/* Right Ear */}
        <div className="absolute top-2 right-2 w-3 h-4 bg-indigo-400 rounded-full" />

        {/* Body */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-12 h-14 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg shadow-md" />

        {/* Left Arm */}
        <div className="absolute top-22 left-1 w-3 h-12 bg-indigo-300 rounded-full" />

        {/* Right Arm */}
        <div className="absolute top-22 right-1 w-3 h-12 bg-indigo-300 rounded-full" />

        {/* Left Leg */}
        <div
          className="absolute top-36 left-4 w-3 h-10 bg-indigo-200 rounded-full origin-top"
          style={{ animation: 'walk 1.5s ease-in-out infinite' }}
        />

        {/* Right Leg */}
        <div
          className="absolute top-36 right-4 w-3 h-10 bg-indigo-200 rounded-full origin-top"
          style={{ animation: 'walkRight 1.5s ease-in-out infinite' }}
        />
      </div>
    </div>
  )
}
