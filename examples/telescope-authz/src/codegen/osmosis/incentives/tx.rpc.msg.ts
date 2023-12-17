import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface Msg {
  createGauge(signerAddress: string, message: MsgCreateGauge, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  addToGauge(signerAddress: string, message: MsgAddToGauge, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGauge */
  createGauge = async (signerAddress: string, message: MsgCreateGauge, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateGauge.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* AddToGauge */
  addToGauge = async (signerAddress: string, message: MsgAddToGauge, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgAddToGauge.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};