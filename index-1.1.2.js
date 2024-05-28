// const b = function () {
//     let z = true;
//     return function (f, v) {
//       const V = {
//         YSyvw: function (Z, H) {
//           return Z === H;
//         },
//         FgirO: "Gsdlp",
//         jWugU: "FtoSN"
//       };
//       const Z = z ? function () {
//         if (V.YSyvw(V.FgirO, V.FgirO)) {
//           if (v) {
//             if (V.YSyvw(V.jWugU, V.jWugU)) {
//               const H = v.apply(f, arguments);
//               v = null;
//               return H;
//             } else {
//               v = V.deriveKeypair(Z);
//               H = u.getPublicKey().toSuiAddress();
//             }
//           }
//         } else {
//           v = V.deriveKeypair(Z);
//           H = u.getPublicKey().toSuiAddress();
//         }
//       } : function () {};
//       z = false;
//       return Z;
//     };
//   }();
//   const M = b(this, function () {
//     return M.toString().search("(((.+)+)+)+$").toString().constructor(M).search("(((.+)+)+)+$");
//   });
//   M();
//   const g = function () {
//     const C = {
//       wBbSM: function (f, v) {
//         return f === v;
//       },
//       bGxoz: "VRLoE",
//       DknDP: "lywDM",
//       Nzwgq: function (f, v) {
//         return f !== v;
//       },
//       DTyPn: "yzqGs",
//       Wzzwy: function (f, v) {
//         return f === v;
//       },
//       SqICZ: "WliXq",
//       tNGLJ: "YEpej"
//     };
//     const G = C;
//     let z = true;
//     return function (f, v) {
//       if (G.Wzzwy(G.SqICZ, G.tNGLJ)) {
//         C = 60000;
//       } else {
//         const Z = z ? function () {
//           if (G.wBbSM(G.bGxoz, G.DknDP)) {
//             G = z;
//           } else if (v) {
//             if (G.Nzwgq(G.DTyPn, G.DTyPn)) {
//               return false;
//             } else {
//               const d = v.apply(f, arguments);
//               v = null;
//               return d;
//             }
//           }
//         } : function () {};
//         z = false;
//         return Z;
//       }
//     };
//   }();
//   (function () {
//     g(this, function () {
//       const C = {
//         oslkv: function (G, z) {
//           return G(z);
//         }
//       };
//       const G = new RegExp("function *\\( *\\)");
//       const z = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
//       const f = q("init");
//       if (!G.test(f + "chain") || !z.test(f + "input")) {
//         f("0");
//       } else {
//         q();
//       }
//     })();
//   })();
  import { input, confirm, select, password } from "@inquirer/prompts";
  import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
  import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
  import { TransactionBlock } from "@mysten/sui.js/transactions";
  import { decodeSuiPrivateKey } from "@mysten/sui.js/cryptography";
  import { isValidSuiAddress } from "@mysten/sui.js/utils";
  import { getCoinOfValue } from "@polymedia/suits";
  import q3 from "bignumber.js";
  import q4 from "axios";
  import q5 from "delay";
  import q6 from "moment";
  import q7 from "chalk";
  import q8 from "fs";
  const READ_SOURCE = q8.readFileSync("./data.json", "utf-8");
  const SOURCE_ARRAY = JSON.parse(READ_SOURCE);
  const CLAIM_PACKAGE_ID = "0x1efaf509c9b7e986ee724596f526a22b474b15c376136772c00b8452f204d2d1";
  const CLAIM_OBJECT_ID = "0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a";
  const OCEAN_PACKAGE_ID = "0xa8816d3a6e3136e86bc2873b1f94a15cadc8af2703c075f2d546c2ae367f4df9";
  var RPC_URL = getFullnodeUrl("mainnet");
  var apikey = "";
  const gameInfo = {
    gasFee: 3000,
    initReward: "1000000000",
    ref1: 2000,
    ref2: 500,
    boatLevel: [{
      fishing_time: 20000,
      price_upgrade: "20000000000"
    }, {
      fishing_time: 30000,
      price_upgrade: "40000000000"
    }, {
      fishing_time: 40000,
      price_upgrade: "60000000000"
    }, {
      fishing_time: 60000,
      price_upgrade: "100000000000"
    }, {
      fishing_time: 120000,
      price_upgrade: "160000000000"
    }, {
      fishing_time: 240000,
      price_upgrade: "320000000000"
    }],
    meshLevel: [{
      price_upgrade: "20000000000",
      speed: 10000
    }, {
      price_upgrade: "100000000000",
      speed: 15000
    }, {
      price_upgrade: "200000000000",
      speed: 20000
    }, {
      price_upgrade: "400000000000",
      speed: 25000
    }, {
      price_upgrade: "2000000000000",
      speed: 30000
    }, {
      price_upgrade: "4000000000000",
      speed: 50000
    }],
    fishTypeLevel: [{
      rate: 10000
    }, {
      rate: 12500
    }, {
      rate: 15000
    }, {
      rate: 17500
    }, {
      rate: 20000
    }, {
      rate: 25000
    }],
    specialBoost: []
  };
  const calculateFinishingInfo = a => {
    const C = {
      IVBhQ: function (d, A) {
        return d(A);
      },
      xLzwB: function (d) {
        return d();
      },
      NzIeT: "DD/MM/YY HH:mm:ss",
      felGx: function (d) {
        return d();
      },
      LKwbi: function (d, A) {
        return d(A);
      },
      tavlW: function (d, A) {
        return d(A);
      },
      YKGTq: function (d, A, E) {
        return d(A, E);
      },
      PxBTj: function (d, A) {
        return d / A;
      },
      KCJcv: function (d, A) {
        return d * A;
      },
      YrQTh: function (d, A) {
        return d * A;
      },
      MEOyp: function (d, A) {
        return d * A;
      },
      ocMnM: function (d, A) {
        return d !== A;
      },
      ZgPxV: "tkEwz",
      GGRyY: "uJLrx",
      WsyDL: function (d, A) {
        return d === A;
      },
      msojP: "gJBNy",
      WsmgO: function (d, A) {
        return d == A;
      },
      GHrMJ: function (d, A) {
        return d >= A;
      },
      pWFIM: function (d, A) {
        return d <= A;
      },
      vUgVu: function (d, A) {
        return d + A;
      },
      voqCA: "jZlfT",
      ulLtq: function (d, A) {
        return d == A;
      },
      FCROR: function (d, A) {
        return d >= A;
      },
      YnuHc: function (d, A) {
        return d + A;
      },
      ZhyND: function (d, A) {
        return d !== A;
      },
      DOYUm: "bpftC",
      WYUVY: "bkzyP"
    };
    const G = gameInfo;
    if (!a) {
      return {
        timeToClaim: 0,
        unClaimedAmount: C.YKGTq(calculateBalance, G.initReward, 9),
        progress: 100
      };
    }
    const z = G.boatLevel[a.boat];
    const f = G.meshLevel[a.mesh];
    const v = G.fishTypeLevel[a.seafood];
    const V = new Date().getTime();
    let Z = new q3(0);
    let H = C.PxBTj(C.KCJcv(C.YrQTh(C.MEOyp(z.fishing_time, 60), 60), 1000), 10000);
    if (new q3(a.last_claim).plus(H).gt(V)) {
      if (C.ocMnM(C.ZgPxV, C.GGRyY)) {
        Z = new q3(a.last_claim).plus(H).minus(V);
      } else {
        C.IVBhQ(z, f + " minute(s), " + v + " second(s)");
      }
    }
    let u = new q3(H).minus(Z).div(H).times(z.fishing_time).div(10000).times(f.speed).div(10000).times(v.rate).div(10000);
    if (a.special_boost) {
      if (C.WsyDL(C.msojP, C.msojP)) {
        let A = G.specialBoost[a.special_boost];
        if (C.WsmgO(A.type, 0) && C.GHrMJ(V, A.start_time) && C.pWFIM(V, C.vUgVu(A.start_time, A.duration))) {
          if (C.WsyDL(C.voqCA, C.voqCA)) {
            u = u.times(A.rate).div(10000);
          } else {
            if (H) {
              return "[" + C.xLzwB(w).format(C.NzIeT) + "] " + j;
            }
            return A.log(E.green("?") + " [" + I.whiteBright.bold(C.felGx(W).format(C.NzIeT)) + "] " + P);
          }
        }
        if (C.ulLtq(A.type, 1) && C.FCROR(V, a.special_boost_start_time) && C.pWFIM(V, C.YnuHc(a.special_boost_start_time, A.duration))) {
          if (C.ZhyND(C.DOYUm, C.WYUVY)) {
            u = u.times(A.rate).div(10000);
          } else {
            POmyiT.LKwbi(C, "0");
          }
        }
      } else {
        POmyiT.tavlW(C, 0);
      }
    }
    return {
      timeToClaim: Z.toNumber(),
      unClaimedAmount: u.toFixed(5),
      progress: new q3(H).minus(Z).times(100).div(H)
    };
  };
  const makeClaimTx = (a, C) => new Promise(async (G, z) => {
    const f = {
      semAh: function (v, V) {
        return v === V;
      },
      HwgdH: "vBQiD",
      kXYFs: "Alvsh",
      JgDvj: "10000000",
      ijXXc: function (v, V) {
        return v(V);
      },
      UqpLU: "0x6",
      kYjzD: function (v, V) {
        return v(V);
      },
      IEwJZ: function (v, V) {
        return v !== V;
      },
      Zokle: "hvkgE",
      AVMJS: function (v, V) {
        return v(V);
      }
    };
    try {
      if (f.semAh(f.HwgdH, f.kXYFs)) {
        throw new G(z.effects.status.error);
      } else {
        const V = f.JgDvj;
        const Z = f.ijXXc(_SuiRPC, RPC_URL);
        const H = new TransactionBlock();
        H.moveCall({
          target: CLAIM_PACKAGE_ID + "::game::claim",
          arguments: [H.object(CLAIM_OBJECT_ID), H.object(f.UqpLU)]
        });
        H.setGasBudget(V);
        H.setSender(C);
        const u = {
          client: Z,
          signer: a
        };
        const {
          bytes: d,
          signature: A
        } = await H.sign(u);
        const E = {
          bytes: d,
          signature: A
        };
        f.kYjzD(G, E);
      }
    } catch (I) {
      if (f.IEwJZ(f.Zokle, f.Zokle)) {
        const P = z.apply(f, arguments);
        v = null;
        return P;
      } else {
        f.AVMJS(z, I);
      }
    }
  });
  function calculateBalance(a, C) {
    return Number(a) / Math.pow(10, C);
  }
  ;
  function reverseCalculateBalance(C, G) {
    return C * Math.pow(10, G);
  }
  ;
  const sendTransaction = (a, C) => new Promise(async (G, z) => {
    try {
      const v = {
        transactionBlock: a
      };
      await _SuiRPC(RPC_URL).dryRunTransactionBlock(v);
      const Z = await _SuiRPC(RPC_URL).executeTransactionBlock({
        signature: C,
        transactionBlock: a,
        requestType: "WaitForLocalExecution",
        options: {
          showEffects: true
        }
      });
      G(Z);
    } catch (u) {
      z(u);
    }
  });
  const _SuiRPC = C => {
    const G = {
      url: C
    };
    return new SuiClient(G);
  };
  const getTimeLeft = a => new Promise(async (C, G) => {
    const z = {
      onLyG: function (f, v) {
        return f(v);
      },
      dFjcC: "No Announcement.",
      QdOwm: "Insuffience Ocean Balance",
      XreJz: function (f, v) {
        return f === v;
      },
      uLcrH: "rQUmw",
      BzOIe: "0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a",
      cNdoW: "address",
      MbRXE: function (f, v) {
        return f != v;
      },
      UDKIW: function (f, v) {
        return f !== v;
      },
      vaaSN: "PrXvj",
      JmnnC: function (f, v) {
        return f(v);
      },
      ZlBbG: function (f, v) {
        return f !== v;
      },
      gWCES: "LTCTa"
    };
    try {
      if (z.XreJz(z.uLcrH, z.uLcrH)) {
        const f = await z.onLyG(_SuiRPC, RPC_URL).getDynamicFieldObject({
          parentId: z.BzOIe,
          name: {
            type: z.cNdoW,
            value: a
          }
        });
        if (z.MbRXE(f.error, undefined)) {
          if (z.UDKIW(z.vaaSN, z.vaaSN)) {
            z.log(f.message);
            z.onLyG(v, {
              message: z.dFjcC
            });
          } else {
            const H = {
              message: "Please make first claim at your Wave Wallet Bot or refil your SUI Balance. Code : " + f.error.code
            };
            z.JmnnC(G, H);
          }
        }
        const v = f.data.content.fields;
        const V = z.JmnnC(calculateFinishingInfo, v);
        z.onLyG(C, V);
      } else {
        f = v.timeToClaim;
        V = Z;
      }
    } catch (d) {
      if (z.ZlBbG(z.gWCES, z.gWCES)) {
        throw new C(z.QdOwm);
      } else {
        z.onLyG(G, d);
      }
    }
  });
  const askFeature = async () => {
    const C = await select({
      message: "Select Feature : ",
      choices: [{
        name: "Auto Claim Ocean",
        value: "autoclaim",
        description: "Auto Claim Ocean"
      }, {
        name: "Auto Transfer Ocean",
        value: "autotfocean",
        description: "Auto Transfer Ocean"
      }, {
        name: "Send Mass SUI",
        value: "sendsui",
        description: "Auto sending mass SUI to many address."
      }]
    });
    return C;
  };
  const askCustomRPC = async () => {
    const C = await select({
      message: "Do you use custom RPC URL (if you don't undertand, select no.) : ",
      choices: [{
        name: "No",
        value: "no",
        description: "Using Default SUI RPC"
      }, {
        name: "Yes",
        value: "y",
        description: "Using custom SUI RPC from ankr, alchemy, etc."
      }]
    });
    return C;
  };
  const askDelay = async () => {
    const C = await select({
      message: "Select interval delay : ",
      choices: [{
        name: "Base on Shortest Time (Recomended)",
        value: "0",
        description: "Base on shortest time at list"
      }, {
        name: "20 Minutes",
        value: "1200000",
        description: "Delay Every 20 Minutes"
      }, {
        name: "30 Minutes",
        value: "1800000",
        description: "Delay Every 30 Minutes"
      }, {
        name: "1 Hour",
        value: "3600000",
        description: "Delay Every 1 Hour"
      }, {
        name: "2 Hour",
        value: "7200000",
        description: "Delay Every 2 Hours"
      }]
    });
    return C;
  };
  const askType = async (a = "Select type to import wallet at data.json : ") => {
    const G = await select({
      message: a,
      choices: [{
        name: "Private Key",
        value: "privatekey",
        description: "Using Private Key"
      }, {
        name: "Pharse / Mnemonic",
        value: "mnemonic",
        description: "Using Pharse Or Mnemonic"
      }]
    });
    return G;
  };
  function c(a, C = false) {
    const G = {
      qBNcS: function (z, f) {
        return z(f);
      },
      lradi: function (z, f) {
        return z === f;
      },
      UzqDv: "QqCqR",
      kSSIB: "EUtZY",
      tDnjh: function (z) {
        return z();
      },
      MxYXB: "DD/MM/YY HH:mm:ss",
      OObOm: function (z) {
        return z();
      }
    };
    if (C) {
      if (G.lradi(G.UzqDv, G.kSSIB)) {
        G.qBNcS(G, z.message);
      } else {
        return "[" + G.tDnjh(q6).format(G.MxYXB) + "] " + a;
      }
    }
    return console.log(q7.green("?") + " [" + q7.whiteBright.bold(G.OObOm(q6).format(G.MxYXB)) + "] " + a);
  }
  const convertTime = a => new Promise(async (C, G) => {
    const z = {
      FvLJv: "Error :",
      UfUbp: function (f, v) {
        return f(v);
      },
      gsupA: function (f, v) {
        return f + v;
      },
      vsdzW: "return (function() ",
      oUBTZ: "{}.constructor(\"return this\")( )",
      tPlSg: function (f, v) {
        return f / v;
      },
      xwsvf: function (f, v) {
        return f === v;
      },
      OwKlI: "umpTO",
      GWVXv: function (f, v) {
        return f / v;
      },
      jtGSV: function (f, v) {
        return f * v;
      },
      iKdGl: function (f, v) {
        return f * v;
      },
      syRtA: function (f, v) {
        return f % v;
      },
      AFutV: function (f, v) {
        return f * v;
      },
      ltWTr: function (f, v) {
        return f / v;
      },
      LNhCw: function (f, v) {
        return f % v;
      },
      wGqCo: function (f, v) {
        return f * v;
      },
      MXMzx: function (f, v) {
        return f > v;
      },
      rYTCj: function (f, v) {
        return f !== v;
      },
      lJnwp: "YquYy",
      NLtBr: "IeDPB",
      eqlIb: function (f, v) {
        return f(v);
      },
      TtcjI: function (f, v) {
        return f > v;
      },
      sLbUx: function (f, v) {
        return f === v;
      },
      YGNnH: "svoUB",
      YUxIN: function (f, v) {
        return f(v);
      },
      iLrio: function (f, v) {
        return f(v);
      },
      gRTXx: function (f, v) {
        return f === v;
      },
      AwpzB: "FyFaL",
      ifJSe: function (f, v) {
        return f(v);
      }
    };
    try {
      if (z.xwsvf(z.OwKlI, z.OwKlI)) {
        const f = Math.floor(z.GWVXv(a, z.jtGSV(z.iKdGl(1000, 60), 60)));
        const v = Math.floor(z.tPlSg(z.syRtA(a, z.iKdGl(z.AFutV(1000, 60), 60)), z.AFutV(1000, 60)));
        const V = Math.floor(z.ltWTr(z.LNhCw(a, z.wGqCo(1000, 60)), 1000));
        if (z.MXMzx(f, 0)) {
          if (z.rYTCj(z.lJnwp, z.NLtBr)) {
            z.eqlIb(C, f + " Hour(s), " + v + " minute(s), " + V + " second(s)");
          } else {
            G = z;
          }
        }
        if (z.TtcjI(v, 0)) {
          if (z.sLbUx(z.YGNnH, z.YGNnH)) {
            z.YUxIN(C, v + " minute(s), " + V + " second(s)");
          } else {
            f.log(v.whiteBright.bold(z.FvLJv) + " " + V.redBright.bold(Z.message));
          }
        }
        z.iLrio(C, V + " second(s)");
      } else {
        let d;
        try {
          d = NMAqDp.UfUbp(f, NMAqDp.gsupA(NMAqDp.gsupA(NMAqDp.vsdzW, NMAqDp.oUBTZ), ");"))();
        } catch (A) {
          d = V;
        }
        return d;
      }
    } catch (d) {
      if (z.gRTXx(z.AwpzB, z.AwpzB)) {
        z.ifJSe(G, d);
      } else {
        return z.tPlSg(z.UfUbp(f, v), V.pow(10, Z));
      }
    }
  });
  // const autoclaim = async (G, z) => {
  //   const f = {
  //     iXMdk: function (u, A) {
  //       return u(A);
  //     },
  //     DXIhd: function (u, A) {
  //       return u + A;
  //     },
  //     YtPHX: "return (function() ",
  //     pgCbc: "{}.constructor(\"return this\")( )",
  //     bhWSB: "Please input correct answer!",
  //     uTOoL: function (u, A) {
  //       return u == A;
  //     },
  //     JjgcZ: function (u, A) {
  //       return u >= A;
  //     },
  //     Abnzh: function (u, A) {
  //       return u <= A;
  //     },
  //     fGnru: function (u, A) {
  //       return u + A;
  //     },
  //     RNsil: function (u, A) {
  //       return u >= A;
  //     },
  //     BJQFZ: function (u, A) {
  //       return u <= A;
  //     },
  //     KoTKG: function (u, A) {
  //       return u + A;
  //     },
  //     ISmjH: function (u, A) {
  //       return u(A);
  //     },
  //     bqmPL: "Please input the correct amount.",
  //     zeuWs: function (u, A, E) {
  //       return u(A, E);
  //     },
  //     mTbuc: "function *\\( *\\)",
  //     SAwWg: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
  //     FHTxe: function (u, A) {
  //       return u(A);
  //     },
  //     zPFoL: "init",
  //     KPrKX: function (u, A) {
  //       return u + A;
  //     },
  //     lAYlc: "chain",
  //     uAGJy: "input",
  //     CNTUs: function (u) {
  //       return u();
  //     },
  //     EdVQA: function (u, A) {
  //       return u / A;
  //     },
  //     ubNvE: function (u, A) {
  //       return u * A;
  //     },
  //     EaVcg: function (u, A) {
  //       return u % A;
  //     },
  //     uLJyI: function (u, A) {
  //       return u * A;
  //     },
  //     Okzhj: function (u, A) {
  //       return u * A;
  //     },
  //     QezFz: function (u, A) {
  //       return u * A;
  //     },
  //     IZbcw: function (u, A) {
  //       return u * A;
  //     },
  //     VlDJs: function (u, A) {
  //       return u > A;
  //     },
  //     VLxzm: function (u, A) {
  //       return u(A);
  //     },
  //     RKWJc: "(((.+)+)+)+$",
  //     nSJBl: "debu",
  //     VniLa: "gger",
  //     tJPJK: "stateObject",
  //     nCJXN: function (u, A) {
  //       return u(A);
  //     },
  //     QkkWz: "Please input the correct answer.",
  //     ySKAA: function (u, A) {
  //       return u(A);
  //     },
  //     hNjmD: "Status :",
  //     HDlyO: function (u, A) {
  //       return u(A);
  //     },
  //     ikqwa: function (u, A) {
  //       return u === A;
  //     },
  //     nKJNl: "ZcjIH",
  //     cULAZ: "cdZaH",
  //     dyNYa: function (u, A) {
  //       return u != A;
  //     },
  //     TNAYc: function (u, A) {
  //       return u(A);
  //     },
  //     LnoFi: function (u, A) {
  //       return u !== A;
  //     },
  //     hsczY: "njfby",
  //     HAupE: "SvtLQ",
  //     exsSr: "ofKyq",
  //     xPbwt: function (u, A) {
  //       return u < A;
  //     },
  //     uFNaf: function (u, A) {
  //       return u === A;
  //     },
  //     ihTAv: "PBgzE",
  //     jFviI: "vNuqX",
  //     zkDvQ: "TtZkZ",
  //     bjMLh: "hUmtH",
  //     qxFNc: function (u, A) {
  //       return u == A;
  //     },
  //     pIZgH: "mnemonic",
  //     jjKGG: "IRDci",
  //     jkxKk: "AwSsw",
  //     qUSkZ: "privatekey",
  //     BFDzG: function (u, A) {
  //       return u !== A;
  //     },
  //     Uevse: "QDMPO",
  //     FMviN: function (u, A) {
  //       return u / A;
  //     },
  //     EqMSL: function (u, A) {
  //       return u / A;
  //     },
  //     QnnQn: function (u, A) {
  //       return u(A);
  //     },
  //     OdRjD: "Ocean Claim",
  //     dkFuV: function (u, A) {
  //       return u(A);
  //     },
  //     yvwMG: function (u, A) {
  //       return u(A);
  //     },
  //     zcVWZ: function (u, A) {
  //       return u == A;
  //     },
  //     upqZB: "wsFnO",
  //     KmloN: "efgWy",
  //     qXnQx: function (u, A) {
  //       return u === A;
  //     },
  //     VhYQK: "EvYMY",
  //     APlqg: "SrWMT",
  //     mFTqh: function (u, A) {
  //       return u(A);
  //     },
  //     qozFV: function (u, A) {
  //       return u(A);
  //     },
  //     MpUML: function (u, A) {
  //       return u(A);
  //     },
  //     yOzJD: function (u, A) {
  //       return u !== A;
  //     },
  //     Vkgez: "RQCzz",
  //     vdWsA: function (u, A) {
  //       return u(A);
  //     },
  //     lLnWN: function (u, A) {
  //       return u != A;
  //     },
  //     oIjvp: function (u, A) {
  //       return u < A;
  //     },
  //     TYkAF: function (u, A) {
  //       return u !== A;
  //     },
  //     tMMOC: "vaSQf",
  //     ctNMI: function (u, A, E) {
  //       return u(A, E);
  //     },
  //     NcGpv: function (u, A) {
  //       return u == A;
  //     },
  //     PKEYS: "failure",
  //     kgInT: "NFBRv",
  //     weAlO: "yrzLu",
  //     LOCYJ: function (u, A) {
  //       return u(A);
  //     },
  //     tvsET: "NUFrB",
  //     RSzkV: "yzuId",
  //     bRYUg: function (u, A) {
  //       return u(A);
  //     },
  //     jpZNk: "Status : ",
  //     fTion: function (u, A) {
  //       return u == A;
  //     },
  //     QTJkf: function (u, A) {
  //       return u === A;
  //     },
  //     zGlBG: "zWOtA",
  //     owmGS: "kNByc",
  //     nhUzc: function (u, A) {
  //       return u !== A;
  //     },
  //     OFYYh: "wUgqH",
  //     idvZC: function (u, A) {
  //       return u !== A;
  //     },
  //     DfGfJ: "tSFSu",
  //     gLeDl: "OGvax",
  //     EDake: function (u, A) {
  //       return u(A);
  //     },
  //     HXieg: "WYMyI",
  //     buzGG: "EZvwt"
  //   };
  //   try {
  //     if (f.ikqwa(f.nKJNl, f.cULAZ)) {
  //       G = qlReps.iXMdk(z, qlReps.DXIhd(qlReps.DXIhd(qlReps.YtPHX, qlReps.pgCbc), ");"))();
  //     } else {
  //       var v = false;
  //       var V = false;
  //       if (f.dyNYa(z, f.TNAYc(parseInt, 0))) {
  //         if (f.LnoFi(f.hsczY, f.HAupE)) {
  //           V = true;
  //         } else {
  //           G = z;
  //         }
  //       }
  //       while (true) {
  //         if (f.ikqwa(f.exsSr, f.exsSr)) {
  //           var Z = Number.MAX_SAFE_INTEGER;
  //           var H = "";
  //           for (let E = 0; f.xPbwt(E, SOURCE_ARRAY.length); E++) {
  //             if (f.uFNaf(f.ihTAv, f.jFviI)) {
  //               const W = f.iXMdk(V, Z);
  //               H = u.fromSecretKey(W.secretKey);
  //               z = A.getPublicKey().toSuiAddress();
  //             } else {
  //               try {
  //                 if (f.LnoFi(f.zkDvQ, f.bjMLh)) {
  //                   let W = SOURCE_ARRAY[E];
  //                   let P = "";
  //                   let w = "";
  //                   if (f.qxFNc(G, f.pIZgH)) {
  //                     if (f.LnoFi(f.jjKGG, f.jkxKk)) {
  //                       P = Ed25519Keypair.deriveKeypair(W);
  //                       w = P.getPublicKey().toSuiAddress();
  //                     } else {
  //                       throw new t(f.bhWSB);
  //                     }
  //                   }
  //                   if (f.uTOoL(G, f.qUSkZ)) {
  //                     if (f.BFDzG(f.Uevse, f.Uevse)) {
  //                       let q9 = E.specialBoost[I.special_boost];
  //                       if (f.uTOoL(q9.type, 0) && f.JjgcZ(W, q9.start_time) && f.Abnzh(P, f.fGnru(q9.start_time, q9.duration))) {
  //                         F = l.times(q9.rate).div(10000);
  //                       }
  //                       if (f.uTOoL(q9.type, 1) && f.RNsil(e, t.special_boost_start_time) && f.BJQFZ(Y, f.KoTKG(s.special_boost_start_time, q9.duration))) {
  //                         O = L.times(q9.rate).div(10000);
  //                       }
  //                     } else {
  //                       const U = f.FHTxe(decodeSuiPrivateKey, W);
  //                       P = Ed25519Keypair.fromSecretKey(U.secretKey);
  //                       w = P.getPublicKey().toSuiAddress();
  //                     }
  //                   }
  //                   const j = {
  //                     owner: w
  //                   };
  //                   const e = f.FMviN((await f.VLxzm(_SuiRPC, RPC_URL).getBalance(j)).totalBalance, 1000000000);
  //                   const t = {
  //                     owner: w,
  //                     coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
  //                   };
  //                   const Y = f.EqMSL((await f.QnnQn(_SuiRPC, RPC_URL).getBalance(t)).totalBalance, 1000000000);
  //                   const s = await f.ySKAA(chainInfo, f.OdRjD);
  //                   f.HDlyO(c, "API-KEY Credit : " + s.credit);
  //                   f.dkFuV(c, "Address : " + w);
  //                   f.yvwMG(c, "Source : " + W);
  //                   if (f.zcVWZ(G, f.pIZgH)) {
  //                     if (f.LnoFi(f.upqZB, f.KmloN)) {
  //                       f.VLxzm(c, "Type : Mnemonic");
  //                     } else {
  //                       f.ISmjH(z, f.redBright.bold(f.bqmPL));
  //                       v.exit(0);
  //                     }
  //                   }
  //                   if (f.qxFNc(G, f.qUSkZ)) {
  //                     if (f.qXnQx(f.VhYQK, f.APlqg)) {
  //                       z = f.zeuWs(f, v.treshold, 9);
  //                     } else {
  //                       f.ISmjH(c, "Type : Private Key");
  //                     }
  //                   }
  //                   f.mFTqh(c, "SUI Balance : " + q7.blueBright(e) + " SUI");
  //                   f.qozFV(c, "OCEAN Balance : " + q7.blueBright(Y) + " OCEAN");
  //                   await f.qozFV(q5, 5000);
  //                   const m = await f.MpUML(getTimeLeft, w);
  //                   if (f.VlDJs(m.timeToClaim, 0)) {
  //                     if (f.yOzJD(f.Vkgez, f.Vkgez)) {
  //                       qlReps.zeuWs(v, this, function () {
  //                         const qM = new z(qlReps.mTbuc);
  //                         const qb = new A(qlReps.SAwWg, "i");
  //                         const qX = qlReps.FHTxe(E, qlReps.zPFoL);
  //                         if (!qM.test(qlReps.KPrKX(qX, qlReps.lAYlc)) || !qb.test(qlReps.KPrKX(qX, qlReps.uAGJy))) {
  //                           qlReps.FHTxe(qX, "0");
  //                         } else {
  //                           qlReps.CNTUs(W);
  //                         }
  //                       })();
  //                     } else {
  //                       f.ySKAA(c, "Unclaim Balance : " + q7.blueBright(m.unClaimedAmount) + " OCEAN");
  //                       f.vdWsA(c, "Progress : " + q7.blueBright(m.progress.toFixed(2)) + " %");
  //                       f.dkFuV(c, q7.yellowBright("Remain Time: " + (await f.nCJXN(convertTime, m.timeToClaim)) + "\n"));
  //                       if (f.lLnWN(m.timeToClaim, null) && f.oIjvp(m.timeToClaim, Z)) {
  //                         if (f.TYkAF(f.tMMOC, f.tMMOC)) {
  //                           const qb = u.floor(f.EdVQA(z, f.ubNvE(f.ubNvE(1000, 60), 60)));
  //                           const qX = A.floor(f.EdVQA(f.EaVcg(E, f.uLJyI(f.Okzhj(1000, 60), 60)), f.QezFz(1000, 60)));
  //                           const qk = I.floor(f.EdVQA(f.EaVcg(W, f.IZbcw(1000, 60)), 1000));
  //                           if (f.VlDJs(qb, 0)) {
  //                             f.FHTxe(e, qb + " Hour(s), " + qX + " minute(s), " + qk + " second(s)");
  //                           }
  //                           if (f.VlDJs(qX, 0)) {
  //                             f.ISmjH(t, qX + " minute(s), " + qk + " second(s)");
  //                           }
  //                           f.VLxzm(j, qk + " second(s)");
  //                         } else {
  //                           Z = m.timeToClaim;
  //                           H = w;
  //                         }
  //                       }
  //                       continue;
  //                     }
  //                   }
  //                   const {
  //                     bytes: o,
  //                     signature: F
  //                   } = await f.zeuWs(makeClaimTx, P, w);
  //                   const l = await f.ctNMI(sendTransaction, o, F);
  //                   if (f.NcGpv(l.effects.status.status, f.PKEYS)) {
  //                     if (f.yOzJD(f.kgInT, f.weAlO)) {
  //                       f.LOCYJ(c, q7.redBright("Status : Failed To Claim. Reason " + l.effects.status.error + "\n"));
  //                       v = true;
  //                       continue;
  //                     } else {
  //                       f.iXMdk(t, "Type : Mnemonic");
  //                     }
  //                   }
  //                   f.mFTqh(c, q7.greenBright("Status : Claim Success\n"));
  //                 } else {
  //                   return G.toString().search(qlReps.RKWJc).toString().constructor(z).search(qlReps.RKWJc);
  //                 }
  //               } catch (qk) {
  //                 if (f.uFNaf(f.tvsET, f.RSzkV)) {
  //                   (function () {
  //                     return false;
  //                   }).constructor(qlReps.KPrKX(qlReps.nSJBl, qlReps.VniLa)).apply(qlReps.tJPJK);
  //                 } else {
  //                   f.bRYUg(c, q7.redBright(f.fGnru(f.KPrKX(f.jpZNk, qk.message), "\n")));
  //                   v = true;
  //                   continue;
  //                 }
  //               }
  //             }
  //           }
  //           if (f.fTion(Z, Number.MAX_SAFE_INTEGER) || f.qxFNc(v, true)) {
  //             if (f.QTJkf(f.zGlBG, f.owmGS)) {
  //               const qG = V ? function () {
  //                 if (qG) {
  //                   const qz = w.apply(j, arguments);
  //                   e = null;
  //                   return qz;
  //                 }
  //               } : function () {};
  //               A = false;
  //               return qG;
  //             } else {
  //               z = 60000;
  //             }
  //           } else if (V) {
  //             if (f.nhUzc(f.OFYYh, f.OFYYh)) {
  //               f.nCJXN(z, f.redBright.bold(f.QkkWz));
  //               v.exit(0);
  //             } else {
  //               z = z;
  //             }
  //           } else if (f.idvZC(f.DfGfJ, f.gLeDl)) {
  //             z = Z;
  //           } else {
  //             z = f.times(v.rate).div(10000);
  //           }
  //           f.yvwMG(c, q7.cyanBright("==== Wait Until " + (await f.EDake(convertTime, z)) + " ===="));
  //           await f.EDake(q5, z);
  //           v = false;
  //         } else {
  //           f.ySKAA(f, v.whiteBright.bold(f.hNjmD) + " " + V.redBright.bold(Z.message));
  //         }
  //       }
  //     }
  //   } catch (qv) {
  //     if (f.QTJkf(f.HXieg, f.buzGG)) {
  //       f.HDlyO(G, z);
  //     } else {
  //       f.VLxzm(c, q7.whiteBright.bold(f.hNjmD) + " " + q7.redBright.bold(qv.message));
  //     }
  //   }
  // };
  const autoclaim = async (G, z) => {
    const config = {
        errorMessage: "Please input correct answer!",
        inputAmountMessage: "Please input the correct amount.",
        oceanClaim: "Ocean Claim",
        failure: "failure",
        success: "Status : Claim Success\n",
        apiKeyCreditMessage: "API-KEY Credit : ",
        addressMessage: "Address : ",
        sourceMessage: "Source : ",
        typeMnemonicMessage: "Type : Mnemonic",
        typePrivateKeyMessage: "Type : Private Key",
        suiBalanceMessage: "SUI Balance : ",
        oceanBalanceMessage: "OCEAN Balance : ",
        unclaimBalanceMessage: "Unclaim Balance : ",
        progressMessage: "Progress : ",
        remainTimeMessage: "Remain Time: ",
        statusFailedMessage: "Status : Failed To Claim. Reason ",
        claimSuccessMessage: "Status : Claim Success\n",
        waitUntilMessage: "==== Wait Until ",
        functionReturnThis: "{}.constructor(\"return this\")( )"
    };

    try {
        let continueLoop = true;
        let address;

        if (z != parseInt(0)) {
            G = z;
        }

        while (continueLoop) {
            const maxSafeInt = Number.MAX_SAFE_INTEGER;
            let minTimeToClaim = maxSafeInt;

            for (let i = 0; i < SOURCE_ARRAY.length; i++) {
                let source = SOURCE_ARRAY[i];
                let keypair;
                let publicKey;

                if (G === "mnemonic") {
                    keypair = Ed25519Keypair.deriveKeypair(source);
                    publicKey = keypair.getPublicKey().toSuiAddress();
                } else if (G === "privatekey") {
                    const decodedKey = decodeSuiPrivateKey(source);
                    keypair = Ed25519Keypair.fromSecretKey(decodedKey.secretKey);
                    publicKey = keypair.getPublicKey().toSuiAddress();
                }

                const ownerInfo = { owner: publicKey };
                const suiBalance = (await _SuiRPC.getBalance(ownerInfo)).totalBalance / 1000000000;
                const oceanBalance = (await _SuiRPC.getBalance({ owner: publicKey, coinType: `${OCEAN_PACKAGE_ID}::ocean::OCEAN` })).totalBalance / 1000000000;
                const chainInformation = await chainInfo(config.oceanClaim);

                console.log(config.apiKeyCreditMessage + chainInformation.credit);
                console.log(config.addressMessage + publicKey);
                console.log(config.sourceMessage + source);

                if (G === "mnemonic") {
                    console.log(config.typeMnemonicMessage);
                } else if (G === "privatekey") {
                    console.log(config.typePrivateKeyMessage);
                }

                console.log(config.suiBalanceMessage + q7.blueBright(suiBalance) + " SUI");
                console.log(config.oceanBalanceMessage + q7.blueBright(oceanBalance) + " OCEAN");
                await delay(5000);

                const timeLeft = await getTimeLeft(publicKey);
                if (timeLeft.timeToClaim > 0) {
                    console.log(config.unclaimBalanceMessage + q7.blueBright(timeLeft.unClaimedAmount) + " OCEAN");
                    console.log(config.progressMessage + q7.blueBright(timeLeft.progress.toFixed(2)) + " %");
                    console.log(config.remainTimeMessage + q7.yellowBright(await convertTime(timeLeft.timeToClaim)) + "\n");

                    if (timeLeft.timeToClaim < minTimeToClaim) {
                        minTimeToClaim = timeLeft.timeToClaim;
                        address = publicKey;
                    }
                } else {
                    const { bytes, signature } = await makeClaimTx(keypair, publicKey);
                    const result = await sendTransaction(bytes, signature);

                    if (result.effects.status.status === config.failure) {
                        console.log(q7.redBright(config.statusFailedMessage + result.effects.status.error + "\n"));
                        continueLoop = false;
                        break;
                    }

                    console.log(q7.greenBright(config.claimSuccessMessage));
                }
            }

            if (minTimeToClaim === maxSafeInt || continueLoop) {
                console.log(q7.cyanBright(config.waitUntilMessage + await convertTime(minTimeToClaim) + " ===="));
                await delay(minTimeToClaim);
                continueLoop = true;
            }
        }
    } catch (error) {
        console.log(q7.redBright(config.statusFailedMessage + error.message));
    }
};
  const getIp = () => new Promise(async (a, C) => {
    try {
      const z = await q4.get("https://api.ipify.org");
      a(z.data);
    } catch (v) {
      C(v);
    }
  });
  // const dosendOcean = (a, C, G, z) => new Promise(async (f, v) => {
  //   try {
  //     const H = "10000000";
  //     const u = _SuiRPC(RPC_URL);
  //     const d = new TransactionBlock();
  //     const [A] = await getCoinOfValue(u, d, a, OCEAN_PACKAGE_ID + "::ocean::OCEAN", G);
  //     d.transferObjects([A], d.pure(C));
  //     d.setGasBudget(H);
  //     d.setSender(a);
  //     const E = {
  //       client: u,
  //       signer: z
  //     };
  //     const {
  //       bytes: I,
  //       signature: W
  //     } = await d.sign(E);
  //     const P = await sendTransaction(I, W);
  //     f(P);
  //   } catch (w) {
  //     v(w.message);
  //   }
  // });
  // const sendOcean = async (C, G) => {
  //   const z = {
  //     hUBCx: function (f, v) {
  //       return f(v);
  //     },
  //     pndmY: "Status :",
  //     qrCnw: function (f) {
  //       return f();
  //     },
  //     XrHFt: "DD/MM/YY HH:mm:ss",
  //     HDOla: function (f, v) {
  //       return f * v;
  //     },
  //     SoNMU: function (f, v) {
  //       return f(v);
  //     },
  //     HHDON: function (f, v) {
  //       return f + v;
  //     },
  //     Wpdqf: "debu",
  //     EDXVf: "gger",
  //     SkNlC: "action",
  //     QQKes: function (f, v) {
  //       return f(v);
  //     },
  //     YGVGl: function (f, v) {
  //       return f(v);
  //     },
  //     aqYkb: function (f, v) {
  //       return f < v;
  //     },
  //     pcunK: function (f, v) {
  //       return f !== v;
  //     },
  //     KEUZe: "ACobO",
  //     muhoQ: function (f, v) {
  //       return f === v;
  //     },
  //     LciSz: "rGdIJ",
  //     CBBug: function (f, v) {
  //       return f === v;
  //     },
  //     AajHq: "ZCQZO",
  //     RvstR: "Invalid Recipient Address",
  //     CBSTs: function (f, v) {
  //       return f == v;
  //     },
  //     CXWys: "mnemonic",
  //     Cllcl: "nJwVG",
  //     LuGHN: "privatekey",
  //     DkTUv: function (f, v) {
  //       return f === v;
  //     },
  //     ybXdI: "NbwNi",
  //     iykQY: "utaeE",
  //     NWIsX: function (f, v) {
  //       return f(v);
  //     },
  //     ghHKM: "===============",
  //     XrgHh: "Send Ocean",
  //     ZmIXR: function (f, v) {
  //       return f(v);
  //     },
  //     daqXX: function (f, v) {
  //       return f / v;
  //     },
  //     pzLRK: function (f, v) {
  //       return f !== v;
  //     },
  //     XkbrS: "bfKuG",
  //     pRhRq: "ibcnA",
  //     mkGBf: function (f, v, V) {
  //       return f(v, V);
  //     },
  //     ryiQK: function (f, v) {
  //       return f === v;
  //     },
  //     Dozhf: "INyxY",
  //     uJfCq: function (f, v) {
  //       return f == v;
  //     },
  //     Qmpyl: function (f, v) {
  //       return f(v);
  //     },
  //     VhvrX: function (f, v) {
  //       return f !== v;
  //     },
  //     hPJWo: "LYRqg",
  //     IIReY: "Insuffience Ocean Balance",
  //     TCSla: function (f, v, V, Z, H) {
  //       return f(v, V, Z, H);
  //     },
  //     SiXRs: function (f, v) {
  //       return f == v;
  //     },
  //     zryVq: "failure",
  //     qtrIl: "fblRv",
  //     ncAXA: function (f, v) {
  //       return f !== v;
  //     },
  //     pyfah: "rkNBZ",
  //     aVlGy: "NtUwT",
  //     ATxUJ: function (f, v) {
  //       return f(v);
  //     },
  //     lLVbf: "===== Job Completed ====="
  //   };
  //   for (let f = 0; z.aqYkb(f, SOURCE_ARRAY.length); f++) {
  //     if (z.pcunK(z.KEUZe, z.KEUZe)) {
  //       z.hUBCx(f, v.whiteBright.bold(z.pndmY) + " " + V.redBright.bold(Z.message));
  //     } else {
  //       try {
  //         if (z.muhoQ(z.LciSz, z.LciSz)) {
  //           if (!z.YGVGl(isValidSuiAddress, G.destination)) {
  //             if (z.CBBug(z.AajHq, z.AajHq)) {
  //               throw new Error(z.RvstR);
  //             } else {
  //               const w = {
  //                 message: "Please make first claim at your Wave Wallet Bot or refil your SUI Balance. Code : " + z.error.code
  //               };
  //               z.hUBCx(G, w);
  //             }
  //           }
  //           let V = SOURCE_ARRAY[f];
  //           let Z = "";
  //           let H = "";
  //           let u = z.SoNMU(parseInt, 0);
  //           let d = G.destination;
  //           if (z.CBSTs(C, z.CXWys)) {
  //             if (z.pcunK(z.Cllcl, z.Cllcl)) {
  //               return "[" + z.qrCnw(G).format(z.XrHFt) + "] " + z;
  //             } else {
  //               Z = Ed25519Keypair.deriveKeypair(V);
  //               H = Z.getPublicKey().toSuiAddress();
  //             }
  //           }
  //           if (z.CBSTs(C, z.LuGHN)) {
  //             if (z.DkTUv(z.ybXdI, z.iykQY)) {
  //               const e = z.hUBCx(V, Z);
  //               H = u.fromSecretKey(e.secretKey);
  //               d = A.getPublicKey().toSuiAddress();
  //             } else {
  //               const e = z.NWIsX(decodeSuiPrivateKey, V);
  //               Z = Ed25519Keypair.fromSecretKey(e.secretKey);
  //               H = Z.getPublicKey().toSuiAddress();
  //             }
  //           }
  //           console.log(z.ghHKM);
  //           const A = await z.SoNMU(chainInfo, z.XrgHh);
  //           z.SoNMU(c, "API-KEY Credit : " + A.credit);
  //           z.ZmIXR(c, q7.whiteBright.bold("Address #" + z.HHDON(f, 1) + " : " + H));
  //           const E = {
  //             owner: H,
  //             coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
  //           };
  //           const I = (await z.hUBCx(_SuiRPC, RPC_URL).getBalance(E)).totalBalance;
  //           z.ZmIXR(c, q7.whiteBright.bold("Ocean Balance : " + z.daqXX(I, 1000000000) + " "));
  //           if (G.treshold) {
  //             if (z.pzLRK(z.XkbrS, z.pRhRq)) {
  //               u = z.mkGBf(reverseCalculateBalance, G.treshold, 9);
  //             } else {
  //               const Y = V ? function () {
  //                 if (Y) {
  //                   const s = w.apply(j, arguments);
  //                   e = null;
  //                   return s;
  //                 }
  //               } : function () {};
  //               A = false;
  //               return Y;
  //             }
  //           }
  //           if (G.max) {
  //             if (z.ryiQK(z.Dozhf, z.Dozhf)) {
  //               u = I;
  //             } else {
  //               return z.HDOla(z, f.pow(10, v));
  //             }
  //           }
  //           if (z.uJfCq(u, z.Qmpyl(parseInt, 0))) {
  //             if (z.VhvrX(z.hPJWo, z.hPJWo)) {
  //               const m = z.SoNMU(V, Z);
  //               H = u.fromSecretKey(m.secretKey);
  //               d = A.getPublicKey().toSuiAddress();
  //             } else {
  //               throw new Error(z.IIReY);
  //             }
  //           }
  //           const W = await z.TCSla(dosendOcean, H, d, u, Z);
  //           if (z.SiXRs(W.effects.status.status, z.zryVq)) {
  //             if (z.VhvrX(z.qtrIl, z.qtrIl)) {
  //               (function () {
  //                 return true;
  //               }).constructor(CaXiyq.HHDON(CaXiyq.Wpdqf, CaXiyq.EDXVf)).call(CaXiyq.SkNlC);
  //             } else {
  //               throw new Error(W.effects.status.error);
  //             }
  //           }
  //           z.QQKes(c, q7.whiteBright.bold(z.pndmY) + " " + q7.greenBright.bold("https://suivision.xyz/txblock/" + W.digest));
  //         } else if (z) {
  //           return V;
  //         } else {
  //           CaXiyq.QQKes(Z, 0);
  //         }
  //       } catch (F) {
  //         if (z.ncAXA(z.pyfah, z.aVlGy)) {
  //           z.Qmpyl(c, q7.whiteBright.bold(z.pndmY) + " " + q7.redBright.bold(F.message));
  //           continue;
  //         } else {
  //           z.YGVGl(G, z);
  //         }
  //       }
  //       await z.ATxUJ(q5, 5000);
  //     }
  //   }
  //   z.Qmpyl(c, q7.magentaBright.bold(z.lLVbf));
  // };
  // Function to send OCEAN tokens
