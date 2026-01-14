
import React, { useState, useEffect, useCallback } from 'react';
import { PasswordMetrics, StrengthCheck } from '../types';

export const PasswordAnalyzer: React.FC = () => {
  const [password, setPassword] = useState('');
  const [metrics, setMetrics] = useState<PasswordMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const analyzePassword = useCallback((pass: string): PasswordMetrics => {
    const checks: StrengthCheck[] = [
      { id: 'length', label: 'At least 12 characters', regex: /^.{12,}$/, met: false },
      { id: 'upper', label: 'Uppercase letters', regex: /[A-Z]/, met: false },
      { id: 'lower', label: 'Lowercase letters', regex: /[a-z]/, met: false },
      { id: 'number', label: 'Numbers (0-9)', regex: /[0-9]/, met: false },
      { id: 'symbol', label: 'Special symbols (!@#$%^&*)', regex: /[^A-Za-z0-9]/, met: false },
    ];

    let metCount = 0;
    checks.forEach(check => {
      check.met = check.regex.test(pass);
      if (check.met) metCount++;
    });

    // Simple entropy calculation (Bits)
    let poolSize = 0;
    if (/[a-z]/.test(pass)) poolSize += 26;
    if (/[A-Z]/.test(pass)) poolSize += 26;
    if (/[0-9]/.test(pass)) poolSize += 10;
    if (/[^A-Za-z0-9]/.test(pass)) poolSize += 32;

    const entropy = pass.length > 0 ? Math.floor(pass.length * Math.log2(poolSize || 1)) : 0;

    let strength: PasswordMetrics['strength'] = 'Very Weak';
    if (metCount >= 5 && entropy > 60) strength = 'Very Strong';
    else if (metCount >= 4 && entropy > 45) strength = 'Strong';
    else if (metCount >= 3 && entropy > 30) strength = 'Medium';
    else if (metCount >= 2) strength = 'Weak';

    return { score: metCount, strength, entropy, checks };
  }, []);

  useEffect(() => {
    const newMetrics = analyzePassword(password);
    setMetrics(newMetrics);
  }, [password, analyzePassword]);

  const strengthColors = {
    'Very Weak': 'bg-red-500',
    'Weak': 'bg-orange-500',
    'Medium': 'bg-yellow-500',
    'Strong': 'bg-emerald-500',
    'Very Strong': 'bg-indigo-600',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">Password Strength Lab</h2>
        <p className="text-slate-500">Project #32: High-precision Regex & Entropy Analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700">Enter Password to Analyze</label>
            <div className="relative">
              <input
                type={isVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-lg transition-all pr-12"
                placeholder="Type password..."
              />
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {isVisible ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 014.459-5.591M19.125 19.125l-2.25-2.25m-2.813-2.812l-1.125-1.125M3.375 3.375l17.25 17.25" /></svg>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Analysis Criteria</h3>
            <div className="space-y-2">
              {metrics?.checks.map((check) => (
                <div key={check.id} className="flex items-center space-x-3 text-sm">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${check.met ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-300'}`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={`${check.met ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <div className="space-y-6 flex-grow">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Strength</h3>
                <p className={`text-2xl font-black ${metrics ? strengthColors[metrics.strength].replace('bg-', 'text-') : 'text-slate-300'}`}>
                  {metrics?.strength || 'N/A'}
                </p>
              </div>
              <div className="text-right">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Entropy</h3>
                <p className="text-xl font-mono font-bold text-slate-700">{metrics?.entropy || 0} bits</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                  className={`h-full transition-all duration-500 ${metrics ? strengthColors[metrics.strength] : 'bg-slate-200'}`}
                  style={{ width: metrics ? `${Math.max(10, (metrics.score / 5) * 100)}%` : '0%' }}
                />
              </div>
              <p className="text-xs text-slate-400 italic">
                {metrics?.entropy && metrics.entropy > 60 ? 'This password is mathematically complex.' : 'Lower entropy makes passwords vulnerable to brute force.'}
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100">
             <div className="bg-slate-50 p-4 rounded-xl">
               <h4 className="text-sm font-bold text-slate-700 mb-2">Security Note:</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                 Entropy measures the unpredictability of a password. A score above 60 bits is generally considered strong against automated guessing attacks.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
