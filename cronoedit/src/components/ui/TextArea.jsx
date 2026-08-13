export default function TextArea({
  label,
  ...props
}) {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}

      <textarea {...props} />
    </div>
  );
}