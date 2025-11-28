import Projet from "@/components/Projets"
export const metadata = {
  title: "Portfolio",
  description: "Ceci est mon portfolio, qui présente mes compétences et mes expériences.",
  openGraph: {
      title: 'Portfolio| Projet',
      description: "Ceci est mon portfolio, qui présente mes compétences et mes expériences.",
      images: ['./react.webp']
    }
};

export default function Page() {
    return (
        <Projet />
    )
}