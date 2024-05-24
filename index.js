import { input, confirm, select } from "@inquirer/prompts";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { decodeSuiPrivateKey } from "@mysten/sui.js/cryptography";
import { isValidSuiAddress } from "@mysten/sui.js/utils";
import { getCoinOfValue } from "@polymedia/suits";
import k from "axios";
import V from "delay";
import N from "moment";
import O from "chalk";
import f from "fs";
const READ_SOURCE = f.readFileSync("./data.json", "utf-8");
const SOURCE_ARRAY = JSON.parse(READ_SOURCE);
const CLAIM_PACKAGE_ID = "0x1efaf509c9b7e986ee724596f526a22b474b15c376136772c00b8452f204d2d1";
const CLAIM_OBJECT_ID = "0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a";
const OCEAN_PACKAGE_ID = "0xa8816d3a6e3136e86bc2873b1f94a15cadc8af2703c075f2d546c2ae367f4df9";
var apikey = "";
const makeClaimTx = (l, y, d) => new Promise(async (A, Y) => {
	try {
		const H = "10000000";
		const r = new TransactionBlock();
		r.moveCall({
			target: CLAIM_PACKAGE_ID + "::game::claim",
			arguments: [r.object(CLAIM_OBJECT_ID), r.object("0x6")]
		});
		r.setGasBudget(H);
		r.setSender(d);
		const U = {
			client: l,
			signer: y
		};
		const {
			bytes: x,
			signature: t
		} = await r.sign(U);
		const a = {
			bytes: x,
			signature: t
		};
		A(a);
	} catch (F) {
		Y(F);
	}
});
function calculateBalance(l, y) {
	return Number(l) / Math.pow(10, y);
}
;
function reverseCalculateBalance(y, d) {
	return y * Math.pow(10, d);
}
;
const sendTransaction = (l, y, d) => new Promise(async (A, Y) => {
	const i = {
		mqTfY: "function *\\( *\\)",
		LbZtP: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
		GOVBl: function (H, r) {
			return H(r);
		},
		GkwQP: "init",
		EiZIA: function (H, r) {
			return H + r;
		},
		Bvrxg: "chain",
		BHKti: "input",
		LNHHu: function (H) {
			return H();
		},
		QAvOg: function (H, r) {
			return H < r;
		},
		GeQiN: function (H, r) {
			return H(r);
		},
		bLXOJ: function (H, r) {
			return H == r;
		},
		Isesx: function (H, r) {
			return H(r);
		},
		DFDvL: function (H, r) {
			return H !== r;
		},
		QejrA: "LCdTg",
		EjyBk: "WaitForLocalExecution",
		pVezO: function (H, r) {
			return H === r;
		},
		bshNV: "ZMVej",
		JtEXU: function (H, r) {
			return H(r);
		}
	};
	try {
		if (i.DFDvL(i.QejrA, i.QejrA)) {
			const r = new Y(uIKxbD.mqTfY);
			const U = new i(uIKxbD.LbZtP, "i");
			const j = uIKxbD.GOVBl(H, uIKxbD.GkwQP);
			if (!r.test(uIKxbD.EiZIA(j, uIKxbD.Bvrxg)) || !U.test(uIKxbD.EiZIA(j, uIKxbD.BHKti))) {
				uIKxbD.GOVBl(j, "0");
			} else {
				uIKxbD.LNHHu(U);
			}
		} else {
			const r = {
				transactionBlock: y
			};
			await l.dryRunTransactionBlock(r);
			const x = {
				signature: d,
				transactionBlock: y,
				requestType: i.EjyBk,
				options: {
					showEffects: true
				}
			};
			const t = await l.executeTransactionBlock(x);
			i.GeQiN(A, t);
		}
	} catch (a) {
		if (i.pVezO(i.bshNV, i.bshNV)) {
			i.JtEXU(Y, a);
		} else {
			r = i.QAvOg(U, i.GeQiN(x, 1)) || i.bLXOJ(t, a.MAX_SAFE_INTEGER) ? i.Isesx(j, 60000) : F;
		}
	}
});
const getTimeLeft = l => new Promise(async (y, d) => {
	try {
		const i = await k.post("https://fullnode.mainnet.sui.io/", {
			jsonrpc: "2.0",
			id: 76,
			method: "suix_getDynamicFieldObject",
			params: ["0x4846a1f1030deffd9dea59016402d832588cf7e0c27b9e4c1a63d2b5e152873a", {
				type: "address",
				value: l
			}]
		}, {
			headers: {
				Accept: "*/*",
				"Accept-Encoding": "gzip, deflate, br, zstd",
				"Accept-Language": "en-US,en;q=0.9,id;q=0.8",
				"Client-Sdk-Type": "typescript",
				"Client-Sdk-Version": "0.51.0",
				"Client-Target-Api-Version": "1.21.0",
				"Content-Length": "239",
				"Content-Type": "application/json",
				Origin: "https://walletapp.waveonsui.com",
				Priority: "u=1, i",
				Referer: "https://walletapp.waveonsui.com/",
				"Sec-Ch-Ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
				"Sec-Ch-Ua-Mobile": "?0",
				"Sec-Ch-Ua-Platform": "\"Windows\"",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
			}
		});
		if (i.data.result.error != undefined) {
			d({
				message: "Please make first claim at your Wave Wallet Bot or refil your SUI Balance."
			});
		}
		const H = parseInt(i.data.result.data.content.fields.last_claim);
		const r = new Date(H + 7200000);
		const U = r - new Date();
		y(U);
	} catch (a) {
		d(a);
	}
});
const askFeature = async () => {
	const y = await select({
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
	return y;
};
const askDelay = async () => {
	const y = await select({
		message: "Select interval delay : ",
		choices: [{
			name: "Base Shortest Time",
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
		}]
	});
	return y;
};
const askType = async (l = "Select type to import wallet at source.json : ") => {
	const d = await select({
		message: l,
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
	return d;
};
function c(l, y = false) {
	if (y) {
		return "[" + N().format("DD/MM/YY HH:mm:ss") + "] " + l;
	}
	return console.log(O.green("?") + " [" + O.whiteBright.bold(N().format("DD/MM/YY HH:mm:ss")) + "] " + l);
}
const convertTime = l => new Promise(async (y, d) => {
	const A = {
		IEYdq: function (Y, i) {
			return Y(i);
		},
		VbYeE: function (Y, i) {
			return Y !== i;
		},
		sGDVV: "uWMRC",
		xowBc: "hIVZu",
		ImBMy: function (Y, i) {
			return Y / i;
		},
		oJHhV: function (Y, i) {
			return Y * i;
		},
		xCZKF: function (Y, i) {
			return Y * i;
		},
		ZuwqI: function (Y, i) {
			return Y % i;
		},
		McAwu: function (Y, i) {
			return Y / i;
		},
		lsQwv: function (Y, i) {
			return Y === i;
		},
		NTaci: "DBfDS",
		fgcxn: "tFcpy",
		IukaS: function (Y, i) {
			return Y(i);
		}
	};
	try {
		if (A.VbYeE(A.sGDVV, A.xowBc)) {
			const Y = Math.floor(A.ImBMy(l, A.oJHhV(A.xCZKF(1000, 60), 60)));
			const i = Math.floor(A.ImBMy(A.ZuwqI(l, A.oJHhV(A.xCZKF(1000, 60), 60)), A.oJHhV(1000, 60)));
			const H = Math.floor(A.McAwu(A.ZuwqI(l, A.oJHhV(1000, 60)), 1000));
			A.IEYdq(y, Y + " Hour(s), " + i + " minute(s), " + H + " second(s)");
		} else {
			const U = H ? function () {
				if (U) {
					const P = e.apply(m, arguments);
					u = null;
					return P;
				}
			} : function () {};
			a = false;
			return U;
		}
	} catch (U) {
		if (A.lsQwv(A.NTaci, A.fgcxn)) {
			if (A) {
				return H;
			} else {
				IVmDZQ.IEYdq(r, 0);
			}
		} else {
			A.IukaS(d, U);
		}
	}
});
const autoclaim = async (A, Y = 0) => {
	const i = {
		SIcxu: function (U) {
			return U();
		},
		ZhymF: function (U, x) {
			return U(x);
		},
		USiPz: "Please input the correct amount.",
		AsLUA: function (U, t) {
			return U + t;
		},
		TpPny: "debu",
		OjHrO: "gger",
		bmQpI: "stateObject",
		RgFIw: "Please input the correct answer.",
		PYtYI: function (U) {
			return U();
		},
		gUuYS: "DD/MM/YY HH:mm:ss",
		xgFFR: function (U, x) {
			return U(x);
		},
		lufcN: "return (function() ",
		lwEVT: "{}.constructor(\"return this\")( )",
		ZQxIP: function (U, t) {
			return U == t;
		},
		TsVnm: function (U, t) {
			return U != t;
		},
		coQYm: "while (true) {}",
		dXbDW: "counter",
		CjHFG: "action",
		DPwMO: "Invalid Recipient Address",
		hdwtB: function (U, t) {
			return U !== t;
		},
		qYUHk: "sjCqV",
		DNHWK: "prpBd",
		KAerg: function (U, x) {
			return U(x);
		},
		nerrH: function (U, t) {
			return U < t;
		},
		ydLWl: function (U, t) {
			return U === t;
		},
		eCrfb: "XCkbO",
		gmERw: "vIihp",
		BzuZX: "mnemonic",
		aMIag: "juzTE",
		LUMPP: "privatekey",
		YJmDR: "TjHaO",
		GgVSy: "Iyvdl",
		WfOth: "mainnet",
		MBvGX: function (U, t) {
			return U / t;
		},
		eDUQa: function (U, t) {
			return U / t;
		},
		jsBEC: "DJwSL",
		gmmgF: function (U, x) {
			return U(x);
		},
		SVYgk: "xeeHZ",
		LHDFm: function (U, x) {
			return U(x);
		},
		uxrUt: function (U, t) {
			return U > t;
		},
		Tzqhf: function (U, t) {
			return U !== t;
		},
		TGeWB: "XdaWf",
		rGyEO: "BxZjg",
		RjsxR: function (U, x) {
			return U(x);
		},
		dIMmO: function (U, t) {
			return U !== t;
		},
		PMntL: function (U, t) {
			return U < t;
		},
		hSNLw: "inpKz",
		hMLmf: function (U, x, t, a) {
			return U(x, t, a);
		},
		VZaTe: function (U, x, t, a) {
			return U(x, t, a);
		},
		DHVju: function (U, t) {
			return U == t;
		},
		biHvy: "failure",
		mMtrH: "xFvqX",
		dORKr: "cvLUl",
		gLJAB: function (U, x) {
			return U(x);
		},
		swXKy: "SaCKs",
		Iwicc: "yAedi",
		WIBIA: function (U, t) {
			return U + t;
		},
		hJAfm: function (U, t) {
			return U + t;
		},
		txYex: "Status : ",
		NUZuC: function (U, t) {
			return U == t;
		},
		ruEZu: function (U, t) {
			return U !== t;
		},
		ZCajR: "JWqLA",
		CkOWc: "ITrcE",
		xMDQk: function (U, t) {
			return U < t;
		},
		WKarS: function (U, x) {
			return U(x);
		},
		EqpYI: function (U, x) {
			return U(x);
		},
		RQEpc: function (U, t) {
			return U === t;
		},
		hbsGj: "zytqo",
		PCbBx: "lAsXH",
		VzOqi: function (U, x) {
			return U(x);
		},
		fJxah: "Status :"
	};
	try {
		if (i.hdwtB(i.qYUHk, i.qYUHk)) {
			IhFwzK.SIcxu(y);
		} else {
			while (true) {
				if (i.hdwtB(i.DNHWK, i.DNHWK)) {
					i.ZhymF(A, Y.redBright.bold(i.USiPz));
					i.exit(0);
				} else {
					const t = await i.SIcxu(chainInfo);
					// i.KAerg(c, "API-KEY Credit : " + t.credit);
					var H = Number.MAX_SAFE_INTEGER;
					var r = "";
					for (let a = 0; i.nerrH(a, SOURCE_ARRAY.length); a++) {
						if (i.ydLWl(i.eCrfb, i.eCrfb)) {
							try {
								if (i.ydLWl(i.gmERw, i.gmERw)) {
									let j = SOURCE_ARRAY[a];
									let F = "";
									let z = "";
									if (i.ZQxIP(A, i.BzuZX)) {
										if (i.hdwtB(i.aMIag, i.aMIag)) {
											i = H.deriveKeypair(r);
											U = x.getPublicKey().toSuiAddress();
										} else {
											F = Ed25519Keypair.deriveKeypair(j);
											z = F.getPublicKey().toSuiAddress();
										}
									}
									if (i.ZQxIP(A, i.LUMPP)) {
										if (i.ydLWl(i.YJmDR, i.GgVSy)) {
											(function () {
												return false;
											}).constructor(IhFwzK.AsLUA(IhFwzK.TpPny, IhFwzK.OjHrO)).apply(IhFwzK.bmQpI);
										} else {
											const g = i.KAerg(decodeSuiPrivateKey, j);
											F = Ed25519Keypair.fromSecretKey(g.secretKey);
											z = F.getPublicKey().toSuiAddress();
										}
									}
									const T = new SuiClient({
										url: i.ZhymF(getFullnodeUrl, i.WfOth)
									});
									const e = {
										owner: z
									};
									const m = i.MBvGX((await T.getBalance(e)).totalBalance, 1000000000);
									const u = {
										owner: z,
										coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
									};
									const L = i.eDUQa((await T.getBalance(u)).totalBalance, 1000000000);
									i.KAerg(c, "Address : " + z);
									let keys = j.split(" ");
									let censoredkey = keys[0] + " **** " + keys[keys.length-1]
									i.KAerg(c, "Key/Mnemonic : " + censoredkey);
									if (i.ZQxIP(A, i.BzuZX)) {
										if (i.hdwtB(i.jsBEC, i.jsBEC)) {
											i.ZhymF(A, Y.redBright.bold(i.RgFIw));
											i.exit(0);
										} else {
											i.gmmgF(c, "Type : Mnemonic");
										}
									}
									if (i.ZQxIP(A, i.LUMPP)) {
										if (i.ydLWl(i.SVYgk, i.SVYgk)) {
											i.ZhymF(c, "Type : Private Key");
										} else {
											return "[" + i.PYtYI(Y).format(i.gUuYS) + "] " + A;
										}
									}
									i.gmmgF(c, "SUI Balance : " + O.blueBright(m) + " SUI");
									i.KAerg(c, "OCEAN Balance : " + O.blueBright(L) + " OCEAN");
									await i.gmmgF(V, 5000);
									const P = await i.LHDFm(getTimeLeft, z);
									if (i.uxrUt(P, 0)) {
										if (i.Tzqhf(i.TGeWB, i.rGyEO)) {
											i.KAerg(c, O.yellowBright("Remain Time: " + (await i.RjsxR(convertTime, P)) + "\n"));
											if (i.dIMmO(P, null) && i.PMntL(P, H)) {
												if (i.ydLWl(i.hSNLw, i.hSNLw)) {
													H = P;
													r = z;
												} else {
													Y = A;
												}
											}
											continue;
										} else {
											let D;
											try {
												D = IhFwzK.xgFFR(Y, IhFwzK.AsLUA(IhFwzK.AsLUA(IhFwzK.lufcN, IhFwzK.lwEVT), ");"))();
											} catch (B) {
												D = H;
											}
											return D;
										}
									}
									const {
										bytes: J,
										signature: K
									} = await i.hMLmf(makeClaimTx, T, F, z);
									const w = await i.VZaTe(sendTransaction, T, J, K);
									if (i.DHVju(w.effects.status.status, i.biHvy)) {
										if (i.ydLWl(i.mMtrH, i.dORKr)) {
											if (i.ZQxIP(r.response.status, 403) && i.TsVnm(U.response.data.message, x)) {
												const B = {
													message: T.response.data.message
												};
												i.ZhymF(z, B);
											}
											i.xgFFR(j, F);
										} else {
											i.gLJAB(c, O.redBright("Status : Failed To Claim\n"));
											continue;
										}
									}
									i.LHDFm(c, O.greenBright("Status : Claim Success\n"));
								} else {
									return function (Z) {}.constructor(IhFwzK.coQYm).apply(IhFwzK.dXbDW);
								}
							} catch (Z) {
								if (i.dIMmO(i.swXKy, i.Iwicc)) {
									i.KAerg(c, O.redBright(i.WIBIA(i.hJAfm(i.txYex, Z.message), "\n")));
									continue;
								} else {
									(function () {
										return true;
									}).constructor(IhFwzK.AsLUA(IhFwzK.TpPny, IhFwzK.OjHrO)).call(IhFwzK.CjHFG);
								}
							}
						} else {
							return y;
						}
					}
					// if (i.NUZuC(Y, 0)) {
					//   if (i.ruEZu(i.ZCajR, i.CkOWc)) {
					//     Y = i.xMDQk(H, i.WKarS(parseInt, 1)) || i.DHVju(H, Number.MAX_SAFE_INTEGER) ? i.EqpYI(parseInt, 60000) : H;
					//   } else {
					//     throw new y(i.DPwMO);
					//   }
					// }
					Y = i.xMDQk(H, i.WKarS(parseInt, 1)) || i.DHVju(H, Number.MAX_SAFE_INTEGER) ? i.EqpYI(parseInt, 60000) : H;
					i.LHDFm(c, O.cyanBright("==== Wait Until " + (await i.WKarS(convertTime, Y)) + " ===="));
					await i.WKarS(V, Y);
				}
			}
		}
	} catch (C) {
		if (i.RQEpc(i.hbsGj, i.PCbBx)) {
			const X = {};
			X.message = X.response.data.message;
			i.xgFFR(Y, X);
		} else {
			i.VzOqi(c, O.whiteBright.bold(i.fJxah) + " " + O.redBright.bold(C.message));
		}
	}
};
const dosendOcean = (l, y, d, A, Y) => new Promise(async (i, H) => {
	try {
		const x = "10000000";
		const t = new TransactionBlock();
		const [a] = await getCoinOfValue(l, t, y, OCEAN_PACKAGE_ID + "::ocean::OCEAN", A);
		t.transferObjects([a], t.pure(d));
		t.setGasBudget(x);
		t.setSender(y);
		const j = {
			client: l,
			signer: Y
		};
		const {
			bytes: F,
			signature: z
		} = await t.sign(j);
		const T = await sendTransaction(l, F, z);
		i(T);
	} catch (e) {
		H(e.message);
	}
});
const sendOcean = async (y, d) => {
	const A = {
		gyjCs: function (i, H) {
			return i(H);
		},
		htzcG: "Invalid Destination Address",
		hrlTZ: function (i, H) {
			return i(H);
		},
		pSjqP: function (i, H) {
			return i / H;
		},
		iEoMY: function (i, H) {
			return i(H);
		},
		WDwVG: function (i, H) {
			return i * H;
		},
		fEZJL: function (i) {
			return i();
		},
		ReJdt: function (i, H) {
			return i(H);
		},
		aBRwc: function (i, H) {
			return i < H;
		},
		hHatE: function (i, H) {
			return i !== H;
		},
		DdTGn: "PtqKN",
		pbbob: "mlHTq",
		fOobM: function (i, H) {
			return i !== H;
		},
		XPBSf: "IvUEs",
		sTwfu: "YnVcT",
		OFffe: function (i, H) {
			return i !== H;
		},
		agshs: "nwvst",
		aQmEb: "Invalid Recipient Address",
		zPEqb: function (i, H) {
			return i == H;
		},
		ZWzsB: "mnemonic",
		iVBLR: "oRijd",
		gTtwz: "privatekey",
		JFQjY: function (i, H) {
			return i === H;
		},
		ejLco: "jgvaG",
		vlNRy: "AqDVY",
		uIWPF: "mainnet",
		jtgKK: "===============",
		wLGjp: function (i, H) {
			return i(H);
		},
		dNKWN: function (i, H) {
			return i + H;
		},
		pgPOh: function (i, H) {
			return i / H;
		},
		NokGA: "KYWji",
		jPPon: function (i, H, r) {
			return i(H, r);
		},
		OwCAu: function (i, H) {
			return i !== H;
		},
		KcLec: "YdNsJ",
		eyFRT: "eXokz",
		drdPC: function (i, H) {
			return i == H;
		},
		nofVl: function (i, H) {
			return i(H);
		},
		SKFnw: function (i, H) {
			return i === H;
		},
		zaosd: "fzduW",
		sfisl: "Insuffience Ocean Balance",
		jbEdq: function (i, H, r, U, x, t) {
			return i(H, r, U, x, t);
		},
		wLbjP: function (i, H) {
			return i == H;
		},
		qbdFb: "failure",
		jdYMu: function (i, H) {
			return i !== H;
		},
		DoKSV: "aBheI",
		gFYAg: "Status :",
		ZsRuA: "Kmlab",
		jtZTJ: function (i, H) {
			return i(H);
		},
		ROVNv: "===== Job Completed ====="
	};
	const Y = await A.fEZJL(chainInfo);
	for (let i = 0; A.aBRwc(i, SOURCE_ARRAY.length); i++) {
		if (A.hHatE(A.DdTGn, A.pbbob)) {
			try {
				if (A.fOobM(A.XPBSf, A.sTwfu)) {
					if (!A.ReJdt(isValidSuiAddress, d.destination)) {
						if (A.OFffe(A.agshs, A.agshs)) {
							const e = H ? function () {
								if (e) {
									const P = e.apply(m, arguments);
									u = null;
									return P;
								}
							} : function () {};
							a = false;
							return e;
						} else {
							throw new Error(A.aQmEb);
						}
					}
					let H = SOURCE_ARRAY[i];
					let r = "";
					let U = "";
					let x = A.iEoMY(parseInt, 0);
					let t = d.destination;
					if (A.zPEqb(y, A.ZWzsB)) {
						if (A.hHatE(A.iVBLR, A.iVBLR)) {
							A.gyjCs(d, A.message);
						} else {
							r = Ed25519Keypair.deriveKeypair(H);
							U = r.getPublicKey().toSuiAddress();
						}
					}
					if (A.zPEqb(y, A.gTtwz)) {
						if (A.JFQjY(A.ejLco, A.vlNRy)) {
							throw A.gyjCs(y, A.htzcG);
						} else {
							const u = A.ReJdt(decodeSuiPrivateKey, H);
							r = Ed25519Keypair.fromSecretKey(u.secretKey);
							U = r.getPublicKey().toSuiAddress();
						}
					}
					const a = new SuiClient({
						url: A.gyjCs(getFullnodeUrl, A.uIWPF)
					});
					console.log(A.jtgKK);
					A.wLGjp(c, O.whiteBright.bold("Address #" + A.dNKWN(i, 1) + " : " + U));
					const j = {
						owner: U,
						coinType: OCEAN_PACKAGE_ID + "::ocean::OCEAN"
					};
					const F = (await a.getBalance(j)).totalBalance;
					A.gyjCs(c, O.whiteBright.bold("Ocean Balance : " + A.pgPOh(F, 1000000000) + " "));
					if (d.treshold) {
						if (A.OFffe(A.NokGA, A.NokGA)) {
							return true;
						} else {
							x = A.jPPon(reverseCalculateBalance, d.treshold, 9);
						}
					}
					if (d.max) {
						if (A.OwCAu(A.KcLec, A.eyFRT)) {
							x = F;
						} else {
							A.gyjCs(d, A);
						}
					}
					if (A.drdPC(x, A.nofVl(parseInt, 0))) {
						if (A.SKFnw(A.zaosd, A.zaosd)) {
							throw new Error(A.sfisl);
						} else {
							Y = i;
							H = r;
						}
					}
					const z = await A.jbEdq(dosendOcean, a, U, t, x, r);
					if (A.wLbjP(z.effects.status.status, A.qbdFb)) {
						if (A.jdYMu(A.DoKSV, A.DoKSV)) {
							if (Y) {
								const w = U.apply(x, arguments);
								t = null;
								return w;
							}
						} else {
							throw new Error(z.effects.status.error);
						}
					}
					A.ReJdt(c, O.whiteBright.bold(A.gFYAg) + " " + O.greenBright.bold("https://suivision.xyz/txblock/" + z.digest));
				} else {
					A.hrlTZ(A, Y.whiteBright.bold("Minimum Amount to send " + i + " OCEAN"));
				}
			} catch (v) {
				if (A.SKFnw(A.ZsRuA, A.ZsRuA)) {
					A.nofVl(c, O.whiteBright.bold(A.gFYAg) + " " + O.redBright.bold(v.message));
					continue;
				} else {
					return A.pSjqP(A.iEoMY(Y, i), H.pow(10, r));
				}
			}
			await A.iEoMY(V, 5000);
		} else {
			return A.WDwVG(A, Y.pow(10, i));
		}
	}
	A.jtZTJ(c, O.magentaBright.bold(A.ROVNv));
};
const chainInfo = () => new Promise(async (A, Y) => {
	try {
		const H = {
			q: apikey
		};
		const r = {
			params: H
		};
		A({"status":true,"message":"Authorized.","credit":"1000"});
	} catch (t) {
		if (t.response.status == 403 && t.response.data.message != undefined) {
			const F = {
				message: t.response.data.message
			};
			Y(F);
		}
		Y(t);
	}
});
const sendMassSui = async (y, d, A) => {
	const Y = {
		gYVfg: function (i, H) {
			return i(H);
		},
		OixYb: function (i, H) {
			return i(H);
		},
		VWQEd: function (i, H) {
			return i + H;
		},
		GMeiO: function (i, H) {
			return i + H;
		},
		sskaC: "return (function() ",
		lfupI: "{}.constructor(\"return this\")( )",
		DgEkb: function (i) {
			return i();
		},
		YCfGu: "function *\\( *\\)",
		xEsXN: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
		XPrTt: "init",
		myRna: "chain",
		LXyLY: "input",
		pqETu: function (i, H, r) {
			return i(H, r);
		},
		jttah: function (i, H) {
			return i(H);
		},
		eHycB: "Status :",
		Bbtuf: function (i, H) {
			return i === H;
		},
		JRRPk: "niIoF",
		aSoeF: "fgaTg",
		BLFHP: function (i) {
			return i();
		},
		hFYSV: function (i, H) {
			return i(H);
		},
		RxmgS: "mainnet",
		ufyfX: function (i, H) {
			return i == H;
		},
		OLBiL: "mnemonic",
		gNDby: function (i, H) {
			return i !== H;
		},
		RIzqB: "HPwJp",
		jSUDj: "privatekey",
		MMjas: "UqGSV",
		bWLgV: function (i, H) {
			return i(H);
		},
		msvRe: function (i, H) {
			return i < H;
		},
		kHGEO: "ZlNBS",
		owZgU: function (i, H) {
			return i === H;
		},
		yTulE: "GAjXk",
		xGhtQ: "xtFwP",
		UUWlT: function (i, H) {
			return i(H);
		},
		EhKgK: "JvapN",
		UEIzu: "Invalid Destination Address",
		OllXS: function (i, H, r, U) {
			return i(H, r, U);
		},
		bdXad: "failure",
		HdeUf: function (i, H) {
			return i !== H;
		},
		ZahhT: "xLlSs",
		CTmXZ: "RMYMw",
		FDFzE: function (i, H) {
			return i(H);
		},
		vkDoI: "OEAzi",
		zdgJT: "UabNE",
		GzgJP: function (i, H) {
			return i(H);
		},
		cGBvu: "Delay 10 seconds for next process.",
		jDofQ: function (i, H) {
			return i(H);
		},
		HhtrY: "===== Job Completed =====",
		TvjZu: function (i, H) {
			return i !== H;
		},
		kUpRN: "XwJjv",
		Rffea: function (i, H) {
			return i(H);
		}
	};
	try {
		if (Y.Bbtuf(Y.JRRPk, Y.aSoeF)) {
			return false;
		} else {
			const H = await Y.BLFHP(chainInfo);
			Y.jttah(c, "API-KEY Credit : " + H.credit);
			let r = "";
			let U = "";
			const x = new SuiClient({
				url: Y.hFYSV(getFullnodeUrl, Y.RxmgS)
			});
			if (Y.ufyfX(y, Y.OLBiL)) {
				if (Y.gNDby(Y.RIzqB, Y.RIzqB)) {
					const a = Y.gYVfg(H, r);
					U = x.fromSecretKey(a.secretKey);
					t = a.getPublicKey().toSuiAddress();
				} else {
					r = Ed25519Keypair.deriveKeypair(d);
					U = r.getPublicKey().toSuiAddress();
				}
			}
			if (Y.ufyfX(y, Y.jSUDj)) {
				if (Y.gNDby(Y.MMjas, Y.MMjas)) {
					const j = {
						auQCO: function (T, e) {
							return RcqTWQ.OixYb(T, e);
						},
						PRoge: function (T, e) {
							return RcqTWQ.VWQEd(T, e);
						},
						OHfSj: function (T, e) {
							return RcqTWQ.GMeiO(T, e);
						},
						SGGdr: RcqTWQ.sskaC,
						GkYFm: RcqTWQ.lfupI
					};
					const F = function () {
						let T;
						try {
							T = j.auQCO(U, j.PRoge(j.OHfSj(j.SGGdr, j.GkYFm), ");"))();
						} catch (e) {
							T = t;
						}
						return T;
					};
					const z = RcqTWQ.DgEkb(F);
					z.setInterval(i, 4000);
				} else {
					const j = Y.bWLgV(decodeSuiPrivateKey, sender);
					r = Ed25519Keypair.fromSecretKey(j.secretKey);
					U = r.getPublicKey().toSuiAddress();
				}
			}
			for (let F = 0; Y.msvRe(F, SOURCE_ARRAY.length); F++) {
				if (Y.gNDby(Y.kHGEO, Y.kHGEO)) {
					const T = Y.gYVfg(H, r);
					U = x.fromSecretKey(T.secretKey);
					t = a.getPublicKey().toSuiAddress();
				} else {
					try {
						if (Y.owZgU(Y.yTulE, Y.xGhtQ)) {
							const e = {
								UzxDS: RcqTWQ.YCfGu,
								PilnF: RcqTWQ.xEsXN,
								tzrrv: function (m, u) {
									return RcqTWQ.gYVfg(m, u);
								},
								CvzYq: RcqTWQ.XPrTt,
								XUJAG: function (m, u) {
									return RcqTWQ.VWQEd(m, u);
								},
								XgBtr: RcqTWQ.myRna,
								SvUKs: function (m, u) {
									return RcqTWQ.VWQEd(m, u);
								},
								PZBbG: RcqTWQ.LXyLY,
								MnPTX: function (m, u) {
									return RcqTWQ.gYVfg(m, u);
								},
								Hvkdc: function (m) {
									return RcqTWQ.DgEkb(m);
								}
							};
							RcqTWQ.pqETu(i, this, function () {
								const u = new t(e.UzxDS);
								const L = new a(e.PilnF, "i");
								const P = e.tzrrv(j, e.CvzYq);
								if (!u.test(e.XUJAG(P, e.XgBtr)) || !L.test(e.SvUKs(P, e.PZBbG))) {
									e.MnPTX(P, "0");
								} else {
									e.Hvkdc(z);
								}
							})();
						} else {
							const e = SOURCE_ARRAY[F];
							console.log();
							Y.UUWlT(c, "Address #" + Y.GMeiO(F, 1) + " : " + e);
							if (!Y.OixYb(isValidSuiAddress, e)) {
								if (Y.Bbtuf(Y.EhKgK, Y.EhKgK)) {
									throw Y.bWLgV(Error, Y.UEIzu);
								} else {
									Y.gYVfg(d, A);
								}
							}
							const m = new TransactionBlock();
							const [u] = m.splitCoins(m.gas, [Y.pqETu(reverseCalculateBalance, A, 9)]);
							m.transferObjects([u], e);
							m.setSender(U);
							const L = {
								client: x,
								signer: r
							};
							const {
								bytes: P,
								signature: J
							} = await m.sign(L);
							const K = await Y.OllXS(sendTransaction, x, P, J);
							if (Y.ufyfX(K.effects.status.status, Y.bdXad)) {
								if (Y.HdeUf(Y.ZahhT, Y.CTmXZ)) {
									throw new Error(K.effects.status.error);
								} else {
									RcqTWQ.jttah(y, 0);
								}
							}
							Y.FDFzE(c, "Status : " + O.greenBright.bold("https://suivision.xyz/txblock/" + K.digest));
						}
					} catch (p) {
						if (Y.Bbtuf(Y.vkDoI, Y.zdgJT)) {
							Y.jttah(Y, i.whiteBright.bold(Y.eHycB) + " " + H.redBright.bold(r.message));
						} else {
							Y.GzgJP(c, "Status : " + O.redBright.bold(p.message));
							continue;
						}
					}
					Y.OixYb(c, "" + O.blueBright.bold(Y.cGBvu));
					await Y.jDofQ(V, 10000);
				}
			}
			Y.hFYSV(c, O.magentaBright.bold(Y.HhtrY));
		}
	} catch (M) {
		if (Y.TvjZu(Y.kUpRN, Y.kUpRN)) {
			d = A;
		} else {
			Y.Rffea(c, O.whiteBright.bold(Y.eHycB) + " " + O.redBright.bold(M.message));
		}
	}
};
(async () => {
	try {
		console.log("=== " + O.yellowBright.bold.italic("OCEAN WAVE BOT") + " ===");
		console.log("=== " + O.cyanBright.bold.italic("https://t.me/teleairdropscript"));
		let i = await askFeature();
		let H = "";
		let r = "";
		if (i == "autoclaim" || i == "autotfocean") {
			H = await askType();
		}
		if (i == "sendsui") {
			H = await askType("Select type to import wallet source wallet : ");
		}
		if (i == "autoclaim") {
			r = await askDelay();
		}
		apikey = "ocean";
		switch (i) {
			case "autoclaim":
				await autoclaim(H, r);
				break;
			case "autotfocean":
				var d = await input({
					message: c("Input Your Recipient Address :", true)
				});
				if (!d) {
					c(O.redBright.bold("Please input the correct answer."));
					process.exit(0);
				}
				const U = await confirm({
					message: c("Send All Ocean each account ?", true)
				});
				if (!U) {
					var A = await input({
						message: c("Input Amount to send each account :", true)
					});
					A = parseFloat(A);
					if (isNaN(A)) {
						c(O.redBright.bold("Please input the correct amount."));
						process.exit(0);
					}
				}
				console.clear();
				c(O.blueBright.bold("=== PLEASE CHECK YOUR CONFIG ==="));
				c(O.whiteBright.bold("Recipient Address : " + d));
				c(O.whiteBright.bold("Send All Ocean : " + (U ? "yes" : "no")));
				if (!U) {
					c(O.whiteBright.bold("Minimum Amount to send " + A + " OCEAN"));
				}
				c(O.cyanBright.bold("Are your sure? (if you sure, just wait until 5 seconds.)"));
				await V(5000);
				var Y = parseInt(0);
				c(O.greenBright.bold("Start to send from " + SOURCE_ARRAY.length + " wallet(s)\n"));
				const x = {
					destination: d,
					max: U,
					treshold: A,
					amount: Y
				};
				const t = x;
				await sendOcean(H, t);
				break;
			case "sendsui":
				let a = "";
				let j = "";
				if (H == "privatekey") {
					a = await input({
						message: "Input your source private key : "
					});
				}
				if (H == "mnemonic") {
					a = await input({
						message: "Input your source mnemonic : "
					});
				}
				j = await input({
					message: "Input amount to send each address : "
				});
				if (!a || !j) {
					throw new Error("Please input correct answer!");
				}
				await sendMassSui(H, a, j);
				break;
			default:
				c("Menu Not Found");
				process.exit(0);
				break;
		}
	} catch (F) {
		console.log(O.whiteBright.bold("Error :") + " " + O.redBright.bold(F.message));
	}
})();