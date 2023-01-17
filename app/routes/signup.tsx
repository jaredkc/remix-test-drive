import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { z } from 'zod';
import { Alert } from '~/components/Alert';
import { FormInput, FormSubmit } from '~/components/forms';

export const validator = withZod(
  z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email('Must be a valid email'),
  })
);

export const action = async ({ request }: DataFunctionArgs) => {
  const result = await validator.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const { firstName, lastName, email } = result.data as Record<string, any>;

  return json({
    title: `Hi ${firstName} ${lastName}!`,
    description: `Your email is ${email}`,
  });
};

export default function SignUp() {
  const data = useActionData();

  return (
    <ValidatedForm validator={validator} method="post">
      <p>
        A basic form with remix-validate-form. Check out how much less code is
        needed.
      </p>
      {data && (
        <Alert title={data.title}>
          <p>{data.description}</p>
        </Alert>
      )}
      <FormInput name="firstName" label="First Name" type="text" />
      <FormInput name="lastName" label="Last Name" type="text" />
      <FormInput name="email" label="Email" type="email" />
      <FormSubmit />
    </ValidatedForm>
  );
}
