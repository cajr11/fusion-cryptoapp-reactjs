# Fusion Dapp

Fusion is a decentralised application which renders latest crypto data and connects to users' MetaMask wallets to authenticate and enable them to interact with the blockchain in order to carry out transactions.

## Demo

![](/src/assets/app-demo.gif)


#### Live application link

```
https://fusion-cryptoapp-reactjs.vercel.app/
```

## Stack

<div style="display: flex; width: 300px justify-content: space-between;">
    <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="react" width="50" height="50">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="tailwind css" width="50" height="50">
    <img src="https://miro.medium.com/max/1200/1*eCoqJKb-QnoxWFPsjyqU0g.png" alt="chart js" width="50" height="50">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" alt="metamask" width="50" height="50">
    <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es" alt="firebase" width="50" height="50"><br/><br/><br/>
</div>

## Usage

**NOTE** - To use the transfer feature and access wallet details, the MetaMask browser extension should be installed.

### Basic

Users can navigate through the Homepage and Tokens page to view token rankings and general data. For expanded details of a specific token, users can click on a token in the token list which will load the token details page that shows historical chart data, price info, volume, 24h change, links and a summary of the token's project details. The search functionality can also be used to render data about tokens not in the top 100 coins.

### Transfer

Here users can carry out transactions on the blockchain by authenticating themselves using their MetaMask wallets. Transactions can be carried out on the Ethereum or Binance Smart Chain (Mainnet/Testnet). To carry out transactions on the testnet you can fund your wallet through faucets. There are several faucets that can be used, but below one for each chain will be linked.

#### BSC Faucet

```
https://testnet.binance.org/faucet-smart
```


#### Ropsten Ethereum Faucet

```
https://faucet.dimensions.network/
```


### Wallet

On this page, once authenticated, users can view transaction details of transactions carried out within the app, either sent or recieved. Also their wallet balance and complete wallet address will be displayed here.


## Running Locally

### Installation Steps

```
npm install
```
then

```
npm start
```

### Environment Variables

A .env file will need to be created at the highest level of the project folder, within this file 3 environment variables will need to be created. These will be for the Rapid API Coinranking API which was used to retrieve token data and the others for the Firebase Realtime Database which stores users' transaction data along with the Firebase project id.

```
REACT_APP_RAPID_API_KEY=key
REACT_APP_FIREBASE_API_KEY=key
REACT_APP_FIREBASE_PROJECT_ID=id
```


### Firebase

To setup a database, go to the Firebase website, login and navigate to the developer console. Here you will initialise a new project for the Realtime Database option, you can name it and change the id if needed. Navigate to the project settings and add an app, copy the details in the "SDK setup and configuration" snippet, then add them to you environment variables accordingly.

