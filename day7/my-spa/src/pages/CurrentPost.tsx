const CurrentPost = (props: { id: number }) => {
  const { id } = props;

  return <h1>Current post id={id}</h1>;
};

export default CurrentPost;
