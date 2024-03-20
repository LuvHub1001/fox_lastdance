/* eslint-disable react/prop-types */
function RenderComponent({ className, items, render }) {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id} className={className}>
            {render(item)}
          </div>
        );
      })}
    </>
  );
}
export default RenderComponent;
