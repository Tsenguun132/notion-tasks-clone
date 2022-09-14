import styled, { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}
`;

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? "rotate(3deg)" : undefined)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;

//container for components and display in a row horizontally
export const AppContainer = styled.div`
  font-size: 16px;
  align-items: flex-start;
  background-color: #382d72;
  display: flex;
  flex-direction: row;
  height: 80%;

  /* width: 100%; */
  padding: 20px;
`;

// column background and sizing
export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #5c509c;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 3px;
  flex-grow: 0;
`;
// padding and title
export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  color: #dcdde1;
`;
// styles for cards
export const CardContainer = styled(DragPreviewContainer)`
  background-color: #e5ccf4;
  cursor: pointer;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  color: #3c373d;

  margin-left: 0.25rem;
  margin-right: 0.25rem;
  /* box-shadow: #091e4240 0px 1px 0px 0px; */
`;
type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: ${(props) => (props.dark ? "#382d72" : "#5c509c")};
  font-weight: 600;
  /* font-family: "Courier New", Courier, monospace; */
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#b7c2c6" : "#F5CDDE")};
  cursor: pointer;
  max-width: 150px;
  padding: 10px 12px;
  text-align: left;
  margin-left: 0.25rem;
  transition: background 200ms ease-in;
  width: 100%;
  font-size: 14px;

  &:hover {
    background-color: #3a2081;
  }
`;
// container for item form
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
// button style with green and rounded corners
export const NewItemButton = styled.button`
  background-color: #382d72;
  border-radius: 3px;
  border: none;
  margin-left: 0.25rem;
  box-shadow: none;
  color: #b7c2c6;
  padding: 6px 12px;
  text-align: center;
  font-family: "Circular Std", Courier, monospace;
  font-size: 1rem;
`;
//styles for input
export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 86.5%;
  min-width: auto;
  overflow-wrap: break-word;
  outline: none;
  font-family: "Circular Std", Courier, monospace;
  background-color: #e5ccf4;

  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 1rem;
  color: #3c373d;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const VisitCounter = styled.h3`
  color: #dcdde1;
  font-weight: 200;
`;

export const GithubLinkImage = styled.h3`
  margin-left: 20px;
  color: #dcdde1;
  font-weight: 200;
`;

export const ItemsInRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  left: 20px;
  bottom: 20px;
  position: absolute;
`;

export const AnimatedGifAndVisitCountContainer = styled.div`
  right: 0px;
  bottom: 20px;
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
`;

export const CatGif = styled.img`
  width: 300px;
  height: auto;
  clip-path: circle(120px at center);
`;

// test colors

//  background-color: #66545e; background
// background-color: #a39193; columncontainer
//    background-color: #aa6f73; cardcontainer
//   background-color: ${(props) => (props.dark ? "#eea990" : "#a39193")}; additem
//   background-color: #f6e0b5; inputcontainer

// background-color: #66545e;
//   background-color: #a39193;
// background-color: #aa6f73;
//   background-color: ${(props) => (props.dark ? "#eea990" : "#a39193")};
//   background-color: #5aac44;

// color: #3c373d; textcolor temp
