import React, { useState } from 'react';
import { Sparkles, Trash2, Wand2 } from 'lucide-react';

function GenerateResume() {
    const [description, setDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        if (!description.trim()) return;
        setIsGenerating(true);
        // Simulate API call for now
        setTimeout(() => {
            setIsGenerating(false);
            // Logic to move to next step will go here
        }, 2000);
    };

    const handleClear = () => {
        setDescription('');
    };

    return (
        <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background ambient effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>

            <div className="w-full max-w-4xl z-10">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-3 bg-base-200 rounded-2xl shadow-inner mb-6 border border-base-300">
                        <Wand2 className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content mb-4 font-sans">
                        AI Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Description Input</span>
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto font-sans">
                        Give our AI a prompt on exactly how you want your resume built. Include your skills, experience, and the specific style or tone you are aiming for.
                    </p>
                </div>

                {/* Input Card */}
                <div className="card bg-base-200 shadow-2xl border border-base-300/50 backdrop-blur-sm">
                    <div className="card-body p-6 md:p-10">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Your Resume Build Prompt</span>
                                <span className="label-text-alt text-base-content/50">{description.length} characters</span>
                            </label>

                            <textarea
                                className="textarea textarea-bordered w-full min-h-[300px] text-base focus:textarea-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-y p-6 leading-relaxed bg-base-100 shadow-inner rounded-xl"
                                placeholder="Example: Build me a confident, professional resume for a Senior Frontend Developer role. Focus heavily on my 5 years of React and Tailwind CSS experience. Emphasize my leadership in migrating a legacy monolith to Next.js..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>

                            <label className="label">
                                <span className="label-text-alt text-base-content/60 flex items-center gap-1 mt-2">
                                    <Sparkles size={14} className="text-secondary animate-pulse" />
                                    Tip: Be as detailed as possible to get the best results.
                                </span>
                            </label>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <button
                                className="btn btn-outline btn-lg rounded-full w-full sm:w-auto px-8 hover:bg-error hover:text-error-content hover:border-error transition-colors"
                                onClick={handleClear}
                                disabled={!description || isGenerating}
                            >
                                <Trash2 className="w-5 h-5 mr-2" />
                                Clear Resume
                            </button>

                            <button
                                className={`btn btn-primary btn-lg rounded-full w-full sm:w-auto px-12 shadow-lg shadow-primary/30 transition-all duration-300 ${!isGenerating && 'hover:scale-105 hover:shadow-primary/50'}`}
                                onClick={handleGenerate}
                                disabled={!description || isGenerating}
                            >
                                {isGenerating ? (
                                    <>
                                        <span className="loading loading-spinner"></span>
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5 mr-2" />
                                        Generate Resume
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default GenerateResume;