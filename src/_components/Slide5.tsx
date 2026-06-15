"use client";

import { Bangers } from "next/font/google";
import { useEffect, useState } from "react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  const [views, setViews] = useState({ views: 0, uniqueViews: 0 });

  useEffect(() => {
    let clientId = localStorage.getItem("portfolio_client_id");
    if (!clientId) {
      clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("portfolio_client_id", clientId);
    }

    fetch(`/api/views?clientId=${clientId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.views === "number") {
          setViews({ views: data.views, uniqueViews: data.uniqueViews });
        }
      })
      .catch(() => { });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMsg({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: null, text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMsg({
          type: "success",
          text: data.isDemo
            ? "Message sent successfully!"
            : "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMsg({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch {
      setStatusMsg({ type: "error", text: "Could not connect to the server. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full min-h-[100dvh] h-auto bg-black text-white relative overflow-hidden flex flex-col justify-between p-4 md:p-8 font-mono select-none">

      {/* Background Holographic HUD Grids with Gold Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hud-grid-5" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(230, 180, 34, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hud-grid-5)" />
        </svg>

        {/* Large Rotating Compass Circle */}
        <div className="absolute -right-40 -bottom-40 left-auto top-auto w-96 h-96 lg:w-[35rem] lg:h-[35rem] border border-gold/10 rounded-full flex items-center justify-center animate-[spin_80s_linear_infinite]">
          <div className="w-[90%] h-[90%] border border-dashed border-gold/5 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-gold/10 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-gold/20 tracking-[1em] uppercase font-bold">CONTACT DECK</span>
            </div>
          </div>
        </div>

        {/* Diagonal Corner Blueprint Lines */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20"></div>
      </div>

      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-gold pb-4 z-10">
        <div>
          <h2 className="text-xs text-gold tracking-[0.25em] font-bold">CONTACT // SLIDE 05</h2>
          <h1 className="text-xl font-bold text-white mt-1 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            GET IN TOUCH
          </h1>
        </div>
        <div className="text-right text-xs text-emerald-400 font-bold tracking-widest">
          ONLINE
        </div>
      </div>

      {/* Main Content Grid (Fullscreen Layout) */}
      <div className="flex-1 flex items-stretch my-6 lg:my-8 z-10 max-w-7xl w-full mx-auto">
        <div className="w-full border border-gold/30 rounded-xl p-6 md:p-8 lg:p-10 bg-transparent flex flex-col justify-between">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-1 items-stretch">

            {/* Left Column: Contact Details + View Counter */}
            <div className="flex flex-col justify-between h-full space-y-6">

              {/* Contact Details Box */}
              <div className="border border-gold/20 rounded-lg p-5 space-y-6 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className={`${bangers.className} text-3xl text-gold tracking-wide mb-4`}>
                    CONTACT DETAILS
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Have an idea, project, or opportunity you want to discuss? Reach out via email or connect with me on social platforms.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-500 font-bold">EMAIL</span>
                    <a href="mailto:kolipakasiddhu.work@gmail.com" className="text-gold hover:underline font-bold text-sm">
                      kolipakasiddhu.work@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-500 font-bold">LOCATION</span>
                    <span className="text-white text-sm">Hyderabad, India</span>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <a href="https://github.com/siddhu-kolipaka" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold text-sm">
                      GitHub
                    </a>
                    <span className="text-slate-600">|</span>
                    <a href="https://www.linkedin.com/in/siddharth-kolipaka" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* View Counter Card (Pop design) */}
              <div className="border border-gold rounded-lg p-5 bg-gold/5 shadow-[0_0_15px_rgba(230,180,34,0.08)] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-[10px] text-gold uppercase tracking-wider font-bold">PORTFOLIO VIEWS</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-bold">LIVE TELEMETRY</span>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-gold/15 pt-3">
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Total Views</span>
                    <span className="text-2xl font-bold text-cyan-400 font-mono tracking-wider block mt-0.5">
                      {views.views.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Unique Visitors</span>
                    <span className="text-2xl font-bold text-amber-400 font-mono tracking-wider block mt-0.5">
                      {views.uniqueViews.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <form onSubmit={handleSubmit} className="border border-gold/20 rounded-lg p-5 flex flex-col justify-between h-full space-y-6">

              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div>
                  <h3 className={`${bangers.className} text-3xl text-gold tracking-wide mb-4`}>
                    SEND MESSAGE
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Send a message directly to my inbox using the secure form below.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name & Email in one row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-[9px] text-gold uppercase tracking-wider font-bold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-transparent border border-zinc-800 focus:border-gold rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-[9px] text-gold uppercase tracking-wider font-bold">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-transparent border border-zinc-800 focus:border-cyan-400 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-[9px] text-gold uppercase tracking-wider font-bold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity"
                      className="w-full bg-transparent border border-zinc-800 focus:border-amber-400 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-[9px] text-gold uppercase tracking-wider font-bold">Your Message</label>
                    <textarea
                      name="message"
                      id="contact-message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full bg-transparent border border-zinc-800 focus:border-gold rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {statusMsg.text && (
                  <div className="text-[10px] text-gold border border-gold/30 rounded px-3 py-2 bg-transparent font-mono">
                    {statusMsg.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-transparent border border-gold text-gold rounded-lg uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:bg-gold hover:text-black cursor-pointer shadow-[0_0_10px_rgba(230,180,34,0.1)] hover:shadow-[0_0_20px_rgba(230,180,34,0.3)] disabled:opacity-50"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gold/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 z-10 gap-2 font-mono">
        <span>&copy; {new Date().getFullYear()} Siddharth Kolipaka</span>
        <span>PORTFOLIO CORE // LIVE</span>
      </footer>

    </div>
  );
}
