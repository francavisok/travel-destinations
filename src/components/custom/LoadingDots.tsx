export const LoadingDots = () => {
  return (
    <div className="flex items-center justify-center space-x-1 pt-5 pb-7">
      <span className="w-2 h-2 bg-primary rounded-full animate-bounceHigh [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounceHigh [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-primary rounded-full animate-bounceHigh" />
    </div>
  );
}
