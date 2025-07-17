import "./adjust.css"

export default function BiBoxLoader() {
  return (
    <div className="loader-wrapper">
      <svg width="60" height="60" className="square-loader">
        <rect
          x="5" y="5" width="50" height="50"
          rx="4" ry="4"
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="5"
        />

        <rect
          x="5" y="5" width="50" height="50"
          rx="4" ry="4"
          fill="none"
          stroke="#81e3b4"
          strokeWidth="5"
          strokeDasharray="200"
          strokeDashoffset="200"
          className="svg-tracer"
        />
      </svg>
    </div>
  );
}
