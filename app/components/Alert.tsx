type Props = {
  title: string;
  children?: React.ReactNode;
  type: 'success' | 'error';
};

export const Alert = ({ title, children, type }: Props) => {
  const color = type === 'success' ? 'green' : 'red';
  return (
    <div className={`p-4 mb-6 rounded-md bg-${color}-50`}>
      <h3 className={`text-sm font-medium text-${color}-800`}>{title}</h3>
      {children && (
        <div className={`mt-2 text-xs text-${color}-700`}>{children}</div>
      )}
    </div>
  );
};
