import "./globals.css";
import Footer from "@/components/footer/footer";




export async function metadata() {
  return {
    title: "Restaurant Zaytouna | Restaurant Raffiné à Marrakech - Réservez Votre Table",
    description: "Découvrez Restaurant Zaytouna, un restaurant élégant à Marrakech offrant une cuisine raffinée dans un cadre enchanteur. Profitez d’une expérience gastronomique unique et réservez votre table dès aujourd’hui !",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Restaurant Zaytouna | Restaurant Raffiné à Marrakech - Réservez Votre Table",
      description: "Découvrez Restaurant Zaytouna, un restaurant élégant à Marrakech offrant une cuisine raffinée dans un cadre enchanteur. Profitez d’une expérience gastronomique unique et réservez votre table dès aujourd’hui !",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Restaurant Zaytouna | Restaurant Raffiné à Marrakech - Réservez Votre Table",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Restaurant Zaytouna | Restaurant Raffiné à Marrakech - Réservez Votre Table",
        }
      ],
      type: "website",

    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
