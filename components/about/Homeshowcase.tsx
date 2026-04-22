const showcaseItems = [
  { id: "01", title: "Digital Twin of Dubai" },
  { id: "02", title: "BzNFTMart" },
  { id: "03", title: "AI Medical Imaging" },
  { id: "04", title: "AI Sustainability" },
];

function ArrowCircleButton() {
  return (
    <button
      type="button"
      aria-label="Open project"
      className="animate__animated animate__fadeInUp flex items-center justify-center"
      style={{
        width: "91px",
        height: "91px",
        backgroundColor: "#ffffff",
        color: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        fontSize: "62px",
        borderRadius: "50px",
        transition: "all 400ms ease",
        letterSpacing: "0.5px",
        visibility: "visible",
        animationDelay: "100ms",
        appearance: "none",
        border: "none",
        padding: 0,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'IcoMoon', 'icomoon'",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: 1,
          display: "inline-block",
        }}
      >
        {"\ue902"}
      </span>
    </button>
  );
}

export default function Homeshowcase() {
  return (
    <section className="w-full bg-[#020202] text-white">
      <div className="mx-auto w-[min(1280px,92vw)] py-8 pl-3 sm:py-10 sm:pl-5 lg:py-12 lg:pl-7">
        <div className="mb-8 grid items-center gap-8 border-b border-[#0f0f0f] pb-8 lg:mb-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:pb-10">
          <div className="relative">
            <span className="mb-5 block h-2.5 w-2.5 rounded-full bg-[#d28b2b]" />

            <p
              style={{
                fontSize: "14px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "rgb(234, 234, 234)",
                margin: "0 0 7px 0",
                padding: 0,
                letterSpacing: "0.5px",
                position: "relative",
              }}
            >
              Our Work Showcase
            </p>

            <h2
              className="max-w-[22ch]"
              style={{
                fontSize: "45px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                color: "#ffffff",
                margin: 0,
                padding: 0,
                lineHeight: 1.2,
              }}
            >
              Explore our best recently completed projects
            </h2>

            <span className="pointer-events-none absolute left-[5.5rem] top-[5.7rem] h-10 w-10 rounded-full border border-[#c17e26]" />
            <span className="pointer-events-none absolute left-[6.65rem] top-[6.8rem] h-2.5 w-2.5 rounded-full bg-[#c17e26]" />
          </div>

          <button
            type="button"
            className="group cursor-pointer"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              appearance: "none",
              backgroundColor: "#101010",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 800,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              position: "relative",
              zIndex: 2,
              padding: "16px 50px 17px",
              marginTop: "67px",
              border: "none",
              outline: "none",
              overflow: "hidden",
              transition: "500ms",
              textDecoration: "none",
            }}
          >
            <span className="absolute top-1/2 left-1/2 h-[400%] w-[400%] -translate-x-1/2 -translate-y-1/2 rotate-45 scale-0 bg-white transition-transform duration-500 ease-out group-hover:scale-110" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-500">
              View All Work
            </span>
          </button>
        </div>

        <div className="mb-2 flex items-center gap-4">
          <span className="relative h-7 w-7 rounded-full border border-[#a96919]">
            <span className="absolute inset-[6px] rounded-full bg-[#a96919]" />
          </span>
          <span className="h-px flex-1 bg-[#121212]" />
        </div>

        <ul className="border-y border-[#151515]">
          {showcaseItems.map((item) => (
            <li
              key={item.id}
              className="home-showcase-row grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-[#151515] py-8 first:border-t-0 sm:gap-8 sm:py-10 md:py-12"
            >
              <span
                className="home-showcase-number"
                style={{
                  fontSize: "80px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  lineHeight: 1,
                  WebkitTextStrokeWidth: "1px",
                  display: "block",
                  position: "relative",
                  minWidth: "150px",
                  minHeight: "60px",
                  padding: 0,
                  margin: 0,
                  letterSpacing: "0.5px",
                  transition: "all 400ms ease",
                }}
              >
                {item.id}
              </span>

              <h3
                style={{
                  fontSize: "24px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: 0,
                  padding: 0,
                  lineHeight: 1.2,
                  display: "inline",
                  letterSpacing: "0.5px",
                  backgroundImage:
                    "linear-gradient(currentcolor, currentcolor), linear-gradient(currentcolor, currentcolor)",
                  backgroundSize: "0% 2px, 0 2px",
                  backgroundPosition: "100% 100%, 0 100%",
                  backgroundRepeat: "no-repeat",
                  transition: "all 0.4s ease",
                  ...(item.id !== "01"
                    ? {
                        visibility: "visible",
                        animationName: "fadeInUp",
                        animationDelay: "200ms",
                      }
                    : {}),
                }}
              >
                {item.title}
              </h3>

              <ArrowCircleButton />
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
