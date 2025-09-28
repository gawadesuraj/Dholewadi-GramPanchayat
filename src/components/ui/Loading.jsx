function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
