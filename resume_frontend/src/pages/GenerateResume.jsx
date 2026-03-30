import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Trash2, Wand2, ArrowRight, Zap, Code, Briefcase } from 'lucide-react';
import { generateResume } from '../api/ResumeService';
import { toast } from 'react-hot-toast';

function GenerateResume() {
    const [description, setDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const handleGenerate = async () => {
       console.log(description);

       try {
        setIsGenerating(true);
        const response = await generateResume(description);
        console.log("Backend response:", response);

        const resumeData = response?.data;
        if (!resumeData) {
          toast.error("AI response was unclear, please try again with more detail.");
          return;
        }

        toast.success("Resume generated successfully");
        navigate('/resume', { state: { resumeData } });
        
       } catch (error) {
        console.error(error);
        toast.error("Failed to generate resume. Please try again.");
       } finally {
        setIsGenerating(false);
        setDescription("");
       }
    };

    const handleClear = () => {
        setDescription('');
    };

    const appendSuggestion = (text) => {
        const newDesc = description ? `${description} ${text}` : text;
        setDescription(newDesc);
    };

    const suggestions = [
        { icon: <Briefcase size={14} />, text: 'Professional & Corporate tone', label: 'Professional' },
        { icon: <Code size={14} />, text: 'Highlight my technical projects & GitHub', label: 'Tech Focused' },
        { icon: <Zap size={14} />, text: 'Action-oriented and impactful', label: 'Action-driven' }
    ];

    return (
        <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-primary/30 selection:text-primary">
            
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Dynamic Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none"></div>

            <div className="w-full max-w-4xl z-10 flex flex-col gap-10">

                {/* Header Section */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-4 bg-base-200/50 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-white/5 mb-2 ring-1 ring-primary/20">
                        <Wand2 className="w-10 h-10 text-primary drop-shadow-[0_0_15px_rgba(var(--p),0.8)]" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-base-content drop-shadow-sm">
                        Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">AI Resume</span>
                    </h1>
                    <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        Describe your ideal resume. Our intelligence agent will craft a tailored, ATS-friendly profile that gets you hired.
                    </p>
                </div>

                {/* Primary Interaction Card */}
                <div className="relative group">
                    {/* Animated Glow behind card */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 ${isFocused ? 'opacity-50' : ''}`}></div>
                    
                    <div className="relative bg-base-200/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden">
                        
                        {/* Top decorative bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary opacity-80"></div>

                        <div className="p-8 md:p-12">
                            <div className="flex justify-between items-end mb-4">
                                <label className="flex items-center gap-2 text-base-content/90 font-semibold text-lg tracking-wide">
                                    <Sparkles className="w-5 h-5 text-accent" />
                                    Your Prompt
                                </label>
                                <span className={`text-sm font-medium transition-colors ${description.length > 500 ? 'text-warning' : 'text-base-content/50'}`}>
                                    {description.length} / 1000
                                </span>
                            </div>

                            <div className="relative">
                                <textarea
                                    disabled={isGenerating}
                                    className="w-full min-h-[240px] p-6 text-lg bg-base-100/50 text-base-content placeholder-base-content/40 border border-base-300/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-y shadow-inner custom-scrollbar"
                                    placeholder="E.g., Build me a confident, professional resume for a Senior Frontend Developer role. Focus heavily on my 5 years of React and Tailwind CSS experience. Emphasize my leadership in migrating a legacy monolith to Next.js..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    spellCheck="false"
                                />
                                
                                {/* Inner glow edge */}
                                <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                            </div>

                            {/* Suggestions quick-add */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => appendSuggestion(s.text)}
                                        className="btn btn-sm btn-ghost bg-base-100/50 hover:bg-base-300/80 hover:scale-105 border border-base-300/50 rounded-full gap-2 text-base-content/80 font-medium transition-all shadow-sm"
                                    >
                                        {s.icon}
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer Action Area */}
                        <div className="bg-base-300/30 p-6 md:px-12 md:py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
                            <button
                                className="btn btn-ghost hover:bg-error/10 hover:text-error text-base-content/60 rounded-xl transition-all w-full sm:w-auto font-semibold tracking-wide"
                                onClick={handleClear}
                                disabled={!description || isGenerating}
                            >
                                <Trash2 className="w-5 h-5 mr-2" />
                                Clear Context
                            </button>

                            <button
                                disabled={isGenerating}
                                className={`relative group/btn w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 font-bold rounded-2xl text-white overflow-hidden transition-all shadow-xl shadow-primary/20 ${!description ? 'bg-base-300 text-base-content/30 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/40 hover:-translate-y-1'}`}
                                onClick={handleGenerate}
                                
                            >
                                {isGenerating ? (
                                    <span className="flex items-center gap-3">
                                        <span className="loading loading-spinner text-white h-5 w-5"></span>
                                        Synthesizing...
                                    </span>
                                ) : (
                                    <>
                                        {/* Button hover shine effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                                        <span className="flex items-center gap-3 relative z-10 text-lg">
                                            {isGenerating ? (
                                                <span className="flex items-center gap-3">
                                                    <span className="loading loading-spinner text-white h-5 w-5"></span>
                                                    Synthesizing...
                                                </span>
                                            ) : (
                                                <>
                                                    Generate AI Resume
                                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Global style overrides specifically for this page's scrollbar and animations */}
            <style jsx="true">{`
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradientX 5s ease infinite;
                }
                @keyframes gradientX {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: oklch(var(--b3));
                    border-radius: 20px;
                }
            `}</style>
        </div>
    )
}

export default GenerateResume;