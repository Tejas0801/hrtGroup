import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Team = () => {
  const heroReveal = useScrollReveal();
  const leadershipReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Family values, professional excellence, and decades of industry expertise
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-full aspect-square rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary">T</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-accent text-sm font-semibold mb-2">FOUNDER & CHAIRMAN</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Mr. Thondepu V Hanumantha Rao
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The visionary founder who established HRT Group in 1950 with an unwavering commitment to 
                    quality, integrity, and customer satisfaction. His philosophy of building lasting relationships 
                    and maintaining the highest standards continues to guide the organization today.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Under his leadership, HRT Group grew from a single textile outlet to a diversified business 
                    group with operations across Textiles, Pharmaceuticals, and Real Estate, serving three states 
                    and thousands of customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        ref={leadershipReveal.ref}
        className={`py-20 bg-muted ${
          leadershipReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Third-generation leaders carrying forward the family legacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Ratna Srinivas Thondepu"
              title="Managing Partner"
              bio="Leading financial strategy, resource management, and investment planning. Over 30 years of experience in business development, strategic planning, and ensuring sustainable growth across all verticals."
              email="srinivas@hrtgroup.com"
              linkedin="#"
            />
            
            <TeamMember
              name="Rama Rao"
              title="Managing Partner"
              bio="Oversees project execution, operations, and logistics management. Ensures timely delivery and quality standards across all business activities with focus on operational excellence and customer satisfaction."
              email="ramarao@hrtgroup.com"
              linkedin="#"
            />
            
            <TeamMember
              name="Ramakrishna Thondepu"
              title="Managing Partner"
              bio="Manages the extensive textile distribution network across three states. Specializes in franchise development, dealer relations, and expanding market reach while maintaining brand partnerships."
              email="ramakrishna@hrtgroup.com"
              linkedin="#"
            />
            
            <TeamMember
              name="Kailasnath Golla"
              title="Regional Head - Vijayawada"
              bio="Leads textile distribution operations in Vijayawada region. Focuses on market expansion, customer relationships, and maintaining service quality in one of our key markets."
              email="kailasnath@hrtgroup.com"
              linkedin="#"
            />
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section
        ref={valuesReveal.ref}
        className={`py-20 bg-background ${
          valuesReveal.isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Leadership Philosophy</h2>
              <p className="text-xl text-muted-foreground">
                Guiding principles that shape our decision-making and culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-accent">Collaborative Decision Making</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our leadership team operates on consensus, bringing together diverse expertise from 
                  finance, operations, and market development to make informed strategic decisions.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-accent">Long-term Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize sustainable growth over short-term gains, investing in relationships, 
                  infrastructure, and innovation that will serve our customers for generations.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-accent">Empowering Teams</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in developing and empowering our employees at all levels, creating an 
                  environment where talent can thrive and contribute to our collective success.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-accent">Community Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our leadership is deeply committed to giving back to the communities we serve through 
                  responsible business practices and supporting local development initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the HRT Group Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our values and commitment to excellence.
          </p>
          <p className="text-lg mb-8 opacity-90">
            Send your resume to <strong>careers@hrtgroup.com</strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
