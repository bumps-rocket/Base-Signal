# Base Signal (Built for Base)

Deployed on Base Mainnet.

Base Signal is a compact reference repository demonstrating how to connect to the Base ecosystem using Coinbase Wallet SDK and validate basic onchain state through Base RPC endpoints.

The project focuses on clarity and correctness, providing a minimal but complete Base-oriented integration example.

---

## Base ecosystem alignment

This repository is explicitly built for Base and references official Base network identifiers:

Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

The script enforces a Base network context and performs read-only validation queries.

---

## Script behavior

The app.base-signal.ts script performs the following actions:

1) Initializes Coinbase Wallet SDK with Base branding
2) Requests a wallet connection using an EIP-1193 provider
3) Reads the active chainId from the wallet
4) Queries Base RPC for:
   - latest block number
   - ETH balance of the connected address
5) Prints a Basescan link for verification

No transactions are sent. All operations are read-only.

---

## Repository structure

- app.base-signal.ts  
  Browser-based script that validates Base connectivity and onchain state.
  
- contracts/  
  Solidity contracts deployed to Base Sepolia for testnet validation:
  - control.sol — minimal contract used to validate deployment and verification flow  
  - storage.sol — simple stateful contract for interaction testing  

- package.json  
  Dependency manifest including Coinbase SDKs and multiple repositories from the Base GitHub organization.

- README.md  
  Full technical documentation, Base references, licensing, and testnet deployment section.

---

## Libraries used

- @coinbase/wallet-sdk  
  Wallet connection layer compatible with Coinbase and Base tooling.

- viem  
  Modern RPC client used for querying Base networks.

- Base GitHub repositories  
  Included as dependencies to demonstrate integration with the Base open-source ecosystem.

---

## Installation and execution

Install dependencies using Node.js.  
Serve the script with a modern frontend dev server and open the page in a browser.

After approving the wallet connection, the page will display the connected address, chainId, balance, and explorer link.

---

## License

MIT License

Copyright (c) 2025 YOUR_NAME

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author

GitHub: https://github.com/bumps-rocket 
Email: bumps_rocket0o@icloud.com 
Public contact: https://x.com/giuseppacorona  

---

## Testnet Deployment (Base Sepolia)

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract #1 address:  
0x6293cac84750eb453820ce7c9e239c2df653e547

Deployment and verification:
- https://sepolia.basescan.org/address/0x6293cac84750eb453820ce7c9e239c2df653e547
- https://sepolia.basescan.org/0x6293cac84750eb453820ce7c9e239c2df653e547/0#code  

Contract #2 address:  
0x7705c1f77835652ec7f64d0ce4b41eac303a17c1

Deployment and verification:
- https://sepolia.basescan.org/address/0x7705c1f77835652ec7f64d0ce4b41eac303a17c1
- https://sepolia.basescan.org/0x7705c1f77835652ec7f64d0ce4b41eac303a17c1/0#code  

These testnet deployments provide a controlled environment for validating Base tooling, account abstraction flows, and read-only onchain interactions prior to Base Mainnet usage.
