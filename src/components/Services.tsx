import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GraduationCap, Plane, CreditCard, BookOpen, Users } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: BookOpen,
            title: "Course & University Selection",
            description: "Expert guidance to choose the right program and university that matches your career goals and budget."
        },
        {
            icon: FileText,
            title: "Application Processing",
            description: "Complete assistance with university applications, documentation, and submission processes."
        },
        {
            icon: GraduationCap,
            title: "Scholarship Guidance",
            description: "Help you identify and apply for scholarships and financial aid opportunities."
        },
        {
            icon: CreditCard,
            title: "Visa Assistance",
            description: "Comprehensive visa application support with high success rates and expert guidance."
        },
        {
            icon: Plane,
            title: "Pre-Departure Support",
            description: "Complete pre-departure briefing including accommodation, travel, and cultural orientation."
        },
        {
            icon: Users,
            title: "Post-Arrival Support",
            description: "Ongoing assistance even after you reach your destination for a smooth transition."
        }
    ];

    return (
        <section className="relative py-20">
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Parallax background */}
            <div
                className="absolute inset-0 z-0 parallax-bg"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(4, 89, 191, 1) 0%, rgba(4, 104, 191, 0.496) 50%), url('./services.jpg')`,
                }}
            ></div>


            {/* Content */}
            <div className="relative z-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        From initial consultation to post-arrival support, we provide comprehensive services
                        to ensure your study abroad journey is smooth and successful.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                                    <service.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;