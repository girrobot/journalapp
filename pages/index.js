import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mood, setMood] = useState('😊');

  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  return (
    <div>
      <h1>Welcome to ADHDaily!</h1>
      <div>
        <h2>How are you feeling today?</h2>
        <div>
          {['😊', '😐', '😔'].map((emoji) => (
            <button key={emoji} onClick={() => handleMoodChange(emoji)}>
              {emoji}
            </button>
          ))}
        </div>
        <p>Selected Mood: {mood}</p>
      </div>
      <Link href="/journal">
        <button>Start Journaling</button>
      </Link>
    </div>
  );
}
