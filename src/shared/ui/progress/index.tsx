import "./styles.scss";

interface ProgressProps {
  width: string;
}

export const Progress = ({ width }: ProgressProps) => {
  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress-bar__thumb" style={{ width }}></div>
    </div>
  );
};
