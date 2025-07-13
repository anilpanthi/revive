
import { Card, CardContent } from "@/components/ui/card";

const Countries = () => {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      universities: "500+",
      students: "2000+",
      description: "World's top universities with diverse programs"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      universities: "200+",
      students: "1500+",
      description: "High-quality education with immigration opportunities"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      universities: "150+",
      students: "800+",
      description: "Excellent education system with work opportunities"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      universities: "180+",
      students: "600+",
      description: "Historic universities with global recognition"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      universities: "100+",
      students: "300+",
      description: "Top engineering programs with low tuition fees"
    },
    {
      name: "Japan",
      flag: "🇯🇵",
      universities: "80+",
      students: "200+",
      description: "Advanced technology programs with cultural experience"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Study Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of study destinations. We have partnerships with top universities 
            worldwide to help you find the perfect fit for your academic goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{country.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{country.name}</h3>
                <div className="flex justify-center space-x-6 mb-4 text-sm">
                  <div>
                    <div className="font-semibold text-blue-600">{country.universities}</div>
                    <div className="text-gray-600">Universities</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{country.students}</div>
                    <div className="text-gray-600">Students Placed</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{country.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
