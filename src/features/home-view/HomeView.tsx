import {useBalance} from '~/hook';
import {Header} from '~/shared';
import styles from './styles.module.scss';

type Props = {
  onTransactionRedirect: VoidFunction;
};

export const HomeView = ({onTransactionRedirect}: Props) => {
  const {address, balance, isLoading} = useBalance();

  return (
    <div>
      <Header>
        {isLoading ? (
          <p>...Loading</p>
        ) : (
          <p className={styles.text}>{balance ? `Balance: ${balance} TON` : 'Welcome'}</p>
        )}
      </Header>
      <div className={styles.wrapper}>
        <p className={styles.address}>Address: {address}</p>
        <button className={styles.button} onClick={onTransactionRedirect}>
          Send transaction
        </button>
      </div>
    </div>
  );
};
