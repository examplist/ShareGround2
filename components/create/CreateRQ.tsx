import { useSearchStore } from 'store/search';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useArticleCreate } from 'hooks/article';
import * as s from 'styles/components/Write';

export default function Create({ userid }: { userid: string }) {
  const { add: addToSearch } = useSearchStore();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const refSubmit = useRef<HTMLInputElement>(null);
  const refFile = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  let loading = false;
  const { isLoading, isError, mutate, data } = useArticleCreate();

  useEffect(() => {
    if (data) {
      addToSearch(data.newSearchList);
      router.push(`/article/${data.id}`);
    }
  }, [data]);

  if (isLoading) {
    loading = true;
  }

  if (isError) {
    alert('죄송합니다. 저장되지 않았습니다.');
    loading = false;
  }

  const click$cancel = () => {
    router.push('/');
  };
  const click$submit = () => {
    refSubmit.current?.click();
  };
  const click$file = () => {
    refFile.current?.click();
  };
  const change$file = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    // 업로드를 취소한 경우
    if (!event.target.files[0]) {
      setFileName('');
      return;
    }

    setFileName(event.target.files[0].name);
  };

  const submit$form: SubmitHandler<FieldValues> = async ({
    category,
    title,
    explanation,
  }) => {
    if (category === '') {
      alert('카테고리를 선택하셔야 합니다!');
      return;
    }
    if (title === '') {
      alert('제목을 입력하셔야 합니다!');
      return;
    }

    let fileType = null;
    let fileBuffer = null;
    if (refFile.current?.files) {
      if (refFile.current.files[0]) {
        fileType = refFile.current?.files[0].name.split('.').at(-1);
        const buffer = await refFile.current.files[0].arrayBuffer();
        const bufferUnit8 = new Uint8Array(buffer);
        fileBuffer = Array.from(bufferUnit8);
      }
    }

    mutate({
      fileType,
      fileBuffer,
      userid,
      category,
      title,
      explanation,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit$form)}>
        <s.Select>
          <label htmlFor="create__category">카테고리:</label>
          <select id="create__category" {...register('category')}>
            <option value="">선택하세요.</option>
            <option value="society">사회</option>
            <option value="science">과학기술</option>
            <option value="culture">문화</option>
          </select>
        </s.Select>
        <s.Title
          type={'text'}
          {...register('title')}
          placeholder={'제목을 입력하세요.'}
          id="create__title"
        />
        <s.Explanation
          {...register('explanation')}
          placeholder={'설명을 입력하세요.'}
          id="create__explanation"
        ></s.Explanation>
        <input type={'submit'} hidden ref={refSubmit} />
      </form>
      <s.File>
        <input
          type={'file'}
          hidden
          onChange={change$file}
          ref={refFile}
          id="create__file"
        />
        <button onClick={click$file} disabled={loading}>
          파일 업로드
        </button>
        <div>업로드된 파일: {fileName}</div>
      </s.File>
      <s.Buttons>
        <button onClick={click$cancel} disabled={loading}>
          취소
        </button>
        <button onClick={click$submit} disabled={loading} id="create__submit">
          제출
        </button>
      </s.Buttons>
    </>
  );
}
