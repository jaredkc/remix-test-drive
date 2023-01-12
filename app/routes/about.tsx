import { Link } from '@remix-run/react';

export default function About() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-light">About page</h1>
      <p className="text-xl font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, praesen
        tium! Modi distinctio veritatis in quibusdam fugiat id ipsa, voluptas
        animi quis dolores repellat vitae.
      </p>
      <hr className="my-8" />
      <Link
        to="/"
        className="text-sm tracking-wide text-gray-600 uppercase hover:underline hover:text-blue-600"
      >
        Go home
      </Link>
    </div>
  );
}
