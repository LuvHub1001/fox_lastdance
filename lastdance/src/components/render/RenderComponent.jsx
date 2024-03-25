/* eslint-disable react/prop-types */
function RenderComponent({ className, items, render }) {
  return (
    <div className={className}>
      {items.map((item) => {
        return <div key={item.id}>{render(item)}</div>;
      })}
    </div>
  );
}
export default RenderComponent;
