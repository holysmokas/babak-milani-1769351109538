function Features() {
  const features = [
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "Delivering exceptional results with attention to detail and commitment to excellence in every project."
    },
    {
      icon: "🚀",
      title: "Fast & Efficient",
      description: "Quick turnaround times without compromising quality. Get your projects completed on schedule."
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "Creative approaches to solve complex challenges using the latest techniques and best practices."
    },
    {
      icon: "🤝",
      title: "Personalized Service",
      description: "Tailored solutions that meet your specific needs with dedicated support throughout the process."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Babak Milani?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional approach and commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;