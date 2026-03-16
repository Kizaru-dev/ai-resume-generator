import React from 'react';
import { Sparkles, Code, Brain, Rocket, User, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import creatorImage from '../assets/image.png';

function About() {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header / Hero Section */}
        <div className="text-center space-y-6 pt-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent pb-2">
            About Our Platform
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-base-content/80 mt-4 font-medium">
            Empowering professionals with AI-driven, ATS-friendly resumes that stand out.
          </p>
        </div>

        {/* Website Info Div */}
        <div className="grid md:grid-cols-2 gap-12 items-center lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Brain className="w-8 h-8" />
              </div>
              The AI Resume Generator
            </h2>
            <p className="text-base-content/70 leading-relaxed text-lg">
              Crafting the perfect resume can be daunting. Our platform takes the stress out of the process by analyzing your experiences and structuring them into impactful, modern formats. Whether you're a seasoned expert or a fresh graduate, our intelligent platform helps you highlight your strengths effectively.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center group">
                <Sparkles className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-base-content/90">Smart Parsing</span>
              </div>
              <div className="p-5 rounded-2xl bg-base-200/50 border border-base-300 hover:border-accent/50 hover:bg-base-200 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center group">
                <Rocket className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-base-content/90">Fast Generation</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full flex justify-center items-center group perspective-1000 mt-10 md:mt-0 xl:scale-110 transition-transform duration-500">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            {/* Floating Element 2 - Behind */}
            <div className="absolute -top-4 -left-8 md:-left-12 w-48 bg-base-100/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 transform -rotate-12 group-hover:-translate-y-4 group-hover:-rotate-6 transition-all duration-700 z-0">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"><Sparkles className="w-4 h-4 text-accent" /></div>
                 <div className="space-y-2 flex-1">
                    <div className="w-full h-2 bg-base-content/20 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-base-content/10 rounded-full"></div>
                 </div>
               </div>
            </div>

            {/* Main Floating Card - Resume Mockup */}
            <div className="relative w-full max-w-sm bg-base-100/80 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/10 p-6 transform rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 hover:scale-[1.02] z-10">
                {/* Header Profile Area */}
                <div className="flex items-center gap-4 border-b border-base-200/50 pb-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px]">
                        <div className="w-full h-full rounded-full bg-base-100 flex items-center justify-center overflow-hidden">
                           <User className="w-6 h-6 text-base-content/40" />
                        </div>
                    </div>
                    <div>
                        <div className="w-32 h-4 bg-base-content/20 rounded-full mb-2"></div>
                        <div className="w-20 h-3 bg-base-content/10 rounded-full"></div>
                    </div>
                </div>
                
                {/* Experience/Skills Mockup text */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center bg-base-200/40 p-3 rounded-2xl border border-transparent hover:border-primary/20 transition-colors">
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-primary/10 text-primary rounded-xl"><Code className="w-4 h-4" /></div>
                            <div className="w-24 h-3 bg-base-content/30 rounded-full"></div>
                        </div>
                        <div className="w-8 h-3 bg-base-content/10 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center bg-base-200/40 p-3 rounded-2xl border border-transparent hover:border-secondary/20 transition-colors">
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-secondary/10 text-secondary rounded-xl"><Brain className="w-4 h-4" /></div>
                            <div className="w-32 h-3 bg-base-content/30 rounded-full"></div>
                        </div>
                        <div className="w-8 h-3 bg-base-content/10 rounded-full"></div>
                    </div>
                    {/* Fake text skeleton */}
                    <div className="pt-4 space-y-2 opacity-60">
                         <div className="w-full h-2 bg-base-content/20 rounded-full"></div>
                         <div className="w-5/6 h-2 bg-base-content/20 rounded-full"></div>
                         <div className="w-4/6 h-2 bg-base-content/20 rounded-full"></div>
                    </div>
                </div>

                {/* Score floating badge */}
                <div className="absolute -right-4 md:-right-8 -bottom-6 bg-base-100/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce cursor-default" style={{animationDuration: '4s'}}>
                    <div className="flex items-center gap-4">
                        <div className="radial-progress text-success bg-base-200" style={{"--value":98, "--size": "3rem", "--thickness": "4px"}} role="progressbar"><span className="text-xs font-bold text-base-content">98%</span></div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-base-content/50 tracking-wider">ATS Score</p>
                            <p className="text-sm font-black text-success">Excellent!</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center py-8">
          <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-base-content/20 to-transparent"></div>
        </div>

        {/* Creator Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center lg:gap-20">
          
          <div className="order-2 md:order-1 relative group flex justify-center">
             <div className="absolute inset-4 bg-gradient-to-br from-secondary via-accent to-primary rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
             <div className="relative w-64 h-64 md:w-80 md:h-80 bg-base-200 rounded-full border-8 border-base-100 shadow-2xl overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                <img src={creatorImage} alt="Priyanshu Singh" className="w-full h-full object-cover" />
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                <Code className="w-8 h-8" />
              </div>
              Meet the Creator
            </h2>
            <div className="space-y-5 text-base-content/70 text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="font-bold text-base-content text-xl">Priyanshu Singh</span>, a passionate full-stack developer dedicated to creating intuitive and powerful web applications.
              </p>
              <p>
                The idea for the AI Resume Generator came from seeing the struggle many face when trying to format their achievements. I wanted to build a tool that bridges the gap between great talent and great opportunities by leveraging the power of Artificial Intelligence.
              </p>
            </div>
            
            <div className="flex gap-5 pt-6">
              <a href="https://github.com/Kizaru-dev" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-lg btn-ghost bg-base-200 hover:bg-primary hover:text-primary-content hover:scale-110 transition-all duration-300 shadow-sm">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-lg btn-ghost bg-base-200 hover:bg-secondary hover:text-secondary-content hover:scale-110 transition-all duration-300 shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshusinghppii@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-lg btn-ghost bg-base-200 hover:bg-accent hover:text-accent-content hover:scale-110 transition-all duration-300 shadow-sm">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Call to action */}
        <div className="text-center mt-24 mb-12 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-base-200 to-base-300 border border-base-100/50 shadow-2xl relative overflow-hidden group">
           {/* Decorative background blurs for CTA */}
           <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
           <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20 transition-transform duration-700 group-hover:scale-150"></div>
           
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl md:text-4xl font-bold">Ready to build your standout resume?</h3>
             <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
               Join thousands of users who have successfully landed their dream jobs using our intelligent builder.
             </p>
             <div className="pt-4">
               <Link to="/" className="btn btn-primary btn-lg rounded-full px-10 shadow-lg shadow-primary/30 hover:scale-105 transition-all outline-none border-none">
                 Get Started Now
                 <Rocket className="w-5 h-5 ml-2" />
               </Link>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

export default About;