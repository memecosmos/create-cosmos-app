//@ts-nocheck
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./msg/v1/msg";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/v1/orm";
import * as _74 from "./orm/v1alpha1/schema";
import * as _75 from "./params/v1beta1/params";
import * as _76 from "./params/v1beta1/query";
import * as _77 from "./slashing/v1beta1/genesis";
import * as _78 from "./slashing/v1beta1/query";
import * as _79 from "./slashing/v1beta1/slashing";
import * as _80 from "./slashing/v1beta1/tx";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/signing/v1beta1/signing";
import * as _87 from "./tx/v1beta1/service";
import * as _88 from "./tx/v1beta1/tx";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _194 from "./authz/v1beta1/tx.amino";
import * as _195 from "./bank/v1beta1/tx.amino";
import * as _196 from "./crisis/v1beta1/tx.amino";
import * as _197 from "./distribution/v1beta1/tx.amino";
import * as _198 from "./evidence/v1beta1/tx.amino";
import * as _199 from "./feegrant/v1beta1/tx.amino";
import * as _200 from "./gov/v1/tx.amino";
import * as _201 from "./gov/v1beta1/tx.amino";
import * as _202 from "./group/v1/tx.amino";
import * as _203 from "./nft/v1beta1/tx.amino";
import * as _204 from "./slashing/v1beta1/tx.amino";
import * as _205 from "./staking/v1beta1/tx.amino";
import * as _206 from "./upgrade/v1beta1/tx.amino";
import * as _207 from "./vesting/v1beta1/tx.amino";
import * as _208 from "./authz/v1beta1/tx.registry";
import * as _209 from "./bank/v1beta1/tx.registry";
import * as _210 from "./crisis/v1beta1/tx.registry";
import * as _211 from "./distribution/v1beta1/tx.registry";
import * as _212 from "./evidence/v1beta1/tx.registry";
import * as _213 from "./feegrant/v1beta1/tx.registry";
import * as _214 from "./gov/v1/tx.registry";
import * as _215 from "./gov/v1beta1/tx.registry";
import * as _216 from "./group/v1/tx.registry";
import * as _217 from "./nft/v1beta1/tx.registry";
import * as _218 from "./slashing/v1beta1/tx.registry";
import * as _219 from "./staking/v1beta1/tx.registry";
import * as _220 from "./upgrade/v1beta1/tx.registry";
import * as _221 from "./vesting/v1beta1/tx.registry";
import * as _222 from "./auth/v1beta1/query.lcd";
import * as _223 from "./authz/v1beta1/query.lcd";
import * as _224 from "./bank/v1beta1/query.lcd";
import * as _225 from "./base/reflection/v1beta1/reflection.lcd";
import * as _226 from "./base/reflection/v2alpha1/reflection.lcd";
import * as _227 from "./base/tendermint/v1beta1/query.lcd";
import * as _228 from "./distribution/v1beta1/query.lcd";
import * as _229 from "./evidence/v1beta1/query.lcd";
import * as _230 from "./feegrant/v1beta1/query.lcd";
import * as _231 from "./gov/v1/query.lcd";
import * as _232 from "./gov/v1beta1/query.lcd";
import * as _233 from "./group/v1/query.lcd";
import * as _234 from "./mint/v1beta1/query.lcd";
import * as _235 from "./nft/v1beta1/query.lcd";
import * as _236 from "./params/v1beta1/query.lcd";
import * as _237 from "./slashing/v1beta1/query.lcd";
import * as _238 from "./staking/v1beta1/query.lcd";
import * as _239 from "./tx/v1beta1/service.lcd";
import * as _240 from "./upgrade/v1beta1/query.lcd";
import * as _241 from "./app/v1alpha1/query.rpc.Query";
import * as _242 from "./auth/v1beta1/query.rpc.Query";
import * as _243 from "./authz/v1beta1/query.rpc.Query";
import * as _244 from "./bank/v1beta1/query.rpc.Query";
import * as _245 from "./base/reflection/v1beta1/reflection.rpc.ReflectionService";
import * as _246 from "./base/reflection/v2alpha1/reflection.rpc.ReflectionService";
import * as _247 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _248 from "./distribution/v1beta1/query.rpc.Query";
import * as _249 from "./evidence/v1beta1/query.rpc.Query";
import * as _250 from "./feegrant/v1beta1/query.rpc.Query";
import * as _251 from "./gov/v1/query.rpc.Query";
import * as _252 from "./gov/v1beta1/query.rpc.Query";
import * as _253 from "./group/v1/query.rpc.Query";
import * as _254 from "./mint/v1beta1/query.rpc.Query";
import * as _255 from "./nft/v1beta1/query.rpc.Query";
import * as _256 from "./params/v1beta1/query.rpc.Query";
import * as _257 from "./slashing/v1beta1/query.rpc.Query";
import * as _258 from "./staking/v1beta1/query.rpc.Query";
import * as _259 from "./tx/v1beta1/service.rpc.Service";
import * as _260 from "./upgrade/v1beta1/query.rpc.Query";
import * as _261 from "./authz/v1beta1/tx.rpc.msg";
import * as _262 from "./bank/v1beta1/tx.rpc.msg";
import * as _263 from "./crisis/v1beta1/tx.rpc.msg";
import * as _264 from "./distribution/v1beta1/tx.rpc.msg";
import * as _265 from "./evidence/v1beta1/tx.rpc.msg";
import * as _266 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _267 from "./gov/v1/tx.rpc.msg";
import * as _268 from "./gov/v1beta1/tx.rpc.msg";
import * as _269 from "./group/v1/tx.rpc.msg";
import * as _270 from "./nft/v1beta1/tx.rpc.msg";
import * as _271 from "./slashing/v1beta1/tx.rpc.msg";
import * as _272 from "./staking/v1beta1/tx.rpc.msg";
import * as _273 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _274 from "./vesting/v1beta1/tx.rpc.msg";
import * as _349 from "./lcd";
import * as _350 from "./rpc.query";
import * as _351 from "./cosmos-rpc-client.query";
import * as _352 from "./rpc.tx";
import * as _353 from "./cosmos-rpc-client.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._241
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._222,
      ..._242
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._194,
      ..._208,
      ..._223,
      ..._243,
      ..._261
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._195,
      ..._209,
      ..._224,
      ..._244,
      ..._262
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._18
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._21,
        ..._225,
        ..._245
      };
      export const v2alpha1 = {
        ..._22,
        ..._226,
        ..._246
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._23
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._24,
        ..._25
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._26,
        ..._227,
        ..._247
      };
    }
    export const v1beta1 = {
      ..._27
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._28,
      ..._29
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._196,
      ..._210,
      ..._263
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._32
    };
    export namespace hd {
      export const v1 = {
        ..._33
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._34
      };
    }
    export const multisig = {
      ..._35
    };
    export const secp256k1 = {
      ..._36
    };
    export const secp256r1 = {
      ..._37
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._197,
      ..._211,
      ..._228,
      ..._248,
      ..._264
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._198,
      ..._212,
      ..._229,
      ..._249,
      ..._265
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._199,
      ..._213,
      ..._230,
      ..._250,
      ..._266
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._50
    };
  }
  export namespace gov {
    export const v1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._200,
      ..._214,
      ..._231,
      ..._251,
      ..._267
    };
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._201,
      ..._215,
      ..._232,
      ..._252,
      ..._268
    };
  }
  export namespace group {
    export const v1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._202,
      ..._216,
      ..._233,
      ..._253,
      ..._269
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._234,
      ..._254
    };
  }
  export namespace msg {
    export const v1 = {
      ..._67
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._203,
      ..._217,
      ..._235,
      ..._255,
      ..._270
    };
  }
  export namespace orm {
    export const v1 = {
      ..._73
    };
    export const v1alpha1 = {
      ..._74
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._75,
      ..._76,
      ..._236,
      ..._256
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._204,
      ..._218,
      ..._237,
      ..._257,
      ..._271
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._205,
      ..._219,
      ..._238,
      ..._258,
      ..._272
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._239,
      ..._259
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._206,
      ..._220,
      ..._240,
      ..._260,
      ..._273
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._207,
      ..._221,
      ..._274
    };
  }
  export const ClientFactory = {
    ..._349,
    ..._350,
    ..._351,
    ..._352,
    ..._353
  };
}