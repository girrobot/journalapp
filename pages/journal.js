import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

export default function Journal() {
  const [entry, setEntry] = useState('');

  const handleSaveEntry = async () => {
    const { data, error } = await supabase
      .from('entries')
      .insert([{ content: entry, mood: '😊', user_id: 'user-id' }]);

    if (error) {
      console.error('Error saving entry:', error);
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
      <button onClick={handleSaveEntry}>Save Entry</button>
    </div>
  );
}
