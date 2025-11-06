export function Pattern({className, children}: {className?: string, children?: React.ReactNode}) {
  return (
    <div
        className={className}
        style={{
				  backgroundImage: 'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)'
				}}
      >
			{children && children}
		</div>
  );
}