// src/app/components/ContactForm.tsx

export default function ContactForm() {
    return (
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 max-w-lg">
          <h2 className="text-2xl font-bold text-center text-white">
            Let’s Grow Together
          </h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="mt-6 space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "organization", label: "Organization", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-white font-medium">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  required
                  className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded text-white"
                />
              </div>
            ))}
            <div>
              <label className="block text-white font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded text-white"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  