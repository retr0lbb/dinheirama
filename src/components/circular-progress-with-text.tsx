export function CircularProgressWithText({
  percentage,
}: { percentage: number }) {
  const gradientStyle = {
    background: `conic-gradient(#72B01D ${percentage}%, #0A0A0A ${percentage}% 100%)`,
  }

  return (
    <div
      className="size-64 rounded-full flex items-center justify-center border border-snow-800"
      style={gradientStyle}
    >
      <div className="size-60 bg-snow-900 rounded-full flex items-center justify-center border border-snow-800/30">
        <div>
          <p className="text-5xl font-bold text-snow-400">2/10</p>
          <p className="text-snow-600 text-center">{percentage}%</p>
        </div>
      </div>
    </div>
  )
}
