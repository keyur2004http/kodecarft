import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Navbar } from './Componets/Navbar';
import emailjs from '@emailjs/browser';
import Footer from './Componets/Footer';
import PageMeta from './Componets/PageMeta';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91 ',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const prefillMessage = params.get("message");

  if (prefillMessage) {
    setFormData((prevData) => ({
      ...prevData,
      message: prefillMessage,
    }));
  }
}, [location.search]);

  useEffect(() => {
    emailjs.init('RpWIxZYlvIQ0FkGGG');
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitMessage("Please correct the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Sending your message...");

    try {
      const serviceId = 'service_9xecicj';
      const templateId = 'template_f3fq70q';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      };


      await emailjs.send(serviceId, templateId, templateParams);

      // --- Simulation for demonstration purposes (remove this line when using EmailJS.send) ---
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitMessage("Message sent successfully! We'll get back to you shortly.");
      setFormData({ name: '', email: '', phone: '+91', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <PageMeta title="Contact – KodeCraft" favicon="/favicon.png" />
      <div className=" bg-black text-white ">
      <section className="relative  overflow-hidden px-0 pb-10  md:pt-4 "
      >
        <div className="flex justify-center w-full mb-16">
        <Navbar
                navItems={[
                  { name: "Home", href: "/" },
                  { name: "Service", href: "/#services" },
                  { name: "Portfolio", href: "/#portfolio" },
                  { name: "FAQ", href: "/faq" },
                ]}
              />
        </div>

        <div className="max-w-7xl mx-auto px-2 lg:px-8 text-center relative z-10">
          {/* TITLE */}
          <motion.h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-extrabold mb-4 relative" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={sectionVariants}>
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-white">Connect</span>
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-28 h-1.5 rounded-full shadow-lg"></div>
          </motion.h2>

          <motion.p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-16 mt-8 leading-relaxed" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={sectionVariants}>
            Have a project in mind, a question, or just want to say hello? Reach out to KodeCraft!
          </motion.p>

          {/* GLASS CONTAINER */}
          <div className="  relative text-white border border-white/20  rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row lg:space-x-12 items-stretch text-left bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="absolute inset-0 bg-black/10 bg-[url('https://www.transparenttextures.com/patterns/dark-denim.png')] opacity-10 pointer-events-none z-0 rounded-3xl" />

            {/* LEFT PANEL */}
            <motion.div className="lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0 lg:pr-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={contactInfoVariants}>
              <h3 className="text-3xl font-bold text-white-900  mb-6">Get in Touch</h3>
              <p className="text-white-700 text-white-500 mb-8 leading-relaxed">
                We're excited to hear from you and discuss how KodeCraft can help bring your digital vision to life.
              </p>
              <ul className="space-y-6 text-lg">
                <li className="flex items-center">
                  <Mail className="w-7 h-7 text-purple-600 mr-4" />
                  <a href="mailto:hello.kodecraft@gmail.com" className="text-white-800 :text-white-600 hover:text-purple-600 :hover:text-purple-400 transition-colors">hello.kodecraft@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-7 h-7 text-indigo-600 :text-indigo-400 mr-4" />
                  <a href="tel:+91 7383084925" className="text-white-800 :text-white-600 hover:text-indigo-600 :hover:text-indigo-400 transition-colors">+91 7383084925</a>
                </li>
              </ul>
              {/* <div className="flex space-x-6 mt-10">
                <a href="#" className="text-white-700 :text-white-500 hover:text-purple-600 "><Linkedin size={28} /></a>
                <a href="#" className="text-white-700 :text-white-500 hover:text-indigo-600 "><Instagram size={28} /></a>
                <a href="#" className="text-white-700 :text-white-500 hover:text-pink-600 "><Twitter size={28} /></a>
              </div> */}
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div className="lg:w-1/2 flex flex-col " initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={formItemVariants}>
              <h3 className="text-3xl font-bold text-white-900 :text-white-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div variants={formItemVariants} custom={0}>
                  <label htmlFor="name" className="block text-white-700 :text-white-500 text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full p-3 rounded-lg border bg-white/5 text-white-900 :text-white-800 focus:ring-2 focus:ring-purple-500 ${errors.name ? 'border-red-500' : 'border-gray-200 :border-gray-300'}`} placeholder="Your Name" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </motion.div>

                {/* Email */}
                <motion.div variants={formItemVariants} custom={1}>
                  <label htmlFor="email" className="block text-white-700 :text-white-500 text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full p-3 rounded-lg border bg-white/5 :bg-gray-100 text-white-900 :text-white-800 focus:ring-2 focus:ring-purple-500 ${errors.email ? 'border-red-500' : 'border-gray-200 :border-gray-300'}`} placeholder="your@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </motion.div>

                {/* Phone */}
                <motion.div variants={formItemVariants} custom={2}>
                  <label htmlFor="phone" className="block text-white-700 :text-white-500 text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full p-3 rounded-lg border bg-white/5 :bg-gray-100 text-white-900 :text-white-800 focus:ring-2 focus:ring-purple-500 ${errors.phone ? 'border-red-500' : 'border-gray-200 :border-gray-300'}`} placeholder="+91XXXXXXXXXX" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </motion.div>

                {/* Message */}
                <motion.div variants={formItemVariants} custom={3}>
                  <label htmlFor="message" className="block text-white-700 :text-white-500 text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className={`w-full p-3 rounded-lg border bg-white/5 :bg-gray-100 text-white-900 :text-white-800 focus:ring-2 focus:ring-purple-500 ${errors.message ? 'border-red-500' : 'border-gray-200 :border-gray-300'}`} placeholder="Tell us about your project or question..."></textarea>
                  {errors.message && <p className="text-indigo-500 text-xs mt-1">{errors.message}</p>}
                </motion.div>

                {/* Submit */}
                <motion.button type="submit" className="inline-flex items-center justify-center px-8 py-3 bg-indigo-500  text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isSubmitting} variants={formItemVariants} custom={4}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>

                {/* Submission Status */}
                {submitMessage && (
                  <motion.p className={`mt-4 text-center ${submitMessage.includes("successfully") ? 'text-green-600' : 'text-red-600'} :text-green-400 :text-red-400`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

      </section>
     
      <Footer></Footer>
      </div>
    </>
  )
}
export default ContactPage;

