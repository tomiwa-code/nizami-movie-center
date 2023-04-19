import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full pt-6 mt-20 bg-[#1A1919] px-40">
      <div className="flex pb-10 border-b border-[#3f3f3f]">
        {/* profile  */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wider uppercase text-light">
            profile
          </p>
          <div className="mt-6 space-y-3 opacity-70">
            <p className="text-sm font-light text-light">FAQs</p>
            <p className="text-sm font-light text-light">Pricing plans</p>
            <p className="text-sm font-light text-light">Order tracking</p>
            <p className="text-sm font-light text-light">Returns</p>
          </div>
        </div>
        {/* recent post  */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wider uppercase text-light">
            recent post
          </p>
          <p className="mt-6 text-sm font-light text-light opacity-70 w-[160px]">
            Touch of uniqueness Offices you won’t forget Cicilan
          </p>
        </div>
        {/* customer  */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wider uppercase text-light">
            customer
          </p>
          <div className="mt-6 space-y-3 opacity-70">
            <p className="text-sm font-light text-light">Help & contact us</p>
            <p className="text-sm font-light text-light">Return</p>
            <p className="text-sm font-light text-light">Online stores</p>
            <p className="text-sm font-light text-light">Terms & condition</p>
          </div>
        </div>
        {/* contact  */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wider uppercase text-light">
            contact
          </p>
          <div className="relative flex items-center mt-6 gap-x-5">
            <div className="w-5 h-5">
              <Image
                src={"/insta.svg"}
                width={1000}
                height={1000}
                alt="nizami logo"
                priority={true}
              />
            </div>
            <div className="w-5 h-5">
              <Image
                src={"/twitter.svg"}
                width={1000}
                height={1000}
                alt="nizami logo"
                priority={true}
              />
            </div>
            <div className="w-5 h-5">
              <Image
                src={"/facebook.svg"}
                width={1000}
                height={1000}
                alt="nizami logo"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="py-5 text-xs text-lightGray">
        © 2014 Nizami cinema. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
