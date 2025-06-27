import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

export default function RecentBlogs() {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-12 pb-2 px-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
        <div className="flex flex-col gap-10 md:flex-col lg:flex-row pt-5">
          {/* Left Part */}
          <div className="flex flex-col lg:w-1/2 gap-3">
            <img
              src="/images/recent_1.jpg"
              alt="Main"
              className="w-full h-50 object-cover"
            />
            <div>
              <div className="text-sm font-medium text-[#6941C6] mt-3 mb-3">
                Olivia Rhye • 1 Jan 2023
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold leading-snug flex-1">
                  UX review presentations
                </h3>
                <ArrowUpRight className="shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <Badge className="bg-[#F9F5FF] text-[#6941C6] border-none">
                  Design
                </Badge>
                <Badge className="bg-[#EEF4FF] text-[#3538CD] border-none">
                  Research
                </Badge>
                <Badge className="bg-[#FDF2FA] text-[#C11574] border-none">
                  Presentation
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex flex-col justify-between gap-5 lg:w-1/2">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <img
                src="/images/recent_2.jpg"
                alt=""
                className="w-full sm:w-1/2 object-contain"
              />
              <div>
                <div className="text-sm font-medium text-[#6941C6] mb-3">
                  Phoenix Baker • 1 Jan 2023
                </div>
                <h3 className="text-lg font-semibold leading-snug flex-1">
                  Migrating to Linear 101
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
                <div className="flex flex-wrap gap-2 mt-5 pb-3 sm:pb-0">
                  <Badge className="bg-[#F0F9FF] text-[#026AA2] border-none">
                    Design
                  </Badge>
                  <Badge className="bg-[#FDF2FA] text-[#C11574] border-none">
                    Research
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <img
                src="/images/recent_3.jpg"
                alt=""
                className="w-full sm:w-1/2 object-contain"
              />
              <div>
                <div className="text-sm font-medium text-[#6941C6] mb-3">
                  Lana Steiner • 1 Jan 2023
                </div>
                <h3 className="text-lg font-semibold leading-snug flex-1">
                  Building your API Stack
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  <Badge className="bg-[#ECFDF3] text-[#027A48] border-none">
                    Design
                  </Badge>
                  <Badge className="bg-[#FDF2FA] text-[#C11574] border-none">
                    Research
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto pt-12 pb-4 px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 xl:flex-row xl:gap-10">
          <img
            src="/images/recent_4.jpg"
            alt="Main"
            className="w-full h-50 object-cover xl:w-1/2"
          />
          <div className="xl:w-1/2 flex flex-col justify-center">
            <div className="text-sm font-medium text-[#6941C6] mt-3 mb-3">
              Sunday , 1 Jan 2023
            </div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold leading-snug flex-1">
                Grid system for better Design User Interface
              </h3>
              <ArrowUpRight className="shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-3">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements. Grid systems are used to create a
              consistent look and feel across a website, and can help to make
              the layout more visually appealing and easier to navigate.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Badge className="bg-[#F9F5FF] text-[#6941C6] border-none">
                Design
              </Badge>
              <Badge className="bg-[#FDF2FA] text-[#C11574] border-none">
                Interface
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
