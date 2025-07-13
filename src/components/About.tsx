
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Our certified counselors provide personalized advice based on your academic goals and career aspirations."
    },
    {
      icon: Users,
      title: "Strong Network",
      description: "Direct partnerships with 200+ universities across USA, Canada, Australia, UK, and more."
    },
    {
      icon: Target,
      title: "Success Focused",
      description: "98% visa success rate with comprehensive support from application to arrival."
    },
    {
      icon: Heart,
      title: "Student First",
      description: "We prioritize student success and provide ongoing support throughout your educational journey."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Reviveeducare Network?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in international education, we've helped thousands of Nepali students 
            achieve their dreams of studying abroad. Our commitment to excellence sets us apart.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
