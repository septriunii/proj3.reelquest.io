import { useEffect, useRef } from "react";

function ContactMe() {
  const fadeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = fadeRefs.map((ref) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      });
    });

    observers.forEach((observer, index) => {
      observer.observe(fadeRefs[index].current);
    });

    return () => {
      observers.forEach((observer, index) => {
        observer.unobserve(fadeRefs[index].current);
      });
    };
  }, []);
  return (
    <>
      <div
        id="contact"
        className="w-full lg:h-[30rem] lg:w-[67rem] lg:mt-32 p-2 "
      >
        <div className="h-full w-full ">
          <h1 className="font-bold text-2xl mb-8 lg:ml-5 lg:text-4xl lg:py-3 text-orange-600 flex justify-center items-center">
            <div className="h-0.5 w-full bg-zinc-900"></div>

            <p className="flex w-[30rem] lg:w-[35rem] justify-center italic">
              Contact Me
            </p>
            <div className="h-0.5 w-full bg-zinc-900"></div>
          </h1>
          <div
            ref={fadeRefs[0]}
            className="flex  w-full h-full mt-8 justify-center fade-in"
          >
            <div className="w-full lg:h-[70%] p-2 lg:w-[75%] flex flex-col lg:gap-5  lg:p-5 text-justify font-light bg-zinc-700 bg-opacity-20 rounded-lg relative">
              <div className="text-xs md:text-sm  flex flex-col justify-center items-center lg:gap-2">
                <p className=" bg-zinc-900 p-2 lg:p-3 indent-5 lg:indent-0 lg:leading-7">
                  If you're seeking a Frontend Web Developer who is committed to
                  delivering exceptional web experiences, leveraging ReactJS and
                  Tailwind CSS expertise, I would be delighted to connect and
                  explore opportunities to work together. Let's bring your
                  vision to life and create remarkable digital experiences that
                  leave a lasting impact.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <div className="h-full w-full flex justify-center gap-10 mt-10 italic ">
                  <a
                    ref={fadeRefs[1]}
                    href="https://www.facebook.com/anthony.alabado.37/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-black hover:text-orange-600 right-fade-in"
                  >
                    <div className="h-9 w-9 lg:h-10 lg:w-10  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/facebook-svgrepo-com.svg')] bg-cover bg-center "></div>
                    <p className="text-sm">Anthony Hitalada Alabado</p>
                  </a>

                  <a
                    ref={fadeRefs[2]}
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-black hover:text-orange-600 right-fade-in"
                  >
                    <div className="h-9 w-9 lg:h-10 lg:w-9  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/gmail-svgrepo-com.svg')] bg-cover bg-center "></div>
                    <p className="text-sm">anthonyalabado3712@gmail.com</p>
                  </a>

                  <a
                    ref={fadeRefs[3]}
                    href="https://github.com/Septriunii"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-black hover:text-orange-600 right-fade-in"
                  >
                    <div className="h-9 w-9 lg:h-8 lg:w-8  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/call.svg')] bg-cover bg-center "></div>
                    <p className="text-sm"> +639709919006</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;