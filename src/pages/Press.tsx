import { Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Press = () => {
  const heroReveal = useScrollReveal();
  const downloadsReveal = useScrollReveal();

  const downloads = [
    {
      title: 'Company Profile 2025',
      description: 'Comprehensive overview of HRT Group operations, history, and business verticals.',
      type: 'PDF',
      size: '2.4 MB',
    },
    {
      title: 'Textile Distribution Brochure',
      description: 'Details about our textile distribution network, franchise opportunities, and brand partnerships.',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      title: 'Pharmaceutical Services Overview',
      description: 'Information about our pharmaceutical C&F services, logistics capabilities, and partner brands.',
      type: 'PDF',
      size: '1.2 MB',
    },
    {
      title: 'Real Estate Portfolio',
      description: 'Showcase of completed and upcoming real estate projects with specifications and amenities.',
      type: 'PDF',
      size: '3.1 MB',
    },
    {
      title: 'Franchise Partnership Guide',
      description: 'Complete guide for potential franchise partners including requirements, benefits, and process.',
      type: 'PDF',
      size: '1.5 MB',
    },
    {
      title: 'Corporate Certifications',
      description: 'Notarized copies of company certifications, licenses, and accreditations.',
      type: 'PDF',
      size: '4.2 MB',
    },
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Press & Downloads</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Company information, brochures, and official documentation
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section
        ref={downloadsReveal.ref}
        className={`py-20 bg-background ${
          downloadsReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Available Downloads</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our company information, brochures, and certification documents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {downloads.map((doc, index) => (
              <div
                key={index}
                className="bg-card border border-border hover:border-accent/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText className="text-accent" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1 line-clamp-2">{doc.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="bg-muted px-2 py-0.5 rounded">{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {doc.description}
                </p>
                
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Press & Media Inquiries</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For press releases, media kits, or interview requests, please contact our communications team.
            </p>
            <div className="bg-card p-8 rounded-2xl shadow-md">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">PRESS CONTACT</p>
                <p className="text-xl font-semibold">media@hrtgroup.com</p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-2">PHONE</p>
                <p className="text-xl font-semibold">+91 1234567890</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              We typically respond to media inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Assets</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Official HRT Group logos and brand guidelines
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="h-32 flex items-center justify-center mb-6 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary">HRT Group</div>
                </div>
                <h3 className="font-bold mb-2">Primary Logo</h3>
                <p className="text-sm text-muted-foreground mb-4">For light backgrounds</p>
                <Button variant="outline" size="sm">
                  <Download size={14} className="mr-2" />
                  Download PNG
                </Button>
              </div>
              
              <div className="bg-primary border border-primary rounded-xl p-8 text-center">
                <div className="h-32 flex items-center justify-center mb-6 bg-primary-foreground/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary-foreground">HRT Group</div>
                </div>
                <h3 className="font-bold mb-2 text-primary-foreground">Reversed Logo</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">For dark backgrounds</p>
                <Button variant="secondary" size="sm">
                  <Download size={14} className="mr-2" />
                  Download PNG
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                For complete brand guidelines and usage instructions, please download our Brand Guidelines PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
