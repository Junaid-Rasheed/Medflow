import Image from "next/image";
const ImageCard = (props) => {
  return (
    <div className={`bg-no-repeat w-screen bg-cover bg-center relative`}>
      <div className="absolute inset-0 bg-black-filter-200" />

      <div className="flex flex-col-reverse relative">
        <div className="h-screen relative">
          <Image
            width={10000}
            alt="image"
            height={10000}
            style={{ filter: "brightness(0.8)" }}
            className="w-screen h-screen aspect-video object-cover z-0 absolute top-0 left-0"
            src={props.src}
          />
          <div className="absolute inset-0 bg-black-filter-200" />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
