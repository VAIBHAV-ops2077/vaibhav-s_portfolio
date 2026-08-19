/**
 * FigmaBookScene — Pixel-perfect alignment matching Figma Final and Layout reference
 *
 * Canvas: 1920 × 1080 (scaled to viewport via min(w/1920, h/1080))
 * Book: left: 571px, top: 324px, 669.589px × 470.019px
 * Clouds: 4 corner clouds (1284,860), (-242,841), (1401,-300), (-548,-250)
 * Content Stickers: Bird Cage, Burning Cliffs, Bell Forest, Mushroom Farm, Circus, Tree, Clouds
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import svgPaths from "../../assets/figma/svg-sdyk8w1vol";
import imgImage381 from "../../assets/figma/8be4ffeb5f396a45a3cdde1c16d5ee25c5e0a9c5.png";
import imgImage382 from "../../assets/figma/1d239d15fccf7792d7dffdedd0f18edcd1559140.png";
import imgImage383 from "../../assets/figma/514bf30d59367cdcb934683a1b9f77102c1d7f31.png";
import imgImage384 from "../../assets/figma/4d2b3cdc2e405ca5ce99ad6294e29be32de25cc9.png";
import imgImage385 from "../../assets/figma/19557b06a53bae4049ff72253ab14b5745713a76.png";
import imgImage386 from "../../assets/figma/f470ae578d904084a4b30015f1b176847ec9431d.png";
import imgImage387 from "../../assets/figma/e3670f851e59efffa06a892e52b078a4b826d05f.png";
import imgImage388 from "../../assets/figma/652bc9513219d9942c892f5ad03a26a02b10d798.png";
import imgImage585 from "../../assets/figma/6db9d7de556b26d6c23e7234d91a87acee66ec3f.png";
import imgImage605 from "../../assets/figma/8d38b5438522cf72f40b6bde071973a50517417f.png";
import imgImage608 from "../../assets/figma/526e0c7cdd521db0aefc924618a657d4b872d586.png";
import imgRectangle from "../../assets/figma/5973d40b6329f711612e7e7cc01cf489cc65da53.png";
import imgJungleeeee1 from "../../assets/figma/ec6499d8ee5a18ac48f9081fb2aa6c189afa0799.png";
import imgMushroom1 from "../../assets/figma/5b239b6624a24997f4aff6aeed8e78ce6d027144.png";
import imgImage609 from "../../assets/figma/efff1ad7b3418bca5b787c757fdea2365fee3e3e.png";
import imgRectangle39977 from "../../assets/figma/e786ae098dbfa7a6ea4a04de27d1e88080c50b7e.png";
import imgRectangle3 from "../../assets/figma/45189fbfa58331ef991a3fd582158dd71b215124.png";
import imgCloud1 from "../../assets/figma/b0d1fd85a7f83070df6365e9039c262290994165.png";

// Spring easing functions
const seRect3 = (t: number) => 1 - Math.exp(-t * 7.4392) * (Math.cos(t * 10.6071) + 0.7013 * Math.sin(t * 10.6071));
const seBook = (t: number) => 1 - Math.exp(-t * 7.553) * (Math.cos(t * 8.3331) + 0.9064 * Math.sin(t * 8.3331));
const seCover2 = (t: number) => 1 - Math.exp(-t * 7.6657) * (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605));
const sePageR = (t: number) => 1 - Math.exp(-t * 7.5269) * (Math.cos(t * 8.7796) + 0.8573 * Math.sin(t * 8.7796));
const sePageL = (t: number) => 1 - Math.exp(-t * 7.4876) * (Math.cos(t * 9.5286) + 0.7858 * Math.sin(t * 9.5286));
const seContent = (t: number) => 1 - Math.exp(-t * 7.4169) * (Math.cos(t * 11.1716) + 0.6639 * Math.sin(t * 11.1716));
const seCloud2 = (t: number) => 1 - Math.exp(-t * 7.4988) * (Math.cos(t * 9.3053) + 0.8059 * Math.sin(t * 9.3053));
const seCloud3 = (t: number) => 1 - Math.exp(-t * 7.4837) * (Math.cos(t * 9.6102) + 0.7787 * Math.sin(t * 9.6102));
const seTab = (t: number) => 1 - Math.exp(-t * 7.4892) * (Math.cos(t * 9.4965) + 0.7886 * Math.sin(t * 9.4965));
const seCloudRot = (t: number) => 1 - Math.exp(-t * 7.4996) * (Math.cos(t * 9.29) + 0.8073 * Math.sin(t * 9.29));
const seCloudPos = (t: number) => 1 - Math.exp(-t * 7.5018) * (Math.cos(t * 9.2474) + 0.8112 * Math.sin(t * 9.2474));

const D = 5.5;

// Shared cover design
function CoverDesign({ showCityMap }: { showCityMap?: boolean }) {
  return (
    <div className="absolute inset-[0.53%_-8.03%_-0.53%_0]" data-name="COVER DESIGN">
      <div className="absolute h-[508.384px] left-0 top-[-67.73px] w-[363.99px]" data-name="image 381">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage381} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage382} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage383} />
        </div>
      </div>
      <div className="absolute h-[116.102px] left-[26.02%] right-[32.24%] top-[142.49px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="116.102" preserveAspectRatio="none" viewBox="0 0 151.87 116.102" width="151.87">
          <path d={svgPaths.p30f35b80} fill="#FEFEFE" id="Vector" />
        </svg>
      </div>
      {showCityMap && (
        <div className="absolute h-[23.065px] left-[114.99px] top-[-23.68px] w-[94.023px]" data-name="City Map">
          <svg className="absolute block inset-0 size-full" fill="none" height="78.6704" preserveAspectRatio="none" viewBox="0 0 320.693 78.6704" width="320.693">
            <g id="City Map">
              <path d={svgPaths.p1b532b80} fill="#B28358" id="Vector" />
              <path d={svgPaths.p2aecd800} fill="#B28358" id="Vector_2" />
              <path d={svgPaths.p3be6d280} fill="#B28358" id="Vector_3" />
              <path d={svgPaths.p2fcfb300} fill="#B28358" id="Vector_4" />
              <path d={svgPaths.pbf9500} fill="#B28358" id="Vector_5" />
              <path d={svgPaths.pd73a680} fill="#B28358" id="Vector_6" />
              <path d={svgPaths.pa8bca00} fill="#B28358" id="Vector_7" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

// Single page image wrapper
function PageImg({ src }: { src: string }) {
  return (
    <div className="absolute h-[441.612px] left-[-2.92px] top-[-2.63px] w-[366.257px]" data-name="image 382">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}

// Inside book component with exact layout
function Book() {
  return (
    <div className="h-[470.019px] relative w-[669.589px]" data-name="BOOK">
      {/* COVER 2 – left back cover */}
      <motion.div
        className="absolute flex inset-[0_0_0_49.88%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: 1, scaleY: 0.996 }}
        animate={{ scaleX: 1, scaleY: 0.996 }}
        transition={{
          scaleX: { duration: D * 0.2849, ease: seCover2 },
          scaleY: { duration: D * 0.2849, ease: seCover2 },
        }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[319.774cqh] w-[hypot(341.08cqw,-21.3059cqh)]">
          <div className="relative size-full" data-name="COVER 2">
            <CoverDesign />
          </div>
        </div>
      </motion.div>

      {/* PAGE R 1 */}
      <motion.div
        className="absolute flex inset-[0.21%_50.07%_0.17%_0] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.95, scaleY: -0.946 }}
        animate={{ scaleX: -0.95, scaleY: -0.946 }}
      >
        <div className="-scale-x-100 -skew-x-5 flex-none h-[320.995cqh] rotate-5 w-[hypot(-342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE R 1">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage384} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* PAGE R 2 */}
      <motion.div
        className="absolute flex inset-[0.21%_50.07%_0.17%_0] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.9, scaleY: -0.946, y: -2.713 }}
        animate={{ scaleX: -0.9, scaleY: -0.946, y: -2.713 }}
      >
        <div className="-scale-x-100 -skew-x-5 flex-none h-[320.995cqh] rotate-5 w-[hypot(-342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE R 2">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage385} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* PAGE R 3 */}
      <motion.div
        className="absolute flex inset-[0.21%_50.07%_0.17%_0] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.86, scaleY: -0.946, y: -4.713 }}
        animate={{ scaleX: -0.86, scaleY: -0.946, y: -4.713 }}
      >
        <div className="-scale-x-100 -skew-x-5 flex-none h-[320.995cqh] rotate-5 w-[hypot(-342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE R 3">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage386} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN PAGE 2 – right open spread (watermelon illustration) */}
      <motion.div
        className="absolute flex inset-[0.21%_50.07%_0.17%_0] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 2 }}
        initial={{ scaleX: -0.84, scaleY: -0.946, y: -7.713 }}
        animate={{ scaleX: -0.84, scaleY: -0.946, y: -7.713 }}
      >
        <div className="-scale-x-100 -skew-x-5 flex-none h-[320.995cqh] rotate-5 w-[hypot(-342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="MAIN PAGE 2">
            <div className="absolute inset-[0_-8.7%_0_0]" data-name="PAGE MAIN DESIGN">
              <PageImg src={imgImage387} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* COVER 1 – right front cover (flipped open) */}
      <motion.div
        className="absolute flex inset-[0_0_0_49.88%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 3 }}
        initial={{ scaleX: 1, scaleY: 0.996 }}
        animate={{ scaleX: -1, scaleY: 0.996 }}
        transition={{
          scaleX: { duration: D * 0.2849, ease: sePageR },
          scaleY: { duration: D * 0.2849, ease: sePageR },
        }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[319.774cqh] w-[hypot(341.08cqw,-21.3059cqh)]">
          <div className="relative size-full" data-name="COVER 1">
            <CoverDesign showCityMap />
          </div>
        </div>
      </motion.div>

      {/* PAGE L 1 */}
      <motion.div
        className="absolute flex inset-[0.21%_0.14%_0.17%_49.93%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.95, scaleY: 0.946 }}
        animate={{ scaleX: -0.95, scaleY: 0.946 }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[320.995cqh] w-[hypot(342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE L 1">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage384} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* PAGE L 2 */}
      <motion.div
        className="absolute flex inset-[0.21%_0.14%_0.17%_49.93%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.9, scaleY: 0.946, y: -4.713 }}
        animate={{ scaleX: -0.9, scaleY: 0.946, y: -4.713 }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[320.995cqh] w-[hypot(342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE L 2">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage385} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* LEFT NAVIGATION TABS */}
      <motion.div
        className="absolute contents left-[-63px] top-[70px]"
        data-name="TAB"
        style={{ zIndex: 15 }}
        initial={{ opacity: 0, x: 124.986 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          opacity: { duration: D * 0.16, ease: [0.5, 0, 0.5, 1] },
          x: { duration: D * 0.33, ease: seTab },
        }}
      >
        {/* Tab 1: Expedition */}
        <div className="absolute flex h-[72.569px] items-center justify-center left-[-63px] top-[70px] w-[148.289px]">
          <div className="flex-none rotate-[5.55deg]">
            <div className="h-[59px] relative w-[143.257px]" data-name="TAB">
              <div className="absolute bg-[#ead3b4] border-[2.07px] border-solid border-white inset-0 rounded-[42.942px]" />
              <div className="absolute inset-[10.59%_4.36%]">
                <div className="absolute inset-[-2.23%_-0.79%]">
                  <svg className="block size-full" fill="none" height="48.575" preserveAspectRatio="none" viewBox="0 0 132.832 48.575" width="132.832">
                    <path d={svgPaths.p3ae09070} stroke="#836245" strokeDasharray="4.14 4.14" strokeLinecap="round" strokeOpacity="0.2" strokeWidth="2.07019" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-47.59px)] top-[calc(50%-1.15px)]">
                <div className="overflow-clip relative shrink-0 size-[18.917px]">
                  <div className="absolute inset-[4.17%_8.33%_12.49%_8.33%]">
                    <div className="absolute inset-[0_0_-4.99%_-5%]">
                      <svg className="block size-full" fill="none" height="16.5517" preserveAspectRatio="none" viewBox="0 0 16.5523 16.5517" width="16.5523">
                        <g>
                          <path d={svgPaths.p28f6fa20} stroke="#836245" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.57644" />
                          <path d={svgPaths.p25a14cf0} fill="#836245" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[38.3px] not-italic text-[#836245] text-[17.94px] top-[27.07px] tracking-[-0.897px] whitespace-nowrap">
                <p className="leading-[normal]">Expedition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 2 */}
        <div className="absolute flex h-[72.569px] items-center justify-center left-[-47.26px] top-[133.44px] w-[148.289px]">
          <div className="flex-none rotate-[5.55deg]">
            <div className="h-[59px] relative w-[143.257px]" data-name="TAB">
              <div className="absolute bg-[#f8f4e7] border-[2.07px] border-solid border-white inset-0 rounded-[42.942px]" />
              <div className="absolute content-stretch flex flex-col inset-[34.11%_75.56%_35%_11.72%] items-start">
                <div className="relative shrink-0 size-[18.223px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.223" preserveAspectRatio="none" viewBox="0 0 18.223 18.223" width="18.223">
                    <g clipPath="url(#clip_tab2_scene)">
                      <path d={svgPaths.p3382cfc0} fill="#836245" />
                    </g>
                    <defs>
                      <clipPath id="clip_tab2_scene">
                        <rect fill="white" height="18.223" width="18.223" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 3 */}
        <div className="absolute flex h-[72.569px] items-center justify-center left-[-49.54px] top-[197.63px] w-[148.289px]">
          <div className="flex-none rotate-[5.55deg]">
            <div className="h-[59px] relative w-[143.257px]" data-name="TAB">
              <div className="absolute bg-[#f8f4e7] border-[2.07px] border-solid border-white inset-0 rounded-[42.942px]" />
              <div className="absolute aspect-[29.50943374633789/46] left-[11.72%] right-[75.92%] top-[14.77px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="27.5949" preserveAspectRatio="none" viewBox="0 0 17.7024 27.5949" width="17.7024">
                  <path d={svgPaths.p317b3700} fill="#836245" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 4 */}
        <div className="absolute flex h-[72.569px] items-center justify-center left-[-51.81px] top-[261.82px] w-[148.289px]">
          <div className="flex-none rotate-[5.55deg]">
            <div className="h-[59px] relative w-[143.257px]" data-name="TAB">
              <div className="absolute bg-[#f8f4e7] border-[2.07px] border-solid border-white inset-0 rounded-[42.942px]" />
              <div className="absolute content-stretch flex flex-col inset-[30.92%_74.47%_31.13%_9.91%] items-start">
                <div className="relative shrink-0 size-[22.388px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="22.3883" preserveAspectRatio="none" viewBox="0 0 22.3883 22.3883" width="22.3883">
                    <g>
                      <g>
                        <path d={svgPaths.p34d5e100} fill="#836245" />
                        <path d={svgPaths.p121fb2a0} stroke="#836245" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86569" />
                      </g>
                      <path d={svgPaths.p3ace4780} fill="#836245" />
                      <path d={svgPaths.p2b373980} fill="#836245" />
                      <path d={svgPaths.pf6690c0} stroke="#836245" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86569" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PAGE L 3 */}
      <motion.div
        className="absolute flex inset-[0.21%_0.14%_0.17%_49.93%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 1 }}
        initial={{ scaleX: -0.85, scaleY: 0.946, y: -6.713 }}
        animate={{ scaleX: -0.85, scaleY: 0.946, y: -6.713 }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[320.995cqh] w-[hypot(342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="PAGE L 3">
            <div className="absolute inset-[-0.01%_-8.7%_0.01%_0]" data-name="PAGE SUB 1">
              <PageImg src={imgImage386} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN PAGE 1 – left open spread (watermelon illustration) */}
      <motion.div
        className="absolute flex inset-[0.21%_0.14%_0.17%_49.93%] items-center justify-center"
        style={{ containerType: "size", transformOrigin: "0% 50%", zIndex: 2 }}
        initial={{ scaleX: -0.83, scaleY: 0.946, y: -8.713 }}
        animate={{ scaleX: -0.83, scaleY: 0.946, y: -8.713 }}
      >
        <div className="-rotate-5 -skew-x-5 flex-none h-[320.995cqh] w-[hypot(342.382cqw,-21.3873cqh)]">
          <div className="relative size-full" data-name="MAIN PAGE 1">
            <div className="absolute inset-[0_-8.7%_0_0]" data-name="PAGE MAIN DESIGN">
              <div className="absolute h-[441.612px] left-[-2.92px] top-[-2.63px] w-[366.257px]" data-name="image 382">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage388} />
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage387} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── MAP CONTENT STICKERS & LABELS ON TOP OF OPEN BOOK ── */}
      <div className="absolute contents inset-[0.43%_-6.49%_3.62%_2.24%]" data-name="CONTENT" style={{ zIndex: 10 }}>
        {/* BIRD CAGE */}
        <motion.div
          className="absolute contents inset-[1.77%_53.61%_75.3%_28.59%]"
          data-name="BIRD CAGE"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: seContent }}
        >
          <div className="absolute aspect-[4096/3331] left-[28.59%] right-[53.61%] shadow-[5.775px_8.401px_4.358px_0px_rgba(0,0,0,0.25)] top-[8.3px]" data-name="image 585">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage585} />
          </div>
          <div className="absolute inset-[18.86%_54.29%_75.3%_32.9%]" data-name="BOARD NAME">
            <div className="absolute aspect-[3819/1224] left-0 right-0 top-0" data-name="image 605">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage605} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[42.84px] not-italic text-[#5c5037] text-[9.89px] text-center top-[13.74px] tracking-[-0.4945px] whitespace-nowrap">
              <p className="leading-[normal]">Bird Cage</p>
            </div>
          </div>
        </motion.div>

        {/* BURNING CLIFFS */}
        <motion.div
          className="absolute contents inset-[14.95%_47.42%_22.5%_2.24%]"
          data-name="CLIFFS"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: seContent }}
        >
          <div className="absolute aspect-[4096/3570] left-[2.24%] right-[47.42%] shadow-[22.577px_-22.052px_4.358px_0px_rgba(0,0,0,0.25)] top-[70.25px]" data-name="image 608">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage608} />
          </div>
          <div className="absolute inset-[62.42%_65.94%_28.89%_15.02%]" data-name="BOARD NAME">
            <div className="absolute aspect-[3819/1224] left-0 right-0 top-0" data-name="image 605">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage605} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[63.67px] not-italic text-[#5c5037] text-[6.62px] text-center top-[20.42px] tracking-[-0.331px] whitespace-nowrap">
              <p className="leading-[normal]">Burning Cliffs</p>
            </div>
          </div>
          <div className="absolute contents inset-[30.92%_80.12%_55.74%_5.22%]" data-name="CLOUD L">
            <div className="absolute inset-[30.92%_80.12%_55.74%_5.22%]">
              <div className="absolute inset-[0.56%_0.81%_-13.19%_-10.61%]">
                <svg className="block size-full" fill="none" height="70.6086" preserveAspectRatio="none" viewBox="0 0 107.803 70.6086" width="107.803">
                  <g filter="url(#filter_cliffs_cloud)">
                    <path d={svgPaths.p1b48a800} fill="#FFFAE2" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.6086" id="filter_cliffs_cloud" width="107.803" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-6.82558" dy="4.20036" />
                      <feGaussianBlur stdDeviation="2.17893" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[32.37%_81.51%_57.12%_6.47%]" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* BELL FOREST */}
        <motion.div
          className="absolute contents inset-[42.32%_32.12%_3.62%_27.18%]"
          data-name="BELL FOREST"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: seContent }}
        >
          <div className="absolute aspect-[272.5527955954062/254.10807059439412] flex items-center justify-center left-[27.18%] right-[32.12%] top-[198.89px]" style={{ containerType: "size" }}>
            <div className="-rotate-15 flex-none h-[hypot(19.1789cqw,76.7721cqh)] w-[hypot(80.8211cqw,-23.2279cqh)]">
              <div className="relative shadow-[22.577px_-22.052px_4.358px_0px_rgba(0,0,0,0.25)] size-full" data-name="jungleeeee 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJungleeeee1} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[78.97%_42.99%_12.35%_37.98%]" data-name="BOARD NAME">
            <div className="absolute aspect-[3819/1224] left-0 right-0 top-0" data-name="image 605">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage605} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[63.67px] not-italic text-[#5c5037] text-[6.62px] text-center top-[20.42px] tracking-[-0.331px] whitespace-nowrap">
              <p className="leading-[normal]">Bell Forest</p>
            </div>
          </div>
        </motion.div>

        {/* MUSHROOM FARM */}
        <motion.div
          className="absolute contents inset-[0.43%_11.53%_79.43%_72.97%]"
          data-name="MUSHROOM FARM"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: seContent }}
        >
          <div className="absolute inset-[13.5%_11.53%_79.43%_72.97%]" data-name="BOARD NAME">
            <div className="absolute aspect-[3819/1224] left-0 right-0 top-0" data-name="image 605">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage605} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[51.85px] not-italic text-[#5c5037] text-[4.49px] text-center top-[16.63px] tracking-[-0.2245px] whitespace-nowrap">
              <p className="leading-[normal]">Mushroom farm</p>
            </div>
          </div>
          <div className="absolute aspect-[1071/1003] left-[74.87%] right-[13.35%] shadow-[7.351px_-8.926px_4.358px_0px_rgba(0,0,0,0.25)] top-[2px]" data-name="mushroom 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMushroom1} />
          </div>
        </motion.div>

        {/* DECOR MUSHROOM */}
        <motion.div
          className="absolute contents left-[55.72%] right-[33.83%] top-[24.07px]"
          style={{ containerType: "size" }}
          data-name="------ Decor"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: seContent }}
        >
          <div className="absolute aspect-[69.96192518672831/67.24375172767492] flex items-center justify-center left-[55.72%] right-[33.83%] top-[24.07px]" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(17.1277cqw,81.0405cqh)] rotate-[-12.4deg] w-[hypot(82.8723cqw,-18.9595cqh)]">
              <div className="relative shadow-[7.351px_-8.926px_4.358px_0px_rgba(0,0,0,0.25)] size-full" data-name="mushroom 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMushroom1} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CLOUD 2 (right page top cloud) */}
        <motion.div
          className="absolute contents inset-[18.86%_-5.82%_67.81%_91.16%]"
          data-name="CLOUD 2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: seCloud2 }}
        >
          <div className="absolute inset-[18.86%_-5.82%_67.81%_91.16%]">
            <div className="absolute inset-[0.56%_0.81%_-13.19%_-10.61%]">
              <svg className="block size-full" fill="none" height="70.6086" preserveAspectRatio="none" viewBox="0 0 107.803 70.6086" width="107.803">
                <g filter="url(#filter_cloud2_scene)">
                  <path d={svgPaths.p5f94f0} fill="#FFFAE2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.6086" id="filter_cloud2_scene" width="107.803" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="-6.82558" dy="4.20036" />
                    <feGaussianBlur stdDeviation="2.17893" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute inset-[20.31%_-4.43%_69.18%_92.41%]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </motion.div>

        {/* CLOUD 3 (right page bottom cloud) */}
        <motion.div
          className="absolute contents inset-[81.19%_20.68%_5.47%_64.66%]"
          data-name="CLOUD 3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: seCloud3 }}
        >
          <div className="absolute inset-[81.19%_20.68%_5.47%_64.66%]">
            <div className="absolute inset-[0.56%_0.81%_-13.19%_-10.61%]">
              <svg className="block size-full" fill="none" height="70.6086" preserveAspectRatio="none" viewBox="0 0 107.803 70.6086" width="107.803">
                <g filter="url(#filter_cloud3_scene)">
                  <path d={svgPaths.p5f94f0} fill="#FFFAE2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.6086" id="filter_cloud3_scene" width="107.803" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="-6.82558" dy="4.20036" />
                    <feGaussianBlur stdDeviation="2.17893" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute inset-[82.64%_22.08%_6.85%_65.91%]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </motion.div>

        {/* TREE DECOR (center top) */}
        <motion.div
          className="absolute contents inset-[8.91%_13.4%_31.01%_42%]"
          style={{ containerType: "size" }}
          data-name="----- 1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.24, ease: seContent }}
        >
          <div className="absolute aspect-[285.7920162644155/270.9495582781733] flex items-center justify-center left-[42.96%] right-[14.36%] top-[47.61px]" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(25.6422cqw,69.46cqh)] rotate-[-21.28deg] w-[hypot(74.3578cqw,-30.54cqh)]">
              <div className="relative shadow-[11.026px_-17.852px_4.358px_0px_rgba(0,0,0,0.25)] size-full" data-name="jungleeeee 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJungleeeee1} />
              </div>
            </div>
          </div>
          <div className="absolute contents inset-[25.34%_36.99%_61.33%_48.35%]" data-name="CLOUD L">
            <div className="absolute inset-[25.34%_36.99%_61.33%_48.35%]">
              <div className="absolute inset-[0.56%_0.81%_-13.19%_-10.61%]">
                <svg className="block size-full" fill="none" height="70.6086" preserveAspectRatio="none" viewBox="0 0 107.803 70.6086" width="107.803">
                  <g filter="url(#filter_tree_cloud)">
                    <path d={svgPaths.p2e7a3d80} fill="#FFFAE2" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="70.6086" id="filter_tree_cloud" width="107.803" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-6.82558" dy="4.20036" />
                      <feGaussianBlur stdDeviation="2.17893" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[26.79%_38.39%_62.71%_49.6%]" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* THE CIRCUS */}
        <motion.div
          className="absolute contents inset-[29.25%_-6.49%_9.72%_60.81%]"
          style={{ containerType: "size" }}
          data-name="CIRCUS"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: seContent }}
        >
          <div className="absolute aspect-[290.0717966883528/273.1584271683874] flex items-center justify-center left-[61.99%] right-[-5.31%] top-[144.33px]" style={{ containerType: "size" }}>
            <div className="-scale-x-100 flex-none h-[hypot(-25.425cqw,69.0229cqh)] rotate-[21.36deg] w-[hypot(-74.575cqw,-30.9771cqh)]">
              <div className="relative shadow-[9.976px_-8.926px_4.358px_0px_rgba(0,0,0,0.25)] size-full" data-name="image 608">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage609} />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[67.34%_9.91%_18.83%_70.22%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-11.4582cqw,117.235cqh)] rotate-[11.31deg] w-[hypot(179.002cqw,73.2248cqh)]">
              <div className="relative size-full" data-name="BOARD NAME">
                <div className="absolute aspect-[3819/1224] left-0 right-0 top-0" data-name="image 605">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage605} />
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans justify-center leading-[0] left-[63.67px] not-italic text-[#5c5037] text-[14.7px] text-center top-[20.42px] tracking-[-0.735px] whitespace-nowrap">
                  <p className="leading-[normal]">The Circus</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── Main Exported Scene Component ─────────────────────────────────────────────
interface Props {
  onOpen: () => void;
}

export function FigmaBookScene({ onOpen }: Props) {
  const [scale, setScale] = useState(1);
  const [settled, setSettled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const update = () => {
      const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setScale(Math.max(s, 0.25));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSettled(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#fff8ef" }}>
      <div
        style={{
          width: 1920,
          height: 1080,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {/* ── Layer 1: Background gradient + paper texture ── */}
        <motion.div
          style={{ position: "absolute", height: 1209, left: -71.28, top: -70, width: 2107.567, transformOrigin: "50% 50%", zIndex: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(177.95deg, rgb(255, 248, 239) 57.523%, rgb(255, 255, 255) 105.06%)" }} />
            <img alt="" style={{ position: "absolute", maxWidth: "none", mixBlendMode: "multiply", objectFit: "cover", opacity: 0.3, width: "100%", height: "100%" }} src={imgRectangle39977} />
          </div>
        </motion.div>

        {/* ── Layer 2: Vignette overlay ── */}
        <motion.div
          style={{ position: "absolute", height: 1222, left: -113, top: -70, width: 2183, transformOrigin: "50% 50%", zIndex: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <img alt="" style={{ position: "absolute", maxWidth: "none", objectFit: "cover", width: "100%", height: "100%" }} src={imgRectangle3} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
          </div>
        </motion.div>

        {/* ── Layer 3: Large corner clouds (positioned exactly per spec) ── */}

        {/* Cloud 1 – lower right — left:1284, top:860, 980×576 */}
        <motion.div
          style={{ position: "absolute", height: 576, left: 1284, top: 860, width: 980, transformOrigin: "50% 50%", zIndex: 2 }}
          initial={{ rotate: -17.285, x: -767.907, y: 207.479 }}
          animate={{ rotate: 0, x: 0, y: 0 }}
          transition={{
            rotate: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudRot },
            x: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudPos },
            y: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudPos },
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCloud1} style={{ filter: "drop-shadow(19px -46px 8.3px rgba(0,0,0,0.25))" }} />
        </motion.div>

        {/* Cloud 3 – upper right — left:1401, top:-300, 980×576 */}
        <motion.div
          style={{ position: "absolute", height: 576, left: 1401, top: -300, width: 980, transformOrigin: "50% 50%", zIndex: 2 }}
          initial={{ rotate: 26, x: 684, y: 218 }}
          animate={{ rotate: 0, x: 0, y: 0 }}
          transition={{
            rotate: { duration: D * 0.3048, delay: D * 0.2209, ease: seCloudRot },
            x: { duration: D * 0.3048, delay: D * 0.2209, ease: seCloudPos },
            y: { duration: D * 0.3048, delay: D * 0.2209, ease: seCloudPos },
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCloud1} style={{ filter: "drop-shadow(19px 41px 11px rgba(0,0,0,0.25))" }} />
        </motion.div>

        {/* Cloud 2 – lower left — left:-242, top:841, 980×576, rotated 180° */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ height: 576, left: -242, top: 841, width: 980, transformOrigin: "50% 50%", zIndex: 2 }}
          initial={{ rotate: 214.7, x: 716.66, y: 329.655 }}
          animate={{ rotate: 180, x: 0, y: 0 }}
          transition={{
            rotate: { duration: D * 0.3048, delay: D * 0.2715, ease: seCloudRot },
            x: { duration: D * 0.3048, delay: D * 0.2715, ease: seCloudPos },
            y: { duration: D * 0.3048, delay: D * 0.2715, ease: seCloudPos },
          }}
        >
          <div className="flex-none rotate-180">
            <div className="relative h-[576px] w-[980px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCloud1} style={{ filter: "drop-shadow(19px -47px 8.3px rgba(0,0,0,0.25))" }} />
            </div>
          </div>
        </motion.div>

        {/* Cloud 4 – upper left — left:-548, top:-250, 980×576, flipped vertically and rotated 180° */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ height: 576, left: -548, top: -250, width: 980, transformOrigin: "50% 50%", zIndex: 2 }}
          initial={{ rotate: 163.903, x: -757, y: 218 }}
          animate={{ rotate: 180, x: 0, y: 0 }}
          transition={{
            rotate: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudRot },
            x: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudPos },
            y: { duration: D * 0.3048, delay: D * 0.2439, ease: seCloudPos },
          }}
        >
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative h-[576px] w-[980px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCloud1} style={{ filter: "drop-shadow(19px 41px 11px rgba(0,0,0,0.25))" }} />
            </div>
          </div>
        </motion.div>

        {/* ── Layer 4: Book Container (exact positioning: left: 571px, top: 324px, 669.589px × 470.019px) ── */}
        <motion.div
          style={{
            position: "absolute",
            height: 470.019,
            left: 571,
            top: 324,
            width: 669.589,
            transformOrigin: "50% 50%",
            zIndex: 4,
            cursor: settled ? "pointer" : "default",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: seBook }}
          onHoverStart={() => settled && setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => settled && onOpen()}
          whileHover={settled ? { scale: 1.03, transition: { type: "spring", stiffness: 200, damping: 20 } } : undefined}
        >
          <Book />

          {/* ── Layer 5: Click hint below the book ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: settled ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              position: "absolute",
              bottom: -46,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Lato', sans-serif",
              fontSize: 16,
              letterSpacing: "0.14em",
              color: "rgba(92, 72, 50, 0.7)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {isHovered ? "✦ Open Portfolio ✦" : "click to open"}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
