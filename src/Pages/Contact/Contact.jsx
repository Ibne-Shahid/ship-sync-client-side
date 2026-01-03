import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section - Theme Compatible */}
      <div className="bg-primary text-primary-content py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with ShipSync
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about international trade? Our dedicated support team is here to help you 24/7.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-base-content mb-6">
                We're Here to Help Your Global Trade Journey
              </h2>
              <p className="text-base-content opacity-70 mb-8">
                Whether you're exporting for the first time or managing complex international shipments, 
                our team of trade experts is ready to assist you with secure transactions, real-time tracking, 
                and smart documentation management.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-6">
              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="card-title text-lg mb-2 text-base-content">Phone Support</h3>
                      <p className="text-base-content opacity-70 mb-2">24/7 Dedicated Support</p>
                      <a href="tel:+18005551234" className="text-primary font-semibold hover:text-primary-focus">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary bg-opacity-20 rounded-lg">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="card-title text-lg mb-2 text-base-content">Email Support</h3>
                      <p className="text-base-content opacity-70 mb-2">Response within 2 hours</p>
                      <a href="mailto:support@shipsync.com" className="text-primary font-semibold hover:text-primary-focus">
                        support@shipsync.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="card-title text-lg mb-2 text-base-content">Global Headquarters</h3>
                      <p className="text-base-content opacity-70">
                        123 Trade Center Plaza<br />
                        International Business District<br />
                        New York, NY 10001, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-warning bg-opacity-20 rounded-lg">
                      <Clock className="w-6 h-6 text-warning" />
                    </div>
                    <div>
                      <h3 className="card-title text-lg mb-2 text-base-content">Business Hours</h3>
                      <p className="text-base-content opacity-70">
                        Monday - Friday: 8:00 AM - 8:00 PM (EST)<br />
                        Saturday: 9:00 AM - 6:00 PM (EST)<br />
                        Sunday: 10:00 AM - 4:00 PM (EST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Reach Stats */}
            <div className="mt-12 p-6 bg-base-300 rounded-2xl">
              <h3 className="text-xl font-bold text-base-content mb-4">Our Global Support Coverage</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-base-content opacity-70">Countries Supported</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">24/7</p>
                  <p className="text-base-content opacity-70">Support Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="card bg-base-100 shadow-2xl border border-base-300">
              <div className="card-body p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-success bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-base-content mb-3">Message Sent Successfully!</h3>
                    <p className="text-base-content opacity-70 mb-6">
                      Thank you for contacting ShipSync. Our trade support team will get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="card-title text-2xl font-bold text-base-content mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-base-content opacity-70 mb-8">
                      Fill out the form below and our trade experts will assist you promptly.
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold text-base-content">Full Name *</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold text-base-content">Email Address *</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="input input-bordered w-full"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold text-base-content">Subject *</span>
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                          >
                            <option value="">Select a topic</option>
                            <option value="export">Export Products Support</option>
                            <option value="import">Import Products Support</option>
                            <option value="shipping">Shipping & Tracking</option>
                            <option value="payment">Secure Payments</option>
                            <option value="technical">Technical Support</option>
                            <option value="other">Other Questions</option>
                          </select>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold text-base-content">Message *</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your international trade needs..."
                            className="textarea textarea-bordered h-40"
                            required
                          ></textarea>
                        </div>

                        <div className="form-control">
                          <label className="label cursor-pointer justify-start">
                            <input type="checkbox" className="checkbox checkbox-accent mr-3" required />
                            <span className="label-text text-base-content">
                              I agree to receive trade updates and support communications from ShipSync
                            </span>
                          </label>
                        </div>

                        <div className="form-control mt-8">
                          <button type="submit" className="btn btn-accent btn-lg">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-base-content mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="collapse collapse-plus bg-base-200 border border-base-300">
                  <input type="radio" name="faq" defaultChecked />
                  <div className="collapse-title text-lg font-medium text-base-content">
                    What are ShipSync's support hours?
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content opacity-70">
                      We provide 24/7 support for urgent shipping and tracking issues. For detailed trade consultations, 
                      our expert team is available during business hours as listed above.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-plus bg-base-200 border border-base-300">
                  <input type="radio" name="faq" />
                  <div className="collapse-title text-lg font-medium text-base-content">
                    How quickly will I receive a response?
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content opacity-70">
                      Urgent shipping issues: Within 30 minutes<br />
                      General inquiries: Within 2 hours<br />
                      Complex trade consultations: Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-base-content mb-6">
            Need Immediate Assistance with Your Shipment?
          </h2>
          <p className="text-xl text-base-content opacity-70 mb-8 max-w-2xl mx-auto">
            Call our emergency support line for urgent shipment tracking, payment issues, or customs clearance problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18005551234" className="btn btn-accent btn-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Support
            </a>
            <button className="btn btn-info btn-outline btn-lg">
              <Mail className="w-5 h-5 mr-2" />
              Email Urgent Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;