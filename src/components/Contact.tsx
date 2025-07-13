import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Globe, User, MessageSquare, Calendar, GraduationCap } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert("Thank you for your inquiry! We'll contact you shortly.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            destination: "",
            message: ""
        });
    };

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray mb-6">
                        Start Your Study Abroad Journey
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Ready to transform your educational dreams into reality? Contact us today for a free consultation and personalized guidance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                                    <div className="flex items-center justify-center p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                                        <p className="text-gray-600">Putalisadak, Kathmandu, Nepal</p>
                                        <p className="text-gray-600">Near City Centre</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                                    <div className="flex items-center justify-center p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                                        <Phone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                                        <p className="text-gray-600">+977-1-4445566</p>
                                        <p className="text-gray-600">+977-9841234567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                                    <div className="flex items-center justify-center p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                        <p className="text-gray-600">info@reviveeducare.com</p>
                                        <p className="text-gray-600">consultation@reviveeducare.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                                    <div className="flex items-center justify-center p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                                        <p className="text-gray-600">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consultation Form */}
                    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                            <CardHeader className="p-0">
                                <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-xl mr-4">
                                        <Calendar className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl text-white">Free Consultation</CardTitle>
                                        <p className="text-blue-100 mt-1">Let us help you achieve your educational goals</p>
                                    </div>
                                </div>
                            </CardHeader>
                        </div>

                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <User className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="pl-12 py-6 rounded-xl"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <Mail className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        type="email"
                                        className="pl-12 py-6 rounded-xl"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <Phone className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="pl-12 py-6 rounded-xl"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <GraduationCap className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
                                    <Input
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        placeholder="Preferred Study Destination"
                                        className="pl-12 py-6 rounded-xl"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <MessageSquare className="h-5 w-5 text-gray-400 absolute left-4 top-4" />
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your educational background and goals..."
                                        rows={4}
                                        className="pl-12 py-4 rounded-xl"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-6 rounded-xl flex items-center justify-center shadow-lg transition-all transform hover:scale-[1.02]"
                                    style={{ backgroundColor: "#228be6" }}
                                >
                                    <Send className="h-5 w-5 mr-2" />
                                    Schedule Free Consultation
                                </Button>

                                <p className="text-sm text-gray-500 text-center pt-4">
                                    We'll get back to you within 24 hours to schedule your consultation.
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;