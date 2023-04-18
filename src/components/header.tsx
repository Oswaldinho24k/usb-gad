export default function Header() {
  return (
    <section
      id="coliseum"
      className={`h-screen w-full bg-[url(./assets/images/usb-gad.jpeg)] bg-repeat bg-center`}
    >
      <div className="flex h-screen w-full items-center justify-center bg-gray-700/80 text-white">
        <div>
          <h2 className="text-center font-bold text-5xl sm:text-8xl">
            USB GAD
          </h2>
          <p className="text-center text-xl sm:font-semibold sm:text-3xl">
            In Gad we trust
          </p>
        </div>
      </div>
    </section>
  );
}
