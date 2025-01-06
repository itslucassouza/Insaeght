interface TitleComponentProps {
  msg: string;
  topSubtitle?: string;
  bottomSubtitle?: string;
  bigText?: boolean;
}

export const TitleComponent = ({
  msg,
  topSubtitle,
  bottomSubtitle,
  bigText = false,
}: TitleComponentProps) => {
  return (
    <>
      <p className="text-xl md:text-base text-[#5a5a65] font-medium ">
        {topSubtitle}
      </p>
      {bigText ? (
        <h1 className="text-xl md:text-5xl text-[#1E1D28] font-medium ">
          {msg}
        </h1>
      ) : (
        <h1 className="text-xl md:text-xl text-[#1E1D28] font-medium ">
          {msg}
        </h1>
      )}
      <p className="text-xl md:text-base text-[#8a8a97] font-medium ">
        {bottomSubtitle}
      </p>
    </>
  );
};
