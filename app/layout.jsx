import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect rental",
  description: "Find you dream rental property",
  keywords: "rental, find rentals, find properties",
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
