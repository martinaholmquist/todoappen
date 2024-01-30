import { footerLinks } from "@/constants/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => (
  <footer className="flex flex-col text-white mix-blend-difference mt-5 border-t border-white">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <p className="text-base text-white mix-blend-difference font-light">
          Familjemiddag 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-white mix-blend-difference font-light"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-end mt-10 border-t sm:px-16 px-6 py-10">
      <div className="footer__copyright-link space-x-4">
        <Link href="/" className="">
          Privacy Policy
        </Link>
        <span className=""></span>
        <Link href="/" className="">
          Terms of Use Policy
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
