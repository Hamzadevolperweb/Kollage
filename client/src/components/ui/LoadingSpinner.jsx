function LoadingSpinner() {
  return (
    <div className="flex min-h-[65vh] items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-purple border-t-transparent" />
    </div>
  );
}

export default LoadingSpinner;
