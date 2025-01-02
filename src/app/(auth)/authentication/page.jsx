"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryVerticalEnd, ArrowRight, Users, Shield } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="grid min-h-svh bg-gray-50">
      <div className="relative grid lg:grid-cols-2">
        <motion.div
          className="flex flex-col gap-6 p-8 md:p-12"
          animate={{
            order: isLogin ? 0 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/indivisual.svg" alt="logo" className="h-12" />
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: isLogin ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: isLogin ? 100 : -100 }}
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="w-full max-w-sm"
              >
                {isLogin ? (
                  <LoginForm onToggle={() => setIsLogin(false)} />
                ) : (
                  <RegisterForm onToggle={() => setIsLogin(true)} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block overflow-hidden shadow-xl"
          animate={{
            order: isLogin ? 1 : 0,
            // borderRadius: !isLogin ? "0 3rem 3rem 0" : "3rem 0 0 3rem",
          }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login-section" : "register-section"}
              className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary to-primary/80"
              initial={{ x: isLogin ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLogin ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative flex flex-col h-full w-full p-16 text-white">
                <motion.div
                  key={isLogin ? "login-content" : "register-content"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-col h-full"
                >
                  {isLogin ? (
                    <>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-semibold tracking-tight">
                          Welcome Back
                        </h2>
                        <p className="text-xl font-light leading-relaxed text-white/90">
                          Sign in to access your personalized dashboard and
                          continue your journey.
                        </p>
                      </div>
                      <div className="mt-12 space-y-8">
                        <div className="flex items-start gap-6 group">
                          <Shield className="mt-1 size-8 transition-transform group-hover:scale-110" />
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">
                              Secure Access
                            </h3>
                            <p className="text-base text-white/80 font-light leading-relaxed">
                              Your data is protected with enterprise-grade
                              security measures
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-6 group">
                          <Users className="mt-1 size-8 transition-transform group-hover:scale-110" />
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">
                              Connected Community
                            </h3>
                            <p className="text-base text-white/80 font-light leading-relaxed">
                              Join thousands of users already using our platform
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto flex justify-center">
                        <motion.img
                          src="/images/3.svg"
                          alt="Login illustration"
                          className="h-[40vh] w-auto object-contain"
                          initial={{ scale: 0.95, opacity: 0.8 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-semibold tracking-tight">
                          Start Your Journey
                        </h2>
                        <p className="text-xl font-light leading-relaxed text-white/90">
                          Create an account to unlock all features and join our
                          community.
                        </p>
                      </div>
                      <div className="mt-12 space-y-6">
                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="size-6" />
                          <p className="text-lg font-light">
                            Access to premium features
                          </p>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="size-6" />
                          <p className="text-lg font-light">
                            Personalized dashboard
                          </p>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="size-6" />
                          <p className="text-lg font-light">
                            Connect with other members
                          </p>
                        </motion.div>
                      </div>
                      <div className="mt-auto flex justify-center">
                        <motion.img
                          src="/images/2.svg"
                          alt="Register illustration"
                          className="h-[40vh] w-auto object-contain"
                          initial={{ scale: 0.95, opacity: 0.8 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
