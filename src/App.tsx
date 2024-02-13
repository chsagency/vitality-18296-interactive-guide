import {
  Center,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  HueSaturation,
  N8AO,
  SMAA,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useRef, useState } from "react";
import { Map } from "./Map";
import { BiSolidHome, BiMenu } from "react-icons/bi";
import { HiLocationMarker, HiChevronRight } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineDrag, AiOutlineRotateLeft } from "react-icons/ai";
import { MdPinch } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useWindowSize } from "react-use";

export default function App() {
  const logoRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [readyToExplore, setReadyToExplore] = useState(false);
  const [segments, setSegments] = useState(0);
  const [modal, setModal] = useState("");
  const { progress } = useProgress();
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (progress === 100) {
      !isLoaded && setTimeout(() => setIsLoaded(true), 1500);
    }
  }, [progress, isLoaded]);

  return (
    <>
      <img
        src="/logo.png"
        alt=""
        className={`${
          !isLoaded ? "top-1/2 animate-pulse scale-150" : "top-12 lg:top-16"
        } w-14 h-14  lg:w-20 lg:h-20 object-contain will-change-transform fixed left-1/2 transition-all duration-700 transform -translate-x-1/2 -translate-y-1/2 z-10`}
        ref={logoRef}
        style={{
          opacity: segments ? "0" : "1",
        }}
      />
      <AnimatePresence>
        {isLoaded && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="fixed top-8 left-8 bg-primary text-white p-2 rounded-full text-2xl z-10"
            onClick={() => setSegments(0)}
          >
            <div className="flex gap-1">
              <BiSolidHome />
              <span className="text-sm pt-1 pr-1 hidden md:inline">
                Back to Vitality World
              </span>
            </div>
          </motion.button>
        )}
        {isLoaded && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="fixed bottom-8 left-8 bg-primary text-white p-2 rounded-full text-2xl z-10"
            onAnimationComplete={() => {
              setTimeout(() => !showExplore && setShowExplore(true), 300);
            }}
            onClick={() => setModal("menu")}
          >
            <BiMenu />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {/* INTRO */}
        {isLoaded && showExplore && !readyToExplore && (
          <Modal key="explore">
            <h1 className="text-2xl font-bold text-primary mb-4">Welcome</h1>
            <p className="text-center text-sm">
              Welcome to the World of Vitality - an easy-to-navigate guide,
              helping you to get the most from your insurance and understand how
              to use it, should you need to.
            </p>
            <p className="text-center text-sm mt-4">
              As well as answers to your questions, you’ll find links to more
              in-depth information that can help you make healthier and happier
              choices. Because the healthier you are, the better for all of us.
            </p>
            <button
              onClick={() => setReadyToExplore(true)}
              className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
            >
              Explore now
            </button>
          </Modal>
        )}
        {/* MENU */}
        {modal === "menu" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 h-full bg-white px-8 py-6 w-full max-w-xs overflow-y-auto"
            >
              <div className="flex justify-between items-center gap-4">
                <h1 className="text-sm font-semibold text-gray-700">
                  Navigation
                </h1>
                <button className="text-2xl" onClick={() => setModal("")}>
                  <IoIosCloseCircleOutline />
                </button>
              </div>
              <div className="mt-6 grid grid-cols-1">
                <div className="text-sm font-semibold bg-primary text-white rounded-full">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2"
                    onClick={() => setSegments(3)}
                  >
                    <p className="flex-1 text-left">Life Insurance Land</p>
                    <div>
                      <HiChevronRight
                        className={`transform transition-all duration-300 ${
                          segments === 3 ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`transition-all duration-700 grid gap-4 overflow-hidden
                  ${segments === 3 ? "max-h-40 mt-4" : "max-h-0 mt-0"}
                  `}
                >
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(3);
                        setModal("3-1");
                      }}
                    >
                      What's included?
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(3);
                        setModal("3-2");
                      }}
                    >
                      Making a claim
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(3);
                        setModal("3-3");
                      }}
                    >
                      Get more from your Life plan
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(3);
                        setModal("3-4");
                      }}
                    >
                      Inspirational stories
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold bg-primary text-white rounded-full mt-4">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2"
                    onClick={() => setSegments(2)}
                  >
                    <p className="flex-1 text-left">Health Insurance Hills</p>
                    <div>
                      <HiChevronRight
                        className={`transform transition-all duration-300 ${
                          segments === 2 ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`transition-all duration-700 grid gap-4 overflow-hidden
                  ${segments === 2 ? "max-h-40 mt-4" : "max-h-0 mt-0"}
                  `}
                >
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(2);
                        setModal("2-1");
                      }}
                    >
                      What's included?
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(2);
                        setModal("2-2");
                      }}
                    >
                      Using your health plan
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(2);
                        setModal("2-3");
                      }}
                    >
                      Speaking to a GP
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(2);
                        setModal("2-4");
                      }}
                    >
                      Full Cover Promise
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(2);
                        setModal("2-5");
                      }}
                    >
                      Inspirational stories
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold bg-primary text-white rounded-full mt-4">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2"
                    onClick={() => setSegments(4)}
                  >
                    <p className="flex-1 text-left">Programme Parkway</p>
                    <div>
                      <HiChevronRight
                        className={`transform transition-all duration-300 ${
                          segments === 4 ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`transition-all duration-700 grid gap-4 overflow-hidden
                  ${segments === 4 ? "max-h-40 mt-4" : "max-h-0 mt-0"}
                  `}
                >
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(4);
                        setModal("4-1");
                      }}
                    >
                      How do I get started?
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(4);
                        setModal("4-2");
                      }}
                    >
                      How to register
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(4);
                        setModal("4-3");
                      }}
                    >
                      Tracking your activity
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold bg-primary text-white rounded-full mt-4">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2"
                    onClick={() => setSegments(1)}
                  >
                    <p className="flex-1 text-left">Rewardsville</p>
                    <div>
                      <HiChevronRight
                        className={`transform transition-all duration-300 ${
                          segments === 1 ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`transition-all duration-700 grid gap-4 overflow-hidden
                  ${segments === 1 ? "max-h-40 mt-4" : "max-h-0 mt-0"}
                  `}
                >
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(1);
                        setModal("1-1");
                      }}
                    >
                      What's a Vitality status?
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(1);
                        setModal("1-2");
                      }}
                    >
                      How do I get points?
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 ml-2">
                    <button
                      className="pl-4"
                      onClick={() => {
                        setSegments(1);
                        setModal("1-3");
                      }}
                    >
                      What rewards do I get?
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {readyToExplore && !modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 right-8 z-10 flex flex-col items-end bg-white bg-opacity-80 rounded pt-3 pb-2 px-4"
          >
            <p className="text-xs lg:text-sm text-gray-700 flex justify-center mb-2">
              Pinch to zoom{" "}
              <MdPinch className="text-primary mx-1 text-base lg:text-lg" />{" "}
            </p>
            <p className="text-xs lg:text-sm text-gray-700 flex justify-center mb-2">
              Hold and Drag{" "}
              <AiOutlineDrag className="text-primary mx-1 text-base lg:text-lg" />{" "}
              to to look around
            </p>
            <p className="text-xs lg:text-sm text-gray-700 flex justify-center mb-2">
              Click on{" "}
              <HiLocationMarker className="text-primary mx-1 text-base lg:text-lg" />{" "}
              icons to explore
            </p>
            {height > width && (
              <p className="text-xs inline-block bg-white p-4 border rounded border-solid border-primary lg:text-sm text-gray-700 flex justify-center font-bold">
                Rotate your device{" "}
                <AiOutlineRotateLeft className="text-primary mx-1 text-lg" />{" "}
                for a better experience
              </p>
            )}
          </motion.div>
        )}
        {/* REWARD */}
        {modal === "1-0" && (
          <Modal key="reward-1">
            <h1 className="text-2xl font-semibold text-primary mb-4">
              Rewardsville
            </h1>
            <h2 className="text-xl font-light text-gray-700 mb-4">
              A world full of rewards and discounts
            </h2>
            <p className="text-center text-sm text-secondary">
              So you know how to get set up on the Vitality Programme. Now let's
              see how you can start to earn points, get exciting rewards and
              boost your Vitality status.
            </p>
            <button
              onClick={() => setModal("")}
              className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
            >
              Explore now
            </button>
          </Modal>
        )}
        {modal === "1-1" && (
          <Modal key="health-2" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                What's a Vitality status?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Increase your status and reap the rewards
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  Every Vitality member has a status level, starting at Bronze
                  and climbing to Platinum. As you increase your healthy
                  activities we award points, which count towards your status
                  level.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  The amount of points you build up (and your accompanying
                  status) will help you unlock bigger and better rewards.
                </p>
              </div>
              <div>
                <img src="/rewards-1.png" alt="" className="w-40" />
              </div>
            </div>
            <div className="w-full px-10 pb-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Higher status, lower premiums
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  Not only will a high status unlock bigger and better rewards,
                  it can also decrease the amount you pay for your insurance.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  The way we work out your next year's premium is fair,
                  intuitive and transparent. So if we see your health activities
                  expanding and your Vitality status climbing then you can start
                  to control your costs.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  To find out how your status could impact your premiums, visit
                  the{" "}
                  <a
                    href="https://members.vitality.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Member Zone
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="py-12 px-24 w-full bg-ice-blue ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jb6E2jiha1o?si=cNFps9U4e3j1RjqD"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="pb-6 pt-2 px-12 w-full flex justify-start">
              <button
                className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                onClick={() => {
                  setModal("");
                  setSegments(1);
                }}
              >
                Return to World of Vitality
              </button>
            </div>
          </Modal>
        )}
        {modal === "1-2" && (
          <Modal key="health-3" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                What are Vitality points and how do I earn them?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Rewarding you with Vitality points
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  We want to help you stay active and make healthier life
                  choices. That's why we reward healthy behaviour.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  Points are a way to monitor your progress. The more points you
                  get, the better your Vitality status will be - you'll start at
                  Bronze, and work your way through Silver and Gold until you
                  reach Platinum. And the best news is that your points will
                  also unlock a multitude of discounts and rewards.
                </p>
                <h2 className="text-xl text-gray-700 mt-4">
                  Earn points from the word go
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  When you first take your health review, you'll be awarded
                  Vitality points. After that it's easy to keep them building up
                  – every time you track an eligible activity, you gain points.
                </p>
                <ul className="text-sm list-disc list-outside ml-3.5 mt-4 text-secondary">
                  <li>
                    Earn up to 40 points a week by recording activity on your
                    fitness tracker or health app
                  </li>
                  <li>
                    Earn points with our partner mindfulness and meditation app
                  </li>
                  <li>Take a Vitality Healthcheck for a points boost</li>
                </ul>
                <p className="text-sm mt-4 text-secondary">
                  As you get more points, you unlock more rewards.
                </p>
                <div className="border-2 border-primary mt-4 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-secondary">
                    Find out more about the rewards available.
                  </p>
                  <button
                    className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => setModal("1-3")}
                  >
                    Move to the next building
                  </button>
                </div>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(1);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>
              </div>
              <div>
                <img src="/rewards-2.png" alt="" className="w-40" />
              </div>
            </div>
          </Modal>
        )}
        {modal === "1-3" && (
          <Modal key="health-4" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                What rewards do I get?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Make the most of your rewards programme
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  As a Vitality member, not only do you get access to rewards,
                  but our partners are chosen to help benefit your health and
                  wellbeing.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  We love to reward you for what you're doing, that's why we
                  unlock different rewards depending on the type of plan you
                  hold and points you're earning - activity or status points.
                  And of course, you'll also have access to our health living
                  benefits to help you become the healthiest version of
                  yourself.
                </p>
                <div className="flex justify-between items-start gap-4 mt-8">
                  <div className="flex-1 flex flex-col justify-start items-center">
                    <img
                      src="/run.png"
                      alt=""
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-center text-lg text-secondary mt-2">
                      Active Rewards
                    </h3>
                    <p className="text-center text-sm mt-2 text-secondary">
                      That are unlocked with your activity points, including
                      discounts on handcrafted drinks at Caffè Nero and trips to
                      the cinema*.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-center">
                    <img
                      src="/health.png"
                      alt=""
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-center text-lg text-secondary mt-2">
                      Healthy living benefits
                    </h3>
                    <p className="text-center text-sm mt-2 text-secondary">
                      Rewards and discounts available for Vitality members, so
                      you can become the healthiest version of yourself. From
                      discounts on healthy food, to discounts on fitness
                      trackers and weight loss programmes.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-center">
                    <img
                      src="/gift.png"
                      alt=""
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-center text-lg text-secondary mt-2">
                      Status Rewards
                    </h3>
                    <p className="text-center text-sm mt-2 text-secondary">
                      When you reach a new status level, you'll unlock bigger
                      and better rewards across a couple of our reward partners,
                      such as higher discounted hotel stays.
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.vitality.co.uk/rewards/partners/active-rewards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
                >
                  Show me more rewards
                </a>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(1);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>

                <p className="text-xs mt-4 text-secondary">
                  *Eligibility applies.
                </p>
              </div>
            </div>
          </Modal>
        )}
        {/* HEALTH */}
        {modal === "2-0" && (
          <Modal key="health-1">
            <h1 className="text-2xl font-semibold text-primary mb-4">
              Health Insurance Hills
            </h1>
            <h2 className="text-xl font-light text-gray-700 mb-4">
              Health insurance you can use every day
            </h2>
            <p className="text-center text-sm text-secondary">
              With our health insurance, you can get fast access to private
              healthcare from everyday care treatment like GP and physiotherapy,
              to specialist treatment in hospital. Plus, as a Vitality member,
              you could get rewarded for leading a healthier lifestyle.
            </p>
            <p className="text-center text-sm mt-4 text-secondary">
              For a breakdown of what's included in your plan, head to your app
              or the{" "}
              <a
                href="https://members.vitality.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Member Zone
              </a>
              .
            </p>
            <button
              onClick={() => setModal("")}
              className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
            >
              Explore now
            </button>
          </Modal>
        )}
        {modal === "2-1" && (
          <Modal key="health-2" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                What's included?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <ul className="text-sm list-disc list-outside ml-3.5 text-secondary">
                  <li>
                    Enjoy award-winning cover - from fast access to a GP, physio
                    and mental health support to personal care for cancer
                  </li>
                  <li>Manage your care from the palm of your hand</li>
                  <li>Get inspired to be healthier and get rewarded for it</li>
                </ul>
                <p className="font-semibold text-sm mt-4 text-secondary">
                  For your specific cover, please go to your app or the Member
                  Zone.
                </p>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(2);
                    }}
                  >
                    Return to the World of Vitality
                  </button>
                </div>
              </div>
              <div>
                <img src="/life-2.png" alt="" className="w-40" />
              </div>
            </div>
            <div className="bg-metallic-blue w-full text-white px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">
                  Download the Vitality Member app
                </h1>
                <p className="text-sm mt-2">
                  Go to the Vitality app to find out more about what your plan
                  covers.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/app-store.png" alt="App Store" className="h-9" />
                  </a>
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/google-play.png"
                      alt="Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
              </div>
              <div>
                <img src="/app.png" alt="" className="w-52" />
              </div>
            </div>
          </Modal>
        )}
        {modal === "2-2" && (
          <Modal key="health-3" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Using your health plan
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                Looking for information on your plan, or want to make an
                appointment? Head to the Vitality Care Hub
              </h2>
            </div>
            <div className="py-12 px-24 pb-0 w-full bg-ice-blue">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YyiwVKWnf2A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full bg-ice-blue px-10 py-6"></div>
            <div className="w-full px-10 py-8 pb-6">
              <p className="text-sm mt-4 text-secondary">
                The Care Hub is a one stop shop to see your health care plan,
                book video consultations, make referrals and manage your
                treatments.
              </p>
              <a
                href="https://adviser.vitality.co.uk/health-insurance/care-hub/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
              >
                Take me to Care Hub
              </a>
            </div>
            <div className="w-full px-10 pb-8">
              <h2 className="text-xl text-gray-700 mb-4">
                How does payment work for claims?
              </h2>
              <p className="text-sm mt-4 text-secondary">
                If you make a claim, we'll arrange to pay your treatment bills
                direct, if they're covered by your health plan. If you have an
                excess to pay, we’ll let you know - so there's no nasty
                surprises.
              </p>
              <p className="text-sm mt-4 text-secondary">
                If you decide to have a treatment which isn't covered in your
                plan, you will need to pay some, or all of the costs - please be
                sure to check Care Hub before you proceed.
              </p>
              <p className="text-sm mt-4 text-secondary">
                Visit the{" "}
                <a
                  href="https://members.vitality.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  Member Zone
                </a>{" "}
                to find out more about what your plan covers.
              </p>
              <div className="w-full flex justify-start">
                <button
                  className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                  onClick={() => {
                    setModal("");
                    setSegments(2);
                  }}
                >
                  Return to World of Vitality
                </button>
              </div>
            </div>
          </Modal>
        )}
        {modal === "2-3" && (
          <Modal key="health-4" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Speak to a GP within 48 hours
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>

            <div className="w-full px-10 pt-8 pb-4">
              <h2 className="text-xl text-gray-700 mb-4">
                Make an appointment on your terms, with the Vitality GP App
              </h2>
              <p className="text-sm mt-4 text-secondary">
                As a Vitality member, you get access to our network of Vitality
                GPs, who are all registered with the General Medical Council and
                have at least two years' experience in practicing in the UK. If
                you think there’s something wrong then speak to one of our
                Vitality GPs, they can refer you for onward treatment and even
                issue private prescriptions.
              </p>
              <a
                href="https://www.vitality.co.uk/health-insurance/vitality-gp/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
              >
                Read how
              </a>
            </div>
            <div className="w-full px-10 pb-8 text-secondary">
              <p className="text-sm mt-4">
                Using the Vitality GP App enables you to speak with a GP
                wherever you are.
              </p>
              <ul className="text-sm list-disc list-outside ml-3 mt-4">
                <li>Schedule a virtual appointment</li>
                <li>Upload some information </li>
                <li>Return to the app for your video consultation with a GP</li>
              </ul>
              <p className="text-sm mt-4">
                It couldn’t be simpler. Plus, you'll get access to private
                prescriptions up to £100 and fast referrals for treatment.
              </p>
              <div className="w-full flex justify-start">
                <button
                  className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                  onClick={() => {
                    setModal("");
                    setSegments(2);
                  }}
                >
                  Return to World of Vitality
                </button>
              </div>
            </div>
          </Modal>
        )}
        {modal === "2-4" && (
          <Modal key="health-5" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Peace of mind with our Full Cover Promise
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Our commitment to you
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  When you took out your Health insurance with us, we made a
                  promise to you to pay all consultants’ and anaesthetists’ fees
                  for in-patient and day-patient treatment, as long as the
                  treatment is eligible on your plan and the consultant is
                  recognised by us.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  So you can rest assured and focus on getting better, without
                  worrying about any cost implications.
                </p>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(2);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>
              </div>
              <div
                style={{
                  flex: 0.6,
                }}
              >
                <img src="/health-1.png" alt="" className="w-full" />
              </div>
            </div>
            {/* <div className="bg-metallic-blue w-full text-white px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">
                  Download the Vitality Member app
                </h1>
                <p className="text-sm mt-2">
                  Go to the Vitality app to find out more about what your plan
                  covers.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/app-store.png"
                      alt="App Store"
                      className="h-9"
                    />
                  </a>
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/google-play.png"
                      alt="Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
              </div>
              <div>
                <img src="/app.png" alt="" className="w-52" />
              </div>
            </div> */}
          </Modal>
        )}
        {modal === "2-5" && (
          <Modal key="health-6" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Inspirational stories
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>

            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                "Cancer is never easy... but my health insurance makes it
                easier"
              </h2>
              <p className="text-sm mt-4 text-secondary">
                Vitality not only helped Georgie with an early diagnosis - but
                allows her to still do the things she loves.
              </p>
              <a
                href="https://adviser.vitality.co.uk/insights/georgie-round-member-story/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-6 font-semibold"
              >
                Read how
              </a>
            </div>
            <div className="w-full py-12 px-10 bg-ice-blue">
              <h2 className="text-xl text-gray-700 mb-4">
                "I've always been overweight, and I could see there was going to
                be a tipping point, and I had to do something about that."
              </h2>
              <p className="text-sm mt-4 text-secondary">
                Watch below to find out how getting involved with parkrun turned
                Curtis' life around.
              </p>
              <div className="px-12 pt-12">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JrUfHafBvg4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="pb-6 pt-2 px-10 w-full flex justify-start">
              <button
                className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                onClick={() => {
                  setModal("");
                  setSegments(2);
                }}
              >
                Return to World of Vitality
              </button>
            </div>
          </Modal>
        )}
        {/* LIFE */}
        {modal === "3-0" && (
          <Modal key="life-1">
            <h1 className="text-2xl font-semibold text-primary mb-4">
              2. Life Insurance Land
            </h1>
            <h2 className="text-xl font-light text-gray-700 mb-4">
              Life insurance that makes you healthier
            </h2>
            <p className="text-center text-sm text-secondary">
              Both our Life Cover and Serious Illness Cover give you peace of
              mind, knowing your cover is in place should you be diagnosed with
              a serious illness* or pass away. Plus, as a Vitality member, you
              are rewarded for leading a healthier lifestyle.
            </p>
            <p className="text-center text-sm mt-4 text-secondary">
              For a breakdown of what's included in your plan, head to your app
              or the{" "}
              <a
                href="https://members.vitality.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Member Zone
              </a>
              .
            </p>
            <p className="text-center text-sm mt-4 text-secondary">
              *Please reference your plan documents to see which serious
              illnesses you're covered for.
            </p>
            <button
              onClick={() => setModal("")}
              className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
            >
              Explore now
            </button>
          </Modal>
        )}
        {modal === "3-1" && (
          <Modal key="life-2" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                What's included?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Cover for when you need it most
                </h2>
                <ul className="text-sm list-disc list-outside ml-3.5 text-secondary">
                  <li>Financial protection for your family</li>
                  <li>Replace lost income</li>
                  <li>Help loved ones pay off debts, once you're gone</li>
                  <li>Cover for funeral expenses</li>
                </ul>
                <p className="font-semibold text-sm mt-4 text-secondary">
                  For your specific cover, please go to your app or the Member
                  Zone.
                </p>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(3);
                    }}
                  >
                    Return to the World of Vitality
                  </button>
                </div>
              </div>
              <div>
                <img src="/life-2.png" alt="" className="w-40" />
              </div>
            </div>
            <div className="bg-metallic-blue w-full text-white px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">
                  Download the Vitality Member app
                </h1>
                <p className="text-sm mt-2">
                  Go to the Vitality app to find out more about what your plan
                  covers.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/app-store.png" alt="App Store" className="h-9" />
                  </a>
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/google-play.png"
                      alt="Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
              </div>
              <div>
                <img src="/app.png" alt="" className="w-52" />
              </div>
            </div>
          </Modal>
        )}
        {modal === "3-2" && (
          <Modal key="life-3" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Making a claim
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Here to support you
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  We know that life insurance claims are made at difficult
                  moments in life. That’s why we do all we can to handle every
                  claim as smoothly and as quickly as possible.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  Our dedicated claims team are available for support, Monday to
                  Friday, 9am to 5pm (excluding bank holidays) on{" "}
                  <b>0345 601 0072</b>
                </p>
                <h2 className="text-xl text-gray-700 mb-4 mt-4">
                  What will I need to make a claim?
                </h2>
                <ul className="text-sm list-disc list-outside ml-3 text-secondary">
                  <li>
                    A copy of the plan document (including the Plan Schedule and
                    Plan Provisions - you can find this by logging into Member
                    Zone if you don't have it to hand, but if you don't have
                    access to the plan document then give us a call to discuss.)
                  </li>
                  <li>Name of claimant</li>
                  <li>
                    Type of cover being claimed against (e.g. Serious Illness
                    Cover or Life Cover)
                  </li>
                  <li>Details of why you're claiming</li>
                  <li>
                    Name and address of the claimant’s GP or consultant details
                  </li>
                </ul>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(3);
                    }}
                  >
                    Return to the World of Vitality
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {modal === "3-3" && (
          <Modal key="life-4" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Get more from your Life plan
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-secondary">
                  When you bought your plan, you might have chosen to add
                  Optimiser. This gives you extra benefits, like up to 40% off
                  your life insurance premiums, the opportunity to keep your
                  premiums lower and access to a wider range of Vitality
                  partners (eligible plans only).
                </p>
                <p className="text-sm mt-4 text-secondary">
                  If you haven’t added Optimiser or had it before, you can still
                  add it to your plan*. Just call our friendly team on 080 8149
                  6315 (Mon - Thurs 9am - 8pm, Fri 9am - 6pm, Sat 10am - 2pm) or
                  call your Financial Adviser.
                </p>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(3);
                    }}
                  >
                    Return to the World of Vitality
                  </button>
                </div>

                <p className="text-xs mt-4 text-secondary">
                  *Eligibility applies.
                </p>
              </div>
              <div
                style={{
                  flex: 0.6,
                }}
              >
                <img src="/life-3.png" alt="" className="w-full" />
              </div>
            </div>
          </Modal>
        )}
        {modal === "3-4" && (
          <Modal key="life-4" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Inspirational stories
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>

            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                "How Vitality changed my life"
              </h2>
              <p className="text-sm mt-4 text-secondary">
                We don't believe life insurance should only be used when the
                unthinkable happens. Find out how Vitality helped to turn Chris'
                life around.
              </p>
            </div>
            <div className="py-12 px-24 w-full bg-ice-blue">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VJZ-gnavgts"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                “I saw it as a chance to kickstart a new me.”
              </h2>
              <p className="text-sm mt-4 text-secondary">
                Find out how how a Vitality life plan helped Annette transform
                her health and fitness.
              </p>
              <a
                href="https://adviser.vitality.co.uk/insights/annettes-story-i-saw-it-as-a-chance-to-kickstart-a-new-me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
              >
                Read more
              </a>
              <div className="w-full flex justify-start">
                <button
                  className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                  onClick={() => {
                    setModal("");
                    setSegments(3);
                  }}
                >
                  Return to the World of Vitality
                </button>
              </div>
            </div>
          </Modal>
        )}
        {modal === "3-5" && (
          <Modal key="life-5" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">Testing</h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>

            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                "How Vitality changed my life"
              </h2>
              <p className="text-sm mt-4 text-secondary">
                We don't believe life insurance should only be used when the
                unthinkable happens. Find out how Vitality helped to turn Chris'
                life around.
              </p>
            </div>
            <div className="py-12 px-24 bg-ice-blue">
              <video
                src="/Vitality_Life-Insurance_Inspirational-Stories.mp4"
                controls
                className="w-full aspect-video object-cover"
              ></video>
            </div>
            <div className="w-full px-10 py-8">
              <h2 className="text-xl text-gray-700 mb-4">
                “I saw it as a chance to kickstart a new me.”
              </h2>
              <p className="text-sm mt-4 text-secondary">
                Find out how how a Vitality life plan helped Annette transform
                her health and fitness.
              </p>
              <a
                href="https://adviser.vitality.co.uk/insights/annettes-story-i-saw-it-as-a-chance-to-kickstart-a-new-me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
              >
                Read more
              </a>
              <div className="w-full flex justify-start">
                <button
                  className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                  onClick={() => {
                    setModal("");
                    setSegments(3);
                  }}
                >
                  Return to Life Insurance Land
                </button>
              </div>
            </div>
          </Modal>
        )}
        {/* PROGRAM */}
        {modal === "4-0" && (
          <Modal key="program-1">
            <h1 className="text-2xl font-semibold text-primary mb-4">
              The Programme Parkway
            </h1>
            <h2 className="text-xl font-light text-gray-700 mb-4">
              How to access the Vitality Programme
            </h2>
            <p className="text-center text-sm text-secondary">
              You've chosen an insurance plan which rewards you for leading a
              healthy lifestyle. So let's get you set up straight away to help
              you get healthier and start earning your rewards.
            </p>
            <p className="text-center text-sm mt-4 text-secondary">
              To find out which rewards you have available on your plan, simply
              check your plan documents in{" "}
              <a
                href="https://members.vitality.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member Zone
              </a>
              .
            </p>
            <button
              onClick={() => setModal("")}
              className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
            >
              Explore now
            </button>
          </Modal>
        )}
        {modal === "4-1" && (
          <Modal key="program-2" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                How do I get started?
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  So much more than insurance
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  At Vitality, we don't just provide you with a plan for when
                  things go wrong - we reward you for living a better, healthier
                  lifestyle.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  Our healthy living programme helps you (and us) understand
                  your current health situation, before focussing on ways to
                  improve your fitness and wellbeing.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  The healthier you get, the greater the rewards you'll unlock.
                  But you'll need to register to get started - download the
                  Vitality Member app to get set up
                </p>
                <a
                  href="https://www.vitality.co.uk/support/vitality-programme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
                >
                  Find out more
                </a>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(4);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="/illustration-rgb_people-walk-stanley-1.png"
                  alt=""
                  className="w-40"
                />
              </div>
            </div>
            <div className="bg-metallic-blue w-full text-white px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">
                  Download the Vitality Member app
                </h1>
                <p className="text-sm mt-2">
                  Go to the Vitality app to find out more about what your plan
                  covers.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/app-store.png" alt="App Store" className="h-9" />
                  </a>
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/google-play.png"
                      alt="Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
              </div>
              <div>
                <img src="/app.png" alt="" className="w-52" />
              </div>
            </div>
          </Modal>
        )}
        {modal === "4-2" && (
          <Modal key="program-3" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                How to register
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Getting set up on the Vitality Programme
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  The first thing you'll need to do is download the Vitality
                  Member app. It gives you access to everything you need to make
                  the most of the programme.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  To do this, you’ll need your membership number to hand, which
                  you should be able to find in any email you’ve received from
                  us.
                </p>
                <p className="text-sm mt-4 text-secondary">Available on:</p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/app-store.png" alt="App Store" className="h-9" />
                  </a>
                  <a
                    href="https://www.vitality.co.uk/app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/google-play.png"
                      alt="Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
                <p className="text-sm mt-6 text-secondary">
                  We'll ask you a few simple questions to get you started before
                  you're ready to starting earning Vitality points straight
                  away.
                </p>
                <b className="block text-sm mt-4 text-secondary">
                  Complete your Health Review
                </b>
                <p className="text-sm mt-1 text-secondary">
                  It'll just take 5 minutes and we'll instantly award you up to
                  200 Vitality points. Don't worry, the information you give us
                  isn't used against you. But it helps us provide tailored
                  health recommendations which, in turn, can help you unlock
                  your rewards.
                </p>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(4);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {modal === "4-3" && (
          <Modal key="program-4" noPadding>
            <div className="bg-primary w-full text-white flex justify-between items-center py-8 px-10">
              <h1 className="text-2xl font-semibold text-white">
                Tracking your activity
              </h1>
              <button
                className="text-white text-2xl"
                onClick={() => setModal("")}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="w-full px-10 py-8 flex justify-between items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-gray-700 mb-4">
                  Getting set up to record your workouts
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  To make sure you're getting the rewards you've earned, you can
                  record much more of your activity and workouts by connecting
                  an activity tracker.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  If you already have an eligible fitness tracker, you can link
                  it to the Vitality Member app and start your journey to
                  unlocking more points and rewards.
                </p>
                <p className="text-sm mt-4 text-secondary">
                  If you need a hand setting up your tracker, then within the
                  app simply navigate to 'More' from the bottom menu, and tap
                  'Connections'.
                </p>
                <h2 className="text-xl text-gray-700  mt-4">
                  Still on the hunt for an activity tracker?
                </h2>
                <p className="text-sm mt-4 text-secondary">
                  They're a great way to track your workouts, and make sure
                  you're getting rewarded for them. Check out the activity
                  trackers{" "}
                  <a
                    href="https://www.vitality.co.uk/rewards/partners/activity-tracking/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-semibold underline"
                  >
                    we recommend
                  </a>{" "}
                  - and you may even be able to apply a Vitality discount.
                </p>
                <div className="border-2 border-primary mt-4 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-secondary">
                    Check out Rewardsville to see how you can start earning
                    points and increasing your Vitality status.
                  </p>
                  <button
                    className="bg-primary text-sm text-white px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("1-0");
                      setSegments(1);
                    }}
                  >
                    Next stop - Rewardsville
                  </button>
                </div>
                <div className="w-full flex justify-start">
                  <button
                    className="bg-[#dddddd] text-sm text-[#222222] px-6 py-3 rounded-md mt-4 font-semibold"
                    onClick={() => {
                      setModal("");
                      setSegments(4);
                    }}
                  >
                    Return to World of Vitality
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <div
        className={`w-screen h-screen fixed z-0 top-0 left-0 transition-all duration-1000 delay-700 ${
          !isLoaded
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <Scene
          isLoaded={isLoaded}
          readyToExplore={readyToExplore}
          segment={segments}
          setSegment={setSegments}
          modal={modal}
          setModal={setModal}
        />
      </div>
    </>
  );
}

const Modal = ({
  children,
  delay,
  noPadding,
}: {
  children: React.ReactNode;
  delay?: number;
  noPadding?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-50"
    >
      <div
        className={`content fixed top-1/2 left-1/2 ${
          noPadding ? "" : "px-8 py-6"
        }
        transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-fit bg-white rounded-lg overflow-x-hidden overflow-y-auto shadow`}
        style={{
          maxHeight: "85vh",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const Scene = ({
  isLoaded,
  readyToExplore,
  segment,
  setSegment,
  modal,
  setModal,
}: {
  isLoaded: boolean;
  readyToExplore: boolean;
  segment: number;
  setSegment: (segment: number) => void;
  modal: string;
  setModal: (modal: string) => void;
}) => {
  return (
    <Canvas
      shadows
      camera={{
        position: [35, 25, 35],
        fov: 10,
        near: 1,
        far: 1000,
      }}
      gl={{
        antialias: false,
      }}
    >
      <color attach="background" args={[0.8, 0.8, 0.8]} />
      <ambientLight intensity={0.8} />
      <Camera segment={segment} />
      <Environment preset="city" />
      <EffectComposer multisampling={0}>
        <N8AO intensity={1} quality="performance" />
        <HueSaturation saturation={0.5} />
        <SMAA />
      </EffectComposer>
      <Suspense fallback={null}>
        <group position={[0, 2, 0]}>
          <Center>
            <Map />
          </Center>
          {/* REWARDSVILLE */}
          <mesh position={[1.5, -1.2, 4]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment !== 1 && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setSegment(1);
                      setModal("1-0");
                    }}
                  >
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                    <div className="border-2 border-primary bg-white px-2 py-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-xs lg:text-sm text-outline">
                        4. Rewardsville
                      </p>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[1, -0.45, 3]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 1 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("1-1");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        What's a Vitality status?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[-0.35, -0.4, 2.9]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 1 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.0, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("1-2");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        How do I get points?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[0.9, -0.68, 1.72]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 1 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.3, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("1-3");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        What rewards do I get?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          {/* HEALTH INSURANCE */}
          <mesh position={[0, -0.6, -2.5]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment !== 2 && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setSegment(2);
                      setModal("2-0");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 py-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-xs lg:text-sm text-outline">
                        1. Health Insurance Hills
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[0.5, -0.55, -1.8]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 2 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("2-1");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        What's included?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[-1.7, -0.2, -1.7]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 2 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.0, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("2-2");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Using your health plan
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[-0.4, -0.35, -1.8]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 2 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.3, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("2-3");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Speaking to a GP
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[-1.2, -0.2, -0.2]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 2 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.6, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("2-4");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold w-52 text-sm lg:text-lg text-outline">
                        Full Cover Promise
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[0, -0.6, -0.3]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 2 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.9, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("2-5");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Inspirational stories
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          {/* LIFE INSURANCE */}
          <mesh position={[2.5, -0.6, -2.4]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment !== 3 && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.3, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setSegment(3);
                      setModal("3-0");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 py-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-xs lg:text-sm text-outline">
                        2. Life Insurance Land
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[3.75, -0.2, -1.4]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 3 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("3-1");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        What's included?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[2.4, -0.7, -1.75]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 3 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.0, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("3-2");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Making a claim
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[4.2, -0.8, 0.7]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 3 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.3, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("3-3");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Get more from your Life plan
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[4.2, -0.75, -0.15]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 3 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.6, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("3-4");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Inspirational stories
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          {/* PROGRAMME PARKWAY */}
          <mesh position={[4.2, -1.3, 2.2]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment !== 4 && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.6, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setSegment(4);
                      setModal("4-0");
                    }}
                  >
                    <span className="text-4xl lg:text-5xl mb-2 mt-2 block">
                      <HiLocationMarker />
                    </span>
                    <div className="border-2 border-primary bg-white px-2 py-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-xs lg:text-sm text-outline">
                        3. Programme Parkway
                      </p>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[2.6, -0.8, 3.1]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 4 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("4-1");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        How do I get started?
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[2.7, -0.7, 2.2]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 4 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.0, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("4-2");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        How to register
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
          <mesh position={[3.65, -0.8, 2.2]}>
            <boxGeometry args={[0, 0, 0]} />
            <meshStandardMaterial color="white" />
            <Html center>
              <AnimatePresence>
                {readyToExplore && segment === 4 && !modal && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1.3, duration: 0.5 },
                    }}
                    exit={{ scale: 0 }}
                    className="text-primary flex flex-col justify-center items-center"
                    onClick={() => {
                      setModal("4-3");
                    }}
                  >
                    <div className="border-2 border-primary bg-white px-2 pt-1 rounded-lg">
                      <p className="font-bold whitespace-nowrap text-sm lg:text-lg text-outline">
                        Tracking your activity
                      </p>
                    </div>
                    <span className="text-4xl lg:text-5xl mb-2 block">
                      <HiLocationMarker />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </Html>
          </mesh>
        </group>
      </Suspense>
    </Canvas>
  );
};

const Camera = ({ segment }: { segment: number }) => {
  const camRef = useRef({
    posX: 35,
    posY: 25,
    posZ: 35,
    rotX: -0.601,
    rotY: 0.689,
    rotZ: 0.411,
  });
  const orbitRef = useRef<any>(null);
  const [target, setTarget] = useState<[number, number, number]>([0, 1, 0]);
  const [allowControls, setAllowControls] = useState(true);

  useEffect(() => {
    if (segment === 0) {
      setAllowControls(false);
      setTarget([0, 0.7, 0]);
      gsap.to(camRef.current, {
        duration: 1,
        posX: 26.005125999999997,
        posY: 18.003773000000002,
        posZ: 25.884203999999997,
        rotX: -0.5892756368778681,
        rotY: 0.695854936938233,
        rotZ: 0.4048660747521179,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setAllowControls(true);
          }, 10);
        },
      });
    }
    if (segment === 1) {
      setAllowControls(false);
      setTarget([0, 1, 2.5]);
      gsap.to(camRef.current, {
        duration: 1,
        posX: 13.61425280775232,
        posY: 6.8376590086391165,
        posZ: 14.223739075143593,
        rotX: -0.4619941759478067,
        rotY: 0.8047706700129357,
        rotZ: 0.3445350108878245,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setAllowControls(true);
          }, 10);
        },
      });
    }
    if (segment === 2) {
      setAllowControls(false);
      setTarget([-0.6, 1, -1.2]);
      gsap.to(camRef.current, {
        duration: 1,
        posX: 10.244301236812499,
        posY: 6.856194364518674,
        posZ: 12.200256699975187,
        rotX: -0.4120083739383057,
        rotY: 0.6380650032565653,
        rotZ: 0.2546567366890451,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setAllowControls(true);
          }, 10);
        },
      });
    }
    if (segment === 3) {
      setAllowControls(false);
      setTarget([3, 1, -0.6]);
      gsap.to(camRef.current, {
        duration: 1,
        posX: 10.18520861666606,
        posY: 7.313082962140495,
        posZ: 17.302992343450907,
        rotX: -0.33901343414143276,
        rotY: 0.36183401623978967,
        rotZ: 0.12418421134164191,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setAllowControls(true);
          }, 10);
        },
      });
    }
    if (segment === 4) {
      setAllowControls(false);
      setTarget([3, 1, 2.5]);
      gsap.to(camRef.current, {
        duration: 1,
        posX: 12.82215078805794,
        posY: 5.946016984158839,
        posZ: 11.601173954030427,
        rotX: -0.49779915821746124,
        rotY: 0.7588364910583761,
        rotZ: 0.357836272894281,
        ease: "power3.out",
        onComplete: () => {
          setTimeout(() => {
            setAllowControls(true);
          }, 10);
        },
      });
    }
  }, [segment]);

  useFrame(({ camera }) => {
    if (allowControls) {
      camRef.current.posX = camera.position.x;
      camRef.current.posY = camera.position.y;
      camRef.current.posZ = camera.position.z;
      camRef.current.rotX = camera.rotation.x;
      camRef.current.rotY = camera.rotation.y;
      camRef.current.rotZ = camera.rotation.z;
    } else {
      camera.position.x = camRef.current.posX;
      camera.position.y = camRef.current.posY;
      camera.position.z = camRef.current.posZ;
      camera.rotation.x = camRef.current.rotX;
      camera.rotation.y = camRef.current.rotY;
      camera.rotation.z = camRef.current.rotZ;
    }
    // console.log(camRef.current);
  });

  return (
    <OrbitControls
      ref={orbitRef}
      enableDamping={false}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      // dampingFactor={segment === 0 ? 0.01 : 0.1}
      target={target}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.5}
      maxDistance={segment === 0 ? 65 : 40}
    />
  );
};
