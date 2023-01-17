export default function Index() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-light">Welcome to Remix</h1>
      <ul className="pl-4 list-disc">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="text-blue-800 underline"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="text-blue-800 underline"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="text-blue-800 underline"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
