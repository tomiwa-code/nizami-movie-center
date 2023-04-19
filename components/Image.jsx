import Image from "next/image";

const ImageComp = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      priority={true}
      fill={true}
      sizes="(max-width: 768px) 100vw"
      style={{ objectFit: "cover" }}
    />
  );
};

export default ImageComp;
