"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { CgClose, CgMenu } from "react-icons/cg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { HiChevronDown, HiLocationMarker } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoCalendar, IoCarSportSharp } from "react-icons/io5";
import { MdWarehouse } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { useBoolean, useWindowSize } from "usehooks-ts";

import Image from "next/image";
import Divider, { Orientation } from "../components/tayara-kit/Divider";
import Text from "../components/tayara-kit/Text";
import CountDownTimer from "../components/tayara-kit/CountDownTimer";

interface ContactData {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

const TayaraExpoPage = () => {
  const windowSize = useWindowSize();
  // const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  // const targetValue = 150;

  // const increment = () => {
  //   setCount((prevCount) => {
  //     if (prevCount < targetValue) {
  //       return prevCount + 1;
  //     }
  //     return prevCount;
  //   });
  // };

  // const handleIntersection: IntersectionObserverCallback = (
  //   entries,
  //   observer
  // ) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setCount(0);
  //       observer.unobserve(entry.target);
  //       setInterval(increment, 40);
  //       // No need to return anything here
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5, // Adjust the threshold as needed
  //   });

  //   if (counterRef.current) {
  //     observer.observe(counterRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, [targetValue]);

  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = 400;
      const scrollTop = window.scrollY;
      setShowBackToTop(scrollTop > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = 1;
      const scrollTop = window.scrollY;
      setShowShadow(scrollTop > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lg = 1024;
  const { value: isExpanded0, toggle: toggleExpanded0 } = useBoolean(false);
  const { value: isExpanded1, toggle: toggleExpanded1 } = useBoolean(false);
  const { value: isExpanded2, toggle: toggleExpanded2 } = useBoolean(false);
  const { value: isExpanded3, toggle: toggleExpanded3 } = useBoolean(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
    });
  }

  const {
    value: isVisible,
    setFalse: close,
    setTrue: open,
  } = useBoolean(false);

  const leSalonRef = useRef<null | HTMLDivElement>(null);
  const aProposRef = useRef<null | HTMLDivElement>(null);
  const lieuRef = useRef<null | HTMLDivElement>(null);
  const devenirExposantRef = useRef<null | HTMLDivElement>(null);
  const leSalonRefHandleClick = () => {
    leSalonRef?.current?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const aProposRefHandleClick = () => {
    aProposRef?.current?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const lieuRefHandleClick = () => {
    lieuRef?.current?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const devenirExposantRefHandleClick = () => {
    devenirExposantRef?.current?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactData>({
    defaultValues: {},
  });

  const onSubmit = (data: ContactData) => {
    fetch("/api/spreadwriter/", {
      method: "POST",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileId: "1oRf-rLZWPE4517IXs4IcNc4uwlTTjlStn453gLjaCQE",
        columns: [data.name, data.mobile, data.email],
      }),
    });
    reset();
  };

  const scrollToTopOnMount = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTopOnMount();
  }, []);

  return (
    <>
      {/* Navbar */}
      {windowSize.width > lg ? (
        <div
          className={`fixed z-[9999] w-full  flex items-center justify-between  ${
            showShadow && windowSize.width > 765
              ? "shadow-sm bg-black/80 bg-blend-overlay backdrop-blur-md"
              : "bg-black"
          }`}
        >
          <div
            className={`relative w-full flex justify-start ${
              showShadow && windowSize.width > 765
                ? "h-[120px] px-16 transition-all duration-600"
                : "h-[100px] px-6 transition-all duration-600"
            }  items-center`}
          >
            <div
              className={`w-full flex  ${
                showShadow ? "justify-between" : "justify-center mt-20"
              }  h-[80px]  px-4  items-center`}
            >
              {showShadow ? (
                <div
                  className="flex w-fit items-center ml-2 gap-x-2 cursor-pointer"
                  onClick={scrollToTopOnMount}
                >
                  <div className="flex flex-col relative -bottom-4">
                    <Text
                      className=" bg-primary px-2 text-white uppercase text-sm md:text-2xl font-bold  "
                      text="LE SHOW DE L'AUTOMOBILE"
                    />
                    <span className=" text-white px-2 text-2xs md:text-lg text-end italic font-light relative -top-  ">
                      By <b className="font-bold">tayara</b>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col relative -bottom-4">
                  {/* <Text
                  className=" text-white uppercase text-sm md:text-2xl font-bold  "
                  text="LE SHOW DE L'AUTOMOBILE"
                    />
                    <Text
                      className=" text-white text-sm text-end italic font-light relative -top-2  "
                      text="By tayara"
                    /> */}
                </div>
              )}

              <div className="mr-2 flex w-fit gap-x-3 items-center">
                <Text
                  className={`text-white cursor-pointer hover:underline hover:underline-offset-8  ${
                    showShadow ? "text-xl" : "text-2xl"
                  } italic font-bold ${
                    showShadow
                      ? "!text-white hover:underline hover:underline-offset-8 "
                      : ""
                  } `}
                  text="Le Salon"
                  onClick={leSalonRefHandleClick}
                />

                <Divider
                  orientation={Orientation.VERTICAL}
                  className={`!h-4 !mt-[3px] !mx-1 text-white ${
                    showShadow ? "!bg-neutral-500 !h-10 !mx-4 rotate-12" : ""
                  }`}
                />

                <Text
                  className={`text-white cursor-pointer hover:underline hover:underline-offset-8  ${
                    showShadow ? "text-xl" : "text-2xl"
                  } italic font-bold ${
                    showShadow
                      ? "!text-white hover:underline hover:underline-offset-8 "
                      : ""
                  } `}
                  text="À propos"
                  onClick={aProposRefHandleClick}
                />

                <Divider
                  orientation={Orientation.VERTICAL}
                  className={`!h-4 !mt-[3px] !mx-1 text-white ${
                    showShadow ? "!bg-neutral-500 !h-10 !mx-4 rotate-12" : ""
                  }`}
                />

                <Text
                  className={`text-white cursor-pointer hover:underline hover:underline-offset-8  ${
                    showShadow ? "text-xl" : "text-2xl"
                  } italic font-bold ${
                    showShadow
                      ? "!text-white hover:underline hover:underline-offset-8 "
                      : ""
                  } `}
                  text="Lieu"
                  onClick={lieuRefHandleClick}
                />

                <Divider
                  orientation={Orientation.VERTICAL}
                  className={`!h-4 !mt-[3px] !mx-1 text-white ${
                    showShadow ? "!bg-neutral-500 !h-10 !mx-4 rotate-12" : ""
                  }`}
                />

                <Text
                  className={`text-white ${
                    showShadow ? "text-xl" : "text-2xl"
                  } italic font-bold cursor-pointer hover:underline hover:underline-offset-8  ${
                    showShadow
                      ? "!text-white hover:underline hover:underline-offset-8 "
                      : ""
                  } `}
                  text="Devenir exposant"
                  onClick={devenirExposantRefHandleClick}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {isVisible && (
            <div className="z-[99999] fixed h-screen inset-0 overflow-y-auto">
              <div className="w-full h-screen bg-black overflow-hidden transform transition-all">
                <div className="bg-black ">
                  <div className="w-full py-6 flex items-center justify-between border-b-[1px] border-neutral-200/70">
                    <div
                      className="flex w-fit items-center ml-4 gap-x-2 cursor-pointer"
                      onClick={() => {
                        scrollToTopOnMount();
                        close();
                      }}
                    >
                      <div className="flex flex-col relative -bottom-2">
                        <Text
                          className=" bg-primary px-2 text-white uppercase text-sm md:text-2xl font-bold  "
                          text="LE SHOW DE L'AUTOMOBILE"
                        />
                        <Text
                          className=" text-white text-2xs text-end italic font-light relative -top-  "
                          text="By tayara"
                        />
                      </div>
                    </div>
                    <button
                      className="mr-4 p-2 border border-gray-400 hover:border-gray-600 hover:bg-gray-100 rounded-md h-auto "
                      onClick={close}
                    >
                      <CgClose size={20} className="text-white" />
                    </button>
                  </div>

                  <div className="w-full h-[85vh] pt-4 overflow-y-scroll flex flex-col ">
                    {/* Sub-menu */}
                    <div className="flex flex-col">
                      <span
                        className={` uppercase font-bold 
                  text-white  
                  group pl-8 active:pl-10 mr-32 py-1 flex items-center justify-start rounded-e-3xl active:bg-neutral-700 pb-4 text-base border-b-[1px] border-white my-6  `}
                        aria-current={undefined}
                        onClick={() => leSalonRefHandleClick()}
                      >
                        Le Salon
                      </span>

                      <span
                        className={` uppercase font-bold 
                  text-white  
                  group pl-8 active:pl-10 mr-32 py-1 flex items-center justify-start rounded-e-3xl active:bg-neutral-700 pb-4 text-base border-b-[1px] border-white my-6  `}
                        aria-current={undefined}
                        onClick={() => aProposRefHandleClick()}
                      >
                        À propos
                      </span>

                      <span
                        className={`uppercase font-bold 
                  text-white  
                  group pl-8 active:pl-10 mr-32 py-1 flex items-center justify-start rounded-e-3xl active:bg-neutral-700 pb-4 text-base border-b-[1px] border-white my-6  `}
                        aria-current={undefined}
                        onClick={() => lieuRefHandleClick()}
                      >
                        Lieu
                      </span>

                      <span
                        className={`uppercase font-bold 
                  text-white  
                  group pl-8 pr-4 truncate active:pl-10 mr-24 py-1 flex items-center justify-start rounded-e-3xl active:bg-neutral-700 pb-4 text-base border-b-[1px] border-white my-6  `}
                        aria-current={undefined}
                        onClick={() => devenirExposantRefHandleClick()}
                      >
                        Devenir exposant
                      </span>
                    </div>

                    <div
                      className={`absolute bottom-0 h-16 bg-black flex justify-center items-center w-full `}
                    >
                      <Link
                        href={{ pathname: "/terms/" }}
                        onClick={() => {
                          close();
                        }}
                        passHref
                      >
                        <Text
                          className="text-3xs underline text-white"
                          text={`Conditions d${"'"}utilisation`}
                        />
                      </Link>
                      <Link href={{ pathname: "/" }} onClick={close} passHref>
                        <span className=" text-white mx-6 mt-1" />
                      </Link>
                      <Link
                        href={{ pathname: "/terms/" }}
                        onClick={() => {
                          close();
                        }}
                        passHref
                      >
                        <Text
                          className="text-3xs underline text-white"
                          text={`Politiques relatives aux cookies`}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className={` z-[9999] fixed top-0 right-0 left-0  w-screen h-fit pointer-events-auto transition-transform duration-500  ${
              showShadow && windowSize.width > 200
                ? "shadow-sm  border-b-[1px] border-neutral-bg-neutral-700 bg-black/70 bg-blend-overlay backdrop-blur-md"
                : "bg-black pt-6"
            }`}
          >
            <div className="flex justify-between items-center px-0 md:px-6 py-6 ">
              {/* West items */}
              <div className="col-span-2 flex items-center justify-center">
                <div
                  className="flex w-fit items-center ml-4 gap-x-2 cursor-pointer"
                  onClick={() => {
                    scrollToTopOnMount();
                  }}
                >
                  {showShadow && (
                    <div className="flex flex-col relative -bottom-2">
                      <Text
                        className=" bg-primary px-2 text-white uppercase text-sm md:text-2xl font-bold  "
                        text="LE SHOW DE L'AUTOMOBILE"
                      />
                      <Text
                        className=" text-white text-2xs text-end italic font-light relative -top-  "
                        text="By tayara"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <CgMenu onClick={open} size={26} className="mr-4 text-white" />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="w-full pt-[22vh] lg:pt-[20vh] pb-[15vh] lg:pb-[10vh] md:h-full bg-black">
        {showBackToTop && windowSize.width > lg && (
          <div
            className="fixed cursor-pointer  bottom-20 right-20 bg-primary p-4 flex flex-col justify-center items-center !z-[9999]"
            onClick={scrollToTop}
          >
            <div className="animate-bounce text-white ">
              <BsArrowUp size={26} />
            </div>
          </div>
        )}
        <div className="w-fit mx-auto flex flex-col relative -bottom-2">
          <Text
            className={`text-end ${
              showShadow ? "" : "bg-primary"
            }  text-white uppercase text-lg md:text-5xl px-4 md:px-16 font-bold  `}
            text="LE SHOW DE L'AUTOMOBILE"
          />
          <span className=" text-white px-2 text-2xs md:text-2xl text-end italic font-light relative -top-  ">
            By <b className="font-bold">tayara</b>
          </span>
        </div>
        <Image
          height={2000}
          width={2000}
          className={` my-6 md:my-0 w-full transition-all duration-300 `}
          src="/media/car-background.png"
          alt="background cover de show des showrooms de tayara"
        />

        <div className="relative md:-top-5  md:py-0 w-full h-fit  flex flex-col ">
          <div
            className={`mx-4 md:mx-auto px-6 md:px-10 w-fit h-fit border-b-[1px] border-primary  ${
              showShadow ? "!bg-primary " : ""
            }`}
          >
            <div className=" flex flex-col mx-auto  text-center my-2 ">
              <Text
                className=" text-white text-base lg:text-2xl   font-light  "
                text="CENTRE DES EXPOSITIONS DE TUNIS LA CHARGUIA"
              />
              <Text
                className=" text-white text-base  lg:text-2xl  font-bold  mt-2"
                text="DU 29 FÉVRIER AU 9 MARS 2024"
              />
            </div>
          </div>

          <div className="mt-5">
            <CountDownTimer targetDateTime="2024-02-29T00:00:00" />
          </div>

          <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
            <div className="animate-bounce text-white">
              <BsArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col-reverse   md:flex-row w-full lg:w-fit h-fit mt-24 xl:mx-24 gap-10"
        ref={leSalonRef}
      >
        <div className="relative flex justify-center flex-col  gap-y-4 mx-4 ">
          <div className="  mb-4  my-4 ">
            <Text
              className=" text-center text-white  truncate text-xl lg:text-5xl font-bold bg-primary px-2 md:px-10 py-4"
              text="LE SHOW DE L'AUTOMOBILE"
            />
          </div>

          <Text
            className="  textext-base lg:text-xl   font-normal "
            text="Tayara Group organise la première édition du salon de la voiture d'occasion, un événement spécialisé dans la vente de voitures d'occasion, qui réunira les Showrooms et les acheteurs dans un espace physique afin de faciliter le processus d'achat.                    "
          />
          <Text
            className="  text-black text-base lg:text-xl   font-normal"
            text="Nos principaux exposants sont des partenaires automobiles de renom qui seront présents pour offrir une variété de voitures adaptées aux différents besoins et budgets de nos visiteurs.
                    "
          />
          <Text
            className="  text-black text-base lg:text-xl   font-normal"
            text="
         Le salon de la voiture d'occasion se positionne comme un événement majeur pour tout l'écosystème automobile. 
          L'objectif principal de cet événement est de donner la visibilité aux différents exposants d'un côté mais aussi de faire bénéficier les visiteurs des meilleurs deals automobile d'occasion.
         Le salon de la voiture  se positionne comme un événement majeur pour tout l'écosystème automobile. 
          L'objectif principal de cet événement est de donner la visibilité aux différents exposants d'un côté mais aussi de faire bénéficier les visiteurs des meilleurs deals automobile .
          "
          />
        </div>
        <div className="w-1/2 mx-auto md:w-full h-full">
          <Image
            height={2000}
            width={2000}
            className={` mx-auto  lg:w-fit h-fit transition-all duration-300 `}
            src="/media/aproposTayaraExpo.png"
            alt="Logo de tayara.tn"
          />
        </div>
      </div>
      {/* video teasing */}
      {/* <div className='flex w-full justify-center my-24 mx-auto'>
        <iframe width="1000" height="315" src="https://www.youtube.com/embed/kUKgf6YRc_0?si=oK1yoUtA_CQQxw1E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div> */}

      {/* Partners Section */}
      {/* <div className="w-full flex justify-end mt-12 md:mb-12 md:mt-24 ">
        <Text
          className=" text-white uppercase  truncate text-sm lg:text-xl  font-bold bg-primary px-5 md:px-10 py-4 "
          text="Nos partenaires"
        />
      </div>
      <div className="logo-slider">
        <div className="logo-slide-track">
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
          <div className="slide">
            <Image
            height={2000}
            width={2000}} src="/media/partnershipLogo.png" alt="" />
          </div>
        </div>
      </div> */}

      <span ref={aProposRef}></span>

      <div
        className="w-full h-fit my-24 py-20 px-[10%] flex flex-wrap gap-10 justify-center items-center relative bg-[url('/media/auto-show-background.png')] bg-no-repeat bg-cover  md:bg-fixed "
        ref={counterRef}
      >
        <div className="flex flex-col  justify-center items-center gap-4 text-center mt-4">
          {windowSize.width > lg ? (
            <IoCarSportSharp size={64} className="text-white" />
          ) : (
            <IoCarSportSharp size={44} className="text-white" />
          )}

          <span className=" text-xl md:text-2xl  text-white font-bold md:pl-5  md:border-l-4 border-primary">{`+ 150000 Visiteurs`}</span>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4 text-center mt-4">
          {windowSize.width > lg ? (
            <IoIosPeople size={64} className="text-white" />
          ) : (
            <IoIosPeople size={44} className="text-white" />
          )}

          <span className=" text-xl md:text-2xl  text-white font-bold md:pl-5  md:border-l-4 border-primary">{`+ 40 Exposants`}</span>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4 text-center mt-4">
          {windowSize.width > lg ? (
            <IoCalendar size={64} className="text-white" />
          ) : (
            <IoCalendar size={44} className="text-white" />
          )}

          <span className=" text-xl md:text-2xl  text-white font-bold md:pl-5  md:border-l-4 border-primary">{`Du 29 Février au 9 Mars 2024`}</span>
        </div>
        <div className="flex flex-col  justify-center items-center gap-4 text-center mt-4">
          {windowSize.width > lg ? (
            <MdWarehouse size={64} className="text-white" />
          ) : (
            <MdWarehouse size={44} className="text-white" />
          )}

          <span className=" text-xl md:text-2xl  text-white font-bold md:pl-5  md:border-l-4 border-primary">{`Un Espace de 4000 M2`}</span>
        </div>

        <div className="flex flex-col   justify-center items-center gap-4 text-center mt-4">
          {windowSize.width > lg ? (
            <RiGovernmentFill size={64} className="text-white" />
          ) : (
            <RiGovernmentFill size={44} className="text-white" />
          )}

          <span className=" text-xl md:text-2xl  text-white font-bold md:pl-5  md:border-l-4 border-primary">{`Acteurs du financement, Assurance
auto et l’écosystème du secteur automobile.`}</span>
        </div>
      </div>

      <Text
        className="w-full flex  border-l-[20px] border-r-[20px] py-8 px-3 md:px-8 border-primary   text-primary text-center text-lg md:text-4xl italic  font-bold  "
        text="POURQUOI CET ÉVÉNEMENT EST INCONTOURNABLE? "
      />
      <div className="flex flex-col md:flex-row w-full lg:w-fit h-fit my-10 md:my-24 xl:mx-24 gap-10">
        <div className="w-[80%] md:w-[300%] mx-auto md:mx-0 h-full">
          <Image
            height={2000}
            width={2000}
            className={` mx-auto  lg:w-fit h-fit transition-all duration-300 `}
            src="/media/cars.png"
            alt="Logo de tayara.tn"
          />
        </div>

        <div className="relative flex justify-center flex-col  gap-y-4 mx-4 ">
          <Text
            className="  text-black md:text-start text-base lg:text-xl   font-normal  "
            text="Le salon de la voiture d’occasion est un rendez-vous incontournable pour tous les passionnés de voitures et les professionnels de l'industrie automobile."
          />
          <Text
            className="  text-black md:text-start text-base lg:text-xl   font-normal  "
            text="Pour les exposants, ce salon offre une excellente opportunité de présenter une grande variété de véhicules, de promouvoir leur marque, de conclure des affaires et de créer des partenariats commerciaux."
          />
          <Text
            className="  text-black md:text-start text-base lg:text-xl   font-normal  "
            text="Pour les visiteurs, cette exposition sera l'occasion idéale de trouver la bonne
affaire et de repartir avec sa voiture, de comparer les offres et les prix
de différents vendeurs et concessionnaires, de rencontrer des professionnels
de l'industrie tels que les spécialistes de la vente de voitures, les compagnies
d'assurance automobile et les organismes offrant des solutions financières
spécialement dédiées pour l'achat de voitures d'occasion."
          />
        </div>
      </div>

      <span ref={lieuRef}></span>

      <div className="w-full h-fit py-20  my-24 flex flex-col justify-center items-center relative bg-[url('/media/centre.png')] bg-no-repeat bg-cover ">
        <span className="text-center bg-primary p-2 text-white  mx-auto my-4 truncate text-xl md:text-3xl uppercase font-bold  ">
          Lieu du salon
        </span>

        <Text
          className="  text-white text-center  md:text-xl  leading-relaxed my-6 mx-4 md:mx-[18%] "
          text="        L'événement se tiendra au Centre des Expositions de Tunis La Charguia, occupant une impressionnante superficie de 4000 m². 
"
        />
        <Text
          className="hidden md:block  text-white text-center  md:text-xl  leading-relaxed  mx-4 md:mx-[18%] "
          text="      Cette ampleur permettra de présenter une large gamme de voitures, offrant ainsi aux visiteurs un vaste choix de modèles, de marques et de styles pour une expérience enrichissante. 
"
        />

        <Link
          href="https://www.google.com/maps/dir//R6P3%2BV2H+%D9%85%D8%B9%D8%B1%D8%B6+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9,+Gouvernorat+de,+Rue+de+l'%C3%A9nergie%D8%8C+%D8%AA%D9%88%D9%86%D8%B3+2035%E2%80%AD/@36.8371999,10.2026198,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12fd34c2a29390dd:0x7098f737d1f22606!2m2!1d10.2026461!2d36.8371822?entry=ttu"
          title="Ouvrir position Tayara sur l'application maps"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="  flex flex-col m-4 md:flex-row  md:mx-auto items-center justify-center gap-3 
       py-2 px-4 md:mt-8 rounded-xl border-b-2 hover:rounded-t-none border-white hover:bg-primary text-white font-black cursor-pointer"
          >
            <HiLocationMarker size={24} />
            <div className="flex flex-col items-center">
              <p className="text-sm text-center md:text-base  font-semibold">
                Centre des Expositions de Tunis La Charguia - Tunis, Tunisie
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className=" w-full flex justify-center mx-auto mt-0 mb-20 md:my-24 ">
        <Text
          className=" text-center text-white  truncate text-2xl lg:text-5xl font-bold bg-primary px-10 py-4"
          text="FAQs"
        />
      </div>

      <div
        className={`w-full border-t-2 border-gray-400 flex flex-col  md:justify-between  px-3 `}
      >
        <div className=" flex justify-between items-center mx-0 md:md:mx-[20%] ">
          <Text
            className=" text-start text-neutral-800 text-base lg:text-xl  font-bold py-4  "
            text="À qui s'adresse l'événement ?"
          />

          <button
            className="text-xs flex items-center gap-x-1 text-primary font-medium"
            onClick={() => toggleExpanded0()}
          >
            <HiChevronDown
              size={36}
              className={`${isExpanded0 ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isExpanded0 && (
          <ul className="flex flex-col mx-2 md:mx-[20%] mt-5 mb-20">
            <Text
              className=" text-center text-white  truncate text-lg font-bold bg-primary px-10 py-4"
              text="EXPOSANTS"
            />
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              <b>Exposants automobiles :</b> Grandes marques automobiles,
              Showrooms et Garages haut de gamme.{" "}
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              <b>Exposants de services :</b> Assurances, assistance et conseil,
              organisme de financement, accessoires et équipements automobiles,
              service de contrôle technique.
            </li>
            <Text
              className=" text-center text-white  truncate text-lg font-bold bg-primary px-10 py-4"
              text="VISITEURS"
            />
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Toute personne souhaitant acheter une voiture d&apos;occasion ou
              acteur dans le secteur automobile. Toute personne souhaitant
              acheter une voiture ou acteur dans le secteur automobile.
            </li>
          </ul>
        )}
      </div>

      <div
        className={`w-full border-t-2 border-gray-400 flex flex-col  md:justify-between  px-3 `}
      >
        <div className=" flex justify-between md:mx-[20%] ">
          <Text
            className=" text-start text-neutral-80text-base lg:text-xl  font-bold py-4  "
            text="En quoi consiste le format de l'événement et comment se déroulera-t-il?"
          />

          <button
            className="text-xs flex items-center gap-x-1 text-primary font-medium"
            onClick={() => toggleExpanded1()}
          >
            <HiChevronDown
              size={36}
              className={`${isExpanded1 ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isExpanded1 && (
          <ul className="md:mx-[20%] my-5">
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              L&apos;événement se déroulera dans un format de manière hybride,
              qui nous permettra de combiner l&apos;expérience digitale que nos
              utilisateurs connaissent déjà, avec une expérience physique qui
              permet et encourage la transaction finale.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Le format digital permet aux utilisateurs de consulter les
              services proposés durant le salon, les marques exposées et de
              réserver leur billet d&apos;entrée.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Le format physique permet de passer à l&apos;étape suivante, celle
              de la rencontre et la transaction.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Nous profiterons également de cet événement pour proposer les
              services de Tayara Group dans le domaine du digital et offrir aux
              acteurs du secteur de proposer leurs solutions en financement,
              assurance et autres prestations.
            </li>
          </ul>
        )}
      </div>

      <div
        className={`w-full border-t-2 border-gray-400 flex flex-col  md:justify-between  px-3 `}
      >
        <div className=" flex justify-between md:mx-[20%] ">
          <Text
            className=" text-start text-neutral-80text-base lg:text-xl  font-bold py-4  "
            text=" En quoi consiste la mission du salon par rapport au marché des voitures d'occasion?"
          />

          <button
            className="text-xs flex items-center gap-x-1 text-primary font-medium"
            onClick={() => toggleExpanded2()}
          >
            <HiChevronDown
              size={36}
              className={`${isExpanded2 ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isExpanded2 && (
          <ul className="md:mx-[20%] my-5">
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Le salon vise à faciliter le processus d&apos;achat et de vente de
              voitures d&apos;occasion en offrant un environnement sûr et fiable
              pour les transactions. voitures en offrant un environnement sûr et
              fiable pour les transactions.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              En outre, le salon peut chercher à promouvoir l&apos;éducation et
              la sensibilisation sur des sujets tels que l&apos;entretien des
              voitures, le financement et l&apos;assurance, afin
              d&apos;améliorer l&apos;expérience globale des participants.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Globalement, la mission est de créer une occasion précieuse pour
              les acheteurs et les vendeurs de se connecter et de s&apos;engager
              sur le marché des voitures d&apos;occasion. sur le marché des
              voitures.
            </li>
          </ul>
        )}
      </div>

      <div
        className={`w-full border-y-2 border-gray-400 flex flex-col  md:justify-between  px-3 `}
      >
        <div className=" flex justify-between md:mx-[20%] ">
          <Text
            className=" text-start text-neutral-80text-base lg:text-xl  font-bold py-4  "
            text="Quels sont les objectifs principaux du salon automobile?"
          />

          <button
            className="text-xs flex items-center gap-x-1 text-primary font-medium"
            onClick={() => toggleExpanded3()}
          >
            <HiChevronDown
              size={36}
              className={`${isExpanded3 ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isExpanded3 && (
          <ul className="md:mx-[20%] my-5">
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Donner confiance aux consommateurs Tunisiens vis-à-vis du marché
              de l&apos;automobile d&apos;occasion. de l&apos;automobile.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Renforcer et développer l&apos;image des showrooms dans le secteur
              de l&apos;automobile d&apos;occasion. de l&apos;automobile.
            </li>
            <li className="text-black  text-start text-base lg:text-xl my-6 border-l-[5px] border-primary pl-4 font-normal">
              Réunir des exposants de renom pour faciliter la démarche de toute
              personne souhaitant acheter un véhicule d&apos;occasion sans
              risque. personne souhaitant acheter un véhicule sans risque.
            </li>
          </ul>
        )}
      </div>

      <span ref={devenirExposantRef}></span>

      <div className="flex flex-col md:flex-row w-full h-fit py-20 mt-48 justify-center items-center relative bg-[url('/media/expocars.png')] bg-no-repeat bg-cover  md:bg-fixed  ">
        <div className="flex flex-col md:w-1/2 mx-4">
          <Text
            className="  text-white text-center font-bold text-xl md:text-3xl  "
            text="Le plus grand Salon de la Voiture d’Occasion en Tunisie "
          />
          <Text
            className="  text-white text-center md:text-xl my-8"
            text="Le show de l'automobile by tayara est le plus grand salon de voitures d’occasion du pays. Il offre aux acheteurs une grande variété de voitures d’occasion. "
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 mx-0">
          <span className="text-center bg-primary p-2 text-white mx-auto my-4 truncate text-xl md:text-3xl uppercase font-bold  ">
            Devenir Exposant
          </span>

          <form className="flex flex-col m-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="mb-2">
                <label
                  className="block text-white font-bold"
                  htmlFor="last-name"
                >
                  Nom de l&apos;entreprise
                </label>
              </div>
              <div>
                <input
                  className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-500/20"
                  id="last-name"
                  type="text"
                  {...register("name")}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <label className="block text-white font-bold" htmlFor="mobile">
                  N° Tél. Mobile
                </label>
              </div>
              <div>
                <input
                  className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-500/20"
                  id="mobile"
                  type="tel"
                  pattern="([0-9]{2}\s?[0-9]{3}\s?[0-9]{3})|([0-9]{2}\s?[0-9]{2}\s?[0-9]{2}\s?[0-9]{2}\s?)"
                  {...register("mobile")}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-2">
                <label
                  className="inline-block text-white font-bold"
                  htmlFor="mobile"
                >
                  Email{" "}
                </label>
              </div>
              <div>
                <input
                  className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-gray-500/20"
                  id="email"
                  type="email"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="mt-8  mx-auto">
              <button
                className={`btn btn-primary rounded px-10 ${
                  isSubmitting && "loading"
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full lg:w-fit h-fit mb-24  xl:mx-48 gap-10">
        <Image
          height={2000}
          width={2000}
          className={` mx-auto w-1/2 lg:w-fit h-fit transition-all duration-300 `}
          src="/media/tayaragroup.png"
          alt="Logo de tayara.tn"
        />

        <div className="relative flex justify-center flex-col  gap-y-4 mx-4 ">
          <div className=" w-full flex justify-end mx-auto my-10 md:my-24 ">
            <Text
              className=" text-center text-white  truncate text-xl lg:text-5xl font-bold bg-primary px-10 py-4"
              text="TAYARA GROUP"
            />
          </div>
          <Text
            className="  text-black  text-start text-base lg:text-xl   font-normal  "
            text="Tayara Group est un opérateur majeur de Marketplaces
en Tunisie avec une forte présence dans de nombreux
secteurs d'activité."
          />
          <Text
            className="  text-black  text-start text-base lg:text-xl   font-normal  "
            text="Grâce à une stratégie de croissance dynamique
et à une solide expérience dans le domaine des petites
annonces en ligne, Tayara Group a pu élargir ses services
en particulier dans le secteur de l’automobile, Tayara.tn
un site spécialisé dans la vente et l'achat de véhicules
automobiles d’occasion avec une forte présence
automobiles avec une forte présence
des showrooms sur notre plateforme et des
professionnels du secteur."
          />
          <Text
            className="  text-black  text-start text-base lg:text-xl   font-normal  "
            text="Faisant partie de Frontier Digital Ventures, un groupe
international coté en bourse qui se concentre sur les
investissements dans les marketplaces en ligne
immobilières et automobiles en Asie, en Afrique et en
Amérique latine, Tayara Group vise à renforcer son
engagement de répondre aux besoins variés des
consommateurs Tunisiens en proposant une plateforme
fiable et conviviale."
          />
        </div>
      </div>

      <div className="w-full h-fit bg-black pt-10 pb-5 mt-24">
        <div className="flex flex-col my-8 justify-center items-center  gap-y-8">
          {/* <TForTayara className=" text-primary" size={60} /> */}
          <div
            className="flex w-fit items-center ml-2 gap-x-2 cursor-pointer"
            onClick={scrollToTopOnMount}
          >
            <div className="flex flex-col relative -bottom-4">
              <Text
                className=" bg-primary px-4 md:px-20 text-white uppercase text-lg md:text-3xl font-bold  "
                text="LE SHOW DE L'AUTOMOBILE"
              />
              <span className=" text-white px-2 text-2xs md:text-lg text-end italic font-light relative">
                By <b className="font-bold">tayara</b>
              </span>
            </div>
          </div>
          <div className="mr-2 flex flex-col md:flex-row w-fit gap-x-3 items-center">
            <Text
              className={`text-white cursor-pointer text-lg md:text-xl italic font-bold `}
              text="Le Salon"
              onClick={leSalonRefHandleClick}
            />

            <Divider
              orientation={Orientation.VERTICAL}
              className={`!h-4 !mt-[3px] !mx-1 text-white rotate-90 md:rotate-0 `}
            />

            <Text
              className={`text-white cursor-pointer text-lg md:text-xl italic font-bold  `}
              text="À propos"
              onClick={aProposRefHandleClick}
            />

            <Divider
              orientation={Orientation.VERTICAL}
              className={`!h-4 !mt-[3px] !mx-1 text-white rotate-90 md:rotate-0 `}
            />

            <Text
              className={`text-white cursor-pointer text-lg md:text-xl italic font-bold `}
              text="Lieu"
              onClick={lieuRefHandleClick}
            />

            <Divider
              orientation={Orientation.VERTICAL}
              className={`!h-4 !mt-[3px] !mx-1 text-white rotate-90 md:rotate-0 `}
            />

            <Text
              className={`text-white cursor-pointer text-lg md:text-xl italic font-bold `}
              text="Devenir exposant"
              onClick={devenirExposantRefHandleClick}
            />
          </div>

          <div className="flex flex-col flex-wrap justify-center items-center ">
            <div className="flex items-center justify-center my-2">
              <Link href={{ pathname: "/" }} passHref>
                <span className="  text-white" />
              </Link>
            </div>
            <Text
              className="text-white text-sm md:text-base font-light italic mb-2"
              text="Retrouvez-nous sur"
            />
            <div className="flex mt-2 md:mt-0 justify-center items-center gap-x-4">
              <Link
                className="text-white"
                passHref
                href="https://www.facebook.com/tayara.tn"
                target={"_blank"}
              >
                <FaFacebookSquare size={35} />
              </Link>
              <Link
                className="text-white"
                passHref
                href="https://www.instagram.com/tayara.tn/"
                target={"_blank"}
              >
                <FaInstagramSquare size={35} />
              </Link>
              <Link
                className="text-white"
                passHref
                href="https://tn.linkedin.com/company/tayara-tn"
                target={"_blank"}
              >
                <FaLinkedin size={35} />
              </Link>{" "}
              <Link
                className="text-white"
                passHref
                href="https://www.youtube.com/@TayaraTV"
                target={"_blank"}
              >
                <FaYoutubeSquare size={36} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex  md:mx-auto items-center justify-center gap-3  
      mx-4 py-8 text-white font-black"
        >
          <p className="text-xs text-center md:text-base font-medium">
            Copyright © 2024 - Le show de l&apos;automobile by tayara - Salon de
            la Voiture d&apos;Occasion. Tous droits réservés. la Voiture. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </>
  );
};

export default TayaraExpoPage;
