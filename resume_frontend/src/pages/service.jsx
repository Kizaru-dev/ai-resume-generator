import React from 'react';
import { Bot, FileText, Target, BarChart, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Service() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary group-hover:animate-bounce" />,
      title: "AI Resume Generation",
      description: "Harness the power of advanced AI to instantly craft ATS-optimized, high-converting resumes tailored to your dream role.",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary group-hover:animate-bounce" />,
      title: "Smart Cover Letters",
      description: "Generate compelling, highly-personalized cover letters that capture recruiter attention and complement your resume perfectly.",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <Target className="w-8 h-8 text-accent group-hover:animate-bounce" />,
      title: "ATS Compatibility Check",
      description: "Score your current resume against modern Applicant Tracking Systems to ensure it never gets lost in the digital pile.",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: <BarChart className="w-8 h-8 text-success group-hover:animate-bounce" />,
      title: "Career Analytics",
      description: "Gain valuable insights into industry keyword trends and job market demands to keep your profile permanently competitive.",
      color: "from-success/20 to-success/5"
    }
  ];

  return (
    <div className="min-h-[85vh] bg-base-100 flex flex-col items-center py-16 px-4 sm:px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" style={{ animationDuration: '6s' }}></div>

      <div className="w-full max-w-6xl z-10 flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-md border border-white/10 text-primary font-semibold text-sm tracking-wide shadow-xl mb-4 group cursor-default">
            <Sparkles className="w-4 h-4 group-hover:text-warning transition-colors" />
            <span>Next-Generation Tools</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-base-content drop-shadow-sm">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">Career Profile</span>
          </h1>
          
          <p className="text-lg md:text-xl text-base-content/70 leading-relaxed font-medium">
            We provide a suite of intelligent tools designed specifically to fast-track your job search, optimize your applications, and land you more interviews.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Actual Card */}
              <div className="relative h-full bg-base-200/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl overflow-hidden">
                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} rounded-bl-full opacity-50 transition-transform group-hover:scale-110`}></div>
                
                <div className="relative z-10 flex flex-col h-full space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-base-100 shadow-inner flex items-center justify-center border border-white/5 mb-2">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-base-content tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-base-content/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-8">
            <div className="relative group overflow-hidden rounded-[2.5rem] p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-base-100/90 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="space-y-2 z-10">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-base-content tracking-tight">Ready to build your masterpiece?</h2>
                      <p className="text-base-content/70 text-lg">Stop struggling with formatting. Let AI do the heavy lifting.</p>
                  </div>
                  
                  <button 
                      onClick={() => navigate('/generate-resume')}
                      className="btn btn-lg border-none bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white shadow-xl shadow-primary/20 transition-all font-bold gap-3 z-10"
                  >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
            </div>
        </div>

      </div>

      <style jsx="true">{`
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradientX 5s ease infinite;
        }
        @keyframes gradientX {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
      `}</style>

    </div>
  );
}

export default Service;