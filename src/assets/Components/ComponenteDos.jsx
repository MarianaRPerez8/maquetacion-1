import ComponenteTres from './ComponenteTres';

const ComponenteDos = () => {
  const items = [1, 2, 3, 4]; // Representa las 4 tarjetas
  return (
    <main className="comp-dos">
      <div className="grid-container">
        {items.map((item) => (
          <ComponenteTres key={item} />
        ))}
      </div>
      <footer className="footer-label">COMPONENTE DOS</footer>
    </main>
  );
};

export default ComponenteDos;