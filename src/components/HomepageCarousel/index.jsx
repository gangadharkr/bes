import React from "react";
import { Img, Slider } from "./..";

export default function HomepageCarousel({ ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props}>
      <div className="mx-auto flex w-full max-w-[1300px] justify-center px-10 sm:px-5">
        <div className="relative h-[400px] w-full">
          <div className="my-auto w-[82%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
              renderDotsItem={(props) => {
                return props?.isActive ? (
                  <div className="mr-2.5 h-[16px] w-[16px] bg-deep_purple_A200" />
                ) : (
                  <div className="mr-2.5 h-[12px] w-[12px] bg-gray_500" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="absolute bottom-0 left-[0.00px] top-0"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="relative mx-auto h-[400px] md:h-auto">
                    <div className="flex w-full items-center justify-center md:flex-col">
                      <div className="flex w-[38%] justify-center rounded-[40px] bg-white-A700 md:w-full">
                        <Img
                          src="images/img_unsplash_s3ejzlra4yw.png"
                          alt="unsplash_one"
                          className="h-[240px] w-full rounded-[40px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="relative ml-[-280px] flex-1 rounded-[40px] bg-white-A700 md:ml-0 md:self-stretch">
                        <Img
                          src="images/img_unsplash_cqblg3lzepk.png"
                          alt="unsplash_three"
                          className="h-[400px] w-full rounded-[40px] object-cover md:h-auto"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-[6%] top-0 my-auto flex h-max w-[64%] rounded-[40px] bg-white-A700">
                      <Img
                        src="images/img_unsplash_yffgke3y4f8.png"
                        alt="unsplash_five"
                        className="h-[320px] w-full rounded-[40px] object-cover md:h-auto"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[39%] justify-center rounded-[40px] bg-white-A700">
            <Img
              src="images/img_unsplash_xfngap_dtoe.png"
              alt="unsplashxfngap"
              className="h-[240px] w-full rounded-[40px] object-cover md:h-auto"
            />
          </div>
          <div className="absolute bottom-0 right-[5%] top-0 my-auto flex h-max w-[52%] justify-center rounded-[40px] bg-white-A700">
            <Img
              src="images/img_unsplash_g30p1zcozxo.png"
              alt="unsplash_one"
              className="h-[320px] w-full rounded-[40px] object-cover md:h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[17%] items-center justify-center gap-2 p-2">
        <div className="flex flex-col items-center p-2">
          <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[24px] w-[24px]" />
        </div>
        <div className="flex flex-col items-center p-2">
          <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
}
