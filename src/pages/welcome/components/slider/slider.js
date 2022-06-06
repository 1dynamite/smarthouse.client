/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import SliderItem from "./components/slider-item";
import SliderControls from "./components/slider-controls";

const sliderItemWidth = 260;
const gapWidth = 32;
const nItems = 4;
const containerWidth = (sliderItemWidth + gapWidth) * nItems - gapWidth;
const arrayLength = 4;

export default function Slider(props) {
  const [index, setIndex] = useState(0);

  const rootStyles = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    });

  const itemsRootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
    });

  const itemsContainerStyles = (theme) =>
    css({
      width: containerWidth,
      display: "flex",
      gap: gapWidth,
    });

  const ICParentStyles = (theme) =>
    css({
      width: containerWidth + 64,
      display: "flex",
      justifyContent: "center",
      overflowX: "clip",
    });

  const SCRootStyles = (theme) =>
    css({
      display: "flex",
      justifyContent: "center",
    });

  const onClickLeft = () => {
    if (index === 0) return;

    setIndex(index - 1);
  };

  const onClickRight = () => {
    if (index === arrayLength - nItems) return;

    setIndex(index + 1);
  };

  useEffect(() => {
    /* 
    console.log(index); */
  }, [index]);

  function getDisplay(index, nItems, itemNumber) {
    const condition1 = itemNumber >= index;
    const condition2 = itemNumber < index + nItems;
    if (condition1 && condition2) return "visible";
    return "hidden";
    /*  return 'flex' */
  }

  return (
    <div css={rootStyles}>
      <div css={itemsRootStyles}>
        <div css={ICParentStyles}>
          <div css={itemsContainerStyles}>
            <SliderItem
              myData={{
                title: "Кухонные гарнитуры",
                img: "kitchen.png",
              }}
              itemDisplay={getDisplay(index, nItems, 0)}
              width={sliderItemWidth}
              translationAmount={-index * (gapWidth + sliderItemWidth)}
            ></SliderItem>
            <SliderItem
              myData={{ title: "Спальные гарнитуры", img: "bed.png" }}
              itemDisplay={getDisplay(index, nItems, 1)}
              width={sliderItemWidth}
              translationAmount={-index * (gapWidth + sliderItemWidth)}
            ></SliderItem>
            <SliderItem
              myData={{ title: "Детскую мебель", img: "children.png" }}
              itemDisplay={getDisplay(index, nItems, 2)}
              width={sliderItemWidth}
              translationAmount={-index * (gapWidth + sliderItemWidth)}
            ></SliderItem>
            <SliderItem
              myData={{ title: "Прихожая мебель", img: "wardrobe.png" }}
              itemDisplay={getDisplay(index, nItems, 3)}
              width={sliderItemWidth}
              translationAmount={-index * (gapWidth + sliderItemWidth)}
            ></SliderItem>
          </div>
        </div>
      </div>
      <div css={SCRootStyles}>
        <SliderControls
          nItems={nItems}
          arrayLength={arrayLength}
          index={index}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        ></SliderControls>
      </div>
    </div>
  );
}
