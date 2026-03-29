"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  "hi! :D",
  "welcome to my site!",
  "hope you're having a good day!",
  "thanks for visiting!",
  "nice ta meetcha!",
  "go check out my projects!",
  "(*^▽^*)",
  "₍ᐢ. ̫.ᐢ₎",
  "have a great day!",
  "click me again!",
  "have you listened to... the beatles?",
  "bruh",
  "song recs?",
  "ahahhha",
  "wow",
  "really?",
  "interesting!",
  "(▰˘◡˘▰)",
  ":D",
  "yay thanks for visiting!",
  "eat some good food today!",
  "what do you think?",
  "oh man",
  "it ok",
  "it's so over",
  "lorem ipsum blah blah blah",
  "the quick brown fox jumps over the lazy dog",
  "what if the lazy dog jumps of the quick brown fox?",
  "guhhhhh...",
  "hey, you!!",
  "what more should i add to this",
  "har har har har har har",
  "meow",
  "da beatles",
  "i'm pushing 20",
  "hoi",
  "ahoy!",
  "click meeeeeeee",
  "blink blink blink",
  "in the off chance it is, happy birthday?",
  "how many dialogue options do i have before i start saying the same lines?",
  "grammar...",
  "yahahah",
  "heh...",
  "erp...",
  "look at my projects!",
  "want to know more about me? go there!",
  "i need to fix my sleep schedule",
  "welcome to zoey's!",
  "come in come in",
  "nice to see you here",
  "like games? look at my projects :O",
  "yahoo",
  "my best friend is google",
  "thanks for looking around",
  "tell me what you think!",
  "beep boop",
  "error 404",
  "hihihi",
  "welcome back",
  "thinking...",
  ":)",
  ":O",
  ":D",
  "≧◡≦",
  "ヾ(＠＾▽＾＠)ﾉ",
  ".=^.^=",
  "✌(‘ω’✌)",
  "ヾ(^ิ∀^ิ)",
  "ଘ(੭ˊ꒳ˋ)੭✧",
  "(｡≍ฺ‿≍)⚟ʜᴇʜ♥",
  "d(=^･ω･^=)b",
  "(^∇^)",
  "(๑･`◡´･๑)",
];

export default function Mascot() {
  const [blinking, setBlinking] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [msgKey, setMsgKey] = useState(0);
  const [hopping, setHopping] = useState(false);

  useEffect(() => {
    const scheduleBlink = () => {
      const delay = 1500 + Math.random() * 2000;
      return setTimeout(() => {
        setBlinking(true);
        setTimeout(() => {
          setBlinking(false);
          timerId = scheduleBlink();
        }, 150);
      }, delay);
    };

    let timerId = scheduleBlink();
    return () => clearTimeout(timerId);
  }, []);

  // Random idle chatter
  useEffect(() => {
    const scheduleChat = () => {
      const delay = 15000 + Math.random() * 20000; // 15-35 seconds
      return setTimeout(() => {
        const msg = messages[Math.floor(Math.random() * messages.length)];
        setMessage(null);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setMessage(msg);
            setMsgKey((k) => k + 1);
          });
        });
        chatTimer = scheduleChat();
      }, delay);
    };

    let chatTimer = scheduleChat();
    return () => clearTimeout(chatTimer);
  }, []);

  const handleClick = useCallback(() => {
    new Audio("/click.mp3").play();
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(null);
    setHopping(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMessage(msg);
        setMsgKey((k) => k + 1);
        setHopping(true);
      });
    });
  }, []);

  return (
    <div className="fixed -bottom-2 right-4 z-40 select-none">
      {message && (
        <div
          key={msgKey}
          className="absolute top-1/2 -translate-y-1/2 right-full mr-3 text-sm text-warm-500 dark:text-warm-300 whitespace-nowrap animate-mascot-msg"
          onAnimationEnd={() => setMessage(null)}
        >
          {message}
        </div>
      )}
      <img
        src={message ? "/mascot-open-mouth.png" : blinking ? "/mascot-eyes-closed.png" : "/mascot-eyes-open.png"}
        alt=""
        onClick={handleClick}
        onAnimationEnd={(e) => { if (e.animationName === "hop") setHopping(false); }}
        className={`w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-md dark:invert cursor-pointer transition-[filter] duration-200 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ${hopping ? "animate-hop" : ""}`}
      />
    </div>
  );
}
