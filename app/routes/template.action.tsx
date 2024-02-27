import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { FormCheckbox, FormInput, FormSubmit } from '~/components/forms';
import { Alert } from '~/components/Alert';
import { ErrorBanner } from '~/components/ErrorBanner';

export const meta: MetaFunction = () => [{ title: 'Action template' }];

//
// server-side
//
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  // Get form values like this...
  const data = Object.fromEntries(formData);
  const { name, error } = data;
  // Or like this...
  // const name = formData.get('name');

  // TODO: remove this, it's just to show the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Check required fields
  if (!name) return json({ message: 'Missing required fields' });

  if (error === 'yes') throw new Error('This is an error');

  return json({ message: `Hello ${name}` });
};

//
// client-side
//
export default function ActionTemplate() {
  const data = useActionData<typeof action>();

  return (
    <div>
      <p className="mb-4">
        This is a starter template for handling a Form, Action and ErrorBoundry.
      </p>

      {data ? <Alert title={data.message} type="success" /> : null}

      <Form method="post" className="flex flex-col gap-4">
        <FormInput label="What is your name?" name="name" required />
        <FormCheckbox label="Thrown an error?" name="error" value="yes" />
        <FormSubmit label="Submit" />
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorBanner />;
}
