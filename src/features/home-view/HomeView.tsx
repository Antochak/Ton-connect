import {useTonConnectModal} from '@tonconnect/ui-react';
import {useBalance} from '~/hook';
import {Header} from '~/shared';
import styles from './styles.module.scss';

type Props = {
  onTransactionRedirect: VoidFunction;
};

export const HomeView = ({onTransactionRedirect}: Props) => {
  const {address, balance, isLoading} = useBalance();
  const {open} = useTonConnectModal();
  const roundedBalance = +(Math.round(Number((balance || 0) + 'e+2')) + 'e-2');

  return (
    <div>
      <Header>
        {isLoading ? (
          <p>...Loading</p>
        ) : (
          <p className={styles.text}>{balance ? `Balance: ${roundedBalance} TON` : 'Welcome'}</p>
        )}
      </Header>
      <div className={styles.wrapper}>
        <p className={styles.address}>Address: {address}</p>
        <button className={styles.button} onClick={balance ? onTransactionRedirect : open}>
          Send transaction
        </button>
      </div>
    </div>
  );
};
