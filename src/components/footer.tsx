export default function Footer() {
  const navigation = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/usb_gad/",
      icon: "ri-instagram-fill",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100082491862685",
      icon: "ri-facebook-circle-fill",
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/usb_gad/",
      icon: "ri-twitter-fill",
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/usb_gad/",
      icon: "ri-tiktok-fill",
    },
    {
      name: "Telegram",
      href: "tg://join?invite=vS-8xPlgi9hkMzdh",
      icon: "ri-telegram-fill",
    },
    {
      name: "Email",
      href: "#",
      icon: "ri-mail-fill",
    },
  ];

  return (
    <footer className="z-50 fixed bottom-0 w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:flex-row-reverse md:items-center md:justify-between lg:px-8">
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
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} USB-GAD.
          </p>
        </div>
      </div>
    </footer>
  );
}
