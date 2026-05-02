export default function Star() {
  // const colors = ['#f5f2f3', '#e8e2e4', '#d6cfd2', '#c4b8bc', '#b3a6ab'];
  const colors = [
    '#8f5f6b',
    '#b07a87',
    '#c48f9b',
    '#d9a1ad',
    '#e8bfc7',
    '#f3d6dc',
    '#fae9ed',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <svg style={{ width: '22px', height: '22px' }} viewBox="0 0 100 100">
      <path
        d="M50 0 C50 0 54 35 100 50 C54 65 50 100 50 100 C50 100 46 65 0 50 C46 35 50 0 50 0Z"
        fill={randomColor}
      />
    </svg>
  );
}
// rgba(200, 182, 226, 1)
