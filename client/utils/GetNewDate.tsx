type Props = {
  date: Date;
};

export const GetNewDate = ({ date }: Props) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <time>
      {`${day}-${month}-${year}`}
      <span>{`${hours}:${minutes}hs`}</span>
    </time>
  );
};
