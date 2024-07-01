import { categoryDummy } from "../../constants/categoryDummy";
import { popupCategoryArray } from "../../constants/formBtnDummy";

type TasteObject = {
  [key: string]: boolean;
};

export const generateTasteObject = (
  selectedCategoryName: string
): TasteObject => {
  return categoryDummy.reduce((acc: TasteObject, category) => {
    if (category.name) {
      acc[category.name] = category.name === selectedCategoryName;
    }
    return acc;
  }, {});
};

export const generatePopupObject = (
  selectedCategoryName: string
): TasteObject => {
  return popupCategoryArray.reduce((acc: TasteObject, category) => {
    if (category.name) {
      acc[category.name] = category.name === selectedCategoryName;
    }
    return acc;
  }, {});
};

export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day}. ${hours}:${minutes}`;
};

export const conversionFormDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
export const conversionFormTime = (dateString: string) => {
  const date = new Date(dateString);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};
