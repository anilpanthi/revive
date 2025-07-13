
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto, Canada",
      program: "Computer Science",
      image: "PS",
      content: "Reviveeducare Network made my dream of studying in Canada a reality. Their guidance throughout the application process was exceptional, and I received my visa within 2 months!"
    },
    {
      name: "Amit Gurung",
      university: "MIT, USA",
      program: "Engineering",
      image: "AG",
      content: "The team at Reviveeducare helped me secure a full scholarship at MIT. Their expertise in finding the right opportunities is unmatched. Highly recommended!"
    },
    {
      name: "Sita Rai",
      university: "University of Melbourne, Australia",
      program: "Business Administration",
      image: "SR",
      content: "From university selection to visa processing, everything was handled professionally. I'm now pursuing my MBA in Australia, thanks to their excellent support."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who are now studying at top universities worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-600 leading-relaxed pl-6">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.program}</div>
                    <div className="text-sm text-blue-600">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
