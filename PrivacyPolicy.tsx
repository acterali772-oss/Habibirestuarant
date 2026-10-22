import { BRAND } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function PrivacyPolicy() {
  const { ref, visible } = useReveal();

  const sections = [
    {
      title: 'Information We Receive',
      body: `When you contact ${BRAND.fullName} through WhatsApp, email, or any other method provided on this website, you may share personal information such as your name, phone number, email address, and order details. We only collect the information you choose to provide when reaching out to us.`,
    },
    {
      title: 'How We Use Your Information',
      body: 'We use the information you share to respond to your inquiries, process orders, improve our service, and communicate with you about your requests. We do not use your information for unrelated marketing purposes.',
    },
    {
      title: 'Sharing of Information',
      body: 'Your information is not sold or traded. We only share details as necessary to fulfill your order or respond to your request — for example, with a delivery contact if applicable. We do not make unsupported claims about third-party services or data collection.',
    },
    {
      title: 'Data Retention',
      body: 'We retain your messages and contact details only as long as needed to serve you and to maintain reasonable business records. You may request that we delete your contact information at any time by reaching out to us.',
    },
    {
      title: 'Your Choices',
      body: 'You are not required to provide any personal information to browse this website. You choose what to share when contacting us. If you wish to update or remove your information, contact us through the methods listed on our Contact page.',
    },
    {
      title: 'Website Content',
      body: 'All menu images, prices, and descriptions shown on this website are the property of their respective owners. Menu contents and prices are displayed exactly as provided and may change without notice on the website. Please confirm current prices when ordering.',
    },
    {
      title: 'Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page. Continued use of the website after changes are posted indicates your acknowledgment of the updated policy.',
    },
    {
      title: 'Contact Us',
      body: `If you have any questions about this Privacy Policy or how your information is handled, please contact us via WhatsApp at ${BRAND.whatsappNumber} or by email at ${BRAND.email}.`,
    },
  ];

  return (
    <>
      <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-habibi-black-soft">
        <div className="absolute inset-0 bg-red-radial opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.5em]">
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-habibi-cream mt-4">
            Privacy Policy
          </h1>
          <div className="ornament-divider w-48 mx-auto mt-5">
            <span className="text-habibi-red text-xl">✦</span>
          </div>
          <p className="font-elegant text-habibi-cream-muted mt-5">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-habibi-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} bg-habibi-card border border-habibi-red/25 rounded-sm p-8 sm:p-12 corner-ornament`}>
            <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mb-8">
              {BRAND.fullName} respects your privacy. This policy explains how we
              handle information you share when contacting us through this
              website.
            </p>
            <div className="flex flex-col gap-8">
              {sections.map((s, i) => (
                <div key={s.title}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-habibi-red text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl text-habibi-cream">
                      {s.title}
                    </h2>
                  </div>
                  <div className="ornament-divider w-24 mt-2 mb-4 justify-start">
                    <span className="text-habibi-red text-sm">✦</span>
                  </div>
                  <p className="font-elegant text-base sm:text-lg text-habibi-cream-muted leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="font-elegant text-sm text-habibi-cream-muted text-center mt-8 italic">
            This Privacy Policy is provided as a general guide. For specific
            legal or business requirements, please consult a qualified
            professional.
          </p>
        </div>
      </section>
    </>
  );
}
