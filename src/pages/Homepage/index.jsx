import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button } from "../../components";
import HomepageCarousel from "../../components/HomepageCarousel";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Gangadhar's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <header className="flex items-center justify-between gap-5 bg-white-A700 p-[23px] md:flex-col sm:p-5">
          <div className="mx-auto mt-[3px] flex w-full max-w-[1068px] items-center justify-between gap-5 md:flex-col">
            <Img
              src="images/img_bestrade_logo_1.png"
              alt="bestradelogoone"
              className="h-[63px] w-[20%] rounded-[20px] object-cover md:w-full"
            />
            <div className="mb-[13px] flex w-[75%] items-center justify-between gap-5 self-end md:w-full md:flex-col">
              <div className="flex w-[41%] flex-wrap justify-between gap-5 md:w-full">
                <a href="Home" target="_blank" rel="noreferrer" className="self-start">
                  <Text size="lg" as="p" className="tracking-[0.10px]">
                    Home
                  </Text>
                </a>
                <a href="Newsletter" target="_blank" rel="noreferrer" className="self-start">
                  <Text size="lg" as="p" className="tracking-[0.10px]">
                    Newsletter
                  </Text>
                </a>
                <a href="Equity" target="_blank" rel="noreferrer" className="self-end">
                  <Text size="lg" as="p" className="tracking-[0.10px]">
                    Equity
                  </Text>
                </a>
              </div>
              <div className="flex w-[52%] items-center justify-between gap-5 md:w-full">
                <a href="#" className="self-start">
                  <Text size="lg" as="p" className="tracking-[0.10px]">
                    F & O
                  </Text>
                </a>
                <a href="#">
                  <Text size="lg" as="p" className="tracking-[0.10px]">
                    Swing Trading
                  </Text>
                </a>
                <div className="flex items-center gap-0.5">
                  <Text size="lg" as="p" className="self-start tracking-[0.10px]">
                    Best Trade
                  </Text>
                  <Img src="images/img_icon_park_down.svg" alt="iconparkdown" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_mingcute_user_4_fill.svg"
            alt="mingcuteuserfou"
            className="mr-[51px] h-[55px] w-[55px] self-end md:mr-0 md:w-full"
          />
        </header>
        <div className="mt-[134px] flex flex-col items-center">
          <HomepageCarousel className="mx-auto flex w-full max-w-[1428px] flex-col items-center gap-6 self-stretch p-10 md:p-5" />
          <div className="mt-[39px] flex flex-col items-center justify-center gap-[59px] self-stretch bg-white-A700 px-14 py-[68px] md:p-5 sm:gap-[29px]">
            <Heading size="md" as="h1" className="text-center tracking-[0.10px]">
              Partner with us
            </Heading>
            <Button shape="round" className="mb-4 min-w-[220px] font-roboto tracking-[0.20px] sm:px-5">
              Click Here
            </Button>
          </div>
          <div className="mx-auto mt-[57px] flex w-full max-w-[1240px] flex-col items-center gap-[51px] md:p-5 sm:gap-[25px]">
            <Heading size="s" as="h2" className="text-center tracking-[0.10px]">
              Newsletters
            </Heading>
            <div className="flex gap-5 self-stretch md:flex-col">
              <div className="flex w-full flex-col items-center rounded-[20px] bg-white-A700 p-[7px]">
                <Img src="images/img_img_8867.png" alt="image" className="h-[229px] w-[89%] object-cover" />
                <Text
                  size="s"
                  as="p"
                  className="relative mb-[38px] mt-[-32px] w-[74%] text-center tracking-[0.10px] md:w-full"
                >
                  Creative Graphics Solutions India&#39;s Rs 54 cr IPO to open on Mar 28
                </Text>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] rounded-[20px] bg-white-A700 p-[22px] sm:p-5">
                <Img
                  src="images/img_img_8868.png"
                  alt="img8868_one"
                  className="h-[153px] w-full object-cover md:h-auto"
                />
                <Text size="s" as="p" className="mb-[23px] w-[87%] text-center tracking-[0.10px] md:w-full">
                  Radiowalla IPO Date, Price, GMP, Review, Analysis & Details
                </Text>
              </div>
              <div className="flex w-full flex-col items-center gap-[29px] rounded-[20px] bg-white-A700 p-[22px] sm:p-5">
                <Img
                  src="images/img_img_8868.png"
                  alt="img8868_one"
                  className="h-[153px] w-full object-cover md:h-auto"
                />
                <Text size="s" as="p" className="mb-[23px] w-[87%] text-center tracking-[0.10px] md:w-full">
                  Radiowalla IPO Date, Price, GMP, Review, Analysis & Details
                </Text>
              </div>
            </div>
            <div className="flex gap-2">
              <a href="#" className="self-start">
                <Heading size="s" as="h3" className="text-center tracking-[0.10px] !text-black-900_cc">
                  View more
                </Heading>
              </a>
              <Button size="xs" shape="square" className="w-[30px]">
                <Img src="images/img_icon_park_solid_down_c.svg" />
              </Button>
            </div>
          </div>
        </div>
        <footer className="mt-[219px] flex items-center justify-center bg-white-A700 p-[43px] md:p-5">
          <div className="mx-auto mb-[42px] flex w-full max-w-[1344px] items-center justify-center md:flex-col">
            <div className="flex w-[20%] flex-col items-end gap-[26px] md:w-full">
              <Img
                src="images/img_bestrade_logo_1.png"
                alt="bestradelogotwo"
                className="h-[63px] w-full rounded-[20px] object-cover md:h-auto"
              />
              <Heading as="h5" className="w-[94%] leading-6 tracking-[0.10px] md:w-full">
                Seal the Deal with besTrade
              </Heading>
            </div>
            <div className="ml-[50px] mt-[22px] flex flex-col items-start gap-5 md:ml-0">
              <Heading as="h5" className="tracking-[0.10px]">
                First column
              </Heading>
              <div className="flex flex-col items-start gap-3">
                <a href="#">
                  <Text as="p">First page</Text>
                </a>
                <a href="#">
                  <Text as="p">Second page</Text>
                </a>
                <a href="Third" target="_blank" rel="noreferrer">
                  <Text as="p">Third</Text>
                </a>
                <a href="Fourth" target="_blank" rel="noreferrer">
                  <Text as="p">Fourth</Text>
                </a>
              </div>
            </div>
            <div className="ml-[65px] flex flex-col items-start gap-5 md:ml-0">
              <Heading as="h5" className="tracking-[0.10px]">
                First column
              </Heading>
              <div className="flex flex-col items-start gap-3">
                <a href="#">
                  <Text as="p">First page</Text>
                </a>
                <a href="#">
                  <Text as="p">Second page</Text>
                </a>
                <a href="Third" target="_blank" rel="noreferrer">
                  <Text as="p">Third</Text>
                </a>
                <a href="Fourth" target="_blank" rel="noreferrer">
                  <Text as="p">Fourth</Text>
                </a>
              </div>
            </div>
            <div className="ml-[65px] flex flex-col items-start gap-5 md:ml-0">
              <Heading as="h5" className="tracking-[0.10px]">
                First column
              </Heading>
              <div className="flex flex-col items-start gap-3">
                <a href="#">
                  <Text as="p">First page</Text>
                </a>
                <a href="#">
                  <Text as="p">Second page</Text>
                </a>
                <a href="Third" target="_blank" rel="noreferrer">
                  <Text as="p">Third</Text>
                </a>
                <a href="Fourth" target="_blank" rel="noreferrer">
                  <Text as="p">Fourth</Text>
                </a>
              </div>
            </div>
            <div className="ml-[125px] flex w-[34%] flex-col items-start gap-6 bg-white-A700 md:ml-0 md:w-full">
              <Heading as="h5" className="tracking-[0.10px]">
                Subscribe
              </Heading>
              <div className="flex flex-col gap-5 self-stretch">
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`Enter email`}
                  suffix={<Img src="images/img_save.svg" alt="save" className="h-[24px] w-[24px]" />}
                  className="sm:px-5"
                />
                <Text size="xs" as="p" className="leading-5 !text-black-900_7e opacity-0.4">
                  Join our newsletter to stay up to date on features and releases
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
