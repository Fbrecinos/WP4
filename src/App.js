import React from 'react';
import FlipCard from './FlipCard';

function App() {
  const cardData = [
    {
      title: "Clarity of Thought",
      description: "Understanding how values, history and personal attributes contribute to your career/life contributions: 1) Reflecting on intent. For example: why you do what you do: 2) recognizing values and influencer; 3) what you aim to accomplish and what motivates those aspirations.",
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" // Starry night sky
    },
    {
      title: "Effective Reflective Writing",
      description: "Demonstrating the value of articulating internal attributes and why they are important in your work and lives. 1) Synthesizing - articulating how you contribute and why it is important and the value; 2) Using language that comprises both personal information but elevates that information to inform others.",
      imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" // Minimalist plant
    },
    {
      title: "Creativity",
      description: "Rendering and understanding of who you are and how you contribute both in your career and life in a creative way that reflects who you are.",
      imageUrl: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=600&q=80" // Moon phase
    },
    {
      title: "Self-Evaluation",
      description: "An honest evaluation of what you accomplished, where you felt satisfied, where you may have wanted to do more, and what you learned.",
      imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80" // Handmade ceramics
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;