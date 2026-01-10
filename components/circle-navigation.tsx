'use client';

import { CircleMenu } from "@/components/ui/circle-menu";
import { Home, User, Lightbulb, Briefcase, FileText, Mail } from 'lucide-react';
import { useState } from "react";
import { motion } from "framer-motion";

export default function CircleNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.div
            layout
            className={`fixed z-50 transition-all duration-300 ${isMenuOpen
                    ? "bottom-0 left-1/2 -translate-x-1/2 mb-10" // Bottom Center when open
                    : "top-4 right-4" // Top Right when closed
                }`}
        >
            <div className="bg-black/80 dark:bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-white/20 dark:border-black/20">
                <CircleMenu
                    onOpenChange={setIsMenuOpen}
                    items={[
                        { label: 'Home', icon: <Home size={16} />, href: '#home' },
                        { label: 'About', icon: <User size={16} />, href: '#aboutme' },
                        { label: 'Skills', icon: <Lightbulb size={16} />, href: '#skills' },
                        { label: 'Projects', icon: <Briefcase size={16} />, href: '#projects123' },
                        { label: 'Resume', icon: <FileText size={16} />, href: '#resume12' },
                        { label: 'Contact', icon: <Mail size={16} />, href: '#contact' }
                    ]}
                />
            </div>
        </motion.div>
    );
}
