const n = function () {
    let X = true;
    return function (U, Y) {
      const o = X ? function () {
        const J = {
          IchuP: function (P) {
            return P();
          },
          glEUY: "DD/MM/YY HH:mm:ss",
          rgCrH: function (P, q) {
            return P(q);
          },
          EobQT: "Please input the correct amount."
        };
        if (Y) {
          const q = Y.apply(U, arguments);
          Y = null;
          return q;
        }
      } : function () {};
      X = false;
      return o;
    };
  }();
//   (function () {
//     n(this, function () {
//       const X = {
//         EdSwe: function (U, Y) {
//           return U(Y);
//         },
//         RRoqR: function (U, Y) {
//           return U(Y);
//         }
//       };
//       const Y = new RegExp("function *\\( *\\)");
//       const o = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
//       const J = e("init");
//       if (!Y.test(J + "chain") || !o.test(J + "input")) {
//         J("0");
//       } else {
//         e();
//       }
//     })();
//   })();
  import { input, confirm, select } from "@inquirer/prompts";
  import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
  import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
  import { TransactionBlock } from "@mysten/sui.js/transactions";
  import { decodeSuiPrivateKey } from "@mysten/sui.js/cryptography";
  import { isValidSuiAddress } from "@mysten/sui.js/utils";
  import { getCoinOfValue } from "@polymedia/suits";
  import y from "axios";
  import r from "delay";
  import t from "moment";
  import K from "chalk";
  import O from "fs";
  const READ_SOURCE = O.readFileSync("./data.json", "utf-8");
  const SOURCE_ARRAY = JSON.parse(READ_SOURCE);
  const CLAIM_PACKAGE_ID = "0x1efaf509c9b7e986ee724596f526a22b474b15c376136772c00b8452f204d2d1";
  const CLAIM_OBJECT_ID = "0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a";
  const OCEAN_PACKAGE_ID = "0xa8816d3a6e3136e86bc2873b1f94a15cadc8af2703c075f2d546c2ae367f4df9";
  var apikey = "ocean";
  const makeClaimTx = (V, X, U) => new Promise(async (Y, o) => {
    const J = {
      DOWOI: "Insuffience Ocean Balance",
      IGedV: "function *\\( *\\)",
      jtDEm: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
      gkzCa: function (P, q) {
        return P(q);
      },
      nTmyF: "init",
      VEpPN: function (P, q) {
        return P + q;
      },
      XWtAS: "chain",
      LoWcx: "input",
      uKGXb: function (P, q) {
        return P(q);
      },
      Gvavi: function (P) {
        return P();
      },
      RcsGk: function (P, q) {
        return P !== q;
      },
      jKOfq: "ocovI",
      WnspA: "10000000",
      rlCSU: "0x6",
      MibIK: function (P, q) {
        return P === q;
      },
      qerls: "cPSDz",
      oPisz: "UCUhJ"
    };
    try {
      if (J.RcsGk(J.jKOfq, J.jKOfq)) {
        throw new X(J.DOWOI);
      } else {
        const q = J.WnspA;
        const l = new TransactionBlock();
        l.moveCall({
          target: CLAIM_PACKAGE_ID + "::game::claim",
          arguments: [l.object(CLAIM_OBJECT_ID), l.object(J.rlCSU)]
        });
        l.setGasBudget(q);
        l.setSender(U);
        const i = {
          client: V,
          signer: X
        };
        const {
          bytes: R,
          signature: e
        } = await l.sign(i);
        const f = {
          bytes: R,
          signature: e
        };
        J.gkzCa(Y, f);
      }
    } catch (F) {
      if (J.MibIK(J.qerls, J.oPisz)) {
        const H = new o(nhcAxe.IGedV);
        const N = new J(nhcAxe.jtDEm, "i");
        const B = nhcAxe.gkzCa(P, nhcAxe.nTmyF);
        if (!H.test(nhcAxe.VEpPN(B, nhcAxe.XWtAS)) || !N.test(nhcAxe.VEpPN(B, nhcAxe.LoWcx))) {
          nhcAxe.uKGXb(B, "0");
        } else {
          nhcAxe.Gvavi(l);
        }
      } else {
        J.gkzCa(o, F);
      }
    }
  });
  function calculateBalance(V, X) {
    return Number(V) / Math.pow(10, X);
  }
  ;
  function reverseCalculateBalance(X, U) {
    return X * Math.pow(10, U);
  }
  ;
  const sendTransaction = (V, X, U) => new Promise(async (Y, o) => {
    try {
      const q = {
        transactionBlock: X
      };
      await V.dryRunTransactionBlock(q);
      const i = {
        signature: U,
        transactionBlock: X,
        requestType: "WaitForLocalExecution",
        options: {
          showEffects: true
        }
      };
      const R = await V.executeTransactionBlock(i);
      Y(R);
    } catch (e) {
      o(e);
    }
  });
  const getTimeLeft = V => new Promise(async (X, U) => {
    const Y = {
      dkDGa: function (o, J) {
        return o(J);
      },
      SHGrh: function (o, J) {
        return o(J);
      },
      sLYNG: function (o, J) {
        return o !== J;
      },
      HXrNE: "kILkX",
      PvVLZ: "https://fullnode.mainnet.sui.io/",
      INfiE: "2.0",
      mZtQu: "suix_getDynamicFieldObject",
      wQZym: "0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a",
      GyyGO: "address",
      kMXAL: "*/*",
      Dasci: "gzip, deflate, br, zstd",
      pWQsb: "en-US,en;q=0.9,id;q=0.8",
      ELzDJ: "typescript",
      VHVgf: "0.51.0",
      QkTXS: "1.21.0",
      LlUmA: "239",
      SrwyZ: "application/json",
      aBYFH: "https://walletapp.waveonsui.com",
      XHDfj: "u=1, i",
      wixba: "https://walletapp.waveonsui.com/",
      FkznK: "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      EODDX: "\"Windows\"",
      hvhAG: "empty",
      NjEYv: "cors",
      lDEug: "cross-site",
      zOPbs: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      kvYDc: function (o, J) {
        return o != J;
      },
      GbKQv: function (o, J) {
        return o !== J;
      },
      jwNHQ: "yxkRH",
      cvsBF: function (o, J) {
        return o(J);
      },
      wWZWN: function (o, J) {
        return o + J;
      },
      NODPU: function (o, J) {
        return o * J;
      },
      pfXgl: function (o, J) {
        return o * J;
      },
      EoZsW: function (o, J) {
        return o * J;
      },
      gvooC: function (o, J) {
        return o - J;
      },
      Ecjxc: function (o, J) {
        return o(J);
      },
      hpWTN: function (o, J) {
        return o === J;
      },
      BWQUT: "JCuFw"
    };
    try {
      if (Y.sLYNG(Y.HXrNE, Y.HXrNE)) {
        const J = Y.dkDGa(P, q);
        l = i.fromSecretKey(J.secretKey);
        R = e.getPublicKey().toSuiAddress();
      } else {
        const J = await y.post(Y.PvVLZ, {
          jsonrpc: Y.INfiE,
          id: 76,
          method: Y.mZtQu,
          params: [Y.wQZym, {
            type: Y.GyyGO,
            value: V
          }]
        }, {
          headers: {
            Accept: Y.kMXAL,
            "Accept-Encoding": Y.Dasci,
            "Accept-Language": Y.pWQsb,
            "Client-Sdk-Type": Y.ELzDJ,
            "Client-Sdk-Version": Y.VHVgf,
            "Client-Target-Api-Version": Y.QkTXS,
            "Content-Length": Y.LlUmA,
            "Content-Type": Y.SrwyZ,
            Origin: Y.aBYFH,
            Priority: Y.XHDfj,
            Referer: Y.wixba,
            "Sec-Ch-Ua": Y.FkznK,
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": Y.EODDX,
            // "Sec-Fetch-Dest": Y.hvhAG,
            // "Sec-Fetch-Mode": Y.NjEYv,
            // "Sec-Fetch-Site": Y.lDEug,
            "User-Agent": Y.zOPbs
          }
        });
        if (Y.kvYDc(J.data.result.error, undefined)) {
          if (Y.GbKQv(Y.jwNHQ, Y.jwNHQ)) {
            Y.SHGrh(U, Y);
          } else {
            Y.dkDGa(U, {
              message: "Please make first claim at your Wave Wallet Bot or refil your SUI Balance."
            });
          }
        }
        const P = Y.cvsBF(parseInt, J.data.result.data.content.fields.last_claim);
        const q = new Date(Y.wWZWN(P, Y.NODPU(Y.pfXgl(Y.EoZsW(2, 60), 60), 1000)));
        const l = Y.gvooC(q, new Date());
        Y.Ecjxc(X, l);
      }
    } catch (e) {
      if (Y.hpWTN(Y.BWQUT, Y.BWQUT)) {
        Y.SHGrh(U, e);
      } else {
        const F = Y.apply(o, arguments);
        J = null;
        return F;
      }
    }
  });
  
  function c(V, X = false) {
    if (X) {
      return "[" + t().format("DD/MM/YY HH:mm:ss") + "] " + V;
    }
    return console.log(K.green("?") + " [" + K.whiteBright.bold(t().format("DD/MM/YY HH:mm:ss")) + "] " + V);
  }
  const convertTime = V => new Promise(async (X, U) => {
    const Y = {
      BqFUu: function (o, J) {
        return o(J);
      },
      iIUGi: function (o, J) {
        return o !== J;
      },
      ZUqiy: "pOwUk",
      cdJdS: function (o, J) {
        return o / J;
      },
      xHkoM: function (o, J) {
        return o * J;
      },
      UDlFV: function (o, J) {
        return o * J;
      },
      oOSsQ: function (o, J) {
        return o % J;
      },
      orsgG: function (o, J) {
        return o * J;
      },
      wWFqm: function (o, J) {
        return o * J;
      },
      Nsrwx: function (o, J) {
        return o % J;
      },
      mAIFC: function (o, J) {
        return o === J;
      },
      xOCAp: "GdwrT",
      iVyuI: function (o, J) {
        return o(J);
      }
    };
    try {
      if (Y.iIUGi(Y.ZUqiy, Y.ZUqiy)) {
        const J = Y.BqFUu(P, q);
        l = i.fromSecretKey(J.secretKey);
        R = e.getPublicKey().toSuiAddress();
      } else {
        const J = Math.floor(Y.cdJdS(V, Y.xHkoM(Y.UDlFV(1000, 60), 60)));
        const P = Math.floor(Y.cdJdS(Y.oOSsQ(V, Y.xHkoM(Y.orsgG(1000, 60), 60)), Y.wWFqm(1000, 60)));
        const q = Math.floor(Y.cdJdS(Y.Nsrwx(V, Y.orsgG(1000, 60)), 1000));
        Y.BqFUu(X, J + " Hour(s), " + P + " minute(s), " + q + " second(s)");
      }
    } catch (l) {
      if (Y.mAIFC(Y.xOCAp, Y.xOCAp)) {
        Y.iVyuI(U, l);
      } else {
        throw new U(Y.effects.status.error);
      }
    }
  });
  const autoclaim = async (U, Y = 0) => {
    const o = {
      tOBMY: "Error :",
      FMocr: function (q, l) {
        return q + l;
      },
      gabvt: "debu",
      LYhsy: "gger",
      aPLQE: "action",
      iIMqm: function (q, l) {
        return q(l);
      },
      deWuu: "Status :",
      GIaQf: "(((.+)+)+)+$",
      nUsVu: function (q, l) {
        return q(l);
      },
      TpVsD: "function *\\( *\\)",
      LlwRS: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
      ckkJz: "init",
      VRlHy: "chain",
      iLXxY: "input",
      YHvmC: function (q) {
        return q();
      },
      NuIGz: function (q, l, i) {
        return q(l, i);
      },
      NPOeM: function (q, l) {
        return q(l);
      },
      oJmDh: function (q, l) {
        return q + l;
      },
      kNJGW: "return (function() ",
      kBChb: "{}.constructor(\"return this\")( )",
      QBWkl: "while (true) {}",
      Perov: "counter",
      XApcW: function (q, l) {
        return q(l);
      },
      sAkyu: "Please input the correct answer.",
      Gkhyl: function (q, l) {
        return q !== l;
      },
      BPaqr: "lkLnu",
      ZgzeM: "XgBRU",
      ovLcP: function (q, l) {
        return q(l);
      },
      EvxMU: function (q, l) {
        return q < l;
      },
      IqsSK: function (q, l) {
        return q === l;
      },
      rfNFq: "pGOdD",
      jUNTC: "voqJC",
      GRhEn: function (q, l) {
        return q !== l;
      },
      eyNTI: "YrQiK",
      wvNUv: "SBGBy",
      GvzlE: function (q, l) {
        return q == l;
      },
      GiMLB: "mnemonic",
      finLe: "VHWoP",
      SJiTw: "OuFGO",
      eHXTl: "privatekey",
      nuFLj: function (q, l) {
        return q === l;
      },
      yrVJA: "hGoeQ",
      RhUgv: "siHhj",
      rfKAe: function (q, l) {
        return q(l);
      },
      AILgX: "mainnet",
      IxwQQ: function (q, l) {
        return q / l;
      },
      erxkE: function (q, l) {
        return q == l;
      },
      ZZIBl: "HwbBK",
      zpZDh: "yCcDS",
      yYSdv: "axpTf",
      FpaAN: function (q, l) {
        return q(l);
      },
      VPSDW: function (q, l) {
        return q > l;
      },
      lgcRb: function (q, l) {
        return q === l;
      },
      lthHC: "zPyiQ",
      sTbcs: function (q, l) {
        return q !== l;
      },
      koCgv: function (q, l) {
        return q !== l;
      },
      PoOyN: "zXlbD",
      YCENc: function (q, l, i, R) {
        return q(l, i, R);
      },
      VVFwP: function (q, l, i, R) {
        return q(l, i, R);
      },
      ZUtER: "failure",
      EivMi: "HELhf",
      gIBVX: "YqKpW",
      tXkDm: function (q, l) {
        return q(l);
      },
      ZkUAM: "Tgjao",
      gfbmX: function (q, l) {
        return q(l);
      },
      CCVJe: function (q, l) {
        return q + l;
      },
      kjsde: function (q, l) {
        return q + l;
      },
      Bfeaa: "Status : ",
      JyGcM: "YErVK",
      EIewt: function (q, l) {
        return q < l;
      },
      jCTFs: function (q, l) {
        return q(l);
      },
      rKwpy: function (q, l) {
        return q == l;
      },
      AtVFM: function (q, l) {
        return q(l);
      },
      UHrzg: "JfRme",
      Ygaqg: "NlwkQ",
      TfoaG: function (q, l) {
        return q(l);
      }
    };
    try {
      if (o.Gkhyl(o.BPaqr, o.BPaqr)) {
        o.log(J.whiteBright.bold(o.tOBMY) + " " + P.redBright.bold(q.message));
      } else {
        while (true) {
          if (o.Gkhyl(o.ZgzeM, o.ZgzeM)) {
            (function () {
              return true;
            }).constructor(ONeKrz.FMocr(ONeKrz.gabvt, ONeKrz.LYhsy)).call(ONeKrz.aPLQE);
          } else {
            const i = await o.YHvmC(chainInfo);
            o.ovLcP(c, "API-KEY Credit : " + i.credit);
            var J = Number.MAX_SAFE_INTEGER;
            var P = "";
            for (let R = 0; o.EvxMU(R, SOURCE_ARRAY.length); R++) {
              if (o.IqsSK(o.rfNFq, o.jUNTC)) {
                o.iIMqm(o, J.whiteBright.bold(o.deWuu) + " " + P.redBright.bold(q.message));
              } else {
                try {
                  if (o.GRhEn(o.eyNTI, o.wvNUv)) {
                    let f = SOURCE_ARRAY[R];
                    let F = "";
                    let L = "";
                    if (o.GvzlE(U, o.GiMLB)) {
                      if (o.GRhEn(o.finLe, o.SJiTw)) {
                        F = Ed25519Keypair.deriveKeypair(f);
                        L = F.getPublicKey().toSuiAddress();
                      } else {
                        const x = Y.apply(o, arguments);
                        J = null;
                        return x;
                      }
                    }
                    if (o.GvzlE(U, o.eHXTl)) {
                      if (o.nuFLj(o.yrVJA, o.RhUgv)) {
                        return U.toString().search(ONeKrz.GIaQf).toString().constructor(Y).search(ONeKrz.GIaQf);
                      } else {
                        const D = o.nUsVu(decodeSuiPrivateKey, f);
                        F = Ed25519Keypair.fromSecretKey(D.secretKey);
                        L = F.getPublicKey().toSuiAddress();
                      }
                    }
                    const H = new SuiClient({
                      url: o.rfKAe(getFullnodeUrl, o.AILgX)
                    });
                    const N = {
                      owner: L
                    };
                    const B = o.IxwQQ((await H.getBalance(N)).totalBalance, 1000000000);
                    const I = {
                      owner: L,
                      coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
                    };
                    const u = o.IxwQQ((await H.getBalance(I)).totalBalance, 1000000000);
                    o.iIMqm(c, "Address : " + L);
                    o.NPOeM(c, "Source : " + f);
                    if (o.erxkE(U, o.GiMLB)) {
                      if (o.IqsSK(o.ZZIBl, o.zpZDh)) {
                        o.nUsVu(U, Y);
                      } else {
                        o.NPOeM(c, "Type : Mnemonic");
                      }
                    }
                    if (o.GvzlE(U, o.eHXTl)) {
                      if (o.Gkhyl(o.yYSdv, o.yYSdv)) {
                        return I;
                      } else {
                        o.iIMqm(c, "Type : Private Key");
                      }
                    }
                    o.iIMqm(c, "SUI Balance : " + K.blueBright(B) + " SUI");
                    o.iIMqm(c, "OCEAN Balance : " + K.blueBright(u) + " OCEAN");
                    await o.ovLcP(r, 5000);
                    const S = await o.FpaAN(getTimeLeft, L);
                    if (o.VPSDW(S, 0)) {
                      if (o.lgcRb(o.lthHC, o.lthHC)) {
                        o.iIMqm(c, K.yellowBright("Remain Time: " + (await o.NPOeM(convertTime, S)) + "\n"));
                        if (o.sTbcs(S, null) && o.EvxMU(S, J)) {
                          if (o.koCgv(o.PoOyN, o.PoOyN)) {
                            ONeKrz.nUsVu(I, "0");
                          } else {
                            J = S;
                            P = L;
                          }
                        }
                        continue;
                      } else {
                        U = Y;
                      }
                    }
                    const {
                      bytes: M,
                      signature: W
                    } = await o.YCENc(makeClaimTx, H, F, L);
                    const p = await o.VVFwP(sendTransaction, H, M, W);
                    if (o.erxkE(p.effects.status.status, o.ZUtER)) {
                      if (o.nuFLj(o.EivMi, o.gIBVX)) {
                        const A = {
                          LAcab: ONeKrz.TpVsD,
                          DewOf: ONeKrz.LlwRS,
                          fRFNU: function (T, s) {
                            return ONeKrz.nUsVu(T, s);
                          },
                          vOhHn: ONeKrz.ckkJz,
                          AGVkr: function (T, s) {
                            return ONeKrz.FMocr(T, s);
                          },
                          PAwWq: ONeKrz.VRlHy,
                          PUEaU: function (T, s) {
                            return ONeKrz.FMocr(T, s);
                          },
                          BTqsb: ONeKrz.iLXxY,
                          pNaYG: function (T) {
                            return ONeKrz.YHvmC(T);
                          }
                        };
                        ONeKrz.NuIGz(J, this, function () {
                          const T = new R(A.LAcab);
                          const s = new e(A.DewOf, "i");
                          const G = A.fRFNU(f, A.vOhHn);
                          if (!T.test(A.AGVkr(G, A.PAwWq)) || !s.test(A.PUEaU(G, A.BTqsb))) {
                            A.fRFNU(G, "0");
                          } else {
                            A.pNaYG(L);
                          }
                        })();
                      } else {
                        o.XApcW(c, K.redBright("Status : Failed To Claim\n"));
                        continue;
                      }
                    }
                    o.tXkDm(c, K.greenBright("Status : Claim Success\n"));
                  } else {
                    const T = {
                      ckHTu: function (C, Q) {
                        return ONeKrz.NPOeM(C, Q);
                      },
                      snePa: function (C, Q) {
                        return ONeKrz.FMocr(C, Q);
                      },
                      fVXtr: function (C, Q) {
                        return ONeKrz.oJmDh(C, Q);
                      },
                      KtrOm: ONeKrz.kNJGW,
                      PYusb: ONeKrz.kBChb
                    };
                    const s = function () {
                      let C;
                      try {
                        C = T.ckHTu(l, T.snePa(T.fVXtr(T.KtrOm, T.PYusb), ");"))();
                      } catch (Q) {
                        C = R;
                      }
                      return C;
                    };
                    const G = ONeKrz.YHvmC(s);
                    G.setInterval(J, 4000);
                  }
                } catch (T) {
                  if (o.IqsSK(o.ZkUAM, o.ZkUAM)) {
                    o.gfbmX(c, K.redBright(o.CCVJe(o.kjsde(o.Bfeaa, T.message), "\n")));
                    continue;
                  } else {
                    o.iIMqm(X, "Type : Private Key");
                  }
                }
              }
            }
            if (o.GvzlE(Y, 0)) {
              if (o.lgcRb(o.JyGcM, o.JyGcM)) {
                Y = o.EIewt(J, o.jCTFs(parseInt, 1)) || o.rKwpy(J, Number.MAX_SAFE_INTEGER) ? o.ovLcP(parseInt, 60000) : J;
              } else {
                return function (C) {}.constructor(ONeKrz.QBWkl).apply(ONeKrz.Perov);
              }
            }
            o.ovLcP(c, K.cyanBright("==== Wait Until " + (await o.AtVFM(convertTime, Y)) + " ===="));
            await o.tXkDm(r, Y);
          }
        }
      }
    } catch (C) {
      if (o.GRhEn(o.UHrzg, o.Ygaqg)) {
        o.TfoaG(c, K.whiteBright.bold(o.deWuu) + " " + K.redBright.bold(C.message));
      } else {
        o.XApcW(Y, o.redBright.bold(o.sAkyu));
        J.exit(0);
      }
    }
  };
  const getIp = () => new Promise(async (V, X) => {
    const U = {
      zfJaS: function (Y, o) {
        return Y(o);
      },
      NLxha: function (Y, o) {
        return Y(o);
      },
      FeuOU: function (Y, o) {
        return Y !== o;
      },
      vTgfM: "tKnUY",
      FsgRF: "wZmju",
      rIMoP: "https://api.ipify.org",
      ZBnUs: function (Y, o) {
        return Y(o);
      },
      dPtbI: function (Y, o) {
        return Y === o;
      },
      gaUUD: "HUuHe"
    };
    try {
      if (U.FeuOU(U.vTgfM, U.FsgRF)) {
        const Y = await y.get(U.rIMoP);
        U.ZBnUs(V, Y.data);
      } else {
        U.zfJaS(U, Y);
      }
    } catch (J) {
      if (U.dPtbI(U.gaUUD, U.gaUUD)) {
        U.ZBnUs(X, J);
      } else {
        const q = {
          message: Y.response.data.message
        };
        U.NLxha(U, q);
      }
    }
  });
  // const dosendOcean = (V, X, U, Y, o) => new Promise(async (J, P) => {
  //   try {
  //     const l = "10000000";
  //     const i = new TransactionBlock();
  //     const [R] = await getCoinOfValue(V, i, X, OCEAN_PACKAGE_ID + "::ocean::OCEAN", Y);
  //     i.transferObjects([R], i.pure(U));
  //     i.setGasBudget(l);
  //     i.setSender(X);
  //     const e = {
  //       client: V,
  //       signer: o
  //     };
  //     const {
  //       bytes: f,
  //       signature: F
  //     } = await i.sign(e);
  //     const L = await sendTransaction(V, f, F);
  //     J(L);
  //   } catch (N) {
  //     P(N.message);
  //   }
  // });
  // const sendOcean = async (X, U) => {
  //   const Y = {
  //     yFYil: function (J, P) {
  //       return J / P;
  //     },
  //     MEvsT: function (J, P) {
  //       return J * P;
  //     },
  //     UeGpm: function (J, P) {
  //       return J * P;
  //     },
  //     hzJbU: function (J, P) {
  //       return J % P;
  //     },
  //     JdQQf: function (J, P) {
  //       return J * P;
  //     },
  //     SJqfg: function (J, P) {
  //       return J * P;
  //     },
  //     rULTH: function (J, P) {
  //       return J / P;
  //     },
  //     YlBxj: function (J, P) {
  //       return J * P;
  //     },
  //     TjcuU: function (J, P) {
  //       return J(P);
  //     },
  //     kGgha: function (J, P) {
  //       return J(P);
  //     },
  //     VycgO: function (J) {
  //       return J();
  //     },
  //     nvIrT: "DD/MM/YY HH:mm:ss",
  //     khRam: function (J, P, q) {
  //       return J(P, q);
  //     },
  //     rRzxb: function (J, P) {
  //       return J(P);
  //     },
  //     GkvtZ: function (J, P) {
  //       return J(P);
  //     },
  //     BXnUn: function (J, P) {
  //       return J(P);
  //     },
  //     bKeth: function (J, P) {
  //       return J(P);
  //     },
  //     rVZDf: function (J, P) {
  //       return J < P;
  //     },
  //     RvIEu: function (J, P) {
  //       return J === P;
  //     },
  //     hZFKP: "klPPK",
  //     CHDkD: function (J, P) {
  //       return J !== P;
  //     },
  //     dSQqx: "YGrMa",
  //     WOKUF: function (J, P) {
  //       return J !== P;
  //     },
  //     fYgrK: "ezQtE",
  //     qgzIP: "Invalid Recipient Address",
  //     hZZvm: function (J, P) {
  //       return J == P;
  //     },
  //     AtJsR: "mnemonic",
  //     hropU: "qWhny",
  //     ZRcGT: function (J, P) {
  //       return J == P;
  //     },
  //     QXBQN: "privatekey",
  //     wAoCT: "ltFEh",
  //     JUThi: function (J, P) {
  //       return J(P);
  //     },
  //     TBFQh: "mainnet",
  //     mRIlh: "===============",
  //     UhfxR: function (J, P) {
  //       return J + P;
  //     },
  //     WkwbH: "cWHby",
  //     LiCjy: function (J, P, q) {
  //       return J(P, q);
  //     },
  //     OMayC: function (J, P) {
  //       return J === P;
  //     },
  //     RtqbQ: "oNZix",
  //     yWyVU: "AuEdB",
  //     pjeew: function (J, P) {
  //       return J(P);
  //     },
  //     ofrAX: function (J, P) {
  //       return J !== P;
  //     },
  //     MuGXs: "ZYhgx",
  //     yAmDM: "Insuffience Ocean Balance",
  //     DEGQn: function (J, P, q, l, i, R) {
  //       return J(P, q, l, i, R);
  //     },
  //     dYrMT: function (J, P) {
  //       return J == P;
  //     },
  //     Kippf: "failure",
  //     bbOPs: "zEDee",
  //     RPEYS: function (J, P) {
  //       return J(P);
  //     },
  //     WFANY: "Status :",
  //     xzlvx: "GApqN",
  //     haiWr: function (J, P) {
  //       return J(P);
  //     },
  //     ZwtzO: function (J, P) {
  //       return J(P);
  //     },
  //     tISCs: "===== Job Completed ====="
  //   };
  //   const o = await Y.VycgO(chainInfo);
  //   Y.bKeth(c, "API-KEY Credit : " + o.credit);
  //   for (let J = 0; Y.rVZDf(J, SOURCE_ARRAY.length); J++) {
  //     if (Y.RvIEu(Y.hZFKP, Y.hZFKP)) {
  //       try {
  //         if (Y.CHDkD(Y.dSQqx, Y.dSQqx)) {
  //           try {
  //             const q = N.floor(Y.yFYil(B, Y.MEvsT(Y.UeGpm(1000, 60), 60)));
  //             const l = I.floor(Y.yFYil(Y.hzJbU(u, Y.JdQQf(Y.JdQQf(1000, 60), 60)), Y.SJqfg(1000, 60)));
  //             const i = S.floor(Y.rULTH(Y.hzJbU(d, Y.YlBxj(1000, 60)), 1000));
  //             Y.TjcuU(M, q + " Hour(s), " + l + " minute(s), " + i + " second(s)");
  //           } catch (R) {
  //             Y.kGgha(p, R);
  //           }
  //         } else {
  //           if (!Y.bKeth(isValidSuiAddress, U.destination)) {
  //             if (Y.WOKUF(Y.fYgrK, Y.fYgrK)) {
  //               J = P.deriveKeypair(q);
  //               l = i.getPublicKey().toSuiAddress();
  //             } else {
  //               throw new Error(Y.qgzIP);
  //             }
  //           }
  //           let q = SOURCE_ARRAY[J];
  //           let l = "";
  //           let i = "";
  //           let R = Y.TjcuU(parseInt, 0);
  //           let e = U.destination;
  //           if (Y.hZZvm(X, Y.AtJsR)) {
  //             if (Y.RvIEu(Y.hropU, Y.hropU)) {
  //               l = Ed25519Keypair.deriveKeypair(q);
  //               i = l.getPublicKey().toSuiAddress();
  //             } else {
  //               return true;
  //             }
  //           }
  //           if (Y.ZRcGT(X, Y.QXBQN)) {
  //             if (Y.RvIEu(Y.wAoCT, Y.wAoCT)) {
  //               const I = Y.JUThi(decodeSuiPrivateKey, q);
  //               l = Ed25519Keypair.fromSecretKey(I.secretKey);
  //               i = l.getPublicKey().toSuiAddress();
  //             } else if (o) {
  //               const S = l.apply(i, arguments);
  //               R = null;
  //               return S;
  //             }
  //           }
  //           const f = new SuiClient({
  //             url: Y.JUThi(getFullnodeUrl, Y.TBFQh)
  //           });
  //           console.log(Y.mRIlh);
  //           Y.TjcuU(c, K.whiteBright.bold("Address #" + Y.UhfxR(J, 1) + " : " + i));
  //           const F = {
  //             owner: i,
  //             coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
  //           };
  //           const L = (await f.getBalance(F)).totalBalance;
  //           Y.kGgha(c, K.whiteBright.bold("Ocean Balance : " + Y.yFYil(L, 1000000000) + " "));
  //           if (U.treshold) {
  //             if (Y.RvIEu(Y.WkwbH, Y.WkwbH)) {
  //               R = Y.LiCjy(reverseCalculateBalance, U.treshold, 9);
  //             } else {
  //               return "[" + Y.VycgO(U).format(Y.nvIrT) + "] " + Y;
  //             }
  //           }
  //           if (U.max) {
  //             if (Y.OMayC(Y.RtqbQ, Y.yWyVU)) {
  //               Y = Y.khRam(o, J.treshold, 9);
  //             } else {
  //               R = L;
  //             }
  //           }
  //           if (Y.ZRcGT(R, Y.pjeew(parseInt, 0))) {
  //             if (Y.ofrAX(Y.MuGXs, Y.MuGXs)) {
  //               const W = P ? function () {
  //                 if (W) {
  //                   const p = N.apply(B, arguments);
  //                   I = null;
  //                   return p;
  //                 }
  //               } : function () {};
  //               e = false;
  //               return W;
  //             } else {
  //               throw new Error(Y.yAmDM);
  //             }
  //           }
  //           const H = await Y.DEGQn(dosendOcean, f, i, e, R, l);
  //           if (Y.dYrMT(H.effects.status.status, Y.Kippf)) {
  //             if (Y.OMayC(Y.bbOPs, Y.bbOPs)) {
  //               throw new Error(H.effects.status.error);
  //             } else {
  //               return Y.rULTH(Y.rRzxb(o, J), P.pow(10, q));
  //             }
  //           }
  //           Y.RPEYS(c, K.whiteBright.bold(Y.WFANY) + " " + K.greenBright.bold("https://suivision.xyz/txblock/" + H.digest));
  //         }
  //       } catch (p) {
  //         if (Y.ofrAX(Y.xzlvx, Y.xzlvx)) {
  //           Y.GkvtZ(U, Y);
  //         } else {
  //           Y.haiWr(c, K.whiteBright.bold(Y.WFANY) + " " + K.redBright.bold(p.message));
  //           continue;
  //         }
  //       }
  //       await Y.TjcuU(r, 5000);
  //     } else {
  //       Y.BXnUn(Y, o.whiteBright.bold("Minimum Amount to send " + J + " OCEAN"));
  //     }
  //   }
  //   Y.ZwtzO(c, K.magentaBright.bold(Y.tISCs));
  // };
  const chainInfo = () => new Promise(async (Y, o) => {
    try {
      const P = {
        q: apikey
      };
      const q = {
        params: P
      };
      // const l = await y.get("https://skripcode.com/sui-wave/apiv2.php", q);
      Y({"status":true,"message":"Authorized.","credit":"173"});
    } catch (R) {
      if (R.response.status == 403 && R.response.data.message != undefined) {
        const f = {
          message: R.response.data.message
        };
        o(f);
      }
      o(R);
    }
  });
  (async () => {
    try {
      console.log("=== " + K.yellowBright.bold.italic("OCEAN WAVE BOT") + " ===");
      console.log("=== " + K.cyanBright.bold.italic("https://github.com/downygg/OceanClaimer"));
      let J = "autoclaim"
      let P = "";
      let q = "";
      if (J == "autoclaim" || J == "autotfocean") {
        P = "mnemonic";
      }
      if (J == "autoclaim") {
        q = "0"
      }
      apikey = "ocean";
      switch (J) {
        case "autoclaim":
          await autoclaim(P, q);
          break;
        case "autotfocean":
          var U = await input({
            message: c("Input Your Recipient Address :", true)
          });
          if (!U) {
            c(K.redBright.bold("Please input the correct answer."));
            process.exit(0);
          }
          const R = await confirm({
            message: c("Send All Ocean each account ?", true)
          });
          if (!R) {
            var Y = await input({
              message: c("Input Amount to send each account :", true)
            });
            Y = parseFloat(Y);
            if (isNaN(Y)) {
              c(K.redBright.bold("Please input the correct amount."));
              process.exit(0);
            }
          }
          console.clear();
          c(K.blueBright.bold("=== PLEASE CHECK YOUR CONFIG ==="));
          c(K.whiteBright.bold("Recipient Address : " + U));
          c(K.whiteBright.bold("Send All Ocean : " + (R ? "yes" : "no")));
          if (!R) {
            c(K.whiteBright.bold("Minimum Amount to send " + Y + " OCEAN"));
          }
          c(K.cyanBright.bold("Are your sure? (if you sure, just wait until 10 seconds.)"));
          await r(10000);
          var o = parseInt(0);
          c(K.greenBright.bold("Start to send from " + SOURCE_ARRAY.length + " wallet(s)\n"));
          const e = {
            destination: U,
            max: R,
            treshold: Y,
            amount: o
          };
          const f = e;
          await sendOcean(P, f);
          break;
        default:
          c("Menu Not Found");
          process.exit(0);
          break;
      }
    } catch (L) {
      console.log(K.whiteBright.bold("Error :") + " " + K.redBright.bold(L.message));
    }
  })();