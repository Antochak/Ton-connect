import axios, {AxiosResponse} from 'axios';

export const fetchTonBalance = async (address: string): Promise<number> => {
  const url = `https://testnet.toncenter.com/api/v2/getAddressBalance?address=${address}`;
  const apiKey = process.env.NEXT_PUBLIC_TONCENTER_API_KEY;

  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        'X-API-Key': apiKey,
      },
    });

    if (response.status !== 200 || !response.data.ok) {
      throw new Error(`Error fetching balance: ${response.status}`);
    }

    return parseInt(response.data.result, 10) / 1e9;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

// To get testnet tokens https://faucet.tonfura.com/
export const fetchTestnetTonBalance = async (address: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TON_API_KEY;
  const url = `https://mainnet-rpc.tonxapi.com/v2/json-rpc/${apiKey}`;

  try {
    const response: AxiosResponse = await axios.post(
      url,
      {
        jsonrpc: '2.0',
        method: 'getAccountBalance',
        params: {address},
        id: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status !== 200 || !response.data.ok) {
      throw new Error(`Error fetching balance: ${response.status}`);
    }

    const nanotonsBalance = response.data.result.balance;
    const TONBalance = nanotonsBalance / 1e9;
    return TONBalance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};
