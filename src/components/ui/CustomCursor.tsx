// "use client";

// import { useEffect, useState } from 'react';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hidden, setHidden] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [hovering, setHovering] = useState(false);
//   const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

//   useEffect(() => {
//     const addEventListeners = () => {
//       document.addEventListener('mousemove', onMouseMove);
//       document.addEventListener('mouseenter', onMouseEnter);
//       document.addEventListener('mouseleave', onMouseLeave);
//       document.addEventListener('mousedown', onMouseDown);
//       document.addEventListener('mouseup', onMouseUp);
      
//       // Add hover listeners to interactive elements
//       const interactiveElements = document.querySelectorAll(
//         'button, a, input, textarea, select, [role="button"], .hover-glow'
//       );
      
//       interactiveElements.forEach(el => {
//         el.addEventListener('mouseenter', () => setHovering(true));
//         el.addEventListener('mouseleave', () => setHovering(false));
//       });
//     };

//     const removeEventListeners = () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseenter', onMouseEnter);
//       document.removeEventListener('mouseleave', onMouseLeave);
//       document.removeEventListener('mousedown', onMouseDown);
//       document.removeEventListener('mouseup', onMouseUp);
//     };

//     const onMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setHidden(false);
      
//       // Add trail effect
//       if (Math.random() > 0.7) {
//         setTrail(prev => [
//           ...prev.slice(-10),
//           { x: e.clientX, y: e.clientY, id: Date.now() }
//         ]);
//       }
      
//       // Update CSS variables for light trail effects
//       document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
//       document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
//     };

//     const onMouseLeave = () => setHidden(true);
//     const onMouseEnter = () => setHidden(false);
//     const onMouseDown = () => setClicked(true);
//     const onMouseUp = () => setClicked(false);

//     addEventListeners();
//     return () => removeEventListeners();
//   }, []);

//   // Clean up trail particles
//   useEffect(() => {
//     if (trail.length > 0) {
//       const timer = setTimeout(() => {
//         setTrail(prev => prev.slice(1));
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [trail]);

//   // Don't show custom cursor on touch devices
//   if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
//     return null;
//   }

//   const cursorClasses = [
//     'custom-cursor',
//     hidden && 'cursor-hidden',
//     clicked && 'cursor-click',
//     hovering && 'cursor-hover'
//   ].filter(Boolean).join(' ');

//   return (
//     <>
//       {/* Main cursor glow */}
//       <div
//         className={cursorClasses}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
      
//       {/* Center dot */}
//       <div
//         className="custom-cursor-dot"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
      
//       {/* Outer ring */}
//       <div
//         className="custom-cursor-ring"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: `translate(-50%, -50%) scale(${hovering ? 1.2 : 1})`,
//         }}
//       />
      
//       {/* Trail particles */}
//       {trail.map((point) => (
//         <div
//           key={point.id}
//           className="mouse-trail"
//           style={{
//             left: `${point.x}px`,
//             top: `${point.y}px`,
//             '--trail-x': `${(Math.random() - 0.5) * 20}px`,
//             '--trail-y': `${(Math.random() - 0.5) * 20}px`,
//           } as React.CSSProperties}
//         />
//       ))}
      
//       {/* Sparkle particles on hover */}
//       {hovering && Math.random() > 0.5 && (
//         <div
//           className="custom-cursor-sparkle"
//           style={{
//             left: `${position.x + (Math.random() - 0.5) * 20}px`,
//             top: `${position.y + (Math.random() - 0.5) * 20}px`,
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default CustomCursor;