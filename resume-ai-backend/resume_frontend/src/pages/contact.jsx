import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-hot-toast';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "da96086e-afaa-4642-977b-61528fcfc39a");
    formData.append("subject", "New Contact Form Submission from AI Resume Generator");
    formData.append("from_name", "AI Resume Generator Contact");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent successfully!");
            e.target.reset();
        } else {
            console.error("Error", data);
            toast.error("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] bg-base-100 flex flex-col items-center justify-center py-12 px-4 sm:px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '7s' }}></div>

      <div className="w-full max-w-6xl z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-md border border-white/10 text-primary font-semibold text-sm tracking-wide shadow-xl mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-base-content drop-shadow-sm">
                Let's Build Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">Things Together</span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto font-medium">
                Have a question, feedback, or a partnership idea? Drop us a line and let's start a conversation.
            </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Left Column: Contact Info Area */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between p-8 bg-gradient-to-br from-base-200/80 to-base-300/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Decorative glow inside card */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div>
                    <h3 className="text-3xl font-bold text-base-content mb-8">Contact Info</h3>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-5 group/item cursor-pointer">
                            <div className="p-4 rounded-xl bg-base-100 group-hover/item:bg-primary/10 border border-white/5 transition-colors">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base-content/60 text-sm">Email Us</h4>
                                <p className="text-lg font-medium text-base-content group-hover/item:text-primary transition-colors">priyanshusinghppii@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group/item cursor-pointer">
                            <div className="p-4 rounded-xl bg-base-100 group-hover/item:bg-secondary/10 border border-white/5 transition-colors">
                                <MapPin className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base-content/60 text-sm">Location</h4>
                                <p className="text-lg font-medium text-base-content group-hover/item:text-secondary transition-colors">Mumbai, Maharashtra</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-5 group/item cursor-pointer">
                            <div className="p-4 rounded-xl bg-base-100 group-hover/item:bg-accent/10 border border-white/5 transition-colors">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base-content/60 text-sm">Phone</h4>
                                <p className="text-lg font-medium text-base-content group-hover/item:text-accent transition-colors">+91 7028694353</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <h4 className="font-semibold text-base-content/60 text-sm mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="https://github.com/Kizaru-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-base-100 hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-lg text-base-content border border-white/5">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-base-100 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 shadow-lg text-base-content border border-white/5">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Form Area */}
            <div className="w-full lg:w-2/3 p-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem]">
                <div className="h-full bg-base-100/90 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 shadow-2xl">
                    <h3 className="text-3xl font-bold text-base-content mb-2">Send a Message</h3>
                    <p className="text-base-content/60 mb-8 font-medium">We'll get back to you as soon as possible.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base-content/80">First Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="first_name"
                                    required
                                    placeholder="John" 
                                    className="input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-inner" 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base-content/80">Last Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="last_name"
                                    placeholder="Doe" 
                                    className="input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-inner" 
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/80">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                placeholder="john@example.com" 
                                className="input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-inner" 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base-content/80">Message</span>
                            </label>
                            <textarea 
                                name="message"
                                required
                                className="textarea textarea-bordered h-32 bg-base-200/50 focus:bg-base-100 transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-inner resize-y custom-scrollbar" 
                                placeholder="Tell us what you're thinking about..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full relative group inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl text-white overflow-hidden transition-all shadow-xl shadow-primary/20 bg-gradient-to-r from-primary to-secondary hover:shadow-primary/40 hover:-translate-y-1 mt-4 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="loading loading-spinner h-5 w-5"></span>
                                    Sending...
                                </span>
                            ) : (
                                <>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                                    <span className="relative z-10 flex items-center gap-2 text-lg">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </>
                            )}
                        </button>
                    </form>
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
  );
}

export default Contact;