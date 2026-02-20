import Header from "@/components/Header";
import Link from "next/link";

const rules = [
  "Only teams of 2–4 members are eligible to participate.",
  "All teams must complete their registration before the specified deadline.",
  "Competition topics will be shared with participants 3–4 days prior to the event.",
  "Teams have 5–7 minutes to present their idea, followed by a 3–5 minute Q&A.",
  "Judges will select the top-performing teams to move forward based on the initial pitch.",
  "Shortlisted teams will receive direct feedback from judges to enhance their concepts.",
  "Teams will be given 1 hour to refine and improve their ideas after the first round.",
  "Evaluation focuses on innovation, feasibility, impact, improvement, and presentation skills.",
  "Technical Setup: Participants must bring their own laptops and necessary power adapters.",
  "Originality is mandatory; copying ideas or repeated time limit violations will lead to disqualification.",
];

export default function AideathonRulebook() {
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
          AIdeathon - Rule Book
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
