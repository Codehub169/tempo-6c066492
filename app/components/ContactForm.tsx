import React, { useState, FormEvent } from 'react';
import { Instagram, Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react'; // Using Lucide for icons

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage(result.message || 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('error');
        setResponseMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-neutral-forest text-center mb-4">
          Let’s Work Together
        </h2>
        <p className="text-lg md:text-xl font-sans text-neutral-forest text-center mb-10 md:mb-12 max-w-xl mx-auto">
          Have a story waiting to be told? Reach out and let’s begin crafting its unique aesthetic.
        </p>

        <div className="max-w-2xl mx-auto bg-neutral-creamy p-8 md:p-10 rounded-medium shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium font-sans text-neutral-forest mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 font-sans bg-white border border-neutral-grey rounded-soft focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium font-sans text-neutral-forest mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 font-sans bg-white border border-neutral-grey rounded-soft focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium font-sans text-neutral-forest mb-1">Your Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 font-sans bg-white border border-neutral-grey rounded-soft focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
                placeholder="Tell us about your project or idea..."
              />
            </div>
            
            {responseMessage && (
              <div className={`p-3 rounded-soft text-sm font-sans flex items-center 
                ${status === 'success' ? 'bg-success-state/20 text-green-700' : ''}
                ${status === 'error' ? 'bg-error-state/20 text-red-700' : ''}
              `}>
                {status === 'success' && <CheckCircle size={18} className="mr-2 flex-shrink-0" />}
                {status === 'error' && <AlertTriangle size={18} className="mr-2 flex-shrink-0" />}
                {responseMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center px-6 py-4 font-sans font-semibold text-neutral-creamy bg-accent rounded-soft hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-creamy transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <Loader2 size={24} className="animate-spin mr-2" />
              ) : (
                <Send size={20} className="mr-2" />
              )}
              {status === 'loading' ? 'Sending...' : 'Let’s Design Your Story'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="font-sans text-neutral-forest mb-3">Connect with us on Instagram:</p>
            <a 
              href="https://instagram.com/hueneu_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center font-sans text-primary hover:text-accent transition-colors duration-200 group"
            >
              <Instagram size={20} className="mr-2 group-hover:scale-110 transition-transform"/> @hueneu_
            </a>
          </div>
          
          {/* Optional: Link to services deck */}
          {/* 
          <div className="mt-6 text-center">
            <a href="/path-to-services-deck.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-primary hover:text-accent underline">
              View Our Services Deck
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
