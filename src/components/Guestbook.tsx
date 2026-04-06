"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date | null;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        message: doc.data().message,
        createdAt: doc.data().createdAt?.toDate() ?? null,
      }));
      setEntries(newEntries);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    await addDoc(collection(db, "guestbook"), {
      name: name.trim(),
      message: message.trim(),
      createdAt: serverTimestamp(),
    });
    setName("");
    setMessage("");
    setSubmitting(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div>
          <label className="block text-sm font-medium text-warm-500 dark:text-warm-400 mb-1">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
            className="w-full px-4 py-2 rounded-lg bg-warm-200/50 dark:bg-warm-600/40 text-warm-600 dark:text-warm-300 border border-warm-200 dark:border-warm-600 focus:outline-none focus:ring-2 focus:ring-accent-400"
            placeholder="your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-500 dark:text-warm-400 mb-1">
            message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
            required
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-warm-200/50 dark:bg-warm-600/40 text-warm-600 dark:text-warm-300 border border-warm-200 dark:border-warm-600 focus:outline-none focus:ring-2 focus:ring-accent-400 resize-none"
            placeholder="leave a message!"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors disabled:opacity-50"
        >
          {submitting ? "signing..." : "sign guestbook"}
        </button>
      </form>

      <div className="space-y-6">
        {entries.length === 0 && (
          <p className="text-sm text-warm-400 dark:text-warm-500">
            no entries yet. be the first to sign!
          </p>
        )}
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="p-4 rounded-xl bg-warm-200/30 dark:bg-warm-600/20 border border-warm-200/50 dark:border-warm-600/30"
          >
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-medium text-warm-600 dark:text-warm-300">
                {entry.name}
              </span>
              {entry.createdAt && (
                <span className="text-xs text-warm-400/60 dark:text-warm-500/60">
                  {entry.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <p className="text-sm text-warm-500 dark:text-warm-400">
              {entry.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
