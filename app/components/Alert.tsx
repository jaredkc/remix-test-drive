type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Alert = ({ title, children }: Props) => {
  return (
    <div className="p-4 mb-6 rounded-md bg-green-50">
      <h3 className="text-sm font-medium text-green-800">{title}</h3>
      {children && (
        <div className="mt-2 text-xs text-green-700">{children}</div>
      )}
    </div>
  );
};
