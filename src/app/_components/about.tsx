import Image from "next/image";
import about1Img from "@/public/about-1.png";
import about2Img from "@/public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto gato e cachorro"
              quality={100}
              fill
              priority
              className="object-cover hover:scale-110 duration-300"
            />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
            <Image
              src={about2Img}
              alt="Foto gato e cachorro"
              quality={100}
              fill
              priority
            />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>Until one has loved an animal, a part of ones soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout youre in good hands.</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2016.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#E84C3D] px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 text-white"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className="rounded-md flex items-center justify-center w-fit gap-2 text-black"
              >
                Endereço da loja
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
