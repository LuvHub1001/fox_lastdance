function RenderComponent({ className, items, render }) {
  return (
    <div>
      {items.map((item, idx) => {
        return (
          <div className={className} key={idx}>
            {render(item)}
          </div>
        );
      })}
    </div>
  );
}
export default RenderComponent;
