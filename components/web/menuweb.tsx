"use client";

import React, { useState, useEffect } from "react";
import { BarChart2, CircleCheckIcon, CircleHelpIcon, CircleIcon, NavigationOff } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const components: { title: string; href: string }[] = [
  { title: "Web Design", href: "/web_design" },
  { title: "Automation AI", href: "/automation_ai" },
];

export function NavigationMenuDemo() {
  return (
    <div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className=" relative flex items-center justify-center">
              <div className="grid grid-cols-3 w-[90%] rounded-2xl shadow-md bg-white left-[85px] top-[75px] m-auto fixed z-40  gap-3 items-start justify-start">
                <div className="">
                  <h1 className="font-bold px-3 py-1 text-yellow-400 mt-4">
                    Strategy & Discovery Solutions
                  </h1>
                  <p className="text-sm text-gray-400 px-3 py-1">We dig deep, ask the hard questions, we go from Problem to Plan for any digital solution your business needs. It’s your idea and our blueprint to achieve digital dominance.
</p>
                  <ul className="flex gap-2 bg-white flex-col">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Your Tech Roadmap</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Product Vision & Roadmap</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Digital Transformation & Optimization</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">AI & Automation</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Tech Audit</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">User Experience & Insights
</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                  </ul>
                </div>
                {/* 2 */}
                <div className="border-l-2 border-gray-100 border-r-2">
                  <h1 className="font-bold px-3 py-1 text-yellow-400 mt-4">
                    Execution & Delivery Solutions
                  </h1>
                  <p className="text-sm text-gray-400 px-3 py-1">We bring your vision to life. From design to code, our hands-on development process is focused on a singular goal: building intuitive, time-saving experiences that turn complexity into a competitive advantage.
</p>
                  <ul className="flex p-2 gap-2  bg-white flex-col">
                    <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Web & E-commerce Solutions</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Mobile & Cross-Platform Apps</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">System Integrations & Automation</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">User Experience & Insights 
</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Developers on Rent</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Digital Accessibility</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                  </ul>
                </div>
                {/* 3 */}
                <div className="">
                  <h1 className="font-bold px-3 py-1 text-yellow-400 mt-4">
                    Continued Growth & Support
                  </h1>
                  <p className="text-sm text-gray-400 px-3 py-1">Our commitment to your success extends far beyond the launch. We remain your dedicated partner, ensuring your technology is always available and your digital solution continues to deliver on its promise. We use real user engagement data and a proactive approach to continually optimize your product, so it remains a powerful engine for growth and a source of continuous time savings.
</p>
                  <ul className="flex p-2 gap-2  bg-white flex-col">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Data & AI-Driven Insights
</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Ongoing Support & Optimization
</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href={""}>
                            <div className="font-medium">Growth & Conversion Optimization</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/ui"} className="px-3 py-1 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold duration-500 rounded-2xl cursor-pointer">
              Get Started
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export function NavMobile() {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <BarChart2/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Kyzen Dev</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-4">
                <Link href={"/"}>Home Page</Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-left">Services</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>KyzenDev</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>App Development</DropdownMenuItem>
                    <DropdownMenuItem>Web Development</DropdownMenuItem>
                    <DropdownMenuItem>WordPress and CMS Development</DropdownMenuItem>
                    <DropdownMenuItem>Course 4Website Maintenance</DropdownMenuItem>
                    <DropdownMenuItem>UI/UX Design</DropdownMenuItem>
                    <DropdownMenuItem>Technical Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href={""}>blog</Link>
                <Link href={""}>contact us</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
