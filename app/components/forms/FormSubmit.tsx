import { useIsSubmitting } from 'remix-validated-form';

export const FormSubmit = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex justify-center w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};
