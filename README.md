<p align="center">
    <img align="center" src="https://github.com/akhileshthite/web3qr/blob/main/src/img/logo.png" width="150" height="150"></img>
</p>

<h1 align="center">Web3QR</h1>

 <p align="center">🌐 <a href="https://web3qr.netlify.app/"></a>https://web3qr.netlify.app/</p>

<div align="center">
    <img src="https://img.shields.io/badge/Platform-IPFS-2C80C1" alt="Platform" />
    <img src="https://img.shields.io/github/v/release/akhileshthite/web3QR?color=1FC71F" alt="Release version" />
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?" alt="Contributions welcome">
</div><br>

Web3QR allows you to deploy static websites to [IPFS](https://ipfs.io/) in a single click by using [web3.storage](https://web3.storage/about/). After publishing the website, you'll get a decentralized QR code, IPFS CID, and hosted gateway link.

## Development
* Install dependencies

```
npm install
```

* Environment variables

For development and testing, you have to create your own web3.storage API token. To do that, `login to` [web3.storage](https://web3.storage/) -> `create a new API token` -> `copy the API token`.

Then create a `.env` file in the root directory.
```
REACT_APP_WEB3_STORAGE_API_TOKEN=PASTE_YOUR_API_TOKEN
```

* Start app

```
npm start
```

<img src="https://github.com/akhileshthite/web3qr/blob/main/src/img/ipfs.gif" alt="Love IPFS" />

## License
Web3QR is licensed under the [MIT License](https://github.com/akhileshthite/web3qr/blob/main/LICENSE).
