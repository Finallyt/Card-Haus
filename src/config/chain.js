import { Bech32Address } from "@keplr-wallet/cosmos";

export const chainInfo = {
    rpc: "http://localhost:26657",
    rest: "http://localhost:1317",
    chainId: "Caraus-localnet-1",
    chainName: "Cardhaus",
    stakeCurrency: {
      coinDenom: "CRD",
      coinMinimalDenom: "ucrd",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("Cardhaus"),
    currencies: [
      {
        coinDenom: "CRD",
        coinMinimalDenom: "ucrd",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CRD",
        coinMinimalDenom: "ucrd",
        coinDecimals: 6,
      },
    ],
    features: ["stargate", "ibc-transfer"],
  };
