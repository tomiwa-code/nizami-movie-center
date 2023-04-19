import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center w-full px-20 py-5">
      <div className="flex-1">
        <Link href={"/"} className="block w-24">
          <Image
            src={"/nizami.svg"}
            width={1000}
            height={1000}
            alt="nizami logo"
            priority={true}
          />
        </Link>
      </div>
      <div className="flex justify-end flex-1">
        <div className="w-8">
          <Image
            src={"/userIcon.svg"}
            width={1000}
            height={1000}
            alt="user icon"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
