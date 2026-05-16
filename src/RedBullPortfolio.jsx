import React, { useState, useEffect } from "react";

// Import the 8 separate images for each section
import homeImg from "./assets/1-home.png";
import researchImg from "./assets/2-research.png";
import ideasImg from "./assets/3-ideas.png";
import pitchImg from "./assets/4-pitch.png";
import designImg from "./assets/5-design.png";
import videoImg from "./assets/6-video.png";
import analyticsImg from "./assets/7-analytics.png";
import reflectionImg from "./assets/8-reflection.png";

export default function RedBullPortfolio() {
    const [activeTab, setActiveTab] = useState("home");

    // Highlight the active nav tab while scrolling
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            let current = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                if (window.pageYOffset >= sectionTop) {
                    current = section.id;
                }
            });
            setActiveTab(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "research", label: "Background Research" },
        { id: "ideas", label: "Idea Generation" },
        { id: "pitch", label: "Pitching Ideas" },
        { id: "design", label: "Social Media Design" },
        { id: "video", label: "Video Production" },
        { id: "analytics", label: "Audience Research" },
        { id: "reflection", label: "Personal Reflection" },
        { id: "references", label: "References" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 font-sans scroll-smooth">
            {/* Header */}
            <header className="bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-white p-8 shadow-lg text-center">
                <h1 className="text-4xl font-bold">Red Bull Basement Digital Campaign</h1>
                <p className="mt-2 text-lg">
                    E-Portfolio | Managing the Communication Process (MKT2050)
                </p>
            </header>

            {/* Navigation Tabs */}
            <nav className="sticky top-0 bg-white shadow-md z-20">
                <div className="flex flex-wrap justify-center gap-4 p-4 text-sm font-semibold">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`px-3 py-1 rounded-lg transition-colors duration-300 ${activeTab === item.id
                                    ? "bg-red-500 text-white shadow-lg"
                                    : "hover:bg-red-100 text-red-700"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto p-6 space-y-10">
                {/* Home */}
                <section id="home" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-red-600">Home</h2>
                    <img src={homeImg} alt="Home" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        This e-portfolio documents my contributions to the Red Bull Basement University digital campaign — as <strong>social media copywriter, graphic designer, and photographer</strong>.
                    </p>
                    <p>
                        My work involved creating engaging visuals, capturing high-quality photographs, and producing social media content that aligns with the brand's energetic identity.
                    </p>
                </section>

                {/* Background Research */}
                <section id="research" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-orange-500">Background Research</h2>
                    <img src={researchImg} alt="Research" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Studied Red Bull Basement, student innovation, Gen Z digital behaviour, and the importance of social media campaigns. Analyzed trends using Statista, HubSpot, Mintel, WARC, and academic journals.
                    </p>
                </section>

                {/* Idea Generation */}
                <section id="ideas" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-500">Idea Generation</h2>
                    <img src={ideasImg} alt="Idea Generation" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Participated in brainstorming, team collaboration, moodboards, and draft posters. Generated campaign ideas including TikTok innovation challenges, Instagram Reels, and interactive polls.
                    </p>
                </section>

                {/* Pitching Ideas */}
                <section id="pitch" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-green-500">Pitching Ideas</h2>
                    <img src={pitchImg} alt="Pitching Ideas" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Presented campaign concepts to peers and mentors. My role emphasized photography and visual presentation. Feedback improved visuals, content, and engagement strategy.
                    </p>
                </section>

                {/* Social Media Design */}
                <section id="design" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-pink-500">Social Media Design</h2>
                    <img src={designImg} alt="Social Media Design" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Created Canva templates, Instagram layouts, typography, and color palettes. Photography assets were integrated into social media designs.
                    </p>
                </section>

                {/* Video Production */}
                <section id="video" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-purple-500">Video Production</h2>
                    <img src={videoImg} alt="Video Production" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Contributed photography and visuals to campaign videos. Assisted in scripting, filming, and editing to ensure consistent visual branding.
                    </p>
                </section>

                {/* Audience Research */}
                <section id="analytics" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-500">Audience Research & Analytics</h2>
                    <img src={analyticsImg} alt="Audience Research" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Conducted surveys, engagement metrics analysis, and KPI planning. Ensured photography and visuals matched target audience interests.
                    </p>
                </section>

                {/* Personal Reflection */}
                <section id="reflection" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-gray-700">Personal Reflection</h2>
                    <img src={reflectionImg} alt="Personal Reflection" className="w-full rounded-lg shadow-lg mb-4" />
                    <p>
                        Reflected on teamwork, photography, graphic design, and social media content creation. Skills improved in visual storytelling, collaboration, and campaign planning.
                    </p>
                </section>

                {/* References */}
                <section id="references" className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold mb-4">References</h2>
                    <p>
                        HubSpot, Statista, Mintel, WARC, Academic Journals.
                    </p>
                </section>

            </main>
        </div>
    );
}