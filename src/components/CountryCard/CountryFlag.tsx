type CountryFlagProps = {
  imageSrc?: string;
};

export default function CountryFlag({ imageSrc }: CountryFlagProps) {
  return (
    <div>
      <img
        src={imageSrc}
        height={"auto"}
        width={"100%"}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
    </div>
  );
}
