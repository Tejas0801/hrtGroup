import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessCard from '@/components/BusinessCard';
import Timeline from '@/components/Timeline';
import TeamMember from '@/components/TeamMember';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-business.jpg';
import textilesIcon from '@/assets/textiles-icon.jpg';
import pharmaIcon from '@/assets/pharma-icon.jpg';
import realEstateIcon from '@/assets/realestate-icon.jpg';
import spotlightProject from '@/assets/spotlight-project.jpg';

const Index = () => {
  const heroReveal = useScrollReveal();
  const businessesReveal = useScrollReveal();
  const strengthsReveal = useScrollReveal();
  const spotlightReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();
  const teamReveal = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="HRT Group Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div
          ref={heroReveal.ref}
          className={`container mx-auto px-4 z-10 text-center ${
            heroReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-primary-foreground/90 text-sm md:text-base mb-4 font-medium">
              Since 1950 — operating across Andhra Pradesh, Telangana & Tamil Nadu
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              HRT Group —  built to deliver.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
              Three verticals — Textiles, Pharmaceuticals, and Real Estate — delivering quality and trust across South India since 1950.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/businesses">
                <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                  Our Businesses
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Cards */}
      <section
        ref={businessesReveal.ref}
        className={`py-20 bg-background ${
          businessesReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Three Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decades of excellence across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BusinessCard
              title="Textiles"
              description="Authorized distributor for Bombay Dyeing and leading textile brands — 45 exclusive franchise outlets and 250+ authorized dealers."
              icon={textilesIcon}
              link="/businesses#textiles"
            />
            <BusinessCard
              title="Pharmaceuticals"
              description="Trusted C&F and distribution partners for leading pharma names, serving coastal Andhra and beyond."
              icon={pharmaIcon}
              link="/businesses#pharmaceuticals"
            />
            <BusinessCard
              title="Real Estate"
              description="Commercial and residential developments, municipal projects and turnkey construction expertise."
              icon={realEstateIcon}
              link="/businesses#realestate"
            />
          </div>
        </div>
      </section>

      {/* Why HRT */}
      <section
        ref={strengthsReveal.ref}
        className={`py-20 bg-muted ${
          strengthsReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose HRT Group</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on decades of trust, expertise, and customer-first values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Planning & Execution</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Strategic planning for long-term success</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Proven track record across industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Timely project delivery</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Financial Strength</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Stable financial foundation since 1950</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Strategic investments in growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Trusted by leading brands</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Base</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>45+ exclusive franchise outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>250+ authorized dealer network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>Thousands of satisfied customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Project */}
      <section
        ref={spotlightReveal.ref}
        className={`py-20 bg-background ${
          spotlightReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Spotlight: Distribution Excellence</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art distribution centers serve as the backbone of our pharmaceutical and textile operations,
                ensuring timely delivery across three states.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Modern Logistics Infrastructure</p>
                    <p className="text-muted-foreground">Temperature-controlled storage and real-time tracking systems</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Strategic Coverage</p>
                    <p className="text-muted-foreground">Reaching every corner of coastal Andhra Pradesh, Telangana, and Tamil Nadu</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Quality Assurance</p>
                    <p className="text-muted-foreground">Rigorous quality control at every step of the supply chain</p>
                  </div>
                </li>
              </ul>
              <Link to="/projects">
                <Button variant="hero" size="lg">
                  View All Projects
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={spotlightProject}
                alt="Distribution Center"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section
        ref={timelineReveal.ref}
        className={`py-20 bg-muted ${
          timelineReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              75 years of growth, innovation, and excellence
            </p>
          </div>
          
          <Timeline compact />
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View Complete Timeline
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section
        ref={teamReveal.ref}
        className={`py-20 bg-background ${
          teamReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Family values, professional excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Ratna Srinivas Thondepu"
              title="Managing Partner - Finance & Resources"
              bio="Leading financial strategy and resource management with over 30 years of experience in business development and investment planning."
              email="srinivas@hrtgroup.com"
              linkedin="#"
            />
            <TeamMember
              name="Rama Rao"
              title="Managing Partner - Project Execution"
              bio="Oversees all project implementations with expertise in logistics, operations, and ensuring timely delivery of our commitments."
              email="ramarao@hrtgroup.com"
              linkedin="#"
            />
            <TeamMember
              name="Ramakrishna Thondepu"
              title="Managing Partner - Textile Distribution"
              bio="Manages our extensive textile distribution network across three states with focus on franchise development and dealer relations."
              email="ramakrishna@hrtgroup.com"
              linkedin="#"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/team">
              <Button variant="outline" size="lg">
                Meet the Full Team
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
