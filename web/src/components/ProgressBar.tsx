interface ProgressBarProps {
  progress: number
}



export function ProgressBar(props: ProgressBarProps) {

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-cyan-600 w-3/4 transition-all duration-300"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}