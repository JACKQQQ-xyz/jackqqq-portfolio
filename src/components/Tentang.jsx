import Dataimage from "../data";

const Tentang = () => {
  return (
    <div className="tentang mt-32 py-10" id="about">
      <div className="xl:w-3/4 w-full mx-auto bg-zinc-800 rounded-lg p-10" data-aos="fade-up">
        <p className="text-base/loose mb-10">
          Saya, Mochammad Dzaky Azzam, pelajar SMK Telkom Malang jurusan RPL
            dengan minat di fotografi, videografi, broadcasting, dan multimedia.
            Aktif sebagai kru live streaming untuk wisuda dan event OSIS, serta
            pengurus OSIS yang mengasah kemampuan kerja tim dan kepemimpinan.
            Terampil dalam penggunaan aplikasi multimedia, sekarang di kelas 11
            dengan expertise Fullstack, serta terus mengembangkan diri untuk
            menjadi Fullstack Developer yang kreatif dan adaptif.
        </p>
        <div className="flex items-center justify-between">
          <img src={Dataimage.HeroImage} alt="Image"
            className="w-12 rounded-md sm:block hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-4xl mb-1">3<span className="text-yellow-400">+</span></h1>
              <p>Proyek Selesai</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-4xl mb-1">1<span className="text-yellow-400">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
