import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiKey = import.meta.env.VITE_API_KEY;

function Facts() {
  const [fact, setFact] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#000000");
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [fact + "."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, [fact]);

  useEffect(() => {
    getFact();
  }, []);

  async function getFact() {
    setLoading(true);
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/facts", {
        headers: { "X-Api-Key": apiKey },
      });
      if (!response.ok) {
        toast.error("Failed to fetch fact", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { background: "#e2e8f0", color: "#0f172a" },
        });
        setLoading(false);
        setError(true);
        return;
      }
      const data = await response.json();
      setFact(data[0]?.fact);
      setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      console.log(color);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  }

  function copyToClipboard(fact) {
    navigator.clipboard.writeText(fact);
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: "#e2e8f0", color: "#0f172a" },
    });
  }

  function handleGetFact() {
    getFact();
  }

  function handleSaveFact(fact) {
    setSaved([...saved, fact]);
    toast.success("Bookmarked!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: "#e2e8f0", color: "#0f172a" },
    });
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex bg-transparent absolute top-0 left-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="mt-5 px-4 py-2 bg-neutral-950 text-black font-bold rounded-lg flex items-center mr-3"
        >
          <i className="fas fa-bars text-3xl text-slate-200 m-5"></i>
        </motion.button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
        <div
          className={`fixed top-0 left-0 w-96 h-full bg-neutral-100 shadow-lg transform transition-transform duration-300 overflow-y-auto z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between bg-neutral-100 p-4">
            <h2 className="text-2xl font-bold mt-5 px-4 py-1.5">Bookmarks</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-5 px-4 py-2 bg-neutral-950 text-slate-100 font-bold rounded-full flex items-center mr-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-times text-xl"></i>
            </motion.button>
          </div>
          <li className="p-4 m-2">
            {saved.map((fact, index) => (
              <ul key={index} className="my-2">
                {fact + "."}
                <hr className="my-2 rounded-lg border-1 border-neutral-900" />
              </ul>
            ))}
          </li>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[600px] p-20 shadow-2xl rounded-xl bg-neutral-900 m-5 border-2 border-slate-200">
        {loading ? (
          <div className="flex items-center justify-center w-full h-96">
            <Triangle color="#2dd4bf" height={70} width={70} />
          </div>
        ) : (
          <>
            {error && (
              <h1 className="text-red-500 mb-4 text-bold text-2xl text-center mx-10">
                Something's not right. Please try again!
              </h1>
            )}
            <h1 className="mx-10 mt-0 mb-1 text-3xl font-bold text-slate-200 text-center">
              <span ref={el}></span>
            </h1>
            <motion.hr
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{ borderColor: color }}
              className="w-full m-10 rounded-lg border-2"
            />
            <div className="flex items-center ml-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-5 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg flex items-center mr-3"
                onClick={() => copyToClipboard(fact)}
              >
                <i className="fas fa-clipboard text-2xl"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-5 px-4 py-2 bg-red-400 text-black font-bold rounded-lg flex items-center mr-3"
                onClick={() => handleSaveFact(fact)}
              >
                <i className="fas fa-bookmark text-2xl"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-5 py-2 px-4 bg-emerald-400 text-black font-bold rounded-lg flex items-center"
                onClick={() => handleGetFact()}
              >
                <i className="fas fa-sync-alt text-2xl"></i>
              </motion.button>
            </div>
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default Facts;
