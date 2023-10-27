import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className="w-2/12 bg-#212121 pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col bg-#121212  border-gray-500 border-b-2">
        {!mainLinks.length
          ? null
          : mainLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`pl-6 py-3 hover:bg-zinc-600 ${
                    link.name === "Home" ? "bg-slate-700" : ""
                  }`}
                >
                  <a href="#home" className=" flex items-center gap-5">
                    {link.icon}
                    <span className="text-sm tracking-wider">{link.name}</span>
                  </a>
                </li>
              );
            })}
      </ul>
      <ul className="flex flex-col bg-#121212  border-gray-500 border-b-2">
        {!secondaryLinks.length
          ? null
          : secondaryLinks.map((link, index) => {
              return (
                <li key={index} className={`pl-6 py-3 hover:bg-zinc-600 `}>
                  <a href="#home" className=" flex items-center gap-5">
                    {link.icon}
                    <span className="text-sm tracking-wider">{link.name}</span>
                  </a>
                </li>
              );
            })}
      </ul>
      <ul className="flex flex-col bg-#121212  border-gray-500 border-b-2">
        {!subscriptionLinks.length
          ? null
          : subscriptionLinks.map((link, index) => (
              <li
                className="flex flex-col py-3 pl-6 hover:bg-zinc-600"
                key={index}
              >
                <a href="#" className="flex gap-5 items-center">
                  {link.icon}
                  <span className="text-sm tracking-wider">{link.name}</span>
                </a>
              </li>
            ))}
      </ul>
      <ul className="flex flex-col bg-#121212 border-gray-500 border-b-2 ">
        {!helpLinks.length
          ? null
          : helpLinks.map((item, index) => {
              return (
                <li
                  className="flex flex-col hover:bg-zinc-600 py-3 pl-6"
                  key={index}
                >
                  <a href="#" className="flex items-center gap-5">
                    {item.icon}
                    <span className="text-sm tracking-wider">{item.name}</span>
                  </a>
                </li>
              );
            })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  );
};

export default Sidebar;
