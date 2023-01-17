import { ValidatedForm, validationError } from 'remix-validated-form';
import { withZod } from '@remix-validated-form/with-zod';
import { z } from 'zod';
import { FormInput, FormSubmit } from '~/components/forms';
import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';

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

export default function SettingsPage() {
  const data = useActionData();

  return (
    <ValidatedForm validator={validator} method="post">
      <FormInput name="firstName" label="First Name" type="text" />
      <FormInput name="lastName" label="Last Name" type="text" />
      <FormInput name="email" label="Email" type="email" />
      {data && (
        <div>
          {data.title}, {data.description}
        </div>
      )}
      <FormSubmit />
    </ValidatedForm>
  );
}
