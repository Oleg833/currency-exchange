export const Home = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="currency" />
        <button>Change</button>
      </form>
    </>
  );
};
