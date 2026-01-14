
import React, { useState } from 'react';
import { PasswordAnalyzer } from './components/PasswordAnalyzer';
import { ProjectDocumentation } from './components/ProjectDocumentation';
import { AppView } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('analyzer');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">SecurityLab <span className="text-indigo-600">#32</span></h1>
          </div>
          
          <nav className="flex space-x-1 p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => setActiveView('analyzer')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                activeView === 'analyzer' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Analyzer Tool
            </button>
            <button 
              onClick={() => setActiveView('documentation')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                activeView === 'documentation' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Project Document
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        {activeView === 'analyzer' ? (
          <PasswordAnalyzer />
        ) : (
          <ProjectDocumentation />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            Developed for Cybersecurity Course - Project #32 Password Strength Analyzer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
