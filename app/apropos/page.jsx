import Apropos from "@/components/Apropos"
export const metadata = {
  title: "Portfolio",
  description: "Ceci est mon portfolio, qui présente mes compétences et mes expériences.",
  openGraph: {
      title: 'Portfolio| À propos',
      description: "Ceci est mon portfolio, qui présente mes compétences et mes expériences.",
      images: ['./react.webp']
    }
};

export default function Page() {
    return (
        <Apropos />
    )
}