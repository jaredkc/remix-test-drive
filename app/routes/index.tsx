export default function Index() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-light mb-4">Welcome to Remix</h1>
      <ul className="list-disc pl-4">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="underline text-blue-800"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="underline text-blue-800"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="underline text-blue-800"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
