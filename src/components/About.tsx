import { Users, HeartHandshake, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with survivors, caregivers, and supporters who understand your journey.',
    },
    {
      icon: HeartHandshake,
      title: 'Resources & Care',
      description: 'Access valuable information, treatment options, and support services.',
    },
    {
      icon: Lightbulb,
      title: 'Awareness & Education',
      description: 'Learn about prevention, early detection, and the latest research developments.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to supporting individuals and families affected by cancer through
            awareness, education, and community connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Early Detection Saves Lives
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Regular screenings and awareness of symptoms are crucial.
            Talk to your healthcare provider about cancer prevention and screening options.
          </p>
        </div>
      </div>
    </section>
  );
}
