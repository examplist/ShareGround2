import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

interface ArticleParams {
  fileType: string | null | undefined;
  fileBuffer: number[] | null;
  category: string;
  title: string;
  explanation: string;
}

interface CreateArticleParams extends ArticleParams {
  userid: string;
}

interface EditArticleParams extends ArticleParams {
  id: string;
  prevFileRef: string;
}

export function useArticleCreate() {
  const createArticle = async (input: CreateArticleParams) => {
    const { userid, fileType, fileBuffer, category, title, explanation } = input;
    const { data } = await axios.post(`/api/articles`, {
      fileType,
      fileBuffer,
      userid,
      category,
      title,
      explanation,
    });
    return data;
  };

  return useMutation(createArticle);
}

export function useArticleEditGetData(id: string) {
  const getArticle = async () => {
    const { data } = await axios.get(`/api/articles?ar=${id}`);
    return data;
  };

  return useQuery('get data for edit', getArticle, {
    cacheTime: 0,
  });
}

export function useArticleEdit() {
  const editArticle = async (input: EditArticleParams) => {
    const { id, prevFileRef, fileType, fileBuffer, category, title, explanation } = input;
    const { data } = await axios.put(`/api/articles?ar=${id}`, {
      prevFileRef,
      fileType,
      fileBuffer,
      category,
      title,
      explanation,
    });
    return data;
  };

  return useMutation(editArticle);
}

export function useArticleDelete() {
  const deleteArticle = async ({ id, file }: { id: string; file: string }) => {
    await axios.delete(`/api/articles?ar=${id}&fi=${file}`);
  };

  return useMutation(deleteArticle);
}
