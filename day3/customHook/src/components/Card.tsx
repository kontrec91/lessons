// // export const Card = ({ children }: { children: React.ReactNode }) => {
export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
  //   const Header = ({ children }: { children: React.ReactNode }) => {
  //     return <div>{children}</div>;
  //   };

  //   const Body = ({ children }: { children: React.ReactNode }) => {
  //     return <div>{children}</div>;
  //   };

  //   const Footer = ({ children }: { children: React.ReactNode }) => {
  //     return <div>{children}</div>;
  //   };
  //   //   return <div>{children}</div>;
  //   return (
  //     <>
  //       <Header>{children}</Header>
  //       <Body>{children}</Body>
  //       <Footer>{children}</Footer>
  //     </>
  //   );
};

Card.Header = ({ children }: { children: React.ReactNode }) => {
  return <header className="card-header">{children}</header>;
};

Card.Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-body">{children}</div>;
};

Card.Footer = ({ children }: { children: React.ReactNode }) => {
  return <footer className="card-footer">{children}</footer>;
};
