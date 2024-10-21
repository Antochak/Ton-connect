# TON Connect Wallet Application

This application allows users to connect their wallets and send transactions on the TON network.

## Application Features

- Wallet connection (e.g., Tonkeeper) via TonConnect.
- Sending transactions on the TON Testnet.
- Displaying and retrieving the TON balance.

## Installation and Setup

### Prerequisites:

- Node.js version 16 or higher
- Yarn (https://yarnpkg.com/)

### Steps to deploy locally:

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-name>
   yarn
   yarn dev
The application will be available at: http://localhost:3000
Environment variables (if applicable):
If your application uses environment variables (e.g., for connecting to the TON Testnet), add a .env.local file with the required settings.

Connecting and Funding the Wallet

1. Getting Testnet TON tokens
You will need test tokens to use on the TON Testnet for testing.

Steps to obtain Testnet TON:

Go to https://faucet.tonfura.com.
Enter your Testnet wallet address, which you will receive after connecting your wallet through the application.
Click the Submit button.
You will receive 1 Testnet TON that can be used for testing transactions. This process can be repeated every 12 hours.

2. Funding your wallet
Open the application and connect your wallet (e.g., Tonkeeper).
Copy your Testnet address.
Go to TON Fura Faucet and paste your address.
Click Submit, and your wallet will be funded with Testnet TON tokens.
