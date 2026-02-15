const Footer = () => {
  return (
    <footer className="bg-accent w-full gap-1 p-8">
      <p className="text-xs font-medium text-white">
        © {new Date().getFullYear()} Copyright BEWEAR
      </p>
      <p className="text-xs font-medium text-white/80">
        Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
