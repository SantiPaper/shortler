type Props = {
  date: Date;
};

export const GetNewDate = ({ date }: Props) => {
  const formattedDate = new Intl.DateTimeFormat("es-ar", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  const formattedHour = new Intl.DateTimeFormat("es-ar", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return (
    <time>
      {formattedDate}
      <span>{formattedHour} hs</span>
    </time>
  );
};
