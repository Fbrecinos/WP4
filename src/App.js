import React from 'react';
import FlipCard from './FlipCard';

// 1. Import your media
import clarityImg from './assets/clarity.jpg';
import writingImg from './assets/writing.jpg';
import creativityVid from './assets/creativity.mp4'; // Import your video!
import evaluationImg from './assets/evaluation.jpg';

function App() {
  const cardData = [
    {
      title: "Clarity of Thought",
      description: "Understanding how values, history and personal attributes contribute to your career/life contributions...",
      imageUrl: clarityImg
    },
    {
      title: "Effective Reflective Writing",
      description: "Demonstrating the value of articulating internal attributes and why they are important...",
      imageUrl: writingImg
    },
    {
      title: "Creativity",
      description: "Rendering and understanding of who you are and how you contribute both in your career and life...",
      imageUrl: creativityVid, // Use the video variable here
      isVideo: true            // ADD THIS LINE so the card knows it's a video!
    },
    {
      title: "Self-Evaluation",
      description: "An honest evaluation of what you accomplished, where you felt satisfied...",
      imageUrl: evaluationImg
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-slate-800">WP4 Reflections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <FlipCard 
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              isVideo={card.isVideo} // Pass the new prop down to the card
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;