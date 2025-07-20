const ShinyText = ({ text, disabled = false, speed = 15, className = '' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-transparent text-5xl md:text-6xl font-extrabold bg-clip-text inline-block whitespace-nowrap overflow-visible ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, #18181b 40%, #fff 50%, #18181b 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;