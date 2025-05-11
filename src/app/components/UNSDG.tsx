// src/app/components/SDGGoals.tsx
import Image from 'next/image';

export default function SDGGoals() {
  const goals = [
    { number: 1, title: 'No Poverty', img: '/images/sdg1.png' },
    { number: 2, title: 'Zero Hunger', img: '/images/sdg2.png' },
    { number: 8, title: 'Decent Work & Economic Growth', img: '/images/sdg8.png' },
    { number: 12, title: 'Responsible Consumption & Production', img: '/images/sdg12.png' },
    { number: 13, title: 'Climate Action', img: '/images/sdg13.png' },
  ];

  return (
    <section id="sdg-goals" className="bg-green-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white">
          Our targeted United Nations Sustainability Goals
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.number}
              className="p-6 bg-green-800 rounded-lg shadow hover:shadow-md transition text-center"
            >
              <Image
                src={goal.img}
                alt={`SDG ${goal.number}`}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                Goal {goal.number}: {goal.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
