/* eslint-disable react/prop-types */
import '../static/Loader.css';
import { motion } from 'framer-motion';
import React, { useRef, useEffect } from "react";

const Loader = ({ hiddenText }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {hiddenText ? (
          <div className="loader">
            <div className="loader__balls">
              <div className="loader__balls__group">
                <div className="ball item1"></div>
                <div className="ball item1"></div>
                <div className="ball item1"></div>
              </div>
              <div className="loader__balls__group">
                <div className="ball item2"></div>
                <div className="ball item2"></div>
                <div className="ball item2"></div>
              </div>
              <div className="loader__balls__group">
                <div className="ball item3"></div>
                <div className="ball item3"></div>
                <div className="ball item3"></div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          >
            <div data-glitch="Welcome..." className="glitch">
              Welcome...
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Loader;
