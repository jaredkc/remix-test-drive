type Props = {
  content: object | string;
};

export function Code({ content }: Props) {
  return (
    <pre className="p-4 overflow-auto text-xs text-gray-100 bg-gray-900 rounded">
      {typeof content === 'string' ? content : JSON.stringify(content, null, 2)}
    </pre>
  );
}
