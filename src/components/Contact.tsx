const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#050505] text-center justify-center flex flex-col gap-6 p-6 select-none">
       <h1 className="text-xs uppercase tracking-[0.3em] text-blue-500 font-bold block mb-3">
         Contact Us
       </h1>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white">
          Let us know how we can assist you!
        </h3>
        <p className="text-gray-400 mt-4">
          Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline font-semibold">+1 (234) 567-890</a>
        </p>
        <p className="text-gray-400 mt-2">
          Email: <a href="mailto:info@fluxescapes.com" className="text-blue-400 hover:underline font-semibold">info@fluxescapes.com</a>
        </p>
        <p className="text-gray-500 mt-2 font-medium">
          Address: 123 Travel Lane, Wanderlust City, USA
        </p>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium leading-relaxed">
          For general inquiries, partnership opportunities, or media requests, please reach out to us using the contact information above. We look forward to hearing from you!
        </p>
    </div>
  );
};

export default Contact;