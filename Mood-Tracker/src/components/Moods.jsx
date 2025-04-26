import { useState } from 'react';

function Moods() {
  const moods = ['happy', 'sad', 'awesome', 'sleepy'];
  const [mood, setMood] = useState('happy');

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    alert(`Your mood is ${newMood}`);
  };

  return (
    <div>
      {moods.map((m, index) => (
        <button key={index} onClick={() => handleMoodChange(m)}>
          {m}
        </button>
      ))}
      <h2>Your current mood: {mood || "None"}</h2>
    </div>
  );
}

export default Moods;
