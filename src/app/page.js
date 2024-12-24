'use client'
import React from "react";
import {
  BarChart2,
  Tv,
  Users,
  Radio,
  PieChart,
  LineChart,
  Activity,
  Zap,
  ArrowRight,
  Sparkles,
  Globe,
  ArrowRightIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import MorphingText from "@/components/ui/morphing-text";
import BounceCard from "@/components/card/BounceCard";
import { motion } from "framer-motion";
import AnalyticsCardStack from "@/components/card/AnalyticsCardStack";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const DemoChart = () => (
  <div className="w-full bg-gradient-to-br from-primary/20 via-primary/10 to-background rounded-lg flex items-center justify-center">
    <img src="/images/analytics.png" className="rounded-lg border opacity-85" />
  </div>
);

const LandingPage = () => {

  const texts = ["Broadcasters", "Advertisers", "Brand"];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="min-h-screen relative">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <nav className="container mx-auto px-6 py-8 relative">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" className="h-14" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Solutions
              </a>
              <a
                href="#peoplemeter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                PeopleMeter
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <a href="/authentication">
              <Button className="shadow-lg">Get Started</Button>
            </a>
          </div>
        </nav>

        <div className=" px-6 lg:px-32 flex items-center min-h-[calc(100vh-120px)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-8 flex flex-col items-start h-full">
              <div className="z-10 flex items-center justify-center">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Introducing Rex Analytics</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="flex flex-row gap-2 items-center">
                  Subversive{" "}
                  {/* <WordRotate
                    className="text-4xl md:text-6xl font-bold text-primary"
                    words={["Broadcasters", "Advertisers", "Brand"]}
                    duration={2500}
                  /> */}
                  <MorphingText
                    texts={texts}
                    className="text-4xl md:text-6xl font-bold text-primary"
                  />
                </span>
                <span className="text-primary"> Analytics</span> for the Modern
                Era
              </h1>
              <p className="text-xl text-muted-foreground">
                Empower your broadcasting decisions with real-time analytics,
                audience insights, and precise measurement through our advanced
                PeopleMeter technology.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="shadow-lg">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
              <AnalyticsCardStack />
          

            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
              )}
            />
          </div>
        </div>
      </header>

      {/* sample section */}
      <section className="mx-auto container px-4 py-12 text-slate-800">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
            Analytics with
            <span className="text-slate-400"> intelligent insights</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            View Features
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <h3 className="text-3xl font-extrabold">Real-Time Monitoring</h3>

            <p className="text-sm text-slate-600">
              Monitor viewer engagement and channel performance in real time,
              enabling quick decision-making and adjustments.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-center text-lg font-bold text-white">
                  Live Viewership Analytics
                </span>
                <p className="mt-2 text-center text-base text-white/80">
                  Track audience behavior and engagement metrics as they happen.
                </p>
              </div>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <h3 className="text-3xl font-extrabold">Audience Insights</h3>

            <p className="text-sm text-slate-600">
              Deep dive into demographic and behavioral patterns of your
              audience to inform content strategy and engagement.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-center text-lg font-bold text-white">
                  Demographics & Segmentation
                </span>
                <p className="mt-2 text-center text-base text-white/80">
                  Gain insights into viewer profiles and behavior patterns for
                  targeted strategies.
                </p>
              </div>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <h3 className="text-3xl font-extrabold">Content Performance</h3>

            <p className="text-sm text-slate-600">
              Evaluate the effectiveness of your content strategy with detailed
              performance metrics across platforms.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-center text-lg font-bold text-white">
                  Content Analytics
                </span>
                <p className="mt-2 text-center text-base text-white/80">
                  Analyze how different types of content resonate with your
                  audience to optimize future campaigns.
                </p>
              </div>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <h3 className="text-3xl font-extrabold">AI-Powered Insights</h3>

            <p className="text-sm text-slate-600">
              Leverage AI and machine learning to predict trends and optimize
              your content strategy for maximum impact.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-center text-lg font-bold text-white">
                  Predictive Analytics
                </span>
                <p className="mt-2 text-center text-base text-white/80">
                  Get actionable insights to drive audience growth and content
                  optimization.
                </p>
              </div>
            </div>
          </BounceCard>
        </div>
      </section>

      {/* PeopleMeter Section */}
      <section id="peoplemeter" className="py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-primary/20 bg-background/50 mb-8"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  Revolutionary Technology
                </Badge>

                <h2 className="text-4xl font-bold leading-tight">
                  Next Generation
                  <span className="block text-5xl mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    PeopleMeter Technology
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground"
              >
                Our revolutionary PeopleMeter device combines advanced AI and
                machine learning to deliver unparalleled accuracy in audience
                measurement, setting new industry standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Users,
                    title: "Viewer Detection",
                    description: "Automated recognition with 90% accuracy",
                  },
                  {
                    icon: Zap,
                    title: "Real-time Data",
                    description: "Instant transmission and processing",
                  },
                  {
                    icon: Activity,
                    title: "Non-intrusive",
                    description:
                      "Seamless integration into viewing environment",
                  },
                  {
                    icon: LineChart,
                    title: "Smart Analytics",
                    description: "AI-powered viewing pattern analysis",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border border-primary/10 backdrop-blur-sm group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4"
              >
                <Button size="lg" className="shadow-lg group">
                  Learn More
                  <motion.span whileHover={{ x: 4 }} className="ml-2">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  Request Demo
                </Button>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative bg-background/50 backdrop-blur-sm border-primary/10 overflow-hidden">
                  <CardContent className="p-2">
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
                      <img
                        src="/images/people_meter.png"
                        alt="PeopleMeter Device"
                        className="w-full h-1/2 object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-4 top-1/4 bg-background/50 backdrop-blur-sm border border-primary/10 p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">90% Accuracy</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 bottom-1/4 bg-background/50 backdrop-blur-sm border border-primary/10 p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">
                      Real-time Analysis
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative grid pattern */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
          )}
        />
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6"
        >
          <Card className="relative border border-primary/10 shadow-2xl bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />

            {/* Animated background gradients */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </motion.div>

            <CardContent className="p-12 relative">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-1 text-sm font-medium border-primary/20 bg-background/50"
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    Trusted by Industry Leaders
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-4xl font-bold leading-tight">
                    Transform Your Analytics with
                    <span className="block text-5xl mt-2 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                      Intelligent Insights
                    </span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
                >
                  {[
                    {
                      icon: BarChart2,
                      title: "Advanced Analytics",
                      description:
                        "Real-time data processing and visualization",
                    },
                    {
                      icon: Globe,
                      title: "Global Coverage",
                      description:
                        "Worldwide audience measurement and insights",
                    },
                    {
                      icon: Sparkles,
                      title: "Real-time Insights",
                      description:
                        "Instant access to viewer behavior analytics",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border border-primary/10 backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-semibold">{feature.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {feature.description}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-muted-foreground"
                >
                  Join the leading broadcasters and advertisers who are making
                  data-driven decisions with REX Analytics.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-6 justify-center items-center flex-wrap"
                >
                  <Button size="lg" className="shadow-lg group">
                    Schedule Demo
                    <motion.span whileHover={{ x: 4 }} className="ml-2">
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    Contact Sales
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo" className="h-24" />
              </div>
              <p className="text-muted-foreground">
                Leading the future of TV analytics and audience measurement.
              </p>
            </div>
            {[
              {
                title: "Solutions",
                links: ["Broadcasters", "Advertisers", "Brands", "Agencies"],
              },
              {
                title: "Resources",
                links: ["Blog", "Case Studies", "Documentation", "API"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Press"],
              },
            ].map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-16 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 REX Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
