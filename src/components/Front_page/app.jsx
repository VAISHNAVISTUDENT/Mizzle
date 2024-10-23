// "use client"; // Mark this component as a Client Component

// import React, { useEffect, useState } from 'react';

// const Typewriter = () => {
//   const texts = ['Web Design', 'Web Dev', 'UI/UX']; // Array of texts
//   const [displayText, setDisplayText] = useState(''); // Current text being displayed
//   const [index, setIndex] = useState(0); // Index of the current text
//   const [isDeleting, setIsDeleting] = useState(false); // Flag to indicate if we're deleting
//   const typingSpeed = 100; // Slower speed of typing (milliseconds)
//   const deletingSpeed = 60; // Slower speed of deleting (milliseconds)
//   const pauseDuration = 2000; // Shorter pause duration after typing (milliseconds)

//   useEffect(() => {
//     let timeoutId;

//     const handleType = () => {
//       const currentText = texts[index];

//       if (isDeleting) {
//         // Remove a character
//         setDisplayText((prevText) => prevText.slice(0, -1));

//         // Check if we've finished deleting the current word
//         if (displayText === '') {
//           setIsDeleting(false);
//           setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next word
//           timeoutId = setTimeout(handleType, typingSpeed); // Pause before typing the next word
//           return;
//         }
//       } else {
//         // Add a character
//         setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));

//         // Check if we've finished typing the current word
//         if (displayText === currentText) {
//           setIsDeleting(true); // Start deleting
//           timeoutId = setTimeout(handleType, pauseDuration); // Pause before deleting
//           return;
//         }
//       }

//       // Determine speed based on typing or deleting
//       const speed = isDeleting ? deletingSpeed : typingSpeed;
//       timeoutId = setTimeout(handleType, speed); // Call handleType after speed duration
//     };

//     handleType(); // Start the typing effect

//     // Cleanup function to avoid memory leaks
//     return () => {
//       clearTimeout(timeoutId); // Clear timeout on unmount
//     };
//   }, [displayText, index, isDeleting]); // Dependencies array

//   return (
//     <h1 className="mt-3 lh-base">
//       Creative studio focused on{" "}
//       <span className="cd-headline clip big-clip is-full-width text-primary mb-0 d-block d-xxl-inline-block">
//         <span id="type1" className="text-success">{displayText}</span>
//         <span className="ityped-cursor text-success">|</span>
//       </span>
//     </h1>
//   );
// };

// export default Typewriter;
"use client";

import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts, period = 2000 }) => {
  const [displayText, setDisplayText] = useState(''); // Current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Flag to indicate if we're deleting
  const [loopNum, setLoopNum] = useState(0); // Loop counter to iterate over texts
  const [delta, setDelta] = useState(200 - Math.random() * 100); // Initial typing speed

  useEffect(() => {
    const tick = () => {
      const i = loopNum % texts.length;
      const fullTxt = texts[i];

      // Update the displayed text based on whether we're deleting or adding characters
      if (isDeleting) {
        setDisplayText((prevText) => fullTxt.substring(0, prevText.length - 1));
      } else {
        setDisplayText((prevText) => fullTxt.substring(0, prevText.length + 1));
      }

      // Adjust the typing speed for deletion and completion cases
      let updatedDelta = delta;
      if (isDeleting) {
        updatedDelta /= 2;
      }

      // Check if the text is fully typed or deleted and update the state accordingly
      if (!isDeleting && displayText === fullTxt) {
        updatedDelta = period;
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        updatedDelta = 500;
      }

      setDelta(updatedDelta);
    };

    // Set up the typing effect with a timeout
    const timeoutId = setTimeout(() => {
      tick();
    }, delta);

    // Cleanup function to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [displayText, delta, isDeleting, loopNum, texts, period]);

  return (
    <h1 className="typewrite">
      <span className="wrap">{displayText}</span>
      <span className="cursor">|</span>
    </h1>
  );
};

// Usage of the Typewriter component
const App = () => {
  const texts = ['Web Design', 'Web Development', 'UI/UX']; // Array of texts to rotate

  return (
    <div>
      <Typewriter texts={texts} period={2000} />
    </div>
  );
};

export default App;
