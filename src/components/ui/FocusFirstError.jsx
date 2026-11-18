import { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';

/**
 * Place inside a Formik <Form>. After a submit attempt that fails validation,
 * it moves keyboard focus to the first invalid field, so keyboard and
 * screen-reader users land straight on the problem.
 */
export default function FocusFirstError() {
  const { submitCount, isSubmitting, isValid } = useFormikContext();
  const markerRef = useRef(null);
  const handledSubmitRef = useRef(0); // the last submit attempt we focused for

  useEffect(() => {
    const submitFinished = !isSubmitting && submitCount > handledSubmitRef.current;
    if (!submitFinished) return;
    handledSubmitRef.current = submitCount;
    if (isValid) return;

    // Fields with an error have aria-invalid="true" (see FormField).
    const form = markerRef.current?.closest('form');
    form?.querySelector('[aria-invalid="true"]')?.focus();
  }, [submitCount, isSubmitting, isValid]);

  // An invisible element, used only to find the surrounding <form>.
  return <span ref={markerRef} hidden />;
}
