export default function MusicLinks() {
  const navigation = [
    {
      name: "Spotify",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-spotify-fill",
    },
    {
      name: "Apple Music",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-music-2-fill",
    },
    {
      name: "Soundcloud",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-soundcloud-fill",
    },
    {
      name: "Youtube",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-youtube-fill",
    },
    {
      name: "Amazon Music",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-amazon-fill",
    },
    // {
    //   name: "Deezer",
    //   href: "https://www.facebook.com/profile.php?id=100082491862685",
    //   icon: "ri-deezer-fill",
    // },
  ];
  return (
    <div className="z-50 fixed top-0 w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <i className={`${item.icon} ri-xl`}></i>
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          {/* <p className="text-center text-xs leading-5 text-gray-500">USB-GAD</p> */}
        </div>
      </div>
    </div>
  );
}
