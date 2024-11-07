"use client";

import React from "react";
import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import { evmWalletConnectors } from "@particle-network/connectkit/evm";
import { EntryPosition, wallet } from "@particle-network/connectkit/wallet";
import { aa } from "@particle-network/connectkit/aa";

import { defineChain } from "@particle-network/connectkit/chains";

// Define the Lumia testnet
const movementDevnet = defineChain({
  id: 30732,
  name: "Movement Devnet",
  nativeCurrency: {
    decimals: 18,
    name: "MOVE",
    symbol: "MOVE",
  },
  rpcUrls: {
    default: {
      http: ["https://mevm.devnet.imola.movementnetwork.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.devnet.imola.movementnetwork.xyz",
    },
  },
  testnet: true,
});

const config = createConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY!,
  appId: process.env.NEXT_PUBLIC_APP_ID!,
  walletConnectors: [
    authWalletConnectors({}), // Social logins

    // Default Web3 logins
    evmWalletConnectors({
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID, // optional, retrieved from https://cloud.walletconnect.com
    }),
  ],

  plugins: [
    // embedded wallet start
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
    // embedded wallet end

    // aa config start
    aa({
      name: "SIMPLE",
      version: "2.0.0",
    }),
    // aa config end
  ],
  chains: [movementDevnet],
});

export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
