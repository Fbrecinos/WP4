import React from 'react';
import FlipCard from './FlipCard';
import Gallery from './Gallery';

// 1. Import your media
import clarityImg from './assets/clarity.jpg';
import writingImg from './assets/writing.jpg';
import creativityVid from './assets/creativity.mp4';
import evaluationImg from './assets/evaluation.jpg';
import brokenArm from './assets/brokenArm.jpg';
import bowling from './assets/bowling.jpg';
import christmasExchange from './assets/christmasExchange.jpg';
import disneyEro from './assets/disneyEro.jpg';
import disneyMickey from './assets/disneyMickey.jpg';
import disneyStanding from './assets/disneyStandign.jpg';
import doggie from './assets/doggieChrist.jpg';
import smallWorld from './assets/itSmall.jpg';
import walk from "./assets/walk.jpg";
import blurry from "./assets/blurry.jpg";
import hat from "./assets/hat.jpg";
import pluto from "./assets/pluto.jpg";


function App() {
  const cardData = [
    {
      title: "Clarity of Thought",
      description: "I contribute where I am at today to my family, and how supportive they have been in my life. Even though I am considered an adult and have responsibilities, I’m still their child. This picture was taken when I was 4 years old at my preschool. Today, it is a reminder of where I started and the family I have.",
      imageUrl: clarityImg
    },
    {
      title: "Effective Reflective Writing",
      description: "I got this award when I was in 2nd grade. It shows that there are things that I need to work on and shows that hard work pays off. I don’t get physical awards that recognize accomplishments, but I can enjoy the small changes.",
      imageUrl: writingImg
    },
    {
      title: "Creativity",
      description: "I understand that life is stressful and filled with responsibilities. However, I’ve learned that everything is not that serious. Even in my master's computer science courses, the professor plays techno music to help everybody relax. It serves as a reminder to take time for myself and to take things one step at a time.",
      imageUrl: creativityVid, // Use the video variable here
      isVideo: true            // ADD THIS LINE so the card knows it's a video!
    },
    {
      title: "Self-Evaluation",
      description: "Before I leave college, there is so much I have to do and so many expectations from my family for me to be successful. From everything I've learned, it takes time and involves unexpected hurdles. With every obstacle and rejection, I keep trying.",
      imageUrl: evaluationImg
    }
  ];

  const galleryData = [
    { type: 'image', src: brokenArm },
    { type: 'image', src: bowling },
    { type: 'image', src: christmasExchange },
    { type: 'image', src: disneyEro },
    { type: 'image', src: disneyMickey },
    { type: 'image', src: disneyStanding },
    { type: 'image', src: doggie },
    { type: 'image', src: smallWorld },
    { type: 'image', scr: hat},
    { type: 'image', scr: blurry},
    { type: 'image', scr: walk},
    { type: 'image', scr: pluto}
    // You can add as many as you want here!
    // { type: 'image', src: extraPhoto }, 
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
     {/* 4. Drop the Gallery in right here! */}
        <Gallery mediaItems={galleryData} />

      </div>
    </div>
  );
}

export default App;