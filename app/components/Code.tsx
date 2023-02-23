type Props = {
  content: object | string;
  isOpen?: boolean;
};

export default function Code({ content, isOpen }: Props) {
  return (
    <details className="my-2" open={isOpen}>
      <summary className="cursor-pointer">Data</summary>
      <pre className="p-4 overflow-auto font-mono text-sm bg-white border">
        {typeof content === 'string'
          ? content
          : JSON.stringify(content, null, 2)}
      </pre>
    </details>
  );
}
