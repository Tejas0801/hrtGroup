import { Award, Target, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const heroReveal = useScrollReveal();
  const missionReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About HRT Group</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A legacy of trust, quality, and family values spanning over seven decades
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HRT Group was founded in 1950 by Mr. Thondepu V Hanumantha Rao with a simple yet powerful vision:
                to build a business that delivers exceptional quality while maintaining the highest standards of
                integrity and customer service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What started as a small textile distribution venture in coastal Andhra Pradesh has grown into a
                diversified business group with operations spanning three major verticals: Textiles, Pharmaceuticals,
                and Real Estate. Today, we operate across Andhra Pradesh, Telangana, and Tamil Nadu, serving thousands
                of customers through our extensive network of franchise outlets, authorized dealers, and direct operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Despite our growth, we remain true to our founding principles. HRT Group is still a family-owned
                business, now in its third generation of leadership, committed to the same values that guided our
                founder more than 70 years ago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="text-accent text-sm font-semibold mb-2">FOUNDER'S VISION</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Mr. Thondepu V Hanumantha Rao</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed italic mb-4">
                  "Build your business on the foundation of trust and quality. Customers remember not just what
                  you sell, but how you make them feel valued and respected."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our founder's philosophy continues to guide every decision we make. His emphasis on building
                  lasting relationships, maintaining uncompromising quality standards, and treating every customer
                  with respect has become the DNA of HRT Group. These principles have allowed us to grow from a
                  single textile outlet to a multi-vertical business group while maintaining the trust of our
                  customers, partners, and employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        ref={missionReveal.ref}
        className={`py-20 bg-background ${
          missionReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value across all our business verticals through unwavering commitment to
                quality, customer satisfaction, and operational excellence. We aim to be the most trusted partner
                for our customers, brands, and communities we serve.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as South India's most respected family-owned business group, known for our
                integrity, innovation, and positive impact on the communities we serve. We envision sustainable
                growth that benefits all our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        ref={valuesReveal.ref}
        className={`py-20 bg-muted ${
          valuesReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3 text-accent">Integrity</h4>
              <p className="text-muted-foreground text-sm">
                We conduct business with honesty, transparency, and ethical practices in every interaction.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3 text-accent">Excellence</h4>
              <p className="text-muted-foreground text-sm">
                We strive for the highest standards in everything we do, from product quality to customer service.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3 text-accent">Customer First</h4>
              <p className="text-muted-foreground text-sm">
                Our customers' success and satisfaction are at the heart of our business decisions.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3 text-accent">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                We embrace change and continuously improve our processes, products, and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Timeline */}
      <section
        ref={timelineReveal.ref}
        className={`py-20 bg-background ${
          timelineReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped HRT Group
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-accent" size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our commitment to quality is reflected in our certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl text-center shadow-md">
              <h4 className="text-lg font-bold mb-2">ISO Certified</h4>
              <p className="text-muted-foreground text-sm">
                Quality management systems certification
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center shadow-md">
              <h4 className="text-lg font-bold mb-2">Authorized Distributor</h4>
              <p className="text-muted-foreground text-sm">
                Official partnerships with leading brands
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center shadow-md">
              <h4 className="text-lg font-bold mb-2">RERA Registered</h4>
              <p className="text-muted-foreground text-sm">
                Compliant real estate development practices
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
