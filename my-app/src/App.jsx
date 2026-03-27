import { useState, useEffect, useRef } from "react";

const houses = [
  {
    name: "Gryffindor",
    colors: ["#740001", "#D3A625"],
    animal: "🦁",
    trait: "Bravery, Courage, Nerve",
    founder: "Godric Gryffindor",
    ghost: "Nearly Headless Nick",
    element: "Fire",
    desc: "Where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.",
  },
  {
    name: "Slytherin",
    colors: ["#1A472A", "#AAAAAA"],
    animal: "🐍",
    trait: "Ambition, Cunning, Leadership",
    founder: "Salazar Slytherin",
    ghost: "The Bloody Baron",
    element: "Water",
    desc: "Those cunning folk use any means to achieve their ends. Ambition, pride, resourcefulness.",
  },
  {
    name: "Hufflepuff",
    colors: ["#EEE117", "#60605A"],
    animal: "🦡",
    trait: "Loyalty, Patience, Dedication",
    founder: "Helga Hufflepuff",
    ghost: "The Fat Friar",
    element: "Earth",
    desc: "The good, the loyal, the patient, just and true. Hard work and fair play Hufflepuffs pursue.",
  },
  {
    name: "Ravenclaw",
    colors: ["#0E1A40", "#946B2D"],
    animal: "🦅",
    trait: "Wit, Wisdom, Creativity",
    founder: "Rowena Ravenclaw",
    ghost: "The Grey Lady",
    element: "Air",
    desc: "Wit beyond measure is man's greatest treasure. Ravenclaw prizes learning above all else.",
  },
];

const spells = [
  { name: "Expecto Patronum", type: "Charm", desc: "Conjures a Patronus to repel Dementors" },
  { name: "Avada Kedavra", type: "Curse", desc: "The Killing Curse — one of the Unforgivables" },
  { name: "Expelliarmus", type: "Charm", desc: "Disarms your opponent, Harry's signature spell" },
  { name: "Wingardium Leviosa", type: "Charm", desc: "Levitates objects into the air" },
  { name: "Alohomora", type: "Charm", desc: "Unlocks doors and windows" },
  { name: "Lumos", type: "Charm", desc: "Illuminates the tip of your wand" },
  { name: "Accio", type: "Charm", desc: "Summons objects to the caster" },
  { name: "Stupefy", type: "Hex", desc: "Stuns the target, rendering them unconscious" },
  { name: "Riddikulus", type: "Charm", desc: "Transforms a Boggart into something amusing" },
  { name: "Sectumsempra", type: "Dark", desc: "Slashes the target with invisible blades" },
   { name: "swap", type: "Charm", desc: "swap the souls" },
];

const characters = [
  { name: "Harry Potter", role: "The Boy Who Lived", house: "Gryffindor", emoji: "⚡" },
  { name: "Hermione Granger", role: "The Brightest Witch", house: "Gryffindor", emoji: "📚" },
  { name: "Ron Weasley", role: "The Loyal Friend", house: "Gryffindor", emoji: "♟️" },
  { name: "Albus Dumbledore", role: "Headmaster of Hogwarts", house: "Gryffindor", emoji: "🔮" },
  { name: "Severus Snape", role: "Potions Master", house: "Slytherin", emoji: "🧪" },
  { name: "Draco Malfoy", role: "The Rival", house: "Slytherin", emoji: "🐍" },
  { name: "Luna Lovegood", role: "Dreamer & Seer", house: "Ravenclaw", emoji: "🌙" },
  { name: "Neville Longbottom", role: "The Unlikely Hero", house: "Gryffindor", emoji: "🌿" },
];

