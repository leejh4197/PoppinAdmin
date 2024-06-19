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
