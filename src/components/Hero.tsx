import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTopBarVisible(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative  flex items-center overflow-hidden transition-all duration-300 ${
        topBarVisible ? "pt-[104px]" : "pt-[64px]"
      }`}
      style={{ height: "100vh" }} // Fixed height to stabilize the section
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" // Added bg-fixed
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(4, 89, 191, 1) 0%, rgba(4, 104, 191, 0.496) 72%), url('/grad.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-1  items-left">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-blue-200">
              <GraduationCap className="h-6 w-6" />
              <span className="font-semibold">Your Gateway to Global Education</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-relaxed">
              Ready to Start Your Journey ?
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              Transform your dreams into reality with Nepal's most trusted educational consultancy.
              We guide students to top universities worldwide with personalized support every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start Your Journey Abroad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>500+ Students Placed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;