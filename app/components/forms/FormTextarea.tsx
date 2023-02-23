import { generateIdAttr } from '~/utils/form-utils';

type Props = {
  defaultValue?: string;
  error?: string;
  helpText?: string;
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
};

export const FormTextarea = ({
  defaultValue = '',
  error,
  helpText,
  label,
  name,
  required = false,
  rows = 3,
}: Props) => {
  const id = generateIdAttr(`${name}-${label}`);

  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="form-required">*</span>}
      </label>
      <textarea
        name={name}
        id={id}
        defaultValue={defaultValue}
        className="form-input"
        rows={rows}
      ></textarea>
      {helpText ? <div className="form-help">{helpText}</div> : null}
      {error ? <div className="form-error">{error}</div> : null}
    </div>
  );
};
