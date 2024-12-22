type CountryFlagProps = {
  imageSrc?: string;
};

export default function CountryFlag({ imageSrc }: CountryFlagProps) {
  return (
    <div>
      <img src={imageSrc} height={"200px"} width={"300px"} />
    </div>
  );
}
