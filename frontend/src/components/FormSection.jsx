export const FormSection = ({ title, children, description }) => {
  return (
    <div className="form-section">
      <div className="section-header">
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export const FormGroup = ({ label, children, required = false, hint = '' }) => {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      {hint && <small className="form-hint">{hint}</small>}
      <div className="form-field">{children}</div>
    </div>
  );
};

export const FormRow = ({ children }) => {
  return <div className="form-row">{children}</div>;
};
