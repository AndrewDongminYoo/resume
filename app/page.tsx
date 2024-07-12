import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { QuoteIcon } from "./icons/QuoteIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 md:px-6 py-4 border-b">
        <div className="container flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <EyeIcon className="h-6 w-6" />
            <span className="font-bold text-lg">lens MORE +</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              How to Pick Up
            </Link>
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              Lens Item
            </Link>
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              Order Made
            </Link>
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              Only Pick Up
            </Link>
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              Community
            </Link>
            <Link
              href="#"
              className="uppercase text-sm font-medium hover:underline"
              prefetch={false}
            >
              Store Info
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Try on Colored Contacts
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Virtually try on different colored contact lenses and find your
                perfect look.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button>Try On Now</Button>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://file.o-lens.com/prd_img/20728/1e580819-8cf7-41e4-8832-a14d568c071b%EC%84%9C%EB%B8%8C%EB%B0%B0%EB%84%88_M2.jpg?w=686"
                alt="Model wearing colored contacts"
                width={600}
                height={600}
                className="mx-auto aspect-square rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {[
              {
                color: "Gray",
                brand: "리얼링 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20010/45a67127-7fb6-4ec2-af49-665683932d8dL_%EB%A6%AC%EC%96%BC%EB%A7%81%20%EA%B7%B8%EB%A0%88%EC%9D%B4.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20010/dbdbc1a3-601a-4928-bd77-0309a4ab1d0f서브배너_리얼링(민지-그레이ver)_1D.jpg?w=686",
              },
              {
                color: "Brown",
                brand: "리얼링 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20011/b7d60458-6cb9-4e8b-be28-f24663de0a82L_%EB%A6%AC%EC%96%BC%EB%A7%81_%EB%B8%8C%EB%9D%BC%EC%9A%B4.png?w=90",
                modelImage:
                  "https://file.dev.o-lens.com/prd_img_desc/21082/b62df646-6cfa-4e74-bdba-e11ee5b9776d6b009790-0cff-4ae0-8974-970afceef28e.png?w=686",
              },
              {
                color: "Lavender",
                brand: "프렌치샤인 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20627/bdfc9f1d-94e5-4138-a533-7c89d2a66998L_%ED%94%84%EB%A0%8C%EC%B9%98%EC%83%A4%EC%9D%B8_%EB%9D%BC%EB%B2%A4%EB%8D%94.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20627/02d03575-b710-42d2-80c0-e09461a5e23e220303_프렌치샤인(뉴진스)_다니엘_1d_1.jpg?w=686",
              },
              {
                color: "Gray",
                brand: "프렌치샤인 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20733/523bfe28-f3e7-4571-89b6-df1d36593d5afh_gr.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20629/e1f997bc-4385-4523-94fc-6078cdf21a7a서브배너_1.jpg?w=686",
              },
              {
                color: "Brown",
                brand: "글로이 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20000/4251c729-8af4-423e-8d13-c772be5f8dbfL_%EA%B8%80%EB%A1%9C%EC%9D%B4_%EB%B8%8C%EB%9D%BC%EC%9A%B4.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20000/2b3012be-e257-4e1a-91ff-fe63ca99ed93메인이미지_글로이(하니)_M1(한달용).jpg?w=686",
              },
              {
                color: "Black",
                brand: "글로이 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20001/3f36c089-0697-4bb5-b323-678d5fed34a0L_%EA%B8%80%EB%A1%9C%EC%9D%B4_%EB%B8%94%EB%9E%99.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20001/3d5d7c9c-be0a-49ef-a707-54eb7a84dd5d메인이미지_글로이(해린).jpg?w=686",
              },
              {
                color: "Milky Brown",
                brand: "샤인터치 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20687/81302233-57e5-4fcb-96b2-75c63f5735392.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20687/7f2ac8b4-1216-4673-9aef-fc1a0c0aa821메인썸네일_샤인터치_민지ver_원데이.jpg?w=686",
              },
              {
                color: "Milky Gray",
                brand: "샤인터치 원데이",
                price: 18000,
                lensImage:
                  "https://file.o-lens.com/prd_img/20688/cca6486c-bba7-47da-88a4-f92b8aa0314f3.png?w=90",
                modelImage:
                  "https://file.o-lens.com/prd_img/20688/868144d3-fc48-42f2-84c0-00c9592a8ee6서브배너_샤인터치(민지ver)_M1.jpg?w=686",
              },
            ].map((lens, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden group"
              >
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">Try {lens.color} Contacts</span>
                </Link>
                <div className="relative">
                  <Image
                    src={lens.modelImage}
                    alt={`${lens.color} Contacts`}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Image
                      src={lens.lensImage}
                      alt="Lens overlay"
                      width={50}
                      height={50}
                      className="w-10 h-10 opacity-80"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{lens.color}</h3>
                  <p className="text-sm text-muted-foreground">{lens.brand}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold">
                      {new Intl.NumberFormat("ko", {
                        style: "currency",
                        currency: "KRW",
                      }).format(lens.price)}
                    </span>
                    <Button variant="secondary" size="sm">
                      Try On
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                What Our Customers Say
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                    <QuoteIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      &quot;I love how easy it is to try on different colored
                      contacts\n with this app. It&apos;s so much fun!&quot;
                    </p>
                    <p className="text-muted-foreground mt-2">
                      - Sarah, Los Angeles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                    <QuoteIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      &quot;I was hesitant to try colored contacts, but this app
                      made\n it so easy. I found the perfect pair!&quot;
                    </p>
                    <p className="text-muted-foreground mt-2">
                      - Michael, New York
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="question-1">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I use the virtual try-on feature?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To use the virtual try-on feature, simply click the
                      &quot;Try\n On&quot; button on any of the contact lens
                      options. You&apos;ll be prompted to allow access to your
                      webcam or upload a photo of yourself. The app will then
                      superimpose the selected contacts onto your image,
                      allowing you to see how they would look.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="question-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Are colored contacts safe to wear?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, colored contacts are generally safe to wear as long
                      as they are properly fitted and cared for. It&apos;s
                      important to follow the instructions provided by the
                      manufacturer and consult with an eye care professional
                      before wearing colored contacts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="question-3">
                  <AccordionTrigger className="text-lg font-medium">
                    How long can I wear colored contacts?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The recommended wear time for colored contacts can vary
                      depending on the specific product, but most can be worn
                      for up to 8-12 hours per day. It&apos;s important to give
                      your eyes a break and remove the contacts regularly to
                      avoid any potential issues.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Colored Contacts
            </Link>
            <Link href="#" prefetch={false}>
              Prescription Lenses
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Email
            </Link>
            <Link href="#" prefetch={false}>
              Phone
            </Link>
            <Link href="#" prefetch={false}>
              Address
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
