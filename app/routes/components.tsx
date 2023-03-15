import type { DataFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FormSubmit } from '~/components/forms';
import { Modal } from '~/components/Modal';
import { commitSession, getSession } from '~/session.server';

export const meta: MetaFunction = () => {
  return { title: 'Loader template' };
};

export const action = async ({ request }: DataFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const date = new Date();
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  session.flash('globalMessage', `👋 Saying hello at ${time}`);

  return new Response(null, {
    status: 200,
    headers: { 'Set-Cookie': await commitSession(session) },
  });
};

export default function Components() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      <h1>Available components</h1>
      <h2>Display a global message</h2>
      <Form method="post">
        <FormSubmit label="Say hello" />
      </Form>
      <h2>Modal</h2>
      <button onClick={handleModalOpen} className="btn">
        Open modal
      </button>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal handleClose={handleModalClose}>
            <p>Hello Modal</p>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
