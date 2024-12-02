import config from '../config/index.json';

const Footer = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia } = about;

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo ajustado para estar más cerca de los iconos */}
          <img src={logo} alt={companyName} className="w-20 h-auto mb-2" />
          <div className="flex items-center gap-x-6 mt-4 h-8">
            <a
              aria-label="facebook"
              href={socialMedia.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.352c0 .732.592 1.324 1.324 1.324h11.495v-9.284h-3.125v-3.621h3.125v-2.671c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.795.142v3.24h-1.919c-1.504 0-1.795.715-1.795 1.762v2.315h3.59l-.467 3.621h-3.123v9.284h6.122c.732 0 1.324-.592 1.324-1.324v-21.352c0-.732-.592-1.324-1.324-1.324z"/>
              </svg>
            </a>
            <a
              aria-label="mail"
              href={`mailto:${socialMedia.mail}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-6.713c-.197-.549-.719-.949-1.329-.949h-21.312c-.61 0-1.132.4-1.329.949l11.985 6.713zm11.985-4.075v11.362c0 .738-.607 1.343-1.353 1.343h-21.264c-.747 0-1.353-.605-1.353-1.343v-11.362l11.679 6.539c.197.111.43.171.674.171s.478-.061.674-.171l11.679-6.539z"/>
              </svg>
            </a>
            <a
              aria-label="whatsapp"
              href="https://wa.me/523322567808"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.478a11.93 11.93 0 00-8.44-3.478c-6.613 0-12 5.387-12 12 0 2.113.549 4.167 1.595 5.973l-1.044 3.767 3.895-1.016a11.942 11.942 0 005.553 1.411h.001c6.613 0 12-5.387 12-12a11.93 11.93 0 00-3.561-8.457zm-8.44 19.464a10.548 10.548 0 01-5.096-1.31l-.365-.203-2.306.601.621-2.228-.238-.375a10.493 10.493 0 01-1.452-5.354c0-5.812 4.729-10.541 10.541-10.541a10.503 10.503 0 017.459 3.073 10.491 10.491 0 013.081 7.459c0 5.812-4.729 10.541-10.541 10.541zm5.802-7.935c-.317-.159-1.874-.921-2.165-1.028-.291-.107-.503-.159-.714.16-.21.317-.82 1.028-1.005 1.243-.184.213-.369.238-.685.079-.317-.158-1.34-.494-2.549-1.577-.943-.84-1.579-1.875-1.762-2.192-.184-.317-.02-.488.138-.646.143-.142.317-.369.476-.554.159-.184.212-.317.318-.529.107-.213.053-.396-.026-.554-.08-.159-.714-1.723-.981-2.369-.258-.623-.52-.539-.714-.549-.184-.008-.396-.01-.608-.01-.211 0-.554.08-.844.396-.291.317-1.106 1.08-1.106 2.635s1.134 3.054 1.291 3.26c.159.211 2.234 3.415 5.413 4.782.758.327 1.348.522 1.81.668.762.243 1.457.21 2.006.128.612-.092 1.874-.766 2.14-1.508.264-.743.264-1.382.185-1.508-.079-.127-.288-.2-.603-.356z"/>
              </svg>
            </a>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
              &copy; {new Date().getFullYear()} designed by{' '}
              <a href="https://github.com/JoseMartinezM/FoodForAllGDL" rel="nofollow">
                Team 41
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
