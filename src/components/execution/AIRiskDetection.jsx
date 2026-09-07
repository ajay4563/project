import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Sparkles, RefreshCw, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function AIRiskDetection({ project, onResolveRisk, onProceedToCompletion }) {
  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: "r1",
      severity: "high",
      type: "Timeline Delay Risk",
      metric: "+2.5 Days Estimated Delay",
      message: "Vector database ingestion latency spike during high-concurrency query benchmark testing.",
      aiRecommendation: "Auto-provision Redis cache layer & batch embedding queries in 250-node chunk payloads.",
      mitigated: false
    },
    {
      id: "r2",
      severity: "medium",
      type: "Budget Burn Rate Alert",
      metric: "8% Above Target Burn Rate",
      message: "Additional Cloud API token calls during experimental model fine-tuning phase.",
      aiRecommendation: "Throttle development model calls & redirect staging to quantized local model.",
      mitigated: false
    }
  ]);

  const [isMitigating, setIsMitigating] = useState(false);

  const handleMitigate = (alertId) => {
    setIsMitigating(true);
    setTimeout(() => {
      setActiveAlerts(prev => prev.map(a => a.id === alertId ? { ...a, mitigated: true } : a));
      setIsMitigating(false);
    }, 1000);
  };

  const allMitigated = activeAlerts.every(a => a.mitigated);

  return (
    <div className="space-y-6">
      
      {/* Risk Engine Banner */}
      <div className="glass-card rounded-2xl p-6 border border-rose-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">AI Risk Detection Console</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                Continuous AI Telemetry
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Monitoring milestone velocity, API latency, budget burn, and code quality anomalies.
            </p>
          </div>
        </div>

        {/* Risk Level Badge */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-right">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Platform Risk Index</div>
          <div className={`text-lg font-extrabold ${allMitigated ? 'text-emerald-400' : 'text-amber-400'}`}>
            {allMitigated ? 'Low (0.2/10)' : 'Moderate (4.8/10)'}
          </div>
        </div>
      </div>

      {/* Risk Alert Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
            Active Detected Risk Anomalies ({activeAlerts.filter(a => !a.mitigated).length})
          </h3>
          <span className="text-xs text-slate-400">Powered by Autonomous Telemetry</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {activeAlerts.map((alert) => (
            <div 
              key={alert.id}
              className={`glass-card rounded-2xl p-6 border transition-all ${
                alert.mitigated 
                  ? 'border-emerald-500/40 bg-emerald-950/20' 
                  : alert.severity === 'high'
                    ? 'border-rose-500/50 bg-rose-950/20'
                    : 'border-amber-500/50 bg-amber-950/20'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {alert.mitigated ? (
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5" /> AI Mitigated & Resolved
                      </span>
                    ) : (
                      <span className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        alert.severity === 'high' 
                          ? 'bg-rose-950 text-rose-300 border-rose-800' 
                          : 'bg-amber-950 text-amber-300 border-amber-800'
                      }`}>
                        <AlertTriangle className="w-3.5 h-3.5" /> {alert.type}
                      </span>
                    )}

                    <span className="text-xs font-bold text-slate-300">{alert.metric}</span>
                  </div>

                  <p className="text-sm font-medium text-white">{alert.message}</p>

                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-900 text-xs text-slate-300 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-indigo-300">AI Recommended Fix: </span>
                      <span>{alert.aiRecommendation}</span>
                    </div>
                  </div>
                </div>

                {/* Mitigate Action Button */}
                {!alert.mitigated && (
                  <button
                    onClick={() => handleMitigate(alert.id)}
                    disabled={isMitigating}
                    className="self-start sm:self-center px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 transition-all flex items-center gap-2 shadow-md shadow-indigo-500/20 whitespace-nowrap"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Apply AI Auto-Fix</span>
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completion CTA */}
      {allMitigated && (
        <div className="glass-card rounded-2xl p-6 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">All Risks Successfully Neutralized</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Project is clear for final milestone handover, client sign-off, and Trust Score calculations.
          </p>
          <button
            onClick={onProceedToCompletion}
            className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-600/20"
          >
            <span>Proceed to Project Completion & Trust Score</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
