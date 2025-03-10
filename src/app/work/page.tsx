import Image from "next/image";
import Link from "next/link";
import logoBrightPath from "@/images/clients/bright-path/logo-dark.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-dark.svg";
import logoGreenLife from "@/images/clients/green-life/logo-dark.svg";
import logoHomeWork from "@/images/clients/home-work/logo-dark.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-dark.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-dark.svg";
import logoPhobia from "@/images/clients/phobia/logo-dark.svg";
import logoUnseal from "@/images/clients/unseal/logo-dark.svg";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { type Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { Testimonial } from "@/components/Testimonial";
import { formatDate } from "@/lib/formatDate";
import { loadCaseStudies, type CaseStudy, type MDXEntry } from "@/lib/mdx";

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      className="inline-block"
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      <span className="mr-2 inline-block">Read more</span>
                      <ArrowRightIcon className="inline-block h-4 w-4" />
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

// function Clients() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <FadeIn>
//         <h2 className="font-display text-2xl font-semibold text-neutral-950">
//           You’re in good company
//         </h2>
//       </FadeIn>
//       <FadeInStagger className="mt-10" faster>
//         <Border as={FadeIn} />
//         <ul
//           role="list"
//           className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
//         >
//           {clients.map(([client, logo]) => (
//             <li key={client} className="group">
//               <FadeIn className="overflow-hidden">
//                 <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
//                   <Image src={logo} alt={client} unoptimized />
//                 </Border>
//               </FadeIn>
//             </li>
//           ))}
//         </ul>
//       </FadeInStagger>
//     </Container>
//   )
// }

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past years.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'SCN Tech (Pty) Ltd', logo: logoMailSmirk }}
      >
        We approached <em>IOT Masters</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial> */}

      {/* <Clients /> */}

      <ContactSection />

      {/* <div
  className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl flex items-center justify-center font-bold bg-purple-400"
>
  <div className="z-10 absolute w-full h-full peer"></div>
  <div
    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
  ></div>
  <div
    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
  >
    Nice to meet u,<br />Page still undevelopment 
  </div>
  <div className="w-full h-full items-center justify-center flex uppercase">
    hover me
  </div>
</div> */}
    </>
  )
}
