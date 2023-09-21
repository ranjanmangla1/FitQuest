const ContainerCardForm = ({ productDimensions }) => {
  return (
    <div className="relative w-[117.69px] h-[199.01px] text-center text-[31.74px] text-white font-leading-tight-text-sm-font-normal">
      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-[117.69px] h-[117.69px]" />
      <div className="absolute top-[130.25px] left-[11.24px] tracking-[-0.03em] inline-block w-[95.21px] h-[30.41px]">
        Dev 1
      </div>
      <img
        className="absolute h-[14.95%] w-[25.93%] top-[85.05%] right-[39.24%] bottom-[0%] left-[34.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={productDimensions}
      />
    </div>
  );
};

export default ContainerCardForm;
