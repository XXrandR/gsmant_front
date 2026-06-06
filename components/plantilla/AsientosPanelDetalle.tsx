export function AsientosPanelDetalle() {
  return (
    <div className="flex justify-center pt-6">
      <div className="grid grid-cols-4 gap-3">
        {Array.from({
          length: 20,
        }).map((_, i) => (
          <div key={i}>
            <div
              key={`left-${i}`}
              className="w-6 h-6 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-xs"
            >
              {i * 2 + 1}
            </div>
            <div
              key={`left2-${i}`}
              className="w-6 h-6 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-xs"
            >
              {i * 2 + 2}
            </div>
            <div />
            <div
              key={`right-${i}`}
              className="w-6 h-6 rounded-lg bg-success/20 border border-success flex items-center justify-center text-xs"
            >
              {i * 2 + 3}
            </div>
            <div
              key={`right2-${i}`}
              className="w-6 h-6 rounded-lg bg-success/20 border border-success flex items-center justify-center text-xs"
            >
              {i * 2 + 4}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
