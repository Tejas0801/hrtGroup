import { Package, Building2, Pill, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import textilesIcon from '@/assets/textiles-icon.jpg';
import pharmaIcon from '@/assets/pharma-icon.jpg';
import realEstateIcon from '@/assets/realestate-icon.jpg';

const Businesses = () => {
  const heroReveal = useScrollReveal();
  const textilesReveal = useScrollReveal();
  const pharmaReveal = useScrollReveal();
  const realEstateReveal = useScrollReveal();

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Business Verticals</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Three strong pillars of excellence serving South India since 1950
            </p>
          </div>
        </div>
      </section>

      {/* Textiles Section */}
      <section
        id="textiles"
        ref={textilesReveal.ref}
        className={`py-20 bg-background ${
          textilesReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Package className="text-accent" size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Textiles Distribution</h2>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                As an authorized distributor for Bombay Dyeing and other leading textile brands, we've built
                the largest textile distribution network in coastal Andhra Pradesh over the past five decades.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">45+ Exclusive Franchise Outlets</p>
                    <p className="text-muted-foreground">Strategically located across three states</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">250+ Authorized Dealers</p>
                    <p className="text-muted-foreground">Comprehensive market coverage and reach</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">Premium Brands</p>
                    <p className="text-muted-foreground">
                      Bombay Dyeing, bed sheets, curtains, towels, and furnishing fabrics
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="font-bold text-lg mb-3">Coverage Areas</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>• Coastal Andhra Pradesh</div>
                  <div>• Vijayawada Region</div>
                  <div>• Telangana Districts</div>
                  <div>• Tamil Nadu Select Areas</div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Become a Franchise Partner
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={textilesIcon}
                alt="Textiles Distribution"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceuticals Section */}
      <section
        id="pharmaceuticals"
        ref={pharmaReveal.ref}
        className={`py-20 bg-muted ${
          pharmaReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={pharmaIcon}
                alt="Pharmaceutical Distribution"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Pill className="text-secondary" size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Pharmaceuticals</h2>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Trusted C&F (Carrying & Forwarding) agent and distribution partner for leading pharmaceutical
                companies, ensuring timely and safe delivery of essential medicines across our service areas.
              </p>
              
              <div className="bg-card p-6 rounded-xl mb-6">
                <h4 className="font-bold text-lg mb-4">Partner Brands</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Sarabhai Chemicals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Cadila Pharmaceuticals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Alembic Pharma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">Knoll Pharmaceuticals</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">Temperature-Controlled Logistics</p>
                    <p className="text-muted-foreground">Maintaining medicine integrity throughout the supply chain</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">Wide Distribution Network</p>
                    <p className="text-muted-foreground">Serving hospitals, clinics, and pharmacies across the region</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-lg">Regulatory Compliance</p>
                    <p className="text-muted-foreground">Full adherence to pharmaceutical distribution standards</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Distribution Inquiry
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section
        id="realestate"
        ref={realEstateReveal.ref}
        className={`py-20 bg-background ${
          realEstateReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Building2 className="text-accent" size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">Real Estate Development</h2>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                From residential complexes to commercial properties and municipal infrastructure, we bring
                decades of construction expertise and project management excellence to every development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent mb-1">500K+</div>
                  <div className="text-sm text-muted-foreground">Sq.Ft. Developed</div>
                </div>
                <div className="bg-muted p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Residential Projects</h4>
                  <p className="text-muted-foreground">
                    Modern apartment complexes and residential townships with world-class amenities
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Commercial Developments</h4>
                  <p className="text-muted-foreground">
                    Office spaces, retail complexes, and mixed-use developments in prime locations
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Municipal Projects</h4>
                  <p className="text-muted-foreground">
                    Public infrastructure including fish markets, guest houses, and community facilities
                  </p>
                </div>
              </div>
              
              <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-lg mb-2 text-accent">Upcoming Project</h4>
                <p className="text-muted-foreground mb-2">
                  Prime residential development project launching Q2 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Plot size: 5 acres | Expected units: 150+ apartments
                </p>
              </div>
              
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Explore Opportunities
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={realEstateIcon}
                alt="Real Estate Development"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Interested in Partnering With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for new opportunities to expand our network and serve more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get in Touch
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/team">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Businesses;
