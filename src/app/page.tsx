'use client';

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Server,
  ChevronDown,
  Menu,
  X,
  User,
  Briefcase,
  Phone,
  Download,
  Star,
  MapPin
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Full Stack Developer', 'Frontend Specialist', 'React Expert'];

  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and file sharing.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/username/taskapp",
      live: "https://taskapp-demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts.",
      tech: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      github: "https://github.com/username/weather",
      live: "https://weather-dashboard-demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolios with drag-and-drop builder and SEO optimization.",
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      github: "https://github.com/username/portfolio-cms",
      live: "https://portfolio-cms-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const skills = [
    { 
      name: "Frontend", 
      icon: Code, 
      items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS"],
      level: 90
    },
    { 
      name: "Backend", 
      icon: Server, 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"],
      level: 85
    },
    { 
      name: "Design", 
      icon: Palette, 
      items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Prototyping"],
      level: 80
    }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for web applications serving 100K+ users. Implemented modern React patterns and improved performance by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using React, Node.js, and various databases. Collaborated with design team to implement pixel-perfect UIs."
    },
    {
      title: "Junior Developer",
      company: "StartUp Studio",
      period: "2019 - 2020",
      description: "Built responsive web applications and contributed to open-source projects. Gained experience in agile development and version control."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              &lt;Tshering yangden/&gt;
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                      : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-blue-400 w-full text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Profile" 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400/50 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tshering Yangden</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              I&apos;m a <span className="text-blue-400 font-semibold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                
              Passionate about creating beautiful, functional web experiences that solve real-world problems. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Briefcase className="inline mr-2" size={20} />
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="inline mr-2" size={20} />
                Get In Touch
              </button>
              <a 
                href="/resume.pdf" 
                download
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Download className="inline mr-2" size={20} />
                Download CV
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Linkedin size={28} />
              </a>
              <a href="mailto:alex@example.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                <Mail size={28} />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">My Story</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with over 4 years of experience creating digital 
                experiences that combine beautiful design with robust functionality. My journey started 
                with a Computer Science degree and evolved through hands-on experience with cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in React ecosystem, Node.js, and modern web technologies. I love solving 
                complex problems and turning ideas into scalable, user-friendly applications that make 
                a real impact.
              </p>
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin size={20} className="text-blue-400" />
                <span>Damphu ,Tsirang</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python'].map((tech) => (
                  <span key={tech} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-80"></div>
              <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop" 
                alt="Coding setup"
                className="absolute inset-0 w-80 h-80 mx-auto rounded-2xl object-cover z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-black/20 text-gray-300 px-3 py-2 rounded-lg text-sm text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={16} className="mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={project.github} className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and exciting projects.
            Let&apos;s create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">ty510460@gmail.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300">@ty510460</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300">@tyangden23</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:alex.johnson@example.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="inline mr-2" size={20} />
              Send Email
            </a>
            <a 
              href="https://calendly.com/alexjohnson"
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Tshering yangden. Built with Next.js & Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="ty510460@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}