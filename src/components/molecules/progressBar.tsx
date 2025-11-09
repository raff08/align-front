export const ProgressBar = ({ progress, current, total }: { progress: number; current: string; total: string; }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-400 mb-1">
      <span>{current}</span>
      <span>{total}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-[#D2FD9C] h-2.5 rounded-full transition-all duration-500" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);