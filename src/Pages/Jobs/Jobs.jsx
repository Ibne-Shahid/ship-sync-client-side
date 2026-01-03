import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Globe, 
  CheckCircle,
  TrendingUp,
  Users,
  Shield,
  Heart
} from 'lucide-react';

const Jobs = () => {
  // Sample job data
  const jobListings = [
    {
      id: 1,
      title: "International Trade Manager",
      company: "ShipSync Global",
      location: "New York, USA",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      category: "Management",
      posted: "2 days ago",
      remote: true,
      urgent: true
    },
    {
      id: 2,
      title: "Logistics Coordinator",
      company: "Ocean Trade Ltd",
      location: "Singapore",
      type: "Full-time",
      salary: "$45,000 - $65,000",
      category: "Operations",
      posted: "1 week ago",
      remote: false,
      urgent: false
    },
    {
      id: 3,
      title: "Export Documentation Specialist",
      company: "Global Freight Co",
      location: "London, UK",
      type: "Contract",
      salary: "$35 - $45/hour",
      category: "Documentation",
      posted: "3 days ago",
      remote: true,
      urgent: true
    },
    {
      id: 4,
      title: "Supply Chain Analyst",
      company: "TechGear Ltd",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      category: "Analytics",
      posted: "5 days ago",
      remote: true,
      urgent: false
    },
    {
      id: 5,
      title: "Customs Compliance Officer",
      company: "Ahmed Traders",
      location: "Dubai, UAE",
      type: "Part-time",
      salary: "$30 - $40/hour",
      category: "Compliance",
      posted: "1 day ago",
      remote: false,
      urgent: true
    },
    {
      id: 6,
      title: "Trade Finance Specialist",
      company: "SkyLine Logistics",
      location: "Tokyo, Japan",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      category: "Finance",
      posted: "4 days ago",
      remote: false,
      urgent: false
    }
  ];

  const jobCategories = [
    { name: "Management", count: 12, icon: <Users className="w-5 h-5" /> },
    { name: "Operations", count: 24, icon: <Briefcase className="w-5 h-5" /> },
    { name: "Documentation", count: 18, icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Analytics", count: 9, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Compliance", count: 15, icon: <Shield className="w-5 h-5" /> },
    { name: "Finance", count: 11, icon: <DollarSign className="w-5 h-5" /> }
  ];

  const benefits = [
    "Competitive global salaries",
    "Remote work options",
    "Health insurance",
    "Professional development",
    "Paid time off",
    "Flexible hours"
  ];

  return (
    <div className="min-h-screen bg-base-100">
      
      <div className="bg-primary text-primary-content py-20">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join ShipSync's Global Team
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Build your career in international trade with world-class opportunities across 50+ countries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-accent btn-lg">
              Browse All Jobs
            </button>
            <button className="btn btn-outline btn-lg btn-info">
              Submit Resume
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="card bg-base-200 shadow-lg sticky top-8">
              <div className="card-body">
                <h3 className="card-title text-lg font-bold mb-6">Filter Jobs</h3>
                
                {/* Job Type Filter */}
                <div className="mb-8">
                  <h4 className="font-bold mb-4">Job Type</h4>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                      <label key={type} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-accent mr-3" />
                        <span className="text-base-content">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div className="mb-8">
                  <h4 className="font-bold mb-4">Location</h4>
                  <div className="space-y-2">
                    {['Remote', 'USA', 'UK', 'Singapore', 'Dubai', 'Japan'].map((location) => (
                      <label key={location} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-sm checkbox-info mr-3" />
                        <span className="text-base-content">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Range */}
                <div className="mb-8">
                  <h4 className="font-bold mb-4">Salary Range</h4>
                  <input 
                    type="range" 
                    min="0" 
                    max="200000" 
                    step="10000"
                    className="range range-accent mb-4" 
                  />
                  <div className="flex justify-between text-sm text-base-content opacity-70">
                    <span>$0</span>
                    <span>$200,000+</span>
                  </div>
                </div>

                {/* Reset Filters */}
                <button className="btn btn-outline btn-accent w-full">
                  Reset All Filters
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="card bg-base-200 shadow-lg mt-8">
              <div className="card-body">
                <h3 className="card-title text-lg font-bold mb-6">Job Categories</h3>
                <div className="space-y-4">
                  {jobCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-3 hover:bg-base-300 rounded-lg cursor-pointer transition-colors">
                      <div className="flex items-center">
                        <div className="p-2 bg-accent bg-opacity-20 rounded-lg mr-3">
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="badge badge-info">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Job Listings */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stat bg-base-200 rounded-2xl">
                  <div className="stat-figure text-accent">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div className="stat-title text-base-content">Open Positions</div>
                  <div className="stat-value text-accent">89</div>
                  <div className="stat-desc text-base-content opacity-70">Across 50+ countries</div>
                </div>
                
                <div className="stat bg-base-200 rounded-2xl">
                  <div className="stat-figure text-info">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="stat-title text-base-content">Remote Jobs</div>
                  <div className="stat-value text-info">42</div>
                  <div className="stat-desc text-base-content opacity-70">Work from anywhere</div>
                </div>
                
                <div className="stat bg-base-200 rounded-2xl">
                  <div className="stat-figure text-primary">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="stat-title text-base-content">Avg. Salary</div>
                  <div className="stat-value text-primary">$85K</div>
                  <div className="stat-desc text-base-content opacity-70">+15% from last year</div>
                </div>
              </div>
            </div>

            {/* Job Listings Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-base-content mb-2">Latest Job Opportunities</h2>
                <p className="text-base-content opacity-70">89 positions across global trade and logistics</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <select className="select select-bordered">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Salary</option>
                  <option>Sort by: Location</option>
                </select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${job.urgent ? 'border-accent' : 'border-base-300'}`}>
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="card-title text-xl text-base-content">{job.title}</h3>
                              {job.urgent && (
                                <span className="badge badge-accent">Urgent</span>
                              )}
                              {job.remote && (
                                <span className="badge badge-info">Remote</span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-6 mb-4">
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-base-content opacity-70" />
                                <span className="text-base-content font-medium">{job.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-base-content opacity-70" />
                                <span className="text-base-content opacity-70">{job.location}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-base-content opacity-70" />
                                <span className="text-base-content opacity-70">{job.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-base-content opacity-70" />
                                <span className="text-base-content opacity-70">{job.salary}</span>
                              </div>
                              <span className="badge badge-outline">{job.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-actions justify-between items-center mt-6">
                      <span className="text-sm text-base-content opacity-70">
                        Posted {job.posted}
                      </span>
                      <button className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="join">
                <button className="join-item btn btn-outline">Previous</button>
                <button className="join-item btn btn-accent">1</button>
                <button className="join-item btn btn-outline">2</button>
                <button className="join-item btn btn-outline">3</button>
                <button className="join-item btn btn-outline">4</button>
                <button className="join-item btn btn-outline">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-base-content mb-4">Why Work at ShipSync?</h2>
            <p className="text-xl text-base-content opacity-70 max-w-2xl mx-auto">
              Join a company that's revolutionizing global trade while building your dream career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body items-center text-center">
                  <div className="p-3 bg-info bg-opacity-20 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-info" />
                  </div>
                  <h3 className="card-title text-base-content mb-2">{benefit}</h3>
                  <p className="text-base-content opacity-70">
                    Available to all full-time employees worldwide
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card bg-primary text-primary-content shadow-2xl">
            <div className="card-body py-12">
              <h2 className="text-3xl font-bold mb-6">
                Can't Find Your Perfect Role?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Submit your resume and we'll notify you when matching positions become available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-accent btn-lg">
                  Upload Resume
                </button>
                <button className="btn btn-outline btn-lg btn-info">
                  Contact Recruiter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;