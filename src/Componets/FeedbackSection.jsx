// src/components/FeedbackSection.jsx
import React, { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react'; 
import emailjs from '@emailjs/browser';

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    projectName: '', 
    rating: 0,        
    feedbackMessage: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoverRating, setHoverRating] = useState(0); // For hover effect on stars



  
    useEffect(() => {
      emailjs.init("S8FoA1225qZi8g1Dj"); 
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleRatingClick = (ratingValue) => {
    setFormData(prev => ({ ...prev, rating: ratingValue }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Your name is required";
    }
    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
      newErrors.clientEmail = "Email is invalid";
    }
    if (formData.rating === 0) {
      newErrors.rating = "Please provide a rating";
    }
    if (!formData.feedbackMessage.trim()) {
      newErrors.feedbackMessage = "Feedback message is required";
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
    setSubmitMessage("Submitting your feedback...");

    try {
      // --- EmailJS Integration: Uncomment and replace with your actual Service ID and Template ID ---
      // IMPORTANT: Ensure you have emailjs.init("YOUR_PUBLIC_KEY") called ONCE in your app (e.g., in App.js useEffect).
      const serviceId = 'service_hd5tw9j';   // Replace with your actual EmailJS Service ID
      const templateId = 'template_kpkqw2m'; // Replace with your actual EmailJS Template ID for feedback
      const templateParams = {
        from_name: formData.clientName,
        from_email: formData.clientEmail,
        project_name: formData.projectName, 
        rating: formData.rating,
        feedback_message: formData.feedbackMessage,
      };

  
      await emailjs.send(serviceId, templateId, templateParams);

      // --- Simulation for demonstration purposes (remove this line when using EmailJS.send) ---
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      setSubmitMessage("Thank you for your feedback! It's greatly appreciated.");
      setFormData({ clientName: '', clientEmail: '', projectName: '', rating: 0, feedbackMessage: '' }); // Clear form
    } catch (error) {
      console.error('Failed to send feedback:', error);
      setSubmitMessage("Failed to submit feedback. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variants for section elements
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="feedback" className="py-20 sm:py-28 bg-gradient-to-br from-[#e0cfff] to-[#f5efff] font-inter text-gray-900 dark:text-gray-900 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-radial-gradient-purple-blue pointer-events-none"></div>
      </div>

      {/* Floating background shapes */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-24 h-24 bg-purple-200 dark:bg-purple-300 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-32 h-32 bg-indigo-200 dark:bg-indigo-300 rounded-lg blur-3xl opacity-10"
        animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-[30%] right-[15%] w-20 h-20 bg-pink-200 dark:bg-pink-300 rounded-full blur-3xl opacity-8"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Feedback</span>
          {/* Decorative underline */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-700 max-w-2xl mx-auto mb-16 mt-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Your insights help us grow! Please take a moment to share your experience with Kinfinity.
        </motion.p>

        <div className="bg-white dark:bg-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 text-left"> {/* Lighter dark mode background for main form container */}
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-6 text-center"> {/* Lighter dark mode text */}
            Tell Us About Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={formItemVariants} custom={0}>
              <label htmlFor="clientName" className="block text-gray-700 dark:text-gray-700 text-sm font-medium mb-2"> {/* Lighter dark mode text */}
                Your Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                  bg-gray-50 dark:bg-gray-100 text-gray-900 dark:text-gray-900
                  ${errors.clientName ? 'border-red-500' : 'border-gray-200 dark:border-gray-300'}
                `}
                placeholder="John Doe"
                aria-invalid={errors.clientName ? "true" : "false"}
              />
              {errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>}
            </motion.div>

            <motion.div variants={formItemVariants} custom={1}>
              <label htmlFor="clientEmail" className="block text-gray-700 dark:text-gray-700 text-sm font-medium mb-2"> {/* Lighter dark mode text */}
                Your Email
              </label>
              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                  bg-gray-50 dark:bg-gray-100 text-gray-900 dark:text-gray-900
                  ${errors.clientEmail ? 'border-red-500' : 'border-gray-200 dark:border-gray-300'}
                `}
                placeholder="your@example.com"
                aria-invalid={errors.clientEmail ? "true" : "false"}
              />
              {errors.clientEmail && <p className="text-red-500 text-xs mt-1">{errors.clientEmail}</p>}
            </motion.div>

            <motion.div variants={formItemVariants} custom={2}>
              <label htmlFor="projectName" className="block text-gray-700 dark:text-gray-700 text-sm font-medium mb-2"> {/* Lighter dark mode text */}
                Project Name / Website URL (Optional)
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                  bg-gray-50 dark:bg-gray-100 text-gray-900 dark:text-gray-900
                  border-gray-200 dark:border-gray-300
                `}
                placeholder="e.g., MyCompany.com"
              />
            </motion.div>

            {/* Star Rating */}
            <motion.div variants={formItemVariants} custom={3}>
              <label className="block text-gray-700 dark:text-gray-700 text-sm font-medium mb-2"> {/* Lighter dark mode text */}
                Overall Rating
              </label>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={32}
                    className={`cursor-pointer transition-colors duration-200
                      ${star <= (hoverRating || formData.rating)
                        ? 'text-yellow-400 fill-current' // Filled star color
                        : 'text-gray-300 dark:text-gray-500' // Lighter unfilled star color for dark mode
                      }
                    `}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
              {errors.rating && <p className="text-red-500 text-xs mt-1 text-center">{errors.rating}</p>}
            </motion.div>

            <motion.div variants={formItemVariants} custom={4}>
              <label htmlFor="feedbackMessage" className="block text-gray-700 dark:text-gray-700 text-sm font-medium mb-2"> {/* Lighter dark mode text */}
                Your Feedback
              </label>
              <textarea
                id="feedbackMessage"
                name="feedbackMessage"
                value={formData.feedbackMessage}
                onChange={handleChange}
                rows="6"
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500
                  bg-gray-50 dark:bg-gray-100 text-gray-900 dark:text-gray-900
                  ${errors.feedbackMessage ? 'border-red-500' : 'border-gray-200 dark:border-gray-300'}
                `}
                placeholder="Share your thoughts about our work..."
                aria-invalid={errors.feedbackMessage ? "true" : "false"}
              ></textarea>
              {errors.feedbackMessage && <p className="text-red-500 text-xs mt-1">{errors.feedbackMessage}</p>}
            </motion.div>

            <motion.button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              variants={formItemVariants}
              custom={5}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              <Send className="w-5 h-5 ml-2" />
            </motion.button>

            {submitMessage && (
              <motion.p
                className={`mt-4 text-center ${submitMessage.includes("successfully") || submitMessage.includes("appreciated") ? 'text-green-600' : 'text-red-600'} dark:text-green-600 dark:text-red-600`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
