import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RenderComponent } from "..";

const Wrapper = styled.div`
  & .header-render {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  & .header-button-render {
    background-color: pink;
    border-radius: 6px;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }

  height: 100px;
`;

function Header() {
  const navigate = useNavigate();

  const titleArr = ["HOME", "PRODUCT"];
  const pathArr = ["/", "/product"];

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
              onClick={() => navigate(item.path)}
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
