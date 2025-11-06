export function Pattern({ className, children }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)',
      }}
    >
      {children && children}
    </div>
  );
}
