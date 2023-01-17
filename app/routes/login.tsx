import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { z } from 'zod';
import { Alert } from '~/components/Alert';
import { FormInput, FormSubmit } from '~/components/forms';
import { FormPassword } from '~/components/forms/FormPassword';

export const validator = withZod(
  z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
    password: z.string().min(12, { message: 'A secure password is required' }),
  })
);

export const action = async ({ request }: DataFunctionArgs) => {
  const result = await validator.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const { email, password } = result.data as Record<string, any>;

  return json({
    title: `Hi ${email}!`,
    description: `Your email is ${password}`,
  });
};

export default function Login() {
  const data = useActionData();

  return (
    <ValidatedForm id="newUser" validator={validator} method="post">
      <p>
        A slightly more complex form. Includes functionality to see and generate
        a password.
      </p>
      {data && (
        <Alert title={data.title}>
          <p>{data.description}</p>
        </Alert>
      )}
      <FormInput name="email" label="Email" type="email" />
      <FormPassword />
      <FormSubmit />
    </ValidatedForm>
  );
}
