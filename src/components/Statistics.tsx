import { TrendingUp, Users, Award, Globe } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Students Placed",
      description: "Successfully placed in top universities"
    },
    {
      icon: Award,
      number: "98%",
      label: "Visa Success Rate",
      description: "Highest success rate in Nepal"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "Study destinations available"
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Years Experience",
      description: "Trusted expertise in education"
    }
  ];

  return (
    <section 
      className="py-20 bg-fixed bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(34, 139, 230, 0.7), rgba(34, 139, 230, 0.4)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Track Record</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak for themselves. Our success is measured by the success of our students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
              <div className="text-xl font-semibold mb-2 text-white">{stat.label}</div>
              <p className="text-blue-100 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;