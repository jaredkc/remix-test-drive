import type { ActionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { FormCheckbox, FormInput, FormSubmit } from '~/components/forms';
import { Alert } from '~/components/Alert';

const pageTitle = 'Action boilerplate';
export const meta: MetaFunction = () => {
  return { title: pageTitle };
};

//
// server-side
//
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  // Get form values like this...
  const data = Object.fromEntries(formData);
  const { name, error } = data;
  // Or like this...
  // const name = formData.get('name');

  // Check required fields
  if (!name) return json({ message: 'Missing required fields' });

  if (error === 'yes') throw new Error('This is an error');

  return json({ message: `Hello ${name}` });
};

//
// client-side
//
export default function ActionBoilerplate() {
  const data = useActionData();

  return (
    <div>
      <p className="mb-4">
        This is a starter template for handling a Form, Action and ErrorBoundry.
      </p>

      {data ? <Alert title={data.message} type="success" /> : null}

      <Form method="post" className="flex flex-col gap-4">
        <FormInput label="Full name" name="name" defaultValue="Bob" required />
        <FormCheckbox label="Thrown an error?" name="error" value="yes" />
        <FormSubmit label="Submit" />
      </Form>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Alert title="Whoops!" type="error">
      <h2 className="mt-4 font-bold text-md">{error.message}</h2>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </Alert>
  );
}
