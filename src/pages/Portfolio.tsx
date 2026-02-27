import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, Award } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";

const Portfolio = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "AI-Powered RAG Medical Chatbot",
      description: "Architected end-to-end RAG system integrating GPT-based LLMs with Pinecone vector database for medical Q&A, implementing document processing pipeline with semantic retrieval. Achieved 92% answer accuracy validated across 100+ test queries.",
      tech: ["LangChain", "GPT Models", "Pinecone", "Flask", "AWS"],
      github: "https://github.com/varunsardana/Langchain-Chatbot-Practice",
      period: "Jun 2025 – Aug 2025"
    },
    {
      title: "Chest Cancer Classification",
      description: "Developed deep learning model using VGG16 transfer learning achieving 96% test accuracy, implementing MLOps pipeline with MLflow experiment tracking, DVC data versioning, and CI/CD deployment to AWS EC2.",
      tech: ["TensorFlow/Keras", "MLflow", "DVC", "Docker", "AWS EC2"],
      github: "https://github.com/varunsardana/Chest-Classification-using-Mlflow-DVC",
      period: "Sep 2025 – Nov 2025"
    },
    {
      title: "Sales Data Warehouse",
      description: "Built enterprise data warehouse integrating CRM and ERP data using SQL Server and Python, creating automated ETL pipelines with quality checks ensuring 100% data accuracy. Designed star schema reducing report generation time by 60%.",
      tech: ["SQL Server", "ETL", "Python", "Star Schema"],
      github: "https://github.com/varunsardana/Visa-Prediction-Machine-Learning-Project",
      period: "Nov 2025 – Dec 2025"
    },
    {
      title: "Student Performance Prediction",
      description: "Analyzed demographic and testing data to identify patterns linked to higher performance. Tested several predictive models including Random Forest and neural networks, visualizing key performance factors.",
      tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
      github: "https://github.com/varunsardana/MLProject",
      period: "May 2025 – Jun 2025"
    }
  ];

  const experiences = [
    {
      title: "Machine Learning & AI Intern",
      company: "GrowWise",
      location: "Dublin, Remote",
      period: "Dec 2025 – Present",
      description: [
        "Integrated OpenAI transformer embeddings into production RAG system, processing 500+ PDFs into PostgreSQL vector database with sub-2-second query response time",
        "Built scalable data ingestion pipelines using AWS S3, implementing deterministic document identifiers eliminating 100% data duplication",
        "Developed JWT-secured backend APIs and automated RAG pipelines, embedding 100+ document chunks into PostgreSQL pgvector"
      ]
    },
    {
      title: "Data Engineering Intern",
      company: "The Healthcare Navigation Project (THNP)",
      location: "Santa Barbara, Remote",
      period: "Sep 2025 – Present",
      description: [
        "Engineered automated ETL pipeline using Power Automate and Python, processing 150+ volunteer records with data validation",
        "Reduced data processing operations by 83% (6 to 1 hour weekly) by consolidating 12+ sources into unified PostgreSQL database",
        "Implemented data quality checks improving reporting accuracy by 95% for leadership tracking"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Veritas AI",
      location: "Fremont, CA",
      period: "Aug 2023 – Mar 2024",
      description: [
        "Developed ML models predicting Spotify track popularity using 114K tracks with feature engineering across 12+ audio features",
        "Achieved 85% accuracy and published peer-reviewed research in National High School Journal of Science (2024)"
      ]
    }
  ];

  const skills = {
    programming: ["Python", "SQL (PostgreSQL, SQL Server, MySQL)", "R"],
    mlFrameworks: ["TensorFlow/Keras", "scikit-learn", "LangChain", "Pandas", "NumPy"],
    aiMlOps: ["LLM Integration", "RAG Systems", "BERT", "GPT", "pgvector", "Pinecone", "MLflow", "DVC", "Docker", "Git"],
    cloud: ["AWS (EC2, S3)", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "SQLite", "ETL Pipelines", "Power BI"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VS
          </h2>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium transition-colors hover:text-primary">
              About
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </button>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/in/varun-sardana/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://github.com/varunsardana" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:varunsardana@ucsb.edu">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container relative z-10 text-center space-y-8 py-20">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
              Varun Sardana
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              Data Science & Machine Learning Engineer
            </p>
          </div>
          
          <div className="animate-fade-in max-w-3xl mx-auto space-y-4" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Data Science & Statistics student at <span className="text-primary font-semibold">UC Santa Barbara</span>, 
              passionate about building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in machine learning, deep learning, and full-stack development with a track record 
              of delivering production-ready ML solutions.
            </p>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" onClick={() => scrollToSection("projects")} className="font-semibold">
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("experience")} className="font-semibold">
              Experience
            </Button>
          </div>

          {/* Highlights */}
          <div className="max-w-5xl mx-auto pt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-6 rounded-2xl border bg-card/50 backdrop-blur hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                <p className="text-lg font-bold text-primary mb-1">UC Santa Barbara</p>
                <p className="text-sm text-muted-foreground mb-2">B.S. Data Science & Statistics</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">GPA: 3.72</span>
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Dean's Honors</span>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl border bg-card/50 backdrop-blur hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Brain className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Published Research</h3>
                </div>
                <p className="text-lg font-bold text-accent mb-1">NHSJS 2024</p>
                <p className="text-sm text-muted-foreground">Peer-reviewed ML research on music analytics with 114K tracks, 85% prediction accuracy</p>
              </div>
              
              <div className="group p-6 rounded-2xl border bg-card/50 backdrop-blur hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Key Achievements</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">RAG System Accuracy</span>
                    <span className="font-bold text-primary">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Deep Learning Model</span>
                    <span className="font-bold text-primary">96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time Savings (ETL)</span>
                    <span className="font-bold text-accent">83%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Inline Skills Preview */}
            <div className="mt-8 p-6 rounded-2xl border bg-gradient-to-r from-primary/5 via-background to-accent/5">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Python", "TensorFlow", "LangChain", "PostgreSQL", "AWS", "RAG Systems", "MLflow", "Docker"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-background border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
                <button 
                  onClick={() => scrollToSection("skills")}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View All Skills →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building ML solutions and driving data-driven insights across different domains
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>

          {/* Leadership */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="p-8 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">Events Chair</h3>
                    <span className="text-sm text-muted-foreground">Sep 2024 – Present</span>
                  </div>
                  <p className="text-primary font-medium mb-3">Indus at UCSB & Data Science Collaborative (DSC)</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Planned and organized 10+ cultural, social, and technical events with 300–500+ attendees each year</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Led teams of volunteers while managing logistics, budgeting, and venue coordination</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Collaborated with UCSB departments and other clubs to increase event engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end machine learning projects showcasing my skills in AI, deep learning, and deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolkit for building and deploying production ML systems
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Programming & ML Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
                {skills.mlFrameworks.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-accent" />
                AI/ML & MLOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiMlOps.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="accent" />
                ))}
              </div>
            </div>

            <div className="md:col-span-2 p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Cloud & Data Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="mailto:varunsardana@ucsb.edu">
              <Button size="lg" className="font-semibold">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a href="https://linkedin.com/in/varun-sardana/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-semibold">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/varunsardana" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-semibold">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 Varun Sardana. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0);
          background-size: 40px 40px;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
