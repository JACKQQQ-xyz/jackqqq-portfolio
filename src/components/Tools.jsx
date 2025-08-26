import { listTools } from "../data";
import LoadMore from "./LoadMore";

const Tools = () => (
  <div className="tools mt-32 text-center" id="skills">
    <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
      Tools & Skills
    </h1>
    <p
      className="mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 w-full text-base/loose opacity-50"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Software, framework, dan bahasa pemrograman yang saya gunakan untuk mewujudkan ide kreatif menjadi karya digital.
    </p>

    <LoadMore
      items={listTools}
      itemsPerLoad={4}
      renderItem={(tool, index) => (
        <div key={tool.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="p-4 border border-zinc-700 rounded-md hover:bg-zinc-800 transition group text-left">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-14 h-14 bg-zinc-900 p-1 rounded-md group-hover:bg-zinc-950 transition"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50 text-sm">{tool.ket}</p>
              </div>
            </div>

            {/* Progress Container */}
            <div className="relative w-full">
              <div className="w-full h-[3px] bg-zinc-600 rounded-full"></div>
              <div
                className="absolute top-0 left-0 h-[3px] bg-yellow-500 rounded-full transition-all duration-700"
                style={{ width: `${tool.dad}%` }}
              ></div>
              <span className="absolute right-0 -top-5 text-xs text-white/70">
                {tool.dad}%
              </span>
            </div>
          </div>
        </div>
      )}
      showLoadLess={true}
    />
  </div>
);

export default Tools;
