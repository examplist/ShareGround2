import { useState } from 'react';
import AccountName from 'components/profile/AccountName';
import AccountPhoto from 'components/profile/AccountPhoto';
import AccountDelete from 'components/profile/AccountDelete';
import * as s from 'styles/components/Account';

export interface LoadStatus {
  loading: boolean;
  setLoading: (status: boolean) => void;
}

export default function Account() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <s.Section>
      <AccountPhoto loadStatus={{ loading, setLoading }} />
      <AccountName loadStatus={{ loading, setLoading }} />
      <AccountDelete loadStatus={{ loading, setLoading }} />
    </s.Section>
  );
}
