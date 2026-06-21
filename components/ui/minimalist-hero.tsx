import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Typewriter } from '@/components/ui/typewriter';
import { DownloadSwitch } from "@/components/ui/download-switch";

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    taglines: string[];
    imageSrc: string;
    imageAlt: string;
    imageClassName?: string;
    overlayText: {
        part1: React.ReactNode;
        part2: React.ReactNode;
    };
    socialLinks: { icon: LucideIcon; href: string }[];
    locationText: string;
    className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
    >
        {children}
    </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
        <Icon className="h-5 w-5" />
    </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
    logoText,
    navLinks,
    taglines,
    imageSrc,
    imageAlt,
    imageClassName,
    overlayText,
    socialLinks,
    locationText,
    className,
}: MinimalistHeroProps) => {
    return (
        <div
            className={cn(
                'relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background p-4 py-20 font-sans md:p-12 md:py-12',
                className
            )}
        >
            {/* Header */}
            {/* Header Removed */}

            {/* Main Content Area */}
            <div className="relative grid w-full max-w-7xl grid-cols-1 items-center md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column: Name + Description */}
                <div className="flex flex-col gap-6 text-center md:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex items-center justify-center md:justify-start"
                    >
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground md:text-7xl lg:text-8xl tracking-tighter">
                            {overlayText.part1}
                            <br />
                            {overlayText.part2}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mx-auto max-w-xs text-xl leading-relaxed text-foreground md:mx-0 md:text-left min-h-[1.5em]"
                    >
                        <Typewriter
                            words={taglines}
                            speed={80}
                            delayBetweenWords={2000}
                            cursor={true}
                            cursorChar="|"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="hidden md:flex flex-col items-center md:items-start"
                    >
                        <p className="mb-2 text-sm font-medium text-foreground/80">
                            Get my resume here!!
                        </p>
                        <DownloadSwitch resumeLink="/K_SAI_SURYA_SUBHASH_0118_ (29) (1).pdf" />
                    </motion.div>
                </div>

                {/* Right Column: Image */}
                <div className="relative flex justify-center items-center h-full">
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className={cn(
                            "relative z-10 h-[400px] w-auto object-cover drop-shadow-2xl transition-all duration-500 grayscale-0 md:h-[500px] md:grayscale md:hover:grayscale-0 lg:h-[600px]",
                            imageClassName
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    />
                </div>

                {/* Mobile-only Resume Button (Below Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex md:hidden flex-col items-center mt-4 w-full"
                >
                    <p className="mb-2 text-sm font-medium text-foreground/80">
                        Get my resume here!!
                    </p>
                    <DownloadSwitch resumeLink="/K_SAI_SURYA_SUBHASH_0118_ (29) (1).pdf" />
                </motion.div>
            </div>

            {/* Footer Elements */}
            {/* Footer Removed */}
        </div>
    );
};
