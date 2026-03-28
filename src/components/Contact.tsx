import { Mail, Gamepad2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { label: "Email", href: "mailto:zoeychen2007@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/zochen", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zo-chen/", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/chyeoz/", icon: FaInstagram },
  { label: "Steam", href: "https://steamcommunity.com/profiles/76561198995905827/", icon: Gamepad2 },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10 border-t border-warm-200 dark:border-warm-600">
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-warm-700 dark:text-warm-200 mb-4">
        Get in touch
      </h2>
      <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-6">
        interested in working together or just want to say hi? (yay!) feel free to reach out to me through email!
      </p>
      <div className="flex gap-5">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-400 hover:text-warm-700 dark:hover:text-warm-200 transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
