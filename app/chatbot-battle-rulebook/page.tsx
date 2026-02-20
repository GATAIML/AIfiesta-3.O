import Header from "@/components/Header";
import Link from "next/link";

const rules = [
  "Participation can be individual or in teams of up to 2–3 members.",
  "All participants must complete their registration before the official deadline.",
  "The competition is a high-intensity, single-round battle conducted in the lab.",
  "You will have a total development window of approximately 5 hours (8:30 AM – 1:30 PM).",
  "Use any programming language, framework, or platform of your choice.",
  "Pre-trained models, APIs, and open-source tools are all permitted for your build.",
  "While templates are allowed, all major logic must be implemented during the event.",
  "Participants are required to bring their own laptops and chargers.",
  "Chatbots will be tested by judges using a common set of prompts for accuracy and speed.",
  "Scoring is based on creativity, UI/UX, handling edge cases, and overall functionality.",
];

export default function ChatbotBattleRulebook() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-slate-100 text-black py-12 px-6">
      <Header />
      <nav className="w-full max-w-4xl mx-4 mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="px-6 py-3 border-2 border-black rounded-lg bg-white text-black font-semibold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="border-4 border-black rounded-2xl max-w-4xl w-full mx-4 p-8 bg-white shadow-[8px_8px_0px_black]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Chatbot Battle - Rule Book
        </h1>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-slate-50 border-2 border-black rounded-lg"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full">
                {index + 1}
              </span>
              <p className="text-lg text-gray-700">{rule}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="px-6 py-3 border-2 border-black rounded-lg bg-blue-500 text-black font-semibold shadow-[5px_5px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
