import { DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/router';
import dateNumToStr from 'utils/dateNumToStr';
import { extAud, extDoc, extImg, extVid } from 'utils/fileExtension';
import { categoryEngToKor } from 'utils/convertCategoryLanguage';
import * as s from 'styles/components/Card';

interface Datum {
  id: string;
  info: DocumentData;
}

export default function Card({ datum }: { datum: Datum }) {
  const { fileType, title, category, date } = datum.info;
  const router = useRouter();

  let fileTypeForBorder = 'default';

  if (extAud.includes(fileType)) {
    fileTypeForBorder = 'aud';
  }
  if (extDoc.includes(fileType)) {
    fileTypeForBorder = 'doc';
  }
  if (extImg.includes(fileType)) {
    fileTypeForBorder = 'img';
  }
  if (extVid.includes(fileType)) {
    fileTypeForBorder = 'vid';
  }

  const click$article = () => {
    router.push(`/article/${datum.id}`);
  };

  return (
    <s.Card type={fileTypeForBorder} onClick={click$article} id="article-card">
      <s.FileType>{fileType ?? '파일 없음'}</s.FileType>
      <s.Title id="article-card__title">{title}</s.Title>
      <s.Others id="article-card__others">
        {categoryEngToKor(category)}, {dateNumToStr(date)}
      </s.Others>
    </s.Card>
  );
}
