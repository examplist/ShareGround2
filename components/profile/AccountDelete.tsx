import { auth } from 'fb';
import { deleteUser } from 'firebase/auth';
import { useAuthStore } from 'store/auth';
import { useRouter } from 'next/router';
import { LoadStatus } from 'components/profile/Account';
import * as s from 'styles/components/AccountDelete';

export default function AccountDelete({ loadStatus }: { loadStatus: LoadStatus }) {
  const { loading, setLoading } = loadStatus;
  const router = useRouter();
  const { id: userid, changeAll } = useAuthStore();

  const click$delete = async () => {
    const answer = confirm('정말로 탈퇴하시겠습니까? 작성된 글들도 다 삭제됩니다.');
    if (!answer) {
      return;
    }
    if (!userid || !auth.currentUser) {
      alert('현재 사용자가 없습니다.');
      return;
    }
    setLoading(true);
    // auth에서 삭제
    try {
      await deleteUser(auth.currentUser);
    } catch (error) {
      console.error(error);
      alert('죄송합니다. 계정이 삭제되지 않았습니다.');
      setLoading(false);
    }
    // firestore user, 사진, 쓴 글 삭제
    const response = await fetch(`/api/user?user=${userid}`, {
      method: 'DELETE',
    });
    if (response.status !== 204) {
      alert('계정 정보가 완전히 삭제되지 않았습니다.');
    }
    // zustand
    changeAll({
      status: 'failed',
      id: null,
      name: null,
      photo: null,
    });
    // 홈페이지로
    router.push('/');
  };

  return (
    <s.Section>
      <s.Button onClick={click$delete} disabled={loading} id="delete-account-button">
        탈퇴
      </s.Button>
    </s.Section>
  );
}
