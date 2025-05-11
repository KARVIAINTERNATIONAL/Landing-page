// src/app/components/WhyPartner.tsx

export default function WhyPartner() {
    const cards = [
      {
        title: "Investors",
        desc: "$500M+ market opportunity with a recurring-revenue model.",
      },
      {
        title: "NGOs & Governments",
        desc: "Actionable data dashboards for food-security planning and impact measurement.",
      },
      {
        title: "Tech Collaborators",
        desc: "Open API sandbox for seamless integrations and co-development.",
      },
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Partner With Us
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-black border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-white">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  