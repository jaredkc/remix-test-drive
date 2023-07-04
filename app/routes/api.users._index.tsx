export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = {
    message: 'Users data provided by jsonplaceholder.typicode.com',
    data: await response.json()
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
