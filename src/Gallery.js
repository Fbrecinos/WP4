import React from 'react';

const Gallery = ({ mediaItems }) => {
  return (
    <div className="mt-24 border-t border-slate-200 pt-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Visual Journal</h2>
      
      {/* The Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div 
            key={index} 
            className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <img
                src={item.src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;