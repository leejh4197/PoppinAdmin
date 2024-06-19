import { useMemo } from "react";

const useFormattedDate = (dateString: string) => {
  const formatDate = useMemo(() => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    console.log(date.getMonth());
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, '"');

    return `${year}.${month}.${day}. ${hours}:${minutes}`;
  }, [dateString]);
  return formatDate;
};

export default useFormattedDate;
