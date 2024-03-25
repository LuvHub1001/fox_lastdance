import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { withCommonLayout } from "../../hoc";
import { RenderComponent } from "..";

const Wrapper = styled.div`
  & .header-render {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  & .header-button-render {
    background-color: pink;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
  }

  height: 100px;
`;

function Header() {
  const navigate = useNavigate();

  const titleArr = ["HOME", "POKE"];
  const pathArr = ["/", "/pokemon"];

  const headerItems = Array.from({ length: titleArr.length }).map((_, idx) => ({
    title: titleArr[idx],
    path: pathArr[idx],
  }));

  return (
    <Wrapper>
      <RenderComponent
        className="header-render"
        items={headerItems}
        render={(item) => {
          return (
            <button
              className="header-button-render"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.title}
            </button>
          );
        }}
      />
    </Wrapper>
  );
}

export default Header;
