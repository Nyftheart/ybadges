import React from 'react';
// logo
import NikeImg  from '../img/badge.png';
// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Image from "next/image";

const Badges = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);


    return (
        // card wrapper
        <div style={{ perspective: 2000 }} className="lg:ml-96 mt-10 ">
    {/* card */}
    <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
    drag
    dragElastic={0.18}
    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    whileTap={{ cursor: 'grabbing' }}
    className='w-[150px] h-[200px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[10px] py-[5px] cursor relative'
        >
        {/* card logo */}
        <div className='mb-6'>
        </div>
    {/* card title */}
    <h1 className='text-lg mb-6 font-extrabold justify-center text-center'>Badge 1</h1>
    {/* card subtitle */}
    {/* btn & price wrapper */}

    {/* colors */}

    {/* card image */}
    <motion.div
        style={{ x, y, rotateX, rotateY, z: 100000 }}
    className='absolute top-16 w-[100px] ml-2'
    >
        <Image src={NikeImg} />
        </motion.div>
        </motion.div>
        </div>
);
};

export default Badges;
