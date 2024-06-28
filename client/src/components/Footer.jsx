import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="md:text-xl text-lg font-bold font-serif self-center dark:text-white">
              Divyam's Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="max-md:mt-3" />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="https://divyam-alpha.vercel.app"
                  target="_blank"
                  rel="noopener norferrer">
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener norferrer">
                  Divyam's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="https://www.github.com/Divyam-1280"
                  target="_blank"
                  rel="noopener norferrer">
                  Github
                </Footer.Link>
                <Footer.Link
                  href={`mailto: Divyamraj700@gmail.com`}
                  target="_blank"
                  rel="noopener norferrer">
                  Email
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" target="_blank" rel="noopener norferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener norferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Divyam Raj Singh"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaLinkedin} />
            <Footer.Icon href="#" icon={FaFacebook} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
