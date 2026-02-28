import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Calendar, User, TrendingUp, PenSquare, PlusCircle, MinusCircle, CornerDownLeft, Printer } from 'lucide-react';

export default function Finance() {
  const handleAction = (action: string) => {
    alert(`${action} triggered!`);
  };

  return (
    <div className="bg-background-light dark:bg-zinc-900 font-display text-zinc-900 dark:text-zinc-100 h-full selection:bg-black selection:text-white overflow-y-auto">
      <div className="relative flex h-auto min-h-full w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 px-6 py-4 lg:px-40 bg-white dark:bg-black">
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="flex items-center justify-center p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
                <Wallet size={20} />
              </Link>
              <h2 className="text-xl font-bold leading-tight tracking-tight uppercase">DOME Finance</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleAction('View Calendar')} className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 text-black border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
                <Calendar size={20} />
              </button>
              <button onClick={() => handleAction('Account Settings')} className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 text-black border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black">
                <User size={20} />
              </button>
            </div>
          </header>

          <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
            <div className="max-w-4xl w-full space-y-8">
              <div className="bg-zinc-200 dark:bg-zinc-800 rounded-xl p-1 shadow-xl border-4 border-zinc-300 dark:border-zinc-700">
                <div className="bg-black rounded-lg p-8 border-inner shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none screen-scanline"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center text-white">
                    <span className="text-white/60 font-mono text-xs tracking-[0.3em] uppercase mb-2">Total Liquidity</span>
                    <div className="font-mono text-5xl md:text-7xl font-bold text-white lcd-glow tracking-tighter">
                      $12,450.85
                    </div>
                    <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20">
                      <TrendingUp size={16} className="text-white" />
                      <span className="text-white font-mono font-bold">+2.45%</span>
                      <span className="text-white/40 text-xs font-mono ml-2">VS LAST MONTH</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 bg-white dark:bg-black p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-xl">
                  <h3 className="text-black dark:text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                    <PenSquare size={20} />
                    Entry Module
                  </h3>
                  <div className="space-y-6">
                    <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <button onClick={() => handleAction('Select Income')} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-bold text-sm transition-all shadow-md">
                        <PlusCircle size={18} />
                        INCOME
                      </button>
                      <button onClick={() => handleAction('Select Expense')} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-zinc-500 font-bold text-sm hover:text-black dark:hover:text-white transition-all">
                        <MinusCircle size={18} />
                        EXPENSE
                      </button>
                    </div>
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1">Transaction Amount</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white font-mono text-xl">$</span>
                        <input className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl py-4 pl-10 pr-4 text-2xl font-mono text-black dark:text-white focus:border-black dark:focus:border-white focus:ring-0 transition-all placeholder:text-zinc-300" placeholder="0.00" type="text" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider ml-1">Reference / Description</label>
                      <input className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl py-4 px-4 text-base font-medium text-black dark:text-white focus:border-black dark:focus:border-white focus:ring-0 transition-all placeholder:text-zinc-400" placeholder="e.g. Monthly Rent, Client Payment" type="text" />
                    </div>
                    <button onClick={() => handleAction('Commit Entry')} className="w-full tactile-button bg-white text-black border-2 border-gray-200 font-black py-5 rounded-xl text-lg uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50">
                      Commit Entry
                      <CornerDownLeft size={24} className="font-black" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-[#fdfbf7] text-black rounded shadow-[0_10px_30px_rgba(0,0,0,0.1)] min-h-[500px] flex flex-col overflow-hidden relative border-l-[12px] border-black/20">
                    <div className="border-b-2 border-black/10 p-6 flex justify-between items-end bg-white/50">
                      <div>
                        <h4 className="font-mono text-2xl font-bold text-black">LEDGER_LOG_01</h4>
                        <p className="font-mono text-xs text-zinc-500">FISCAL YEAR 2024 / Q3</p>
                      </div>
                      <div className="text-right">
                        <Printer size={32} className="text-zinc-400" />
                      </div>
                    </div>
                    <div className="ledger-texture flex-1 p-0">
                      <table className="w-full font-mono text-sm border-collapse">
                        <thead>
                          <tr className="bg-black/5">
                            <th className="text-left px-6 py-2 border-b-2 border-black/20 font-bold uppercase text-[10px] text-zinc-600">Date</th>
                            <th className="text-left px-4 py-2 border-b-2 border-black/20 font-bold uppercase text-[10px] text-zinc-600">Ref. ID</th>
                            <th className="text-right px-6 py-2 border-b-2 border-black/20 font-bold uppercase text-[10px] text-zinc-600">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-black/5 transition-colors group">
                            <td className="px-6 py-3 border-r border-black/10 text-zinc-800">OCT 14</td>
                            <td className="px-4 py-3 border-r border-black/10">
                              <div className="font-bold text-black">STRIPE_PAYOUT</div>
                              <div className="text-[10px] text-zinc-500 uppercase">Consulting Services</div>
                            </td>
                            <td className="px-6 py-3 text-right text-black font-bold">+$2,400.00</td>
                          </tr>
                          <tr className="hover:bg-black/5 transition-colors group">
                            <td className="px-6 py-3 border-r border-black/10 text-zinc-800">OCT 12</td>
                            <td className="px-4 py-3 border-r border-black/10">
                              <div className="font-bold text-black">AMAZON_AWS</div>
                              <div className="text-[10px] text-zinc-500 uppercase">Cloud Infrastructure</div>
                            </td>
                            <td className="px-6 py-3 text-right text-black font-bold">-$450.20</td>
                          </tr>
                          <tr className="hover:bg-black/5 transition-colors group">
                            <td className="px-6 py-3 border-r border-black/10 text-zinc-800">OCT 10</td>
                            <td className="px-4 py-3 border-r border-black/10">
                              <div className="font-bold text-black">STARBUCKS_021</div>
                              <div className="text-[10px] text-zinc-500 uppercase">Operating Expense</div>
                            </td>
                            <td className="px-6 py-3 text-right text-black font-bold">-$12.50</td>
                          </tr>
                          <tr className="hover:bg-black/5 transition-colors group">
                            <td className="px-6 py-3 border-r border-black/10 text-zinc-800">OCT 08</td>
                            <td className="px-4 py-3 border-r border-black/10">
                              <div className="font-bold text-black">UPWORK_ESCROW</div>
                              <div className="text-[10px] text-zinc-500 uppercase">Development Project</div>
                            </td>
                            <td className="px-6 py-3 text-right text-black font-bold">+$1,120.00</td>
                          </tr>
                          <tr className="hover:bg-black/5 transition-colors group">
                            <td className="px-6 py-3 border-r border-black/10 text-zinc-800">OCT 05</td>
                            <td className="px-4 py-3 border-r border-black/10">
                              <div className="font-bold text-black">APPLE_STORE</div>
                              <div className="text-[10px] text-zinc-500 uppercase">Asset Purchase</div>
                            </td>
                            <td className="px-6 py-3 text-right text-black font-bold">-$2,199.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="border-t-4 border-double border-black/20 p-6 bg-black/5">
                      <div className="flex justify-between items-center font-mono">
                        <span className="text-xs font-bold uppercase text-zinc-500 tracking-tighter">End of report</span>
                        <div className="flex gap-8">
                          <div className="text-right">
                            <div className="text-[9px] uppercase font-bold text-zinc-400">Net Debit</div>
                            <div className="text-sm font-bold text-black">$2,661.70</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[9px] uppercase font-bold text-zinc-400">Net Credit</div>
                            <div className="text-sm font-bold text-black">$3,520.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10 py-4 px-6 lg:px-40 mt-auto">
            <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
                  CORE_SYSTEM: ONLINE
                </div>
                <div>ENC_LEVEL: 256_AES</div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => handleAction('Export CSV')} className="hover:text-black dark:hover:text-white uppercase">Export CSV</button>
                <button onClick={() => handleAction('System Audit')} className="hover:text-black dark:hover:text-white uppercase">System Audit</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
