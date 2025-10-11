import { Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

const TeamMember = ({ name, title, bio, image, linkedin, email }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 bg-muted overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">{name.charAt(0)}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-foreground">{name}</h3>
        <p className="text-secondary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMember;
