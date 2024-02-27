import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import clsx from 'clsx';
import { z } from 'zod';
import { Alert } from '~/components/Alert';
import { FormSubmit } from '~/components/forms';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const meta: MetaFunction = () => [{ title: 'Action template' }];

//
// server-side
//
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  return json(submission.reply());

  // Alternatively, you can check the status of the submission and return a redirect
  // if (submission.status !== 'success') {
  //   return json(submission.reply());
  // }
  // return redirect('/');
};

//
// client-side
//
export default function ConformTemplate() {
  // Last submission returned by the server
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
  });

  return (
    <div>
      <p className="mb-4">Starter template for using Confirm for type-safe form validation.</p>

      {lastResult ? (
        <Alert
          title={`Hello ${lastResult.initialValue?.email}`}
          type={lastResult.status === 'success' ? 'success' : 'error'}
        />
      ) : null}

      <Form method="post" className="flex flex-col gap-4" {...getFormProps(form)}>
        <div>
          <label className="form-label">Email</label>
          <input
            className={clsx('form-input', !fields.email.valid ? 'error' : '')}
            {...getInputProps(fields.email, { type: 'email' })}
          />
          <div className="form-error">{fields.email.errors}</div>
        </div>
        <div>
          <label className="form-label">Password</label>
          <input
            className={clsx('form-input', !fields.password.valid ? 'error' : '')}
            {...getInputProps(fields.password, { type: 'password' })}
          />
          <div className="form-error">{fields.password.errors}</div>
        </div>
        <FormSubmit label="Submit" />
      </Form>
    </div>
  );
}