const Stars = () => {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "white",
            animation: `twinkle ${s.dur}s ${s.delay}s infinite alternate`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    delay: Math.random() * 8,
    dur: Math.random() * 6 + 8,
    size: Math.random() * 6 + 3,
    glyph: ["✦", "✧", "⋆", "·", "★", "✵"][Math.floor(Math.random() * 6)],
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "-20px",
            fontSize: p.size,
            color: "rgba(255,215,100,0.4)",
            animation: `floatUp ${p.dur}s ${p.delay}s infinite linear`,
          }}
        >
          {p.glyph}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [sortedHouse, setSortedHouse] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  const [spellFilter, setSpellFilter] = useState("All");
  const [hoveredSpell, setHoveredSpell] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const sortingAnswers = useRef([]);

  const sortingQuestions = [
    { q: "What do you value most?", options: ["Courage", "Ambition", "Loyalty", "Wisdom"] },
    { q: "Your ideal Saturday:", options: ["Adventure outdoors", "Plotting your next move", "Helping a friend", "Reading all day"] },
    { q: "You face a dragon. You:", options: ["Charge it head-on", "Find its weakness", "Distract it for your friends", "Research it first"] },
  ];
  const [sortStep, setSortStep] = useState(0);

  const handleSortAnswer = (answer) => {
    sortingAnswers.current.push(answer);
    if (sortStep < sortingQuestions.length - 1) {
      setSortStep(sortStep + 1);
    } else {
      const map = { Courage: "Gryffindor", Ambition: "Slytherin", Loyalty: "Hufflepuff", Wisdom: "Ravenclaw",
        "Charge it head-on": "Gryffindor", "Find its weakness": "Slytherin", "Distract it for your friends": "Hufflepuff", "Research it first": "Ravenclaw",
        "Adventure outdoors": "Gryffindor", "Plotting your next move": "Slytherin", "Helping a friend": "Hufflepuff", "Reading all day": "Ravenclaw" };
      const counts = {};
      sortingAnswers.current.forEach((a) => { const h = map[a]; counts[h] = (counts[h] || 0) + 1; });
      const result = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setIsSorting(false);
      setSortedHouse(result);
      sortingAnswers.current = [];
      setSortStep(0);
    }
  };

  const houseColors = {
    Gryffindor: { bg: "#740001", accent: "#D3A625" },
    Slytherin: { bg: "#1A472A", accent: "#AAAAAA" },
    Hufflepuff: { bg: "#372E29", accent: "#EEE117" },
    Ravenclaw: { bg: "#0E1A40", accent: "#946B2D" },
  };

  const spellTypes = ["All", "Charm", "Curse", "Hex", "Dark" ,"swap"];
  const filteredSpells = spellFilter === "All" ? spells : spells.filter((s) => s.type === spellFilter);

  const navItems = ["home", "houses", "spellbook", "characters", "sorting"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=IM+Fell+English:ital@0;1&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          background: #060914;
          color: #e8dcc8;
          font-family: 'IM Fell English', Georgia, serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        :root {
          --gold: #D4AF37;
          --gold-light: #F2D675;
          --parchment: #e8dcc8;
          --ink: #1a1005;
          --deep: #060914;
          --mid: #0d1527;
        }

        @keyframes twinkle {
          from { opacity: 0.2; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.3); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(212,175,55,0.3); }
          50% { box-shadow: 0 0 50px rgba(212,175,55,0.8), 0 0 100px rgba(212,175,55,0.2); }
        }
        @keyframes wandFlick {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.05); }
          75% { transform: rotate(10deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes sortingHat {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes borderDance {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: linear-gradient(180deg, rgba(6,9,20,0.98) 0%, rgba(6,9,20,0.7) 100%);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212,175,55,0.2);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .nav-logo {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1.1rem;
          color: var(--gold);
          letter-spacing: 0.05em;
          cursor: pointer;
          text-shadow: 0 0 20px rgba(212,175,55,0.5);
        }

        .nav-links {
          display: flex;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-link {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(232,220,200,0.6);
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--gold);
          border-color: rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.05);
          text-shadow: 0 0 10px rgba(212,175,55,0.4);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          width: 24px; height: 2px;
          background: var(--gold);
          border-radius: 2px;
          transition: all 0.3s;
        }

        @media (max-width: 700px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed;
            top: 70px; left: 0; right: 0;
            background: rgba(6,9,20,0.98);
            border-bottom: 1px solid rgba(212,175,55,0.2);
            z-index: 99;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .section {
          min-height: 100vh;
          position: relative;
          z-index: 1;
          padding-top: 70px;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          text-align: center;
          padding: 2rem;
          position: relative;
        }

        .hero-crest {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 30px rgba(212,175,55,0.6));
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .hero-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(2rem, 6vw, 4.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #D4AF37 0%, #F2D675 30%, #D4AF37 60%, #946B2D 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s ease infinite;
          line-height: 1.1;
          margin-bottom: 0.75rem;
          letter-spacing: 0.03em;
        }

        .hero-subtitle {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.8rem, 2vw, 1rem);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.7);
          margin-bottom: 2rem;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: rgba(232,220,200,0.7);
          max-width: 500px;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 3rem;
        }

        .btn-primary {
          font-family: 'Cinzel', serif;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink);
          background: linear-gradient(135deg, #D4AF37, #F2D675, #D4AF37);
          background-size: 200%;
          border: none;
          padding: 1rem 2.5rem;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.3s;
          animation: shimmer 3s linear infinite;
          position: relative;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(212,175,55,0.5);
        }

        .divider {
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 2rem;
        }

        .section-header {
          text-align: center;
          padding: 4rem 2rem 2rem;
        }
        .section-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: var(--gold);
          text-shadow: 0 0 30px rgba(212,175,55,0.4);
          margin-bottom: 0.75rem;
        }
        .section-subtitle {
          font-style: italic;
          color: rgba(232,220,200,0.5);
          font-size: 0.95rem;
        }

        /* HOUSES */
        .houses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .house-card {
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(212,175,55,0.1);
          animation: fadeInUp 0.6s ease backwards;
        }
        .house-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }

        .house-card-inner {
          padding: 2rem;
          height: 100%;
        }

        .house-animal {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .house-name {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .house-trait {
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 1rem;
          font-family: 'Cinzel', serif;
        }

        .house-desc {
          font-style: italic;
          font-size: 0.9rem;
          line-height: 1.7;
          opacity: 0.8;
        }

        .house-detail-row {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .house-detail-pill {
          font-size: 0.72rem;
          font-family: 'Cinzel', serif;
          letter-spacing: 0.08em;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal {
          background: linear-gradient(135deg, #0d1527 0%, #060914 100%);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 12px;
          padding: 2.5rem;
          max-width: 520px;
          width: 100%;
          position: relative;
          animation: fadeInUp 0.3s ease;
          box-shadow: 0 0 80px rgba(212,175,55,0.15);
        }

        .modal-close {
          position: absolute;
          top: 1rem; right: 1.5rem;
          background: none;
          border: none;
          color: rgba(212,175,55,0.6);
          font-size: 1.5rem;
          cursor: pointer;
          font-family: 'Cinzel', serif;
          transition: color 0.2s;
        }
        .modal-close:hover { color: var(--gold); }

        /* SPELLBOOK */
        .spell-filters {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          padding: 1rem 2rem;
        }

        .filter-btn {
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.4rem 1.2rem;
          border-radius: 20px;
          border: 1px solid rgba(212,175,55,0.3);
          background: transparent;
          color: rgba(232,220,200,0.6);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover, .filter-btn.active {
          background: rgba(212,175,55,0.15);
          color: var(--gold);
          border-color: var(--gold);
        }

        .spells-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1rem;
          padding: 1.5rem 2rem 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .spell-card {
          background: rgba(13,21,39,0.8);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .spell-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .spell-card:hover::before { opacity: 1; }
        .spell-card:hover {
          border-color: rgba(212,175,55,0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .spell-name {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: var(--gold-light);
          margin-bottom: 0.4rem;
          font-style: italic;
        }

        .spell-type-badge {
          font-size: 0.65rem;
          font-family: 'Cinzel', serif;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.2rem 0.7rem;
          border-radius: 10px;
          margin-bottom: 0.8rem;
          display: inline-block;
        }

        .spell-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(232,220,200,0.65);
          font-style: italic;
        }

        /* CHARACTERS */
        .chars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
          padding: 2rem 2rem 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .char-card {
          background: rgba(13,21,39,0.8);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 10px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s;
          animation: fadeInUp 0.5s ease backwards;
        }
        .char-card:hover {
          border-color: rgba(212,175,55,0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .char-emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 10px rgba(212,175,55,0.3));
        }

        .char-name {
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          color: var(--gold-light);
          margin-bottom: 0.4rem;
        }

        .char-role {
          font-size: 0.82rem;
          color: rgba(232,220,200,0.5);
          font-style: italic;
          margin-bottom: 0.8rem;
        }

        .char-house-badge {
          font-size: 0.65rem;
          font-family: 'Cinzel', serif;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
        }

        /* SORTING */
        .sorting-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 70px);
          padding: 2rem;
          text-align: center;
        }

        .sorting-hat-emoji {
          font-size: 6rem;
          display: block;
          animation: sortingHat 2s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(212,175,55,0.4));
          margin-bottom: 1.5rem;
        }

        .sorting-question {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--parchment);
          margin-bottom: 2rem;
          max-width: 400px;
          line-height: 1.6;
        }

        .sorting-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          max-width: 400px;
          width: 100%;
        }

        .sort-option {
          font-family: 'Cinzel', serif;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          color: var(--parchment);
          background: rgba(13,21,39,0.8);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.25s;
        }
        .sort-option:hover {
          background: rgba(212,175,55,0.1);
          border-color: var(--gold);
          color: var(--gold);
          transform: scale(1.03);
        }

        .result-card {
          background: rgba(13,21,39,0.9);
          border: 2px solid rgba(212,175,55,0.5);
          border-radius: 16px;
          padding: 3rem;
          max-width: 480px;
          animation: fadeInUp 0.5s ease;
          box-shadow: 0 0 80px rgba(212,175,55,0.2);
        }

        .result-house-name {
          font-family: 'Cinzel Decorative', serif;
          font-size: 2.5rem;
          margin: 1rem 0 0.5rem;
        }

        .progress-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .progress-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.4);
          transition: background 0.3s;
        }
        .progress-dot.filled { background: var(--gold); border-color: var(--gold); }
      `}</style>

      <Stars />
      <FloatingParticles />

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo" onClick={() => setActiveSection("home")}>⚡ Hogwarts</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <div
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <div
              key={item}
              className={`nav-link ${activeSection === item ? "active" : ""}`}
              onClick={() => { setActiveSection(item); setMenuOpen(false); }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* HOME */}
      {activeSection === "home" && (
        <section className="section hero">
          <div className="hero-crest">⚡</div>
          <h1 className="hero-title">The Wizarding World</h1>
          <p className="hero-subtitle">Hogwarts School of Witchcraft & Wizardry</p>
          <div className="divider" />
          <p className="hero-desc">
            "It does not do to dwell on dreams and forget to live."<br/>
            — Albus Percival Wulfric Brian Dumbledore
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => setActiveSection("houses")}>
              Explore the Houses
            </button>
            <button
              className="btn-primary"
              style={{ background: "transparent", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.5)" }}
              onClick={() => setActiveSection("sorting")}
            >
              Get Sorted
            </button>
          </div>

          {/* Floating house crests */}
          <div style={{ display: "flex", gap: "3rem", marginTop: "5rem", flexWrap: "wrap", justifyContent: "center", opacity: 0.5 }}>
            {["🦁", "🐍", "🦡", "🦅r"].map((e, i) => (
              <span key={i} style={{ fontSize: "2rem", animation: `twinkle ${2 + i * 0.5}s ${i * 0.3}s infinite alternate` }}>{e}</span>
            ))}
          </div>
        </section>
      )}

      {/* HOUSES */}
      {activeSection === "houses" && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">The Four Houses</h2>
            <p className="section-subtitle">Founded by the four greatest witches and wizards of the age</p>
          </div>
          <div className="houses-grid">
            {houses.map((house, i) => (
              <div
                key={house.name}
                className="house-card"
                style={{
                  background: `linear-gradient(135deg, ${house.colors[0]}cc 0%, ${house.colors[0]}88 100%)`,
                  animationDelay: `${i * 0.1}s`,
                  borderColor: `${house.colors[1]}40`,
                }}
                onClick={() => setSelectedHouse(house)}
              >
                <div className="house-card-inner">
                  <span className="house-animal">{house.animal}</span>
                  <div className="house-name" style={{ color: house.colors[1] }}>{house.name}</div>
                  <div className="house-trait" style={{ color: `${house.colors[1]}99` }}>{house.trait}</div>
                  <div className="house-desc">{house.desc}</div>
                  <div className="house-detail-row">
                    <span className="house-detail-pill" style={{ borderColor: `${house.colors[1]}30`, color: house.colors[1] }}>
                      {house.element}
                    </span>
                    <span className="house-detail-pill" style={{ borderColor: `${house.colors[1]}30`, color: house.colors[1] }}>
                      {house.ghost}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* HOUSE MODAL */}
      {selectedHouse && (
        <div className="modal-overlay" onClick={() => setSelectedHouse(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}
            style={{ borderColor: `${selectedHouse.colors[1]}50` }}>
            <button className="modal-close" onClick={() => setSelectedHouse(null)}>×</button>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "4rem", display: "block", marginBottom: "1rem" }}>{selectedHouse.animal}</span>
              <h3 style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "1.8rem",
                color: selectedHouse.colors[1],
                marginBottom: "0.5rem",
                textShadow: `0 0 20px ${selectedHouse.colors[1]}60`,
              }}>{selectedHouse.name}</h3>
              <p style={{ fontStyle: "italic", color: "rgba(232,220,200,0.5)", marginBottom: "1.5rem" }}>
                Founded by {selectedHouse.founder}
              </p>
              <div className="divider" />
              <p style={{ lineHeight: 1.8, color: "rgba(232,220,200,0.8)", marginBottom: "1.5rem" }}>
                {selectedHouse.desc}
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  ["Element", selectedHouse.element],
                  ["Ghost", selectedHouse.ghost],
                  ["Values", selectedHouse.trait],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    background: `${selectedHouse.colors[0]}44`,
                    border: `1px solid ${selectedHouse.colors[1]}30`,
                    borderRadius: 8,
                    padding: "0.75rem 1rem",
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: "0.65rem", fontFamily: "'Cinzel', serif", letterSpacing: "0.1em", color: selectedHouse.colors[1], marginBottom: 4, textTransform: "uppercase" }}>{k}</div>
                    <div style={{ fontSize: "0.88rem", color: "rgba(232,220,200,0.8)" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SPELLBOOK */}
      {activeSection === "spellbook" && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">📖 The Spellbook</h2>
            <p className="section-subtitle">A compendium of charms, hexes, and curses</p>
          </div>
          <div className="spell-filters">
            {spellTypes.map((t) => (
              <button
                key={t}
                className={`filter-btn ${spellFilter === t ? "active" : ""}`}
                onClick={() => setSpellFilter(t)}
              >{t}</button>
            ))}
          </div>
          <div className="spells-grid">
            {filteredSpells.map((spell, i) => {
              const typeColors = {
                Charm: ["#1a3a5c", "#60a5fa"],
                Curse: ["#3a1a1a", "#f87171"],
                Hex: ["#2a1a3a", "#c084fc"],
                Dark: ["#1a1a1a", "#6b7280"],
              };
              const [bg, accent] = typeColors[spell.type] || ["#1a1a2e", "#D4AF37"];
              return (
                <div
                  key={spell.name}
                  className="spell-card"
                  style={{ animationDelay: `${i * 0.05}s`, background: `${bg}cc` }}
                >
                  <div className="spell-name">✦ {spell.name}</div>
                  <span
                    className="spell-type-badge"
                    style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
                  >{spell.type}</span>
                  <div className="spell-desc">{spell.desc}</div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CHARACTERS */}
      {activeSection === "characters" && (
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">✦ Characters</h2>
            <p className="section-subtitle">The witches and wizards who shaped history</p>
          </div>
          <div className="chars-grid">
            {characters.map((char, i) => {
              const hc = houseColors[char.house] || { bg: "#1a1a2e", accent: "#D4AF37" };
              return (
                <div
                  key={char.name}
                  className="char-card"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="char-emoji">{char.emoji}</span>
                  <div className="char-name">{char.name}</div>
                  <div className="char-role">{char.role}</div>
                  <span
                    className="char-house-badge"
                    style={{
                      background: `${hc.bg}80`,
                      color: hc.accent,
                      border: `1px solid ${hc.accent}40`,
                    }}
                  >{char.house}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SORTING HAT */}
      {activeSection === "sorting" && (
        <section className="section">
          <div className="sorting-container">
            {!isSorting && !sortedHouse && (
              <>
                <span className="sorting-hat-emoji">🎩</span>
                <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1.8rem", color: "var(--gold)", marginBottom: "1rem" }}>
                  The Sorting Hat
                </h2>
                <p style={{ color: "rgba(232,220,200,0.6)", fontStyle: "italic", marginBottom: "2rem", maxWidth: 380, lineHeight: 1.7 }}>
                  "A thousand years or more ago, when I was newly sewn,
                  there lived four wizards of renown, whose names are still well known…"
                </p>
                <button className="btn-primary" onClick={() => setIsSorting(true)}>
                  Put on the Hat
                </button>
              </>
            )}

            {isSorting && !sortedHouse && (
              <>
                <span className="sorting-hat-emoji">🎩</span>
                <div className="progress-bar" style={{ justifyContent: "center" }}>
                  {sortingQuestions.map((_, i) => (
                    <div key={i} className={`progress-dot ${i <= sortStep ? "filled" : ""}`} />
                  ))}
                </div>
                <p className="sorting-question">{sortingQuestions[sortStep].q}</p>
                <div className="sorting-options">
                  {sortingQuestions[sortStep].options.map((opt) => (
                    <button key={opt} className="sort-option" onClick={() => handleSortAnswer(opt)}>{opt}</button>
                  ))}
                </div>
              </>
            )}

            {sortedHouse && (() => {
              const house = houses.find((h) => h.name === sortedHouse);
              const hc = houseColors[sortedHouse];
              return (
                <div className="result-card" style={{ borderColor: `${hc.accent}60` }}>
                  <div style={{ fontSize: "3rem" }}>{house.animal}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "rgba(232,220,200,0.5)", marginTop: "0.5rem" }}>
                    THE SORTING HAT DECLARES
                  </div>
                  <div className="result-house-name" style={{ color: hc.accent, textShadow: `0 0 30px ${hc.accent}60` }}>
                    {sortedHouse}
                  </div>
                  <div className="divider" style={{ marginBottom: "1rem" }} />
                  <p style={{ fontStyle: "italic", color: "rgba(232,220,200,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {house.desc}
                  </p>
                  <button
                    className="btn-primary"
                    style={{ background: "transparent", color: hc.accent, border: `1px solid ${hc.accent}60` }}
                    onClick={() => { setSortedHouse(null); setSortStep(0); }}
                  >
                    Sort Again
                  </button>
                </div>
              );
            })()}
          </div>
        </section>
      )}
    </>
  );
}
