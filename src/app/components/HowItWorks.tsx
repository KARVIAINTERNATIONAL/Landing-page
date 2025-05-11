// src/app/components/HowItWorks.tsx

export default function HowItWorks() {
    const steps = [
      {
        title: "List Your Produce",
        desc: "Quickly post what you’ve harvested via mobile or USSD.",
      },
      {
        title: "Match Logistics",
        desc: "Connect with trusted local transport partners on demand.",
      },
      {
        title: "Get Paid Fast",
        desc: "Receive secure mobile-money payouts within 24 hours.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                className="p-6 bg-black border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-white">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  