import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BoringInfo() {
  return (
    <section className="min-h-screen flex flex-col bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline">
        <h1 className="text-2xl font-bold mb-4">Boring (but Important) Info</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>If you&apos;re looking to get a refund for any reason, that will be processed through Stripe.</li>
          <li>All of my clients have a 60-day notice for cancelation.</li>
          <li>All transactions are in USD.</li>
          <li>If you&apos;re curious about payment security, you can read about Stripe&apos;s policy <a href="https://stripe.com/us/security" target="_blank" rel="noopener noreferrer" className="hover:text-[#D0B8A8] transition duration-300">here</a>.</li>
          <li>All customer data is collected through Stripe and Zoho. You can read their data privacy policies by clicking their names above.</li>
        </ul>
      </main>
      <Footer />
    </section>
  );
}
