import { Header } from "../components";

function withCommonLayout(Component) {
  const WrapperComponent = () => {
    return (
      <div>
        <Header />
        <div
          style={{
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <Component />
        </div>
        <div style={{ height: "100px" }}>Footer</div>
      </div>
    );
  };

  return WrapperComponent;
}
export default withCommonLayout;
