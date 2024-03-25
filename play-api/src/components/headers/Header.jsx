import { useNavigate } from "react-router-dom";
import { withCommonLayout } from "../../hoc";
import { RenderComponent } from "..";

function Header() {
  const navigate = useNavigate();
  const headerItems = Array.from({ length: 1 }, () => 1);
  const WrappedRenderComponent = withCommonLayout(RenderComponent);

  return (
    <div>
      <WrappedRenderComponent
        className="header-render"
        items={headerItems}
        render={() => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/pokemon");
                }}
              >
                Pokemon
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Header;
