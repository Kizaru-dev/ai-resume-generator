import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ArrowLeft, Download } from 'lucide-react';

function Resume() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resumeData } = location.state || {};

  if (!resumeData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4">
        <h2 className="text-2xl font-bold mb-4">No Resume Data Found</h2>
        <p className="text-base-content/70 mb-8">Please generate a resume first.</p>
        <button className="btn btn-primary" onClick={() => navigate('/generate-resume')}>
          Go to Generator
        </button>
      </div>
    );
  }

  const {
    personalInformation,
    summary,
    skills,
    experience,
    education,
    projects,
    achievements,
    languages,
    certifications
  } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Actions Bar (Hidden on Print) */}
        <div className="flex justify-between items-center mb-6 print:hidden">
          <button 
            onClick={() => navigate('/generate-resume')} 
            className="btn btn-ghost gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Editor
          </button>
          <button 
            onClick={handlePrint}
            className="btn btn-primary gap-2 shadow-lg hover:shadow-primary/30"
          >
            <Download className="w-4 h-4" />
            Export to PDF
          </button>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-base-100 shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
          
          {/* Header Section */}
          <div className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 p-10 border-b border-base-200">
            <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">
              {personalInformation?.fullName || "Your Name"}
            </h1>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-sm font-medium text-base-content/80">
              {personalInformation?.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{personalInformation.email}</span>
                </div>
              )}
              {personalInformation?.phoneNumber && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>{personalInformation.phoneNumber}</span>
                </div>
              )}
              {personalInformation?.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{personalInformation.location}</span>
                </div>
              )}
              {personalInformation?.linkedIn && (
                <a href={personalInformation.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInformation?.gitHub && (
                <a href={personalInformation.gitHub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {personalInformation?.portfolio && (
                <a href={personalInformation.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Globe className="w-4 h-4 text-success" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </div>

          <div className="p-10 space-y-10">
            {/* Professional Summary */}
            {summary && (
              <section>
                <h2 className="text-xl font-bold text-primary mb-3 uppercase tracking-wider relative inline-block">
                  Professional Summary
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                </h2>
                <p className="text-base-content/80 leading-relaxed text-justify">
                  {summary}
                </p>
              </section>
            )}

            {/* Experience */}
            {experience?.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-primary mb-5 uppercase tracking-wider relative inline-block">
                  Experience
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary/50 before:rounded-full before:ring-4 before:ring-primary/10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                        <h3 className="text-lg font-bold text-base-content">{exp.jobTitle}</h3>
                        <span className="text-sm font-semibold text-secondary min-w-fit">{exp.duration}</span>
                      </div>
                      <div className="text-base-content/70 font-medium mb-3">
                        {exp.company} {exp.location && <span className="text-base-content/50">• {exp.location}</span>}
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-base-content/80 text-sm marker:text-primary/50">
                        {exp.responsibilities?.map((resp, i) => (
                          <li key={i} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-primary mb-5 uppercase tracking-wider relative inline-block">
                  Projects
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {projects.map((proj, index) => (
                    <div key={index} className="bg-base-200/50 rounded-xl p-5 border border-base-300 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-base-content">{proj.title}</h3>
                        {proj.githubLink && (
                          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-base-content/50 hover:text-primary">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-base-content/70 mb-4 line-clamp-3">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.technologiesUsed?.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs font-semibold bg-base-100 text-primary rounded-md border border-primary/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}
            {achievements?.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-primary mb-5 uppercase tracking-wider relative inline-block">
                  Achievements
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 text-sm marker:text-primary/50">
                  {achievements.map((ach, index) => (
                    <li key={index} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </section>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Skills */}
              <section>
                <h2 className="text-xl font-bold text-primary mb-5 uppercase tracking-wider relative inline-block">
                  Skills
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                </h2>
                <div className="space-y-4">
                  {Object.entries(skills || {}).map(([category, skillList]) => {
                    if (!skillList || skillList.length === 0) return null;
                    const formattedCategory = category.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase());
                    
                    return (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-base-content/70 mb-2">{formattedCategory}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-base-200 text-base-content rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="space-y-10">
                {/* Education */}
                {education?.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold text-primary mb-5 uppercase tracking-wider relative inline-block">
                      Education
                      <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary/20 rounded-full"></div>
                    </h2>
                    <div className="space-y-4">
                      {education.map((edu, index) => (
                        <div key={index} className="bg-base-200/30 p-4 rounded-lg border-l-4 border-secondary">
                          <h3 className="font-bold text-base-content">{edu.degree}</h3>
                          <div className="text-sm font-medium text-base-content/80 mt-1">{edu.university}</div>
                          <div className="flex justify-between items-center mt-2 text-xs text-base-content/50">
                            <span>{edu.location}</span>
                            <span className="font-semibold">{edu.graduationYear}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Extras merged block: languages & certifications */}
                {((languages && languages.length > 0) || (certifications && certifications.length > 0)) && (
                  <section>
                    {languages?.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Languages</h2>
                        <div className="flex flex-wrap gap-2">
                          {languages.map((lang, i) => (
                            <span key={i} className="px-3 py-1 bg-base-200/50 border border-base-300 rounded-md text-sm">{lang}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {certifications?.length > 0 && (
                      <div>
                        <h2 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Certifications</h2>
                        <ul className="space-y-2">
                          {certifications.map((cert, i) => (
                            <li key={i} className="text-sm flex justify-between border-b border-base-200 pb-2">
                              <span className="font-medium">{cert.title}</span>
                              <span className="text-base-content/50">{cert.year}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Print Styles */}
      <style jsx="true">{`
        @media print {
          body { background-color: white !important; }
          .min-h-screen { min-height: auto !important; padding: 0 !important; background: white !important; }
          .max-w-4xl { max-width: 100% !important; margin: 0 !important; }
        }
      `}</style>
    </div>
  );
}

export default Resume;