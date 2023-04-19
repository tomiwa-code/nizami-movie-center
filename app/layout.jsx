import Navbar from "@/components/Navbar";
import "./globals.css";
import Container from "@/components/Container";

export const metadata = {
  title: "Nizami movie center",
  description: "book a seat in our cinema house",
  keywords: "theater, date, watch movie, cinema",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-dark">
          <Navbar />
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
