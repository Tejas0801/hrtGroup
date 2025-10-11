import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Projects = () => {
  const heroReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div
          ref={heroReveal.ref}
          className={`container mx-auto px-4 ${
            heroReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Journey & Projects</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              75 years of milestones, achievements, and continuous growth
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineReveal.ref}
        className={`py-20 bg-background ${
          timelineReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <Timeline />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">Our impact across three business verticals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">75+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">45+</div>
              <div className="text-muted-foreground">Franchise Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">250+</div>
              <div className="text-muted-foreground">Dealer Network</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-accent mb-2">500K+</div>
              <div className="text-muted-foreground">Sq.Ft. Developed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Signature developments that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5" />
              <div className="p-6">
                <div className="text-accent font-semibold text-sm mb-2">TEXTILES</div>
                <h3 className="text-xl font-bold mb-3">Regional Distribution Hub</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  State-of-the-art textile distribution center serving coastal Andhra Pradesh with 
                  climate-controlled storage and modern logistics.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Year:</strong> 2019
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5" />
              <div className="p-6">
                <div className="text-secondary font-semibold text-sm mb-2">PHARMACEUTICALS</div>
                <h3 className="text-xl font-bold mb-3">Cold Chain Facility</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Temperature-controlled pharmaceutical storage and distribution facility ensuring 
                  medicine integrity across the supply chain.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Year:</strong> 2012
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5" />
              <div className="p-6">
                <div className="text-accent font-semibold text-sm mb-2">REAL ESTATE</div>
                <h3 className="text-xl font-bold mb-3">Vijayawada Municipal Fish Market</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Modern municipal infrastructure project providing improved facilities for local 
                  fishermen and vendors in Vijayawada.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Year:</strong> 2007
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5" />
              <div className="p-6">
                <div className="text-accent font-semibold text-sm mb-2">REAL ESTATE</div>
                <h3 className="text-xl font-bold mb-3">Commercial Complex - Phase I</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Mixed-use commercial development with retail spaces and office units in prime 
                  location, fully occupied within 6 months.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Year:</strong> 2011
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5" />
              <div className="p-6">
                <div className="text-secondary font-semibold text-sm mb-2">PHARMACEUTICALS</div>
                <h3 className="text-xl font-bold mb-3">Multi-Brand Distribution Network</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Expansion of pharmaceutical distribution to include Cadila, Alembic, and Knoll, 
                  serving 500+ healthcare providers.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Year:</strong> 1982
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border-2 border-accent">
              <div className="h-48 bg-gradient-to-br from-accent/30 to-accent/10" />
              <div className="p-6">
                <div className="text-accent font-semibold text-sm mb-2">REAL ESTATE • UPCOMING</div>
                <h3 className="text-xl font-bold mb-3">Residential Township Project</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Premium residential development with 150+ apartments, modern amenities, and 
                  green spaces on a 5-acre plot.
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Launch:</strong> Q2 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
