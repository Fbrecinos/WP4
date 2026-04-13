import React from 'react';

const FlipCard = ({ title, description, imageUrl }) => {
  return (
    <div className="group w-full h-[400px] [perspective:1000px]">
      <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl rounded-2xl cursor-pointer">
        
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-8 text-center">
          <h3 className="text-2xl font-medium text-slate-800 tracking-wide">{title}</h3>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100">
          
          {/* Photo/Video Area */}
          <div className="h-2/5 w-full relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Description Area at the Bottom */}
          <div className="h-3/5 p-6 overflow-y-auto flex items-center">
            <p className="text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard;