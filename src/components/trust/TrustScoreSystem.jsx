import React, { useState } from 'react';
import { Award, Star, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export default function TrustScoreSystem({ project, freelancers, onCompleteFeedback }) {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [updatedScore, setUpdatedScore] = useState(98);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setUpdatedScore(99); // Instant live score gain
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Award className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Project Completion & Trust Score Algorithm</h2>
            <p className="text-xs text-slate-300">
              Submit peer review & observe real-time Trust Score adjustments on the AI network.
            </p>
          </div>
        </div>

        <div className="bg-amber-950/80 px-4 py-2 rounded-xl border border-amber-800 text-center">
          <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Network Trust Level</div>
          <div className="text-2xl font-extrabold text-amber-400">{updatedScore} / 100</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Rating Submission Form */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-5">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Client Sign-Off & Freelancer Rating
          </h3>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Performance & Collaboration Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />
                    </button>
                  ))}
                  <span className="text-sm font-bold text-amber-400 ml-2">{rating}.0 / 5.0</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Qualitative Feedback & Testimonial
                </label>
                <textarea
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Outstanding AI requirement execution. Delivered 2 days ahead of deadline with zero code defects..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
              >
                <Award className="w-4 h-4" />
                <span>Submit Rating & Update Trust Score</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Rating Logged & Verified</h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Trust Score increased from <strong>98</strong> to <strong>99</strong> across the global AI network!
              </p>
            </div>
          )}
        </div>

        {/* Algorithm Score Breakdown Matrix */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Trust Score Calculation Matrix
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Verified Work Output</div>
                <div className="text-[10px] text-slate-400">Code unit tests & AI audit compliance</div>
              </div>
              <span className="text-xs font-extrabold text-emerald-400">40% Weight</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">On-Time Sprint Delivery</div>
                <div className="text-[10px] text-slate-400">100% milestones met before deadline</div>
              </div>
              <span className="text-xs font-extrabold text-indigo-400">30% Weight</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Peer & Client Rating</div>
                <div className="text-[10px] text-slate-400">5.0 Star score verified</div>
              </div>
              <span className="text-xs font-extrabold text-purple-400">20% Weight</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">AI Risk Compliance</div>
                <div className="text-[10px] text-slate-400">Zero active telemetry flags</div>
              </div>
              <span className="text-xs font-extrabold text-rose-400">10% Weight</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
