// This is a simple node script to generate Mac-style icons
// It uses canvas to draw the icons
// Run this script with node to generate icons
// Usage: node generateIcons.js

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Function to create an icon
function createIcon(name, color, text, outputPath) {
  // Create a 256x256 canvas
  const canvas = createCanvas(256, 256);
  const ctx = canvas.getContext('2d');

  // Draw a rounded rectangle
  ctx.beginPath();
  ctx.moveTo(28, 28);
  ctx.lineTo(228, 28);
  ctx.quadraticCurveTo(256, 28, 256, 56);
  ctx.lineTo(256, 200);
  ctx.quadraticCurveTo(256, 228, 228, 228);
  ctx.lineTo(28, 228);
  ctx.quadraticCurveTo(0, 228, 0, 200);
  ctx.lineTo(0, 56);
  ctx.quadraticCurveTo(0, 28, 28, 28);

  // Set the background color with a gradient
  const gradient = ctx.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, lightenColor(color, 20));
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw the text
  ctx.font = 'bold 90px sans-serif';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 128);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);

  console.log(`Created ${outputPath}`);
}

// Helper function to lighten a color
function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  return '#' + (
    0x1000000 +
    (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)
  ).toString(16).slice(1);
}

// Icons to create
const icons = [
  { name: 'finder', color: '#1E88E5', text: 'F' },
  { name: 'about', color: '#43A047', text: 'A' },
  { name: 'projects', color: '#E53935', text: 'P' },
  { name: 'skills', color: '#FF9800', text: 'S' },
  { name: 'github', color: '#333333', text: 'G' },
  { name: 'mail', color: '#00ACC1', text: 'M' },
  { name: 'linkedin', color: '#0077B5', text: 'L' },
  { name: 'settings', color: '#757575', text: 'S' },
  { name: 'resume', color: '#9C27B0', text: 'R' },
  { name: 'folder', color: '#FFC107', text: 'F' },
  { name: 'document', color: '#2196F3', text: 'D' },
  { name: 'apple-logo', color: '#333333', text: '' },
];

// Create the icons
icons.forEach(icon => {
  createIcon(
    icon.name,
    icon.color,
    icon.text,
    path.join(__dirname, '../../public/icons', `${icon.name}.png`)
  );
});
