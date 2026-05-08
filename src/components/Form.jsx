import { useState, useRef, useEffect } from "react";
import Lottie from 'lottie-react';
import animationData from "../lottie/tick.json";


const TYPES = {
  suggest:  { label: "Suggest a Theme",  icon: "✦", placeholder: "What fandom or vibe are you thinking of? What makes it special?", btnLabel: "Share the Idea"  },
  question: { label: "Ask a Question",   icon: "◎", placeholder: "What would you like to know?",                                    btnLabel: "Ask Away"        },
  issue:    { label: "Report an Issue",  icon: "△", placeholder: "What's broken or feeling off?",                                   btnLabel: "Report It"       },
  feedback: { label: "General Feedback", icon: "◈", placeholder: "What feels good? What feels off?",                                btnLabel: "Drop the Vibe"   },
};

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const TOTAL = 10; // seconds for success message countdown


export default function ThemeWorxForm() {
  const [type,   setType]   = useState("suggest");
  const [msg,    setMsg]    = useState("");
  const [email,  setEmail]  = useState("");
  const ghRef               = useRef("");
  const [status, setStatus] = useState("idle");
  const [taErr,  setTaErr]  = useState(false);
  const [countdown, setCountdown] = useState(10);
  const timerRef = useRef(null);
  const cfg       = TYPES[type];
  const isSending = status === "sending";
  const isErr     = status === "error";
  
  useEffect(() => {
    if (status === "success") {
      setCountdown(TOTAL);
      let c = TOTAL;
      timerRef.current = setInterval(() => {
        c -= 1;
        setCountdown(c);
        if (c <= 0) {
          clearInterval(timerRef.current);
          setStatus("idle");
          setType("suggest");
          setMsg("");
          setEmail("");
          ghRef.current = "";
        }
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [status]);

  const handleSelect = (val) => { setType(val); setMsg(""); };

  const handleSubmit = async () => {
    if (!msg.trim()) {
      setTaErr(true);
      setTimeout(() => setTaErr(false), 1600);
      return;
    }
    
    setStatus("sending");
    
    try {
      // Build complete message with all info
      const fullMessage = `
Type: ${type}
Message: ${msg}
GitHub: ${ghRef.current || "Not provided"}
      `.trim();
      
      const formData = {
        access_key: WEB3FORMS_KEY,
        subject: `ThemeWorx — ${cfg.btnLabel}`,
        name: "ThemeWorx User",
        email: email.trim() || "noreply@themeworx.com", // Must be valid email format
        message: fullMessage,
      };
      
      console.log('📤 Submitting:', formData); // Debug log
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Accept: "application/json" 
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log('📥 Response:', data); // Debug log
      
      if (data.success) {
        setStatus("success");
      } else {
        console.error('❌ Error:', data.message);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center">

      {/* Page */}
      <div className="w-full min-w-72">
        
        {/* Title */}
        <h1 className="text-5xl font-bold mb-3 text-white leading-tight font-poppins">
          Got a Vibe in Mind{" "}<span className="text-red-600">?</span>
        </h1>

        {/* Intro */}
        <p className="text-[#808080] text-lg mb-10 leading-relaxed">
          Have a theme idea, a question, or feedback? Drop it here.<br />
          If it fits, it ships.
        </p>

        {/* Card */}
        <div className="bg-white/[0.03] border-4 border-[#504f4f] rounded-4xl p-10 ">

          {status === "success" ? (
            <div className="text-center flex flex-col justify-center items-center">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 300, width: 300 }}
              />
              <h3 className="text-xl font-bold text-[#99989e] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                Dropped. We got it.
              </h3>
              <p className="text-[#99989e]/50 text-sm leading-relaxed">
                Thanks for contributing to the vibe.<br />We read everything.
              </p>
            </div>
          ) : (
            <>
              {/* Label */}
              <p className="text-[10px] uppercase tracking-widest text-[#99989e]/80 mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                What are you sending?
              </p>

              {/* Pills */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mb-7">
                {Object.keys(TYPES).map(k => (
                  <button key={k} type="button" onClick={() => handleSelect(k)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer
                      ${type === k
                        ? "border-red-700 bg-red-900/20 text-red-400"
                        : "border-white/10 bg-white/[0.02] text-[#99989e]/50 hover:border-white/20 hover:text-[#99989e]"
                      }`}>
                    <span>{TYPES[k].icon}</span>
                    {TYPES[k].label}
                  </button>
                ))}
              </div>

              {/* Textarea */}
              <textarea
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder={cfg.placeholder}
                rows={5}
                className={`w-full bg-[#0f0f0f]/70 border rounded-2xl px-5 py-4 text-sm text-[#99989e] placeholder-[#99989e]/30 resize-y outline-none transition-all duration-200 mb-5
                  ${taErr ? "border-red-700" : "border-white/[0.07]"}
                  focus:border-red-800 focus:ring-2 focus:ring-red-900/30`}
              />

              {/* Divider */}
              <div className="border-t border-white/[0.06] my-6" />

              {/* Optional fields */}
              <div className="grid grid-cols-2 gap-4 mb-7">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#99989e]/80"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    Email
                  </label>
                  <input type="email" placeholder="you@example.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    className="bg-[#0f0f0f]/70 border border-white/[0.07] rounded-full px-4 py-3 text-sm text-[#99989e] placeholder-[#99989e]/30 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-900/30 transition-all duration-200"
                  />
                  <span className="text-[11px] text-[#99989e]/30">Only if you want a reply.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#99989e]/80"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    GitHub
                  </label>
                  <input type="text" placeholder="@username"
                    onChange={e => (ghRef.current = e.target.value)}
                    className="bg-[#0f0f0f]/70 border border-white/[0.07] rounded-full px-4 py-3 text-sm text-[#99989e] placeholder-[#99989e]/30 outline-none focus:border-red-800 focus:ring-2 focus:ring-red-900/30 transition-all duration-200"
                  />
                  <span className="text-[11px] text-[#99989e]/30">Optional.</span>
                </div>
              </div>

              <input type="checkbox" name="botcheck" className="hidden" />

              {/* Submit */}
              <div className="flex flex-col items-center gap-3">
                <button type="button" disabled={isSending} onClick={handleSubmit}
                  className={`w-full py-4 rounded-full font-bold text-sm tracking-wider text-red-200 border border-red-800 bg-red-700 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-900/40 active:translate-y-0 transition-all duration-200
                    ${isSending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {isSending ? "Sending…" : isErr ? "Something went wrong — try again" : cfg.btnLabel}
                </button>

                <p className="text-[11px] text-[#99989e]/30 italic text-center leading-relaxed">
                  Not every idea becomes a theme.<br />But every idea gets read.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}