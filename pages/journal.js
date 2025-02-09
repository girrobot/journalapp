import { useMood } from '../context/MoodContext'; // Import MoodContext
import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

export default function Journal() {
  const { mood } = useMood(); // Get mood from context
  const [entry, setEntry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSaveEntry = async () => {
    if (!entry.trim()) {
      alert("Please enter your journal entry.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('entries')
      .insert([{ content: entry, mood, user_id: 'user-id' }]); // Use global mood state

    setLoading(false);

    if (error) {
      console.error('Error saving entry:', error);
      alert("Failed to save entry.");
    } else {
      console.log('Entry saved:', data);
      setEntry('');
    }
  };

  return (
    <div>
      <h1>Today’s Journal</h1>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How are you feeling today?"
      />

      <p>Selected Mood: {mood}</p>

      <button onClick={handleSaveEntry} disabled={loading}>
        {loading ? "Saving..." : "Save Entry"}
      </button>
    </div>
  );
}
