import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="sm:p-[3em] text-white ">
      <div className="lg:px-[45px] px-6 py-12 sm:py-[94px] bg-dark-green w-full rounded-t-3xl sm:rounded-[20px]">
        <div className="flex flex-col gap-[125px] w-full">
          <div className="lg:flex justify-between gap-[6em] w-full h-full items-start ">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={200}  // Specify appropriate width
              height={50}  // Specify appropriate height
              className="flex justify-start items-start pb-[30px] lg:p-0"
            />
            {/* <img src="images/logo-sticker.svg" alt="logo sticker" /> */}

            <div className="sm:flex grid grid-cols-2 sm:text-lg sm:gap-0 gap-x-14 gap-y-7 text-base flex-row w-full justify-between">
              <div className="flex flex-col gap-[30px] xl:text-lg lg:text-xl">
                <span className="text-lighter-yellow">Company</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="">About us</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Contact</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Partners</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Privacy Policy</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Cookies Policy</Link>  {/* No <a> tag */}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] xl:text-xl">
                <span className="text-lighter-yellow">Resources</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="">Blog</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Help Center</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Partners</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Courses</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Learn</Link>  {/* No <a> tag */}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] xl:text-xl">
                <span className="text-lighter-yellow">Legal</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="">Privacy Policy</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Terms of Use</Link>  {/* No <a> tag */}
                  </li>
                  <li>
                    <Link href="">Cookie Policy</Link>  {/* No <a> tag */}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[30px] text-lg xl:text-xl">
                <span className="text-lighter-yellow">Socials</span>
                <div className="sm:flex flex-col grid grid-cols-2 sm:gap-2.5 w-fit gap-y-2 gap-x-3">
                  <Link
                    href={""}
                    className="p-[13px] bg-white rounded-full flex w-fit"
                  >
                    <Image
                      src="/x-filled.svg"
                      alt="X logo"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Link>
                  <Link
                    href={""}
                    className="p-[13px] bg-white rounded-full w-fit"
                  >
                    <Image
                      src="/facebook-filled.svg"
                      alt="Facebook logo"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Link>
                  <Link
                    href={""}
                    className="p-[13px] bg-white rounded-full w-fit"
                  >
                    <Image
                      src="/linkedin-filled.svg"
                      alt="LinkedIn logo"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Link>
                  <Link
                    href={""}
                    className="p-[13px] bg-white rounded-full w-fit flex items-center justify-center"
                  >
                    <Image
                      src="/instagram-filled.svg"
                      alt="Instagram logo"
                      width={24}
                      height={24}
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[84px] items-center">
            {/* <Image
              src="/images/watermark.svg"
              alt="Watermark"
              width={1194}  // Specify appropriate width
              height={173}  // Specify appropriate height
            /> */}
            <p className="text-base sm:text-xl font-normal text-gray-400">
              Copyright © 2024 Young & Skilled Initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
