import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as s from 'styles/components/CommentForm';

export default function CommentForm({
  writerid,
  articleid,
}: {
  writerid: string;
  articleid: string;
}) {
  const { register, handleSubmit, formState, reset } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        comment: '',
      });
    }
  }, [formState]);

  const submit$form: SubmitHandler<FieldValues> = async ({ content }) => {
    setLoading(true);
    if (content === '') {
      alert('글을 입력하셔야 합니다!');
      setLoading(false);
      return;
    }
    const response = await fetch(`/api/comment?article=${articleid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, writerid }),
    });
    if (response.status !== 204) {
      alert('죄송합니다. 등록을 하지 못했습니다.');
      setLoading(false);
      return;
    }
    location.reload();
  };

  return (
    <s.Form onSubmit={handleSubmit(submit$form)} id="comment-form">
      <s.Content type={'text'} {...register('content')} id="comment-form__content" />
      <s.Submit
        type={'submit'}
        disabled={loading}
        value={'전송'}
        id="comment-form__submit"
      />
    </s.Form>
  );
}
