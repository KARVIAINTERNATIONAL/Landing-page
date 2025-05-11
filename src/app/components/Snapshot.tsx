// src/app/components/Snapshot.tsx

export default function Snapshot() {
    return (
      <section className="bg-black py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white">
            Introducing Harvest Ghana
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-white">
            Harvest Ghana is our flagship mobile-first platform connecting Ghanaian
            farmers directly with wholesale buyers—eliminating costly middlemen,
            reducing post-harvest loss, and boosting rural incomes. From real-time
            listings and geolocation to secure payments and logistics coordination,
            Harvest Ghana brings end-to-end transparency to agricultural markets.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 bg-white text-black rounded-md font-medium">
              Explore Harvest Ghana
            </button>
          </div>
        </div>
      </section>
    );
  }
  