import { StdFee } from '@cosmjs/amino';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = 'osmosis';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const baseAsset: Asset = chainassets.assets.find(
    (asset) => asset.base === 'uosmo'
) as Asset;

export const sendTokens = (
    getStargateClient: () => Promise<SigningStargateClient>,
    setResp: () => any,
    address: string
) => {
    return async () => {
        const stargateClient = await getStargateClient();
        if (!stargateClient || !address) {
            console.error('stargateClient undefined or address undefined.');
            return;
        }

        const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

        const msg = send({
            amount: [
                {
                    denom: baseAsset.base,
                    amount: '1000'
                }
            ],
            toAddress: address,
            fromAddress: address
        });

        const fee: StdFee = {
            amount: [
                {
                    denom: baseAsset.base,
                    amount: '0'
                }
            ],
            gas: '86364'
        };
        const response = await stargateClient.signAndBroadcast(address, [msg], fee);
        setResp(JSON.stringify(response, null, 2));
    };
};