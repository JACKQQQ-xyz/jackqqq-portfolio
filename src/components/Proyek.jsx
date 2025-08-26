import { listProyek } from "../data";
import LoadMore from "./LoadMore";

const Proyek = () => (
  <div className="proyek mt-16 py-10" id="projects">
    <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up">
      Projects
    </h1>
    <p
      className="mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 w-full text-base/loose opacity-50 text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Koleksi project dan pengalaman yang telah saya kerjakan, sebagai bentuk
      perjalanan, pembelajaran, dan pengembangan diri saya.
    </p>

    <LoadMore
      items={[...listProyek].reverse()}
      itemsPerLoad={3}
      gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
      renderItem={(proyek, index) => (
        <div
          key={proyek.id}
          className="p-4 bg-zinc-800 rounded-md flex flex-col h-full"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Gambar dengan tinggi fix & lebar auto */}
          <div className="w-full bg-zinc-900 rounded-md flex items-center justify-center">
            <img
              src={proyek.gambar}
              alt={proyek.nama}
              className="h-64 w-auto object-contain"
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl font-bold mt-4 mb-1">{proyek.nama}</h1>

          {/* Deskripsi (scroll kalau kepanjangan) */}
          <p className="text-base/loose mb-4 flex-1 overflow-y-auto max-h-32">
            {proyek.desk}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, i) => (
              <p
                key={i}
                className="py-1 px-3 border border-zinc-500 rounded-md bg-zinc-600 font-semibold"
              >
                {tool}
              </p>
            ))}
          </div>

          {/* Tombol */}
          <div className="flex flex-col gap-2 mt-auto">
            <div className="flex gap-2 mt-4">
              {proyek.demo && (
                <a
                  className="flex-1 bg-yellow-500 p-3 rounded-lg text-center font-semibold hover:bg-yellow-400 transition ease-in-out"
                  href={proyek.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}

              {proyek.github && (
                <a
                  className="w-12 bg-gray-700 p-2 rounded-lg flex items-center justify-center hover:bg-gray-600 transition ease-in-out"
                  href={proyek.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill text-xl"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      showLoadLess={true}
    />
  </div>
);

export default Proyek;
