import { useState } from "react";
import LoadMore from "./LoadMore";
import { achievements, certifications } from "../data";

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => setSelectedItem(item);
  const handleCloseModal = () => setSelectedItem(null);

  return (
    <section id="achievements" className="mt-32 text-center">
      {/* Judul Section */}
      <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Achievements & Certifications
      </h2>
      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 w-full text-base opacity-50 mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Kumpulan pencapaian dan sertifikasi yang telah saya raih selama perjalanan belajar
        dan pengalaman saya.
      </p>

      {/* Achievements
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">
          Achievements
        </h3>

        <LoadMore
          items={[...achievements].reverse()}
          itemsPerLoad={2}
          gridClassName="md:grid-cols-2 gap-6"
          renderItem={(item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="cursor-pointer p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 transition text-left flex gap-4 items-center"
            >
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
      </div> */}

      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-semibold mb-6" data-aos="fade-up">
          Certifications
        </h3>

        <LoadMore
          items={[...certifications].reverse()}
          itemsPerLoad={3}
          gridClassName="md:grid-cols-3 gap-6"
          renderItem={(item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="cursor-pointer p-4 border border-zinc-600 rounded-xl hover:bg-zinc-800 transition text-left flex gap-4 items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-auto h-30 rounded-lg object-cover"
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

        
      {/* Modal */}
{selectedItem && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-zinc-900 p-6 rounded-xl max-w-3xl w-full relative">
      {/* Tombol Close */}
      <button
        onClick={handleCloseModal}
        className="absolute top-3 right-3 text-white text-xl hover:text-yellow-400"
      >
        ✕
      </button>

      {/* Konten */}
      <div className="flex flex-col items-center">
        <img
          src={selectedItem.img}
          alt={selectedItem.title}
          className="w-auto h-auto max-h-[70vh] object-contain rounded-lg mb-4"
        />
        <h4 className="text-2xl font-bold mb-2">{selectedItem.title}</h4>
        {selectedItem.year && (
          <p className="text-sm opacity-50 mb-1">{selectedItem.year}</p>
        )}
        {selectedItem.issuer && (
          <p className="text-sm opacity-50 mb-1">{selectedItem.issuer}</p>
        )}
        {selectedItem.desc && (
          <p className="text-sm opacity-75">{selectedItem.desc}</p>
        )}
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Achievements;
