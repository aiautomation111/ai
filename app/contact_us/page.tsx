// components/ContactUsPage.js

const ContactUsPage = () => {
  return (
    <div className="bg-black text-white py-20 px-4 sm:px-8">
      <div className="container mx-auto space-y-24">
        
        {/* === Section 1: Heading === */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Talk About Your Project</h1>
          <p className="text-gray-300 text-lg">
            Whether you have a question, a project idea, or just want to learn more, we are here to listen. Fill out the form below or use one of the direct contact methods.
          </p>
        </section>

        {/* === Section 2: Contact Form & Info === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Full Name" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Regarding..." className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us more about your project or inquiry..." className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg w-full sm:w-max hover:bg-yellow-500 transition-colors">
                Send
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1 text-yellow-400">@</span>
              <div>
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <p className="text-gray-300">Reach out for general inquiries.</p>
                <a href="mailto:info@example.com" className="text-yellow-400 hover:underline">info@example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1 text-yellow-400">📞</span>
              <div>
                <h3 className="font-semibold text-lg text-white">Phone</h3>
                <p className="text-gray-300">Available Sunday to Thursday, 9 AM - 5 PM.</p>
                <a href="tel:+123456789" className="text-yellow-400 hover:underline">+123 456 789</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-[#1A1A1A] p-3 rounded-full mt-1 text-yellow-400">📍</span>
              <div>
                <h3 className="font-semibold text-lg text-white">Office</h3>
                <p className="text-gray-300">123 Example Street, City, Country.</p>
                <a href="#" className="text-yellow-400 hover:underline">View on Map</a>
              </div>
            </div>
          </div>
        </section>

        {/* === Section 3: FAQs === */}
        <section>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to questions we get often.</p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold flex justify-between items-center text-white">
                What is the average project completion time?
              </summary>
              <p className="text-gray-300 mt-2 pt-2 border-t border-gray-700">Project duration depends on size and requirements. Small projects usually take 4-6 weeks, while large projects may take several months. A detailed timeline is provided after the planning phase.</p>
            </details>
            {/* FAQ 2 */}
            <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold flex justify-between items-center text-white">
                Do you offer post-launch support?
              </summary>
              <p className="text-gray-300 mt-2 pt-2 border-t border-gray-700">Yes, we provide maintenance and support packages to ensure your website or app continues to operate efficiently and securely after launch. We can discuss options that fit your needs.</p>
            </details>
            {/* FAQ 3 */}
            <details className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer">
              <summary className="font-semibold flex justify-between items-center text-white">
                How do you start the project cost estimation?
              </summary>
              <p className="text-gray-300 mt-2 pt-2 border-t border-gray-700">The process begins with a free consultation to understand your requirements and goals. Based on that, we prepare a detailed and transparent quotation outlining all expected costs.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUsPage;
