// app.base-signal.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther } from "viem";
import { base, baseSepolia } from "viem/chains";

const NETWORK = {
  chain: baseSepolia,
  chainId: 84532,
  rpc: "https://sepolia.base.org",
  explorer: "https://sepolia.basescan.org",
  label: "Base Sepolia",
};

async function start() {
  const sdk = new CoinbaseWalletSDK({
    appName: "Base Signal",
    appLogoUrl: "https://base.org/favicon.ico",
  });

  const provider = sdk.makeWeb3Provider(NETWORK.rpc, NETWORK.chainId);

  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  const address = accounts[0];

  const chainIdHex = (await provider.request({
    method: "eth_chainId",
  })) as string;

  const client = createPublicClient({
    chain: NETWORK.chain,
    transport: http(NETWORK.rpc),
  });

  const [blockNumber, balance] = await Promise.all([
    client.getBlockNumber(),
    client.getBalance({ address: address as `0x${string}` }),
  ]);

  document.body.innerText = [
    "Base Signal (Built for Base)",
    "",
    `Network: ${NETWORK.label}`,
    `chainId: ${parseInt(chainIdHex, 16)}`,
    `Address: ${address}`,
    `ETH balance: ${formatEther(balance)} ETH`,
    `Latest block: ${blockNumber}`,
    `Explorer: ${NETWORK.explorer}/address/${address}`,
  ].join("\n");
}

start();
