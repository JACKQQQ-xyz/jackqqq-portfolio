import { useState } from "react";
import { achievements, certifications } from "../data";

const Achievements = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  return (
    <section id="achievements" className="mt-32 text-center">
      <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Achievements & Certifications
      </h2>
      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 w-full text-base opacity-50 mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        A showcase of my accomplishments and certifications earned throughout my journey.
      </p>

      {/* Achievements */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">
          Achievements
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {(showAllAchievements ? achievements : achievements.slice(0, 2)).map((item, i) => (
            <div
              key={item.id}
              className="p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 text-left flex gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-50">{item.year}</p>
                <p className="text-sm opacity-75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {achievements.length > 2 && (
          <button
            onClick={() => setShowAllAchievements(!showAllAchievements)}
            className="mt-6 px-6 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          >
            {showAllAchievements ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {(showAllCertifications ? certifications : certifications.slice(0, 2)).map((item, i) => (
            <div
              key={item.id}
              className="p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 text-left flex gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-50">{item.issuer}</p>
                <p className="text-sm opacity-75">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
        {certifications.length > 2 && (
          <button
            onClick={() => setShowAllCertifications(!showAllCertifications)}
            className="mt-6 px-6 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          >
            {showAllCertifications ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Achievements;
