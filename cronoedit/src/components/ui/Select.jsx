export default function Select({
  label,
  children,
  ...props
}) {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}

      <select {...props}>
        {children}
      </select>
    </div>
  );
}