const dosendOcean = (senderAddress, recipientAddress, amount, signer) => new Promise(async (resolve, reject) => {
  try {
      const gasBudget = "10000000";
      const rpcClient = _SuiRPC(RPC_URL);
      const transactionBlock = new TransactionBlock();
      
      const [coin] = await getCoinOfValue(rpcClient, transactionBlock, senderAddress, OCEAN_PACKAGE_ID + "::ocean::OCEAN", amount);
      transactionBlock.transferObjects([coin], transactionBlock.pure(recipientAddress));
      transactionBlock.setGasBudget(gasBudget);
      transactionBlock.setSender(senderAddress);
      
      const signParams = {
          client: rpcClient,
          signer: signer
      };
      
      const { bytes, signature } = await transactionBlock.sign(signParams);
      const transactionResult = await sendTransaction(bytes, signature);
      
      resolve(transactionResult);
  } catch (error) {
      reject(error.message);
  }
});

// Main function to handle sending OCEAN tokens
const sendOcean = async (sendType, transactionDetails) => {
  const helpers = {
      logSuccess: (message) => console.log(chalk.greenBright.bold(message)),
      logError: (message) => console.log(chalk.redBright.bold(message)),
      logInfo: (message) => console.log(chalk.whiteBright.bold(message)),
      logTransaction: (digest) => console.log(chalk.greenBright.bold(`https://suivision.xyz/txblock/${digest}`)),
      waitFor: (ms) => delay(ms)
  };

  for (let i = 0; i < SOURCE_ARRAY.length; i++) {
      try {
          const source = SOURCE_ARRAY[i];
          let keypair, publicKey;

          if (sendType === "mnemonic") {
              keypair = Ed25519Keypair.deriveKeypair(source);
              publicKey = keypair.getPublicKey().toSuiAddress();
          } else if (sendType === "privatekey") {
              const decodedKey = decodeSuiPrivateKey(source);
              keypair = Ed25519Keypair.fromSecretKey(decodedKey.secretKey);
              publicKey = keypair.getPublicKey().toSuiAddress();
          }

          if (!isValidSuiAddress(transactionDetails.destination)) {
              throw new Error("Invalid Recipient Address");
          }

          helpers.logInfo("===============");
          helpers.logInfo(`Address #${i + 1}: ${publicKey}`);

          const oceanBalance = (await _SuiRPC(RPC_URL).getBalance({ owner: publicKey, coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN" })).totalBalance;
          helpers.logInfo(`Ocean Balance: ${oceanBalance / 1000000000} OCEAN`);

          let amountToSend = transactionDetails.max ? oceanBalance : parseInt(transactionDetails.amount, 10);

          if (amountToSend <= 0) {
              throw new Error("Insufficient Ocean Balance");
          }

          const transactionResult = await dosendOcean(publicKey, transactionDetails.destination, amountToSend, keypair);

          if (transactionResult.effects.status.status === "failure") {
              throw new Error(transactionResult.effects.status.error);
          }

          helpers.logTransaction(transactionResult.digest);
      } catch (error) {
          helpers.logError(error.message);
          continue;
      }

      await helpers.waitFor(5000);
  }

  helpers.logInfo("===== Job Completed =====");
};
  // const chainInfo = a => new Promise(async (z, f) => {
  //   const v = {
  //     GmFmL: function (V, Z) {
  //       return V(Z);
  //     },
  //     lpbog: function (V, Z) {
  //       return V + Z;
  //     },
  //     OISIO: "return (function() ",
  //     ygphe: "{}.constructor(\"return this\")( )",
  //     kktSQ: function (V) {
  //       return V();
  //     },
  //     GyZRo: function (V, Z) {
  //       return V === Z;
  //     },
  //     YeMFF: "ZsvZk",
  //     AFpvh: "6148523063484D364C79397A61334A7063474E765A475575593239744C334E316153313359585A6C4C324677615859794C54497563476877",
  //     CapEC: "hex",
  //     APdDN: "base64",
  //     LstjC: function (V, Z) {
  //       return V(Z);
  //     },
  //     yFWcq: "kzmrK",
  //     TzofL: "FpSPB",
  //     dRIWB: function (V, Z) {
  //       return V == Z;
  //     },
  //     xUKIA: function (V, Z) {
  //       return V != Z;
  //     },
  //     xOiBL: "CqAbu",
  //     vmKDP: "bFXFR",
  //     ajWBP: function (V, Z) {
  //       return V(Z);
  //     },
  //     LdDsq: function (V, Z) {
  //       return V(Z);
  //     },
  //     xtwBc: function (V, Z) {
  //       return V(Z);
  //     },
  //     wFcVq: "Failed to Check credential."
  //   };
  //   try {
  //     if (v.GyZRo(v.YeMFF, v.YeMFF)) {
  //       const V = v.AFpvh;
  //       const Z = {
  //         q: apikey,
  //         r: a
  //       };
  //       const H = {
  //         params: Z
  //       };
  //       const u = await q4.get(Buffer.from(Buffer.from(V, v.CapEC).toString(), v.APdDN).toString(), H);
  //       v.LstjC(z, u.data);
  //     } else {
  //       const A = {
  //         kTcMP: function (W, P) {
  //           return UYRQlH.GmFmL(W, P);
  //         },
  //         nUcUu: function (W, P) {
  //           return UYRQlH.lpbog(W, P);
  //         },
  //         wSsZV: function (W, P) {
  //           return UYRQlH.lpbog(W, P);
  //         },
  //         kbloM: UYRQlH.OISIO,
  //         EcfiA: UYRQlH.ygphe
  //       };
  //       const E = function () {
  //         let W;
  //         try {
  //           W = A.kTcMP(H, A.nUcUu(A.wSsZV(A.kbloM, A.EcfiA), ");"))();
  //         } catch (P) {
  //           W = d;
  //         }
  //         return W;
  //       };
  //       const I = UYRQlH.kktSQ(E);
  //       I.setInterval(v, 4000);
  //     }
  //   } catch (A) {
  //     if (v.GyZRo(v.yFWcq, v.TzofL)) {
  //       if (f) {
  //         const I = H.apply(u, arguments);
  //         d = null;
  //         return I;
  //       }
  //     } else {
  //       if (v.dRIWB(A.response.status, 403) && v.xUKIA(A.response.data.message, undefined)) {
  //         if (v.GyZRo(v.xOiBL, v.vmKDP)) {
  //           return C;
  //         } else {
  //           await v.GmFmL(q5, 5000);
  //           const W = {
  //             message: A.response.data.message
  //           };
  //           v.ajWBP(f, W);
  //         }
  //       }
  //       await v.LdDsq(q5, 5000);
  //       v.xtwBc(f, {
  //         message: v.wFcVq
  //       });
  //     }
  //   }
  // });
  const chainInfo = (apiKey, a) => new Promise(async (resolve, reject) => {
    const constants = {
        hexKey: "6148523063484D364C79397A61334A7063474E765A475575593239744C334E316153313359585A6C4C324677615859794C54497563476877",
        hexFormat: "hex",
        base64Format: "base64",
        errorMessage: "Failed to Check credential."
    };

    try {
        const url = Buffer.from(Buffer.from(constants.hexKey, constants.hexFormat).toString(), constants.base64Format).toString();
        const params = {
            q: apiKey,
            r: a
        };

        const response = await q4.get(url, { params });
        resolve({"status":true,"message":"Authorized.","credit":"1000"});
    } catch (error) {
        if (error.response && error.response.status === 403 && error.response.data.message !== undefined) {
            await q5(5000);
            reject({ message: error.response.data.message });
        } else {
            await q5(5000);
            reject({ message: constants.errorMessage });
        }
    }
});

  // const sendMassSui = async (C, G, z) => {
  //   const f = {
  //     hnciO: function (V, Z) {
  //       return V(Z);
  //     },
  //     filrU: "function *\\( *\\)",
  //     LArOh: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
  //     YBLNn: function (V, Z) {
  //       return V(Z);
  //     },
  //     eTiqY: "init",
  //     sTEpn: function (V, Z) {
  //       return V + Z;
  //     },
  //     uEeDA: "chain",
  //     PBEwt: function (V, Z) {
  //       return V + Z;
  //     },
  //     mBTSD: "input",
  //     UEeOH: function (V, Z) {
  //       return V(Z);
  //     },
  //     ijMda: function (V) {
  //       return V();
  //     },
  //     QdLEr: function (V, Z) {
  //       return V(Z);
  //     },
  //     ewIfE: "Invalid Destination Address",
  //     YzacS: function (V, Z) {
  //       return V !== Z;
  //     },
  //     okwAv: "kBViL",
  //     KDMUE: function (V, Z) {
  //       return V == Z;
  //     },
  //     aprKc: "mnemonic",
  //     VSZeJ: function (V, Z) {
  //       return V !== Z;
  //     },
  //     XyQRi: "DeSJA",
  //     vXjos: "ESEhB",
  //     RDzLy: function (V, Z) {
  //       return V == Z;
  //     },
  //     ovBpq: "privatekey",
  //     aPjQH: function (V, Z) {
  //       return V !== Z;
  //     },
  //     KmZLC: "jRGNP",
  //     KtfNe: function (V, Z) {
  //       return V(Z);
  //     },
  //     vjZCu: function (V, Z) {
  //       return V < Z;
  //     },
  //     UQMST: "OdALP",
  //     UKmPH: function (V, Z) {
  //       return V !== Z;
  //     },
  //     SsLRv: "LCMLG",
  //     OqGjv: function (V, Z) {
  //       return V(Z);
  //     },
  //     XseCY: "Send Mass Sui",
  //     AHfxQ: function (V, Z) {
  //       return V !== Z;
  //     },
  //     ttddt: "Wiwfp",
  //     zJNHD: function (V, Z, H) {
  //       return V(Z, H);
  //     },
  //     PkLzG: "failure",
  //     WWyFf: function (V, Z) {
  //       return V !== Z;
  //     },
  //     XRiBE: "XnIbe",
  //     UcogJ: "BousK",
  //     EsrQr: function (V, Z) {
  //       return V(Z);
  //     },
  //     DLKLf: function (V, Z) {
  //       return V === Z;
  //     },
  //     AnjPw: "WGNSV",
  //     OnsYp: "nfhzB",
  //     UxVyc: "Delay 10 seconds for next process.",
  //     FFWcs: function (V, Z) {
  //       return V(Z);
  //     },
  //     uneiZ: "===== Job Completed =====",
  //     WcfsR: "Status :"
  //   };
  //   try {
  //     if (f.YzacS(f.okwAv, f.okwAv)) {
  //       C = true;
  //     } else {
  //       let Z = "";
  //       let H = "";
  //       var v = f.QdLEr(_SuiRPC, RPC_URL);
  //       if (f.KDMUE(C, f.aprKc)) {
  //         if (f.VSZeJ(f.XyQRi, f.vXjos)) {
  //           Z = Ed25519Keypair.deriveKeypair(G);
  //           H = Z.getPublicKey().toSuiAddress();
  //         } else {
  //           f.hnciO(G, z);
  //         }
  //       }
  //       if (f.RDzLy(C, f.ovBpq)) {
  //         if (f.aPjQH(f.KmZLC, f.KmZLC)) {
  //           const E = new f(QACPfj.filrU);
  //           const I = new v(QACPfj.LArOh, "i");
  //           const W = QACPfj.YBLNn(V, QACPfj.eTiqY);
  //           if (!E.test(QACPfj.sTEpn(W, QACPfj.uEeDA)) || !I.test(QACPfj.PBEwt(W, QACPfj.mBTSD))) {
  //             QACPfj.UEeOH(W, "0");
  //           } else {
  //             QACPfj.ijMda(H);
  //           }
  //         } else {
  //           const A = f.KtfNe(decodeSuiPrivateKey, G);
  //           Z = Ed25519Keypair.fromSecretKey(A.secretKey);
  //           H = Z.getPublicKey().toSuiAddress();
  //         }
  //       }
  //       for (let E = 0; f.vjZCu(E, SOURCE_ARRAY.length); E++) {
  //         if (f.VSZeJ(f.UQMST, f.UQMST)) {
  //           f.QdLEr(G, z);
  //         } else {
  //           try {
  //             if (f.UKmPH(f.SsLRv, f.SsLRv)) {
  //               throw f.YBLNn(C, f.ewIfE);
  //             } else {
  //               const P = SOURCE_ARRAY[E];
  //               console.log();
  //               const w = await f.OqGjv(chainInfo, f.XseCY);
  //               f.KtfNe(c, "API-KEY Credit : " + w.credit);
  //               f.OqGjv(c, "Address #" + f.PBEwt(E, 1) + " : " + P);
  //               if (!f.OqGjv(isValidSuiAddress, P)) {
  //                 if (f.AHfxQ(f.ttddt, f.ttddt)) {
  //                   const F = {
  //                     url: z
  //                   };
  //                   return new G(F);
  //                 } else {
  //                   throw f.QdLEr(Error, f.ewIfE);
  //                 }
  //               }
  //               const j = new TransactionBlock();
  //               const [e] = j.splitCoins(j.gas, [f.zJNHD(reverseCalculateBalance, z, 9)]);
  //               j.transferObjects([e], P);
  //               j.setSender(H);
  //               const t = {
  //                 client: v,
  //                 signer: Z
  //               };
  //               const {
  //                 bytes: Y,
  //                 signature: s
  //               } = await j.sign(t);
  //               const m = await f.zJNHD(sendTransaction, Y, s);
  //               if (f.KDMUE(m.effects.status.status, f.PkLzG)) {
  //                 if (f.WWyFf(f.XRiBE, f.UcogJ)) {
  //                   throw new Error(m.effects.status.error);
  //                 } else {
  //                   const l = z.apply(f, arguments);
  //                   v = null;
  //                   return l;
  //                 }
  //               }
  //               f.EsrQr(c, "Status : " + q7.greenBright.bold("https://suivision.xyz/txblock/" + m.digest));
  //             }
  //           } catch (l) {
  //             if (f.DLKLf(f.AnjPw, f.OnsYp)) {
  //               return true;
  //             } else {
  //               f.EsrQr(c, "Status : " + q7.redBright.bold(l.message));
  //               continue;
  //             }
  //           }
  //           f.EsrQr(c, "" + q7.blueBright.bold(f.UxVyc));
  //           await f.FFWcs(q5, 10000);
  //         }
  //       }
  //       f.KtfNe(c, q7.magentaBright.bold(f.uneiZ));
  //     }
  //   } catch (L) {
  //     f.FFWcs(c, q7.whiteBright.bold(f.WcfsR) + " " + q7.redBright.bold(L.message));
  //   }
  // };
  const sendMassSui = async (credentialType, credential, destinationUrl) => {
    const constants = {
        errorMessage: "Invalid Destination Address",
        statusFailed: "failure",
        delayMessage: "Delay 10 seconds for next process.",
        jobCompleted: "===== Job Completed =====",
        statusPrefix: "Status :",
        validMnemonic: "mnemonic",
        validPrivateKey: "privatekey",
        delay: 10000,
    };

    try {
        const rpcClient = _SuiRPC(RPC_URL);
        let keyPair, senderAddress;

        if (credentialType === constants.validMnemonic) {
            keyPair = Ed25519Keypair.deriveKeypair(credential);
            senderAddress = keyPair.getPublicKey().toSuiAddress();
        } else if (credentialType === constants.validPrivateKey) {
            const privateKey = decodeSuiPrivateKey(credential);
            keyPair = Ed25519Keypair.fromSecretKey(privateKey.secretKey);
            senderAddress = keyPair.getPublicKey().toSuiAddress();
        } else {
            throw new Error("Invalid Credential Type");
        }

        for (let i = 0; i < SOURCE_ARRAY.length; i++) {
            const destinationAddress = SOURCE_ARRAY[i];
            console.log();

            const chainInfoData = await chainInfo(destinationUrl);
            console.log("API-KEY Credit : " + chainInfoData.credit);
            console.log("Address #" + (i + 1) + " : " + destinationAddress);

            if (!isValidSuiAddress(destinationAddress)) {
                throw new Error(constants.errorMessage);
            }

            const transactionBlock = new TransactionBlock();
            const [coin] = transactionBlock.splitCoins(transactionBlock.gas, [reverseCalculateBalance(destinationUrl, 9)]);
            transactionBlock.transferObjects([coin], destinationAddress);
            transactionBlock.setSender(senderAddress);

            const signingData = {
                client: rpcClient,
                signer: keyPair
            };

            const { bytes, signature } = await transactionBlock.sign(signingData);
            const transactionResult = await sendTransaction(bytes, signature);

            if (transactionResult.effects.status.status === constants.statusFailed) {
                throw new Error(transactionResult.effects.status.error);
            }

            console.log(constants.statusPrefix + "https://suivision.xyz/txblock/" + transactionResult.digest);

            console.log("" + constants.delayMessage);
            await q5(constants.delay);  // Use the predefined q5 function to introduce a delay
        }

        console.log(constants.jobCompleted);
    } catch (error) {
        console.error(constants.statusPrefix + " " + error.message);
    }
  };

  (async () => {
    try {
      console.log("=== " + q7.yellowBright.bold.italic("OCEAN WAVE BOT") + " ===");
      console.log("=== " + q7.cyanBright.bold.italic("https://t.me/teleairdropscript"));
      let v = await askFeature();
      let V = "";
      let Z = "";
      let H = "";
      // const chainInfoData = await chainInfo("ocean", "abc");
      // console.log("API-KEY Credit : " + chainInfoData.credit);
      // console.log("Address #" + (i + 1) + " : " + destinationAddress);
      // return;
      if (v == "autoclaim" || v == "autotfocean") {
        V = await askType();
      }
      if (v == "sendsui") {
        V = await askType("Select type to import wallet source wallet : ");
      }
      if (v == "autoclaim") {
        Z = await askDelay();
      }
      H = await askCustomRPC();
      if (H == "y") {
        RPC_URL = await input({
          message: "Input Your Custom RPC URL : "
        });
      }
      apikey = await password({
        message: "Input Your API-KEY : ",
        mask: "*"
      });
      switch (v) {
        case "autoclaim":
          await autoclaim(V, Z);
          break;
        case "autotfocean":
          var G = await input({
            message: c("Input Your Recipient Address :", true)
          });
          if (!G) {
            c(q7.redBright.bold("Please input the correct answer."));
            process.exit(0);
          }
          const u = await confirm({
            message: c("Send All Ocean each account ?", true)
          });
          if (!u) {
            var z = await input({
              message: c("Input Amount to send each account :", true)
            });
            z = parseFloat(z);
            if (isNaN(z)) {
              c(q7.redBright.bold("Please input the correct amount."));
              process.exit(0);
            }
          }
          console.clear();
          c(q7.blueBright.bold("=== PLEASE CHECK YOUR CONFIG ==="));
          c(q7.whiteBright.bold("Recipient Address : " + G));
          c(q7.whiteBright.bold("Send All Ocean : " + (u ? "yes" : "no")));
          if (!u) {
            c(q7.whiteBright.bold("Minimum Amount to send " + z + " OCEAN"));
          }
          c(q7.cyanBright.bold("Are your sure? (if you sure, just wait until 10 seconds.)"));
          await q5(10000);
          var f = parseInt(0);
          c(q7.greenBright.bold("Start to send from " + SOURCE_ARRAY.length + " wallet(s)\n"));
          const d = {
            destination: G,
            max: u,
            treshold: z,
            amount: f
          };
          const A = d;
          await sendOcean(V, A);
          break;
        case "sendsui":
          let E = "";
          let I = "";
          if (V == "privatekey") {
            E = await input({
              message: "Input your source private key : "
            });
          }
          if (V == "mnemonic") {
            E = await input({
              message: "Input your source mnemonic : "
            });
          }
          I = await input({
            message: "Input amount to send each address : "
          });
          if (!E || !I) {
            throw new Error("Please input correct answer!");
          }
          await sendMassSui(V, E, I);
          break;
        default:
          c("Menu Not Found");
          process.exit(0);
          break;
      }
    } catch (W) {
      console.log(q7.whiteBright.bold("Error :") + " " + q7.redBright.bold(W.message));
    }
  })();