import LoadMore from "./LoadMore";
import { achievements, certifications } from "../data";

const Achievements = () => {
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

        <LoadMore
          items={achievements}
          itemsPerLoad={2}
          gridClassName="md:grid-cols-2 gap-6"
          renderItem={(item) => (
            <div className="p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 text-left flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-50">{item.year}</p>
                <p className="text-sm opacity-75">{item.desc}</p>
              </div>
            </div>
          )}
        />
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">
          Certifications
        </h3>

        <LoadMore
          items={certifications}
          itemsPerLoad={2}
          gridClassName="md:grid-cols-2 gap-6"
          renderItem={(item) => (
            <div className="p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 text-left flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-50">{item.issuer}</p>
                <p className="text-sm opacity-75">{item.year}</p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Achievements;
