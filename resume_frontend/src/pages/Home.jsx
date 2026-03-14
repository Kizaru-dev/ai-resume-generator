import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil, FileText, Download, Sparkles, LayoutTemplate, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-300">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute top-32 -right-32 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

        <div className="hero-content text-center z-10 px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium tracking-wide font-sans">AI-Powered Resume Builder</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-base-content leading-tight font-sans">
              Land Your Dream Job with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Smarter Resume</span>
            </h1>
            <p className="py-8 text-xl text-base-content/80 font-medium max-w-2xl mx-auto font-sans">
              Just describe yourself. Our intelligent AI crafts a professional, ATS-friendly resume tailored to highlight your unique strengths in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/generate-resume" className="btn btn-primary btn-lg rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300 group">
                Build My Resume
                <FileText className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 flex justify-center items-center gap-4 text-sm text-base-content/60 font-semibold uppercase tracking-wider">
              <span>Trusted by professionals at top companies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-base-100 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/60 inline-block mb-4 font-sans">
              Why Choose Our Builder?
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto font-sans">
              We leverage cutting-edge AI to make resume creation effortless, professional, and highly effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-300/50">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-inner">
                  <Pencil size={32} />
                </div>
                <h3 className="card-title text-xl font-bold font-sans">Effortless Input</h3>
                <p className="text-base-content/70 font-sans">
                  Forget formatting struggles. Simply provide a description of your experience, and let our AI handle the rest.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-300/50">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 shadow-inner">
                  <LayoutTemplate size={32} />
                </div>
                <h3 className="card-title text-xl font-bold font-sans">ATS-Optimized Designs</h3>
                <p className="text-base-content/70 font-sans">
                  Our professional templates are specifically designed to pass through Applicant Tracking Systems with flying colors.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-300/50">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 shadow-inner">
                  <Download size={32} />
                </div>
                <h3 className="card-title text-xl font-bold font-sans">Instant PDF Export</h3>
                <p className="text-base-content/70 font-sans">
                  Once you are happy with the generated content, download a polished, ready-to-send PDF instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 bg-base-200 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-sans">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Step 1 */}
            <div className="flex-1 text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto bg-base-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-lg border-2 border-transparent group-hover:border-primary transition-all duration-300 mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Sign Up & Connect</h3>
              <p className="text-base-content/70 font-sans">Create an account to securely save your detailed profile and professional history.</p>
            </div>
            {/* Divider */}
            <div className="hidden md:flex flex-col justify-center px-4 opacity-30">
              <div className="w-16 h-0.5 border-t-2 border-dashed border-base-content"></div>
            </div>
            {/* Step 2 */}
            <div className="flex-1 text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto bg-base-100 rounded-full flex items-center justify-center text-2xl font-bold text-secondary shadow-lg border-2 border-transparent group-hover:border-secondary transition-all duration-300 mb-6 relative">
                2
                <div className="absolute -top-2 -right-2 text-accent animate-pulse">
                  <Sparkles size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Describe Yourself</h3>
              <p className="text-base-content/70 font-sans">Write a brief summary of your skills and achievements. Our AI will expand and formalize it.</p>
            </div>
            {/* Divider */}
            <div className="hidden md:flex flex-col justify-center px-4 opacity-30">
              <div className="w-16 h-0.5 border-t-2 border-dashed border-base-content"></div>
            </div>
            {/* Step 3 */}
            <div className="flex-1 text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto bg-base-100 rounded-full flex items-center justify-center text-2xl font-bold text-accent shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 font-sans">Review & Download</h3>
              <p className="text-base-content/70 font-sans">Choose a beautiful template, refine the generated text, and export your polished resume.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="py-20 relative overflow-hidden bg-neutral text-neutral-content">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-neutral to-neutral"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">Ready to Elevate Your Career?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-sans">
            Join thousands of job seekers who have successfully landed their next role using our AI Resume Builder.
          </p>
          <Link to="/generate-resume" className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/20 hover:scale-105 hover:bg-primary-focus transition-all duration-300 text-lg">
            Start Building For Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content mt-auto font-sans">
        <aside>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-primary shadow-lg ring ring-primary ring-offset-base-300 ring-offset-2">
              <img src="/src/assets/footerpic.jpeg" alt="GitHub profile pic" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">aiResume</span>
          </div>
          <p className="opacity-70">Providing reliable tech since 2026. Made with ❤️ by Priyanshu.</p>
          <p className="opacity-70 mt-2">© {new Date().getFullYear()} aiResume Maker. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;