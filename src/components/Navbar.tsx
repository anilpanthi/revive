import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Countries", href: "#countries" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setHideTopBar(true);
            } else {
                setHideTopBar(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div
                className={`text-gray-700 py-2 px-4 text-sm transition-transform duration-300 ${hideTopBar ? '-translate-y-full' : 'translate-y-0'
                    }`}
                style={{ backgroundColor: '#f3f4f8' }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 ">
                            <Mail className="h-4 w-4" />
                            <span>info@reviveeducare.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>+977-9860323992</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700" aria-label="Facebook">
                            <IonIcon icon={logoFacebook} className="h-4 w-4" />
                        </a>
                        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600" aria-label="Instagram">
                            <IonIcon icon={logoInstagram}  className="h-4 w-4" />
                        </a>
                        <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600" aria-label="TikTok">
                            <IonIcon icon={logoTwitter}  className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`bg-white/95 backdrop-blur-sm shadow-sm transition-transform duration-300 ${hideTopBar ? '-translate-y-10' : 'translate-y-0'
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="flex-shrink-0">
                                <img src="/logo.png" alt="Reviveeducare Network" className="h-16 w-auto" />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center">
                            <Button
                                onClick={() => scrollToSection("#contact")}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Free Consultation
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="pt-4 border-t">
                                    <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                                        <Phone className="h-4 w-4" />
                                        <span>9860323992</span>
                                    </div>
                                    <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                                        <Mail className="h-4 w-4" />
                                        <span>info@reviveeducare.com</span>
                                    </div>
                                    <div className="px-3 py-2">
                                        <Button
                                            onClick={() => scrollToSection("#contact")}
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                        >
                                            Free Consultation
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
