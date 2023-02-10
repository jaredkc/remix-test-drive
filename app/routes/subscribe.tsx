import type { DataFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { z } from 'zod';
import { ValidatedFormInput, ValidatedFormSubmit } from '~/components/forms';
import { commitSession, getSession } from '~/session.server';

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

  const session = await getSession(request.headers.get('Cookie'));
  session.flash('globalMessage', `Successfully subscribed to the newsletter!`);

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function Subscribe() {
  return (
    <>
      <article className="mb-8 prose">
        <p>
          An example form using{' '}
          <a href="https://www.remix-validated-form.io/">remix-validate-form</a>
          . Includes:
        </p>
        <ul>
          <li>
            Button submitting state with{' '}
            <a href="https://www.remix-validated-form.io/reference/use-is-submitting">
              useIsSubmitting
            </a>
          </li>
          <li>
            Form validation{' '}
            <a href="https://www.remix-validated-form.io/server-validation">
              with Zod
            </a>
          </li>
        </ul>
      </article>
      <ValidatedForm validator={validator} method="post">
        <ValidatedFormInput name="firstName" label="First Name" type="text" />
        <ValidatedFormInput name="lastName" label="Last Name" type="text" />
        <ValidatedFormInput name="email" label="Email" type="email" />
        <ValidatedFormSubmit />
      </ValidatedForm>
    </>
  );
}